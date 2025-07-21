package edu.sena.bibliotecaspringreact.service;

import edu.sena.bibliotecaspringreact.entity.Revista;
import java.util.List;

public interface RevistaService {
    List<Revista> findAll();
    Revista save(Revista revista);
    Revista findById(Long id);
    void delete(Long id);
}