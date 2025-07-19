package edu.sena.bibliotecaspringreact.service;

import edu.sena.bibliotecaspringreact.model.Revista;
import edu.sena.bibliotecaspringreact.repository.RevistaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RevistaService {

    @Autowired
    private RevistaRepository revistaRepository;

    public List<Revista> findAll() {
        return revistaRepository.findAll();
    }

    public Revista save(Revista revista) {
        return revistaRepository.save(revista);
    }

    public void deleteById(Long id) {
        revistaRepository.deleteById(id);
    }
}