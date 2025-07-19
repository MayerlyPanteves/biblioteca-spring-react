package edu.sena.bibliotecaspringreact.service;

import edu.sena.bibliotecaspringreact.model.Libro;
import edu.sena.bibliotecaspringreact.repository.LibroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LibroService {

    private final LibroRepository libroRepository;

    @Autowired
    public LibroService(LibroRepository libroRepository) {
        this.libroRepository = libroRepository;
    }

    public List<Libro> findAll() {
        return libroRepository.findAll();
    }

    public Libro save(Libro libro) {
        return libroRepository.save(libro);
    }

    public Libro update(Long id, Libro libroActualizado) {
        return libroRepository.findById(id)
                .map(libroExistente -> {
                    if (libroActualizado.getTitulo() != null) {
                        libroExistente.setTitulo(libroActualizado.getTitulo());
                    }
                    if (libroActualizado.getAutor() != null) {
                        libroExistente.setAutor(libroActualizado.getAutor());
                    }
                    if (libroActualizado.getIsbn() != null) {
                        libroExistente.setIsbn(libroActualizado.getIsbn());
                    }
                    if (libroActualizado.getAño() != null) {
                        libroExistente.setAño(libroActualizado.getAño());
                    }
                    return libroRepository.save(libroExistente);
                })
                .orElseThrow(() -> new RuntimeException("Libro no encontrado con id: " + id));
    }

    public void deleteById(Long id) {
        libroRepository.deleteById(id);
    }
}