package edu.sena.bibliotecaspringreact.repository;

import edu.sena.bibliotecaspringreact.entity.Revista;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface RevistaRepository extends JpaRepository<Revista, Long> {
    List<Revista> findByTituloContainingIgnoreCase(String titulo);
    List<Revista> findByEditorialContainingIgnoreCase(String editorial);
    List<Revista> findByTematica(String tematica);
}