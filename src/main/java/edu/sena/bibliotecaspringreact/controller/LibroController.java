package edu.sena.bibliotecaspringreact.controller;

import edu.sena.bibliotecaspringreact.model.Libro;
import edu.sena.bibliotecaspringreact.repository.LibroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/libros")
@CrossOrigin(origins = "http://localhost:3000")
public class LibroController {

    @Autowired
    private LibroRepository libroRepository;

    @GetMapping
    public List<Libro> getAllLibros() {
        return libroRepository.findAll();
    }

    @PostMapping
    public ResponseEntity<Libro> createLibro(@RequestBody Libro libro) {
        // Validación básica
        if (libro.getTitulo() == null || libro.getTitulo().isEmpty() ||
                libro.getAutor() == null || libro.getAutor().isEmpty()) {
            return ResponseEntity.badRequest().build();
        }

        // Establecer fecha de publicación si no viene
        if (libro.getFechaPublicacion() == null && libro.getAño() != null) {
            libro.setFechaPublicacion(LocalDate.of(libro.getAño(), 1, 1));
        }

        Libro savedLibro = libroRepository.save(libro);
        return ResponseEntity.ok(savedLibro);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Libro> updateLibro(@PathVariable Long id, @RequestBody Libro libro) {
        return libroRepository.findById(id)
                .map(existingLibro -> {
                    existingLibro.setTitulo(libro.getTitulo());
                    existingLibro.setAutor(libro.getAutor());
                    existingLibro.setIsbn(libro.getIsbn());
                    existingLibro.setAño(libro.getAño());
                    existingLibro.setNumeroPaginas(libro.getNumeroPaginas());
                    return ResponseEntity.ok(libroRepository.save(existingLibro));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteLibro(@PathVariable Long id) {
        libroRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}