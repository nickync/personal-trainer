package com.project.trainer.pt.controller;

import com.project.trainer.pt.model.Trainer;
import com.project.trainer.pt.repository.TrainerRepository;
import com.project.trainer.pt.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class TrainerController {

    @Autowired
    private TrainerRepository trainerRepository;

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/trainers")
    public List<Trainer> getAllTrainers(){
        return trainerRepository.findAll();
    }

    @GetMapping("/trainers/get")
    public Trainer getTrainerById(@RequestParam Long id){
        return trainerRepository.findById(id).orElseThrow();
    }

    @PostMapping("/trainers/update")
    public void updateTrainer(@RequestParam Trainer trainer){

    }

    @PostMapping("/trainers/sign-up")
    public void createTrainer(@RequestBody Trainer trainer){
        trainerRepository.save(trainer);
    }

}
