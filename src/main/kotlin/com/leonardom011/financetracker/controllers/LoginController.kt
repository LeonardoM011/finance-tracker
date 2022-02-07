package com.leonardom011.financetracker.controllers

import com.leonardom011.financetracker.repositories.UserRepository
import com.leonardom011.financetracker.services.AuthenticationSystem
import org.springframework.http.HttpHeaders
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseCookie
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import java.text.DateFormat
import java.time.DateTimeException
import java.time.Instant
import java.time.LocalDateTime
import java.time.ZoneOffset
import java.util.*
import javax.servlet.http.Cookie


class LoginInfo (
    var username : String,
    var password : String)

@RestController
@RequestMapping("/auth")
class LoginController(private val repository: UserRepository) {

    @RequestMapping("/login", consumes = ["application/json"])
    fun loginPost(@CookieValue(name = "authentication-key", defaultValue = "") authKey : String, @RequestBody loginInfo : LoginInfo) : ResponseEntity<Any> {

        // Check if user is already logged in
        if (AuthenticationSystem.userExists(authKey)) {
            return ResponseEntity.ok().build()
        }
        // change username to be lowercase
        val username = loginInfo.username.lowercase(Locale.getDefault())

        val user = repository.findByUsername(username)

        // If username does not exist or if password is not correct return error 401
        if (user == null || user.password != loginInfo.password) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }

        val key = AuthenticationSystem.generateKey(user.user_id)
        val resCookie = ResponseCookie
            .from("authentication-key", key)
            .httpOnly(true)
            .secure(true)
            .path("/")
            .maxAge((1 * 24 * 60 * 60).toLong())
            .domain("localhost")
            .build()

        // Set user last login to now
        user.last_login = LocalDateTime.now(ZoneOffset.UTC)
        repository.save(user)


        return ResponseEntity.ok().header(HttpHeaders.SET_COOKIE, resCookie.toString()).build();
    }

    @GetMapping("/logout")
    fun logout(@CookieValue(name = "authentication-key", defaultValue = "") authKey : String) : ResponseEntity<Any> {

        val userId = AuthenticationSystem.getUserId(authKey)
        if (userId != null) {
            AuthenticationSystem.deleteKey(authKey)
        }

        val resCookie = ResponseCookie
            .from("authentication-key", null.toString())
            .build()

        return ResponseEntity.ok().header(HttpHeaders.SET_COOKIE, resCookie.toString()).build();
    }

    @GetMapping("/delete-keys")
    fun deleteKeys(@CookieValue(name = "authentication-key", defaultValue = "") authKey : String) : ResponseEntity<Any> {

        val userId = AuthenticationSystem.getUserId(authKey)
        if (userId != null) {
            AuthenticationSystem.deleteKeysForUser(userId)
        }

        val resCookie = ResponseCookie
            .from("authentication-key", null.toString())
            .build()

        return ResponseEntity.ok().header(HttpHeaders.SET_COOKIE, resCookie.toString()).build();
    }

}