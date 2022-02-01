package com.leonardom011.financetracker.models;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "categories")
public class Category(
    @Id @GeneratedValue(strategy = GenerationType.AUTO) var category_id: Int,
    var name: String,
    var slug_name: String,
    var created: LocalDateTime,
    var created_by: Int
)