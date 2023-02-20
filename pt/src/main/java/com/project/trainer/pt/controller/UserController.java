package com.project.trainer.pt.controller;

import com.project.trainer.pt.jwt.JwtSecurityConfig;
import com.project.trainer.pt.model.SysUser;
import com.project.trainer.pt.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    JwtSecurityConfig jwtSecurityConfig;
    @PostMapping("/sign-up")
    public void createUser(@RequestBody SysUser user){
        System.out.println(user.getUsername());
        userRepository.save(user);
        jwtSecurityConfig.createNewUser(user, jwtSecurityConfig.dataSource());
    }

    @GetMapping("/getRole/{username}")
    public String getUserRole(@PathVariable String username){
        return userRepository.findByUsername(username).getRole();
    }


}
