package edu.sena.bibliotecaspringreact.service;

import edu.sena.bibliotecaspringreact.entity.Revista;
import edu.sena.bibliotecaspringreact.repository.RevistaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RevistaServiceImpl implements RevistaService { // Debe implementar RevistaService (no RevistaServiceImpl)

    private final RevistaRepository revistaRepository;

    @Autowired
    public RevistaServiceImpl(RevistaRepository revistaRepository) {
        this.revistaRepository = revistaRepository;
    }

    @Override
    public List<Revista> findAll() {
        List<Revista> revistas = revistaRepository.findAll();
        System.out.println("Revistas desde BD: " + revistas); // Debug
        return revistas;
    }

    @Override
    public Revista save(Revista revista) {
        return revistaRepository.save(revista);
    }

    @Override
    public Revista findById(Long id) {
        return revistaRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Revista no encontrada con ID: " + id));
    }

    @Override
    public void delete(Long id) {
        revistaRepository.deleteById(id);
    }
}