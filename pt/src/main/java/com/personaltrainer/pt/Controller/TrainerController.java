package com.personaltrainer.pt.Controller;

import com.personaltrainer.pt.Exception.ResourceNotFoundException;
import com.personaltrainer.pt.Model.Trainer;
import com.personaltrainer.pt.Repository.TrainerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/tra")
public class TrainerController {

    @Autowired
    private TrainerRepository trainerRepository;

    @GetMapping("/all")
    public List<Trainer> getAllTrainers(){
        return trainerRepository.findAll();
    }

    @GetMapping("/{username}")
    public ResponseEntity<Trainer> findTrainerByUsername(@PathVariable String username){
        Trainer trainer = trainerRepository.findByUsername(username)
                .orElseThrow(() -> new ResourceNotFoundException("Not found"));

        return ResponseEntity.ok(trainer);
    }
}
