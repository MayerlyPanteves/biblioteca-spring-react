package edu.sena.bibliotecaspringreact.service;

import edu.sena.bibliotecaspringreact.entity.DVD;
import java.util.List;

public interface DVDService {
    List<DVD> findAllDVDs();
    DVD findDVDById(Long id);
    DVD saveDVD(DVD dvd);
    DVD updateDVD(Long id, DVD dvd);
    void deleteDVD(Long id);
    List<DVD> findByTitulo(String titulo);
    List<DVD> findByDirector(String director);
    List<DVD> findByGenero(String genero);
}