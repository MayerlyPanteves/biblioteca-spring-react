package edu.sena.bibliotecaspringreact.service;

import edu.sena.bibliotecaspringreact.model.Dvd;
import edu.sena.bibliotecaspringreact.repository.DvdRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DvdService {

    @Autowired
    private DvdRepository dvdRepository;

    public List<Dvd> findAll() {
        return dvdRepository.findAll();
    }

    public Dvd save(Dvd dvd) {
        return dvdRepository.save(dvd);
    }

    public void deleteById(Long id) {
        dvdRepository.deleteById(id);
    }
}