package com.project.trainer.pt.controller;

import com.project.trainer.pt.model.Trainer;
import com.project.trainer.pt.model.TrainingPlan;
import com.project.trainer.pt.repository.TrainerRepository;
import com.project.trainer.pt.repository.TrainingPlanRepository;
import com.project.trainer.pt.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
public class TrainerController {

    @Autowired
    private TrainerRepository trainerRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TrainingPlanRepository trainingPlanRepository;

    @GetMapping("/trainers")
    public List<Trainer> getAllTrainers(){
        return trainerRepository.findAll();
    }

    @GetMapping("/trainers/get")
    public Trainer getTrainerById(@RequestParam Long id){
        return trainerRepository.findById(id).orElseThrow();
    }

    @PostMapping("/trainers/update")
    public void updateTrainer(@RequestBody Trainer trainer){
        trainer.setRating(trainerRepository.findById(trainer.getId()).get().getRating());
        trainerRepository.save(trainer);

    }

    @PostMapping("/trainers/sign-up")
    public void createTrainer(@RequestBody Trainer trainer){
        trainerRepository.save(trainer);
    }

    @PostMapping("/setTrainingPlan")
    public void saveTrainingPlan(@RequestBody TrainingPlan trainingPlan) {
        trainingPlanRepository.save(trainingPlan);
    }

    @GetMapping("/getPlans")
    public List<TrainingPlan> getAllPlansForCustomer(@RequestParam Long trainerId, @RequestParam Long customerId){
        List<TrainingPlan> trainingPlans = trainingPlanRepository.findAll();
        return trainingPlans.stream().filter(i -> i.getTrainerId() == trainerId && i.getCustomerId() == customerId).collect(Collectors.toList());
    }
}
