package com.project.trainer.pt.controller;

import com.project.trainer.pt.model.Customer;
import com.project.trainer.pt.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
public class CustomerController {

    @Autowired
    private CustomerRepository customerRepository;

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

}
