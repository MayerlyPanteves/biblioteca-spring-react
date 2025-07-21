package edu.sena.bibliotecaspringreact.repository;

import edu.sena.bibliotecaspringreact.model.Libro;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LibroRepository extends JpaRepository<Libro, Long> {
    Libro findByIsbn(String isbn);
}