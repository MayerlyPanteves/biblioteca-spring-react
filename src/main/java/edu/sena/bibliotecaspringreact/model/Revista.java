package edu.sena.bibliotecaspringreact.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "revistas")
@Data
public class Revista {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String titulo;

    @Column(nullable = false)
    private String editorial;

    @Column(unique = true, nullable = false)
    private String issn;

    @Column(nullable = false)
    private String periodicidad;

    @Column(nullable = false)
    private String tematica;
}