package com.leonardom011.financetracker.repositories

import com.leonardom011.financetracker.models.User
import org.springframework.data.repository.CrudRepository

interface UserRepository : CrudRepository<User, Int> {

}