package edu.sena.bibliotecaspringreact.controller;

import edu.sena.bibliotecaspringreact.model.Revista;
import edu.sena.bibliotecaspringreact.service.RevistaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/revistas")
@CrossOrigin(origins = "http://localhost:3000")
public class RevistaController {

    @Autowired
    private RevistaService revistaService;

    @GetMapping
    public ResponseEntity<List<Revista>> getAllRevistas() {
        return ResponseEntity.ok(revistaService.findAllRevistas());
    }

    @PostMapping
    public ResponseEntity<Revista> createRevista(@RequestBody Revista revista) {
        return ResponseEntity.ok(revistaService.saveRevista(revista));
    }
}