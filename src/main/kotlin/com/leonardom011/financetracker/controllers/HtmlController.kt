package com.leonardom011.financetracker.controllers

import com.leonardom011.financetracker.repositories.ItemRepository
import org.springframework.stereotype.Controller
import org.springframework.ui.Model
import org.springframework.ui.set
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController


@Controller
class HtmlController(private val repository: ItemRepository) {

    @GetMapping("/")
    fun index() : String {
        return "index"
    }

    @GetMapping("/login")
    fun login() : String {
        return "login"
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