package com.leonardom011.financetracker

import org.springframework.http.HttpStatus
import org.springframework.stereotype.Controller
import org.springframework.ui.Model
import org.springframework.ui.set
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.server.ResponseStatusException

@Controller
class HtmlController(private val repository: ItemRepository) {

    @GetMapping("/")
    fun index() : String {
        return "index"
    }

    @GetMapping("/item/{slug}")
    fun item(@PathVariable slug: String, model: Model): String {
        val item = repository
            .findBySlug(slug)
            ?.render()
            ?: throw ResponseStatusException(HttpStatus.NOT_FOUND, "This article does not exist")
        model["title"] = item.name
        return "item"
    }

    fun Item.render() = RenderedItem(
        name,
        category,
        slug,
        price)

    data class RenderedItem(
        var name: String,
        var category: String,
        var slug: String,
        var price: Float)

}