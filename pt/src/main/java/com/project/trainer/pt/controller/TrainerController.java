package com.project.trainer.pt.controller;

import com.project.trainer.pt.model.Trainer;
import com.project.trainer.pt.repository.TrainerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TrainerController {

    @Autowired
    private TrainerRepository trainerRepository;

    @GetMapping("/trainers")
    public List<Trainer> getAllTrainers(){
        return trainerRepository.findAll();
    }
}
