package edu.sena.bibliotecaspringreact.repository;

import edu.sena.bibliotecaspringreact.entity.DVD;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DVDRepository extends JpaRepository<DVD, Long> {
    List<DVD> findByTituloContainingIgnoreCase(String titulo);
    List<DVD> findByDirectorContainingIgnoreCase(String director);
    List<DVD> findByGenero(String genero);
}