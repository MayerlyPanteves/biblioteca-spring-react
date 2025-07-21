package edu.sena.bibliotecaspringreact.service;

import edu.sena.bibliotecaspringreact.entity.DVD;
import edu.sena.bibliotecaspringreact.repository.DVDRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DVDServiceImpl implements DVDService {

    @Autowired
    private DVDRepository dvdRepository;

    @Override
    public List<DVD> findAll() {
        return dvdRepository.findAll();
    }

    @Override
    public DVD findById(Long id) {
        return dvdRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("DVD no encontrado"));
    }

    @Override
    public DVD save(DVD dvd) {
        return dvdRepository.save(dvd);
    }

    @Override
    public DVD update(Long id, DVD dvd) {
        DVD existingDVD = findById(id);
        existingDVD.setTitulo(dvd.getTitulo());
        existingDVD.setDirector(dvd.getDirector());
        existingDVD.setGenero(dvd.getGenero());
        existingDVD.setDuracion(dvd.getDuracion());
        existingDVD.setAnio(dvd.getAnio());
        return dvdRepository.save(existingDVD);
    }

    @Override
    public void delete(Long id) {
        dvdRepository.deleteById(id);
    }
}