package com.project.trainer.pt.controller;

import com.project.trainer.pt.model.Review;
import com.project.trainer.pt.model.Trainer;
import com.project.trainer.pt.model.TrainingPlan;
import com.project.trainer.pt.repository.ReviewRepository;
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

    @Autowired
    private ReviewRepository reviewRepository;

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
        Long planId = trainingPlan.getId();

        System.out.println(planId);
        if (planId == 0){
            trainingPlanRepository.save(trainingPlan);
        } else {
            TrainingPlan plan = trainingPlanRepository.findById(planId).get();
            System.out.println(plan.getDetails());
            if (trainingPlan.getDate() != null){
                plan.setDate(trainingPlan.getDate());
            }
            if (!trainingPlan.getTitle().equals("")){
                plan.setTitle(trainingPlan.getTitle());
            }
            if (!trainingPlan.getDetails().equals("")){
                plan.setDetails(trainingPlan.getDetails());
            }
            System.out.println(plan.getDetails());
            trainingPlanRepository.save(plan);
        }
    }

    @GetMapping("/getPlans")
    public List<TrainingPlan> getAllPlansForCustomer(@RequestParam Long trainerId, @RequestParam Long customerId){
        List<TrainingPlan> trainingPlans = trainingPlanRepository.findAll();
        return trainingPlans.stream().filter(i -> i.getTrainerId() == trainerId && i.getCustomerId() == customerId).collect(Collectors.toList());
    }

    @PostMapping("/deletePlan")
    public void deletePlan(@RequestParam Long id){
        trainingPlanRepository.deleteById(id);
    }

}
