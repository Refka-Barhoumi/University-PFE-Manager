package com.example.backend.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String email;

    private String password;

    private String fullName;

    // US4 — Password Reset
    private String resetToken;
    private java.time.LocalDateTime resetTokenExpiry;
}