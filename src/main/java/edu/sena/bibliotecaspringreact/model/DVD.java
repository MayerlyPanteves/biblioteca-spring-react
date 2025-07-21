package edu.sena.bibliotecaspringreact.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "dvds")
@Data
public class DVD {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String titulo;

    @Column(nullable = false)
    private String director;

    @Column(nullable = false)
    private String genero;

    @Column(nullable = false)
    private Integer duracion; // en minutos

    @Column(nullable = false)
    private Integer anio;

    @Column(unique = true)
    private String codigoBarras;
}