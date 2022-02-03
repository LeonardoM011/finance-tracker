package com.leonardom011.financetracker.controllers

import com.leonardom011.financetracker.repositories.ItemRepository
import com.leonardom011.financetracker.repositories.UserRepository
import org.springframework.http.HttpStatus
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.server.ResponseStatusException

class LoginInfo (
    var username : String,
    var password : String)

@RestController
class LoginController(private val repository: UserRepository) {

    @PostMapping("/login-post", consumes = ["application/json"], produces = ["application/json"])
    fun loginPost(@RequestBody loginInfo : LoginInfo) : HashMap<String, Any> {
        val data = HashMap<String, Any>()
        val user = repository.findByUsername(loginInfo.username)

        if (user == null || user.password != loginInfo.password) {
            data["status"] = 404
            data["authentication-key"] = ""
            return data
        }

        data["status"] = 200
        data["authentication-key"] = 1234
        return data
    }

}