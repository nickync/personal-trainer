package com.red.trainer.controller;

import com.red.trainer.model.Trainer;
import com.red.trainer.repository.TrainerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
@RequestMapping("/api/")
public class TrainerController {
    @Autowired
    private TrainerRepository trainerRepository;

    @GetMapping("/all")
    public List<Trainer> getAllTrainers(){
        return trainerRepository.findAll();
    }

    @RequestMapping(path = "/search/{first}/{last}", method = RequestMethod.GET)
    public Trainer getTrainerByName(@PathVariable("first") String first, @PathVariable("last") String last){
        return trainerRepository.findByFirstNameAndLastName(first, last);
    }

    @RequestMapping(path = "/search/{name}", method = RequestMethod.GET)
    public List<Trainer> getTrainerByPartialName(@PathVariable("name") String name){
        return trainerRepository.findByFirstNameOrLastName(name, name);
    }
}
