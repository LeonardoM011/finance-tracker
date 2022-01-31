package com.leonardom011.financetracker.repositories

import com.leonardom011.financetracker.models.Item
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.CrudRepository

interface ItemRepository : CrudRepository<Item, Int> {
    //fun findBySlug(slug: String): Item

}