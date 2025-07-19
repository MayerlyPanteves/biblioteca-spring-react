package edu.sena.bibliotecaspringreact.controller;

import edu.sena.bibliotecaspringreact.model.Dvd;
import edu.sena.bibliotecaspringreact.service.DvdService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/dvds")
@CrossOrigin(origins = "http://localhost:3000")
public class DvdController {

    @Autowired
    private DvdService dvdService;

    @GetMapping
    public List<Dvd> getAllDvds() {
        return dvdService.findAll();
    }

    @PostMapping
    public Dvd createDvd(@RequestBody Dvd dvd) {
        return dvdService.save(dvd);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteDvd(@PathVariable Long id) {
        dvdService.deleteById(id);
        return ResponseEntity.ok().build();
    }
}