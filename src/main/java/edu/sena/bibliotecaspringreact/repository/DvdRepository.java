package edu.sena.bibliotecaspringreact.repository;

import edu.sena.bibliotecaspringreact.model.Dvd;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DvdRepository extends JpaRepository<Dvd, Long> {
}