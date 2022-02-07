package com.leonardom011.financetracker.models

import java.time.Instant
import java.time.LocalDateTime
import javax.persistence.*

@Entity
@Table(name = "items")
class Item(
    @Id @GeneratedValue(strategy = GenerationType.AUTO) var item_id: Int,
    var name: String,
    var slug_name: String,
    var category_id: Int,
    var quantity: Int,
    var price: Float,
    var added_at: LocalDateTime,
    var user_id: Int
)