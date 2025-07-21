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
    public List<DVD> findAllDVDs() {
        return dvdRepository.findAll();
    }

    @Override
    public DVD findDVDById(Long id) {
        return dvdRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("DVD no encontrado"));
    }

    @Override
    public DVD saveDVD(DVD dvd) {
        return dvdRepository.save(dvd);
    }

    @Override
    public DVD updateDVD(Long id, DVD dvdDetails) {
        DVD dvd = findDVDById(id);
        dvd.setTitulo(dvdDetails.getTitulo());
        dvd.setDirector(dvdDetails.getDirector());
        dvd.setGenero(dvdDetails.getGenero());
        dvd.setDuracion(dvdDetails.getDuracion());
        dvd.setAnio(dvdDetails.getAnio());
        dvd.setCodigoBarras(dvdDetails.getCodigoBarras());
        return dvdRepository.save(dvd);
    }

    @Override
    public void deleteDVD(Long id) {
        dvdRepository.deleteById(id);
    }

    @Override
    public List<DVD> findByTitulo(String titulo) {
        return dvdRepository.findByTituloContainingIgnoreCase(titulo);
    }

    @Override
    public List<DVD> findByDirector(String director) {
        return dvdRepository.findByDirectorContainingIgnoreCase(director);
    }

    @Override
    public List<DVD> findByGenero(String genero) {
        return dvdRepository.findByGenero(genero);
    }
}