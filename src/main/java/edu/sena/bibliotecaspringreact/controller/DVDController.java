package edu.sena.bibliotecaspringreact.controller;

import edu.sena.bibliotecaspringreact.entity.DVD;
import edu.sena.bibliotecaspringreact.service.DVDService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/dvds")
@CrossOrigin(origins = "http://localhost:3000")
public class DVDController {

    @Autowired
    private DVDService dvdService;

    @GetMapping
    public ResponseEntity<List<DVD>> getAllDVDs() {
        return ResponseEntity.ok(dvdService.findAllDVDs());
    }

    @GetMapping("/{id}")
    public ResponseEntity<DVD> getDVDById(@PathVariable Long id) {
        return ResponseEntity.ok(dvdService.findDVDById(id));
    }

    @PostMapping
    public ResponseEntity<DVD> createDVD(@RequestBody DVD dvd) {
        return ResponseEntity.ok(dvdService.saveDVD(dvd));
    }

    @PutMapping("/{id}")
    public ResponseEntity<DVD> updateDVD(@PathVariable Long id, @RequestBody DVD dvd) {
        return ResponseEntity.ok(dvdService.updateDVD(id, dvd));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteDVD(@PathVariable Long id) {
        dvdService.deleteDVD(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/buscar")
    public ResponseEntity<List<DVD>> searchDVDs(
            @RequestParam(required = false) String titulo,
            @RequestParam(required = false) String director,
            @RequestParam(required = false) String genero) {

        if (titulo != null) {
            return ResponseEntity.ok(dvdService.findByTitulo(titulo));
        } else if (director != null) {
            return ResponseEntity.ok(dvdService.findByDirector(director));
        } else if (genero != null) {
            return ResponseEntity.ok(dvdService.findByGenero(genero));
        }
        return ResponseEntity.ok(dvdService.findAllDVDs());
    }
}