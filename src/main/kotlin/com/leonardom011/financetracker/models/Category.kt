package com.leonardom011.financetracker.models;

import java.time.Instant
import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "categories")
public class Category(
    @Id @GeneratedValue(strategy = GenerationType.AUTO) var category_id: Int,
    var name: String,
    var slug_name: String,
    var added_at: LocalDateTime,
    var created_by: Int
)