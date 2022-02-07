package com.leonardom011.financetracker.controllers

import com.leonardom011.financetracker.repositories.ItemRepository
import com.leonardom011.financetracker.services.AuthenticationSystem
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Controller
import org.springframework.ui.Model
import org.springframework.ui.set
import org.springframework.web.bind.annotation.*


@Controller
class HtmlController(private val repository: ItemRepository) {

    @GetMapping("/")
    fun index(@CookieValue(name = "authentication-key", defaultValue = "") authKey : String, model: Model) : String {
        val userId = AuthenticationSystem.getUserId(authKey) ?: return "login"

        model["userid"] = userId
        return "index"
    }

    @GetMapping("/login")
    fun login() : String {
        return "login"
    }

    @GetMapping("/register")
    fun register() : String {
        return "register"
    }

    @GetMapping("/item/{id}")
    fun item(@PathVariable id: Int, model: Model): String {
        /*val item = repository
            .findById(id)
        if (item.isEmpty) {
            throw ResponseStatusException(HttpStatus.NOT_FOUND, "This item does not exist")
        } else {
            model["items"] = item.get().name;
        }*/
        model["items"] = repository.findAll()
        return "item"
    }

}