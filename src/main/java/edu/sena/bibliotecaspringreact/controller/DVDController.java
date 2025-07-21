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
    private DVDService dvdService;  // Nombre consistente (no dwdService)

    @GetMapping
    public ResponseEntity<List<DVD>> getAllDVDs() {
        return ResponseEntity.ok(dvdService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<DVD> getDVDById(@PathVariable Long id) {
        return ResponseEntity.ok(dvdService.findById(id));
    }

    @PostMapping
    public ResponseEntity<DVD> createDVD(@RequestBody DVD dvd) {  // Parámetro correcto (no dwd)
        return ResponseEntity.ok(dvdService.save(dvd));
    }

    @PutMapping("/{id}")
    public ResponseEntity<DVD> updateDVD(@PathVariable Long id, @RequestBody DVD dvd) {
        return ResponseEntity.ok(dvdService.update(id, dvd));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteDVD(@PathVariable Long id) {
        dvdService.delete(id);
        return ResponseEntity.noContent().build();
    }
}