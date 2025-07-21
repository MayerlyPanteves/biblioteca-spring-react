import edu.sena.bibliotecaspringreact.service.RevistaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/revistas")
@CrossOrigin(origins = "http://localhost:3000")
public class RevistaController {

    @Autowired
    private RevistaService revistaService;

    @GetMapping
    public ResponseEntity<List<edu.sena.bibliotecaspringreact.entity.Revista>> getAllRevistas() {
        List<edu.sena.bibliotecaspringreact.entity.Revista> revistas = revistaService.findAll();
        System.out.println("Revistas en backend: " + revistas); // Debug
        return ResponseEntity.ok(revistas);
    }
}