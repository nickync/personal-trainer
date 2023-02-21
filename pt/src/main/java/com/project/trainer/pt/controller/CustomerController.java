package com.project.trainer.pt.controller;

import com.project.trainer.pt.model.Customer;
import com.project.trainer.pt.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CustomerController {

    @Autowired
    private CustomerRepository customerRepository;

    @GetMapping("/customers/get")
    public Customer getCustomerById(@RequestParam Long id){
        return customerRepository.findById(id).orElseThrow();
    }
}
