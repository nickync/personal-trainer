package com.project.trainer.pt.controller;

import com.project.trainer.pt.model.Customer;
import com.project.trainer.pt.model.Review;
import com.project.trainer.pt.model.Trainer;
import com.project.trainer.pt.model.TrainingPlan;
import com.project.trainer.pt.repository.CustomerRepository;
import com.project.trainer.pt.repository.ReviewRepository;
import com.project.trainer.pt.repository.TrainerRepository;
import com.project.trainer.pt.repository.TrainingPlanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

@RestController
public class CustomerController {

    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private TrainingPlanRepository trainingPlanRepository;

    @Autowired
    private ReviewRepository reviewRepository;

    @Autowired
    private TrainerRepository trainerRepository;

    @GetMapping("/customers/get")
    public Customer getCustomerById(@RequestParam Long id){
        return customerRepository.findById(id).orElseThrow();
    }


    @PostMapping("/customers/sign-up")
    public void createCustomer(@RequestBody Customer customer){
        customerRepository.save(customer);
    }

    @PostMapping("/customer/update")
    public void updateCustomer(@RequestBody Customer customer){
        customer.setTrainerId(customerRepository.findById(customer.getId()).get().getTrainerId());
        customerRepository.save(customer);
    }
    @PostMapping("/customers/book")
    public HttpStatus bookTrainer(@RequestParam Long customerId, @RequestParam Long trainerId){
        Customer customer = customerRepository.findById(customerId).get();

        if (trainerId != null){
            customer.setTrainerId(trainerId);
            customerRepository.save(customer);
            return HttpStatus.OK;
        } else {
            return HttpStatus.INTERNAL_SERVER_ERROR;
        }

    }

    @PostMapping("/customers/removeTrainer")
    public void removeTrainer(@RequestParam Long customerId){
        Customer customer = customerRepository.findById(customerId).get();
        customer.setTrainerId(-1);
        customerRepository.save(customer);
    }

    @GetMapping("/trainers/getClients")
    public List<Customer> getTrainerClients(@RequestParam Long trainerId){
        List<Customer> customersList = customerRepository.findAll();
        return customersList.stream().filter(i -> i.getTrainerId() == trainerId).toList();
    }

    @PostMapping("/setPlanStatus")
    public void setPlanStatus(@RequestParam Long planId, @RequestParam Boolean completed){
        TrainingPlan plan = trainingPlanRepository.findById(planId).get();
        plan.setCompleted(completed);
        trainingPlanRepository.save(plan);
    }

    @PostMapping("/sendAReview")
    public void sendReview(@RequestBody Review review){
        Trainer trainer = trainerRepository.findById(review.getTrainerId()).get();
        List<Review> reviews = reviewRepository.findAll().stream().filter(i -> i.getTrainerId().equals(review.getTrainerId())).toList();
        Long rating =(long) (reviews.stream().map(Review::getRating).reduce(0.0, Double::sum) / reviews.size());
        trainer.setRating(rating);
        trainerRepository.save(trainer);
        reviewRepository.save(review);
    }

    @GetMapping("/getReview")
    public List<Review> getAllReview(@RequestParam Long trainerId){
        return reviewRepository.findAll().stream().filter(review -> Objects.equals(review.getTrainerId(), trainerId)).toList();
    }

}
