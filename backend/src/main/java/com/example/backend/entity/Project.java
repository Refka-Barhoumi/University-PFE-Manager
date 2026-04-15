package com.example.backend.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "projects")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String description;
    private String objectives;
    private String technologies;

    // US3 — Seul / Binôme
    private String participationType;

    @ManyToOne
    @JoinColumn(name = "student2_id")
    private Student student2;

    // US6 — Académique / Entreprise
    private String projectContext;
    private String companyName;
    private String companySupervisor;

    // Statut: "En cours", "Validé"
    private String status;

    // Relation principale avec Student
    @ManyToOne
    @JoinColumn(name = "student_id")
    private Student student;
}