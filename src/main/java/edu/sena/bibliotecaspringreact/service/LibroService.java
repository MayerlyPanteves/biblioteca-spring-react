package edu.sena.bibliotecaspringreact.service;

import edu.sena.bibliotecaspringreact.model.Libro;
import edu.sena.bibliotecaspringreact.repository.LibroRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LibroService {

    private final LibroRepository libroRepository;

    public LibroService(LibroRepository libroRepository) {
        this.libroRepository = libroRepository;
    }

    public List<Libro> findAll() {
        return libroRepository.findAll();
    }

    public Libro save(Libro libro) {
        return libroRepository.save(libro);
    }
}