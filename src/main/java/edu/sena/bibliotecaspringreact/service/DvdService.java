package edu.sena.bibliotecaspringreact.service;

import edu.sena.bibliotecaspringreact.model.Dvd;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AutorService {
    @Autowired
    private AutorRepository autorRepository;

    public List<Dvd> findAll() {
        return autorRepository.findAll();
    }

    public Dvd save(Dvd autor) {
        return autorRepository.save(autor);
    }

    // Otros métodos según necesites
}