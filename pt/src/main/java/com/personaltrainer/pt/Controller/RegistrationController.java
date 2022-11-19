package com.personaltrainer.pt.Controller;

import com.personaltrainer.pt.Model.Registration;
import com.personaltrainer.pt.Repository.RegistrationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/reg")
public class RegistrationController {
    @Autowired
    private RegistrationRepository registrationRepository;

    @RequestMapping("/all")
    public List<Registration> getAllRegistrations(){
        return registrationRepository.findAll();
    }
}
