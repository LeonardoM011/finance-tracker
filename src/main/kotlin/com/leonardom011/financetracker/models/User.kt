package com.leonardom011.financetracker.models

import java.time.LocalDateTime
import javax.persistence.*

@Entity
@Table(name = "users")
class User (
    @Id @GeneratedValue(strategy = GenerationType.AUTO) var user_id: Int,
    var username: String,
    var password: String,
    var last_login: LocalDateTime,
    var created: LocalDateTime,
    var added_at: LocalDateTime
)

