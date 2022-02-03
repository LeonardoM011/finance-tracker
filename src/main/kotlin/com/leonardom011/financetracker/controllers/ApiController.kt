package com.leonardom011.financetracker.controllers

import com.leonardom011.financetracker.repositories.ItemRepository
import org.apache.catalina.realm.X509UsernameRetriever
import org.json.JSONObject
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.*
import org.springframework.web.server.ResponseStatusException

@RestController
@RequestMapping("/api")
class ApiController(private val repository: ItemRepository) {

    @GetMapping("/item/{id}", produces = ["application/json"])
    fun apiItem(@PathVariable id: Int): HashMap<String, Any> {
        val data = HashMap<String, Any>()
        val item = repository.findById(id)
        if (item.isEmpty)
            throw ResponseStatusException(HttpStatus.NOT_FOUND, "This item does not exist")
        data["name"] = item.get().name
        data["category"] = item.get().category_id
        data["quantity"] = item.get().quantity
        return data
    }
}