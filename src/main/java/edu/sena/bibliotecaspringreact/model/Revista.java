package edu.sena.bibliotecaspringreact.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "revistas")
public class Revista {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String titulo;

    private String editorial;
    private String numero;
    private String fecha;
}