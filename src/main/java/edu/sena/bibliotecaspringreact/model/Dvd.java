package edu.sena.bibliotecaspringreact.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "dvds")
public class Dvd {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String titulo;

    @Column(nullable = false)
    private String director;

    private Integer duracion; // en minutos
    private String genero;
}