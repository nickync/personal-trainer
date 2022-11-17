package com.personaltrainer.pt.Controller;

import com.personaltrainer.pt.Model.Trainer;
import com.personaltrainer.pt.Repository.TrainerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class TrainerController {

    @Autowired
    private TrainerRepository trainerRepository;

    @GetMapping("/all")
    public List<Trainer> getAllTrainers(){
        return trainerRepository.findAll();
    }
}
