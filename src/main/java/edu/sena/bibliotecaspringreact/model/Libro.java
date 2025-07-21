package edu.sena.bibliotecaspringreact.model;

import jakarta.persistence.*;

@Entity
@Table(name = "libro")
@PrimaryKeyJoinColumn(name = "id")
public class Libro extends ElementoBiblioteca {
    @Column(nullable = false)
    private String autor;

    @Column(unique = true)
    private String isbn;

    @Column(name = "numero_paginas")
    private Integer numeroPaginas;

    private Integer año;

    // Getters y Setters
    public String getAutor() { return autor; }
    public void setAutor(String autor) { this.autor = autor; }
    public String getIsbn() { return isbn; }
    public void setIsbn(String isbn) { this.isbn = isbn; }
    public Integer getNumeroPaginas() { return numeroPaginas; }
    public void setNumeroPaginas(Integer numeroPaginas) { this.numeroPaginas = numeroPaginas; }
    public Integer getAño() { return año; }
    public void setAño(Integer año) { this.año = año; }
}