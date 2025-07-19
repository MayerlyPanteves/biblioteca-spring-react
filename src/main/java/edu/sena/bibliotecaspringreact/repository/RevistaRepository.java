package edu.sena.bibliotecaspringreact.repository;

import edu.sena.bibliotecaspringreact.model.Revista;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RevistaRepository extends JpaRepository<Revista, Long> {
}