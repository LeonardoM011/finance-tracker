package com.leonardom011.financetracker.repositories

import com.leonardom011.financetracker.models.Category
import org.springframework.data.repository.CrudRepository

interface CategoryRepository : CrudRepository<Category, Int> {

}