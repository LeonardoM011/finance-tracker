package com.leonardom011.financetracker

import org.springframework.data.repository.CrudRepository

interface ItemRepository : CrudRepository<Item, Long> {
    fun findBySlug(slug: String): Item?
}