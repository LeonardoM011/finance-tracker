package com.leonardom011.financetracker

import javax.persistence.*

@Entity
@Table(name = "items")
class Item(
    @Id @GeneratedValue(strategy = GenerationType.AUTO) var id: Long? = null,
    var name: String,
    var category: String,
    var slug: String = name.toSlug(),
    var price: Float
)