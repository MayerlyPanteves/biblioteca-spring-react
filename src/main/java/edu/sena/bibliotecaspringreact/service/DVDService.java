package edu.sena.bibliotecaspringreact.service;

import edu.sena.bibliotecaspringreact.entity.DVD;
import java.util.List;

public interface DVDService {
    List<DVD> findAll();
    DVD findById(Long id);
    DVD save(DVD dvd);
    DVD update(Long id, DVD dvd);
    void delete(Long id);
}