package com.project.trainer.pt.controller;

import com.project.trainer.pt.model.User;
import com.project.trainer.pt.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;
    @PostMapping("/sign-up")
    public void createUser(@RequestBody User user){
        System.out.println(user.getUsername());
        userRepository.save(user);
    }
}
