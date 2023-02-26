package com.personaltrainer.pt.Controller;

import com.personaltrainer.pt.Exception.ResourceNotFoundException;
import com.personaltrainer.pt.Model.Client;
import com.personaltrainer.pt.Model.Registration;
import com.personaltrainer.pt.Model.Trainer;
import com.personaltrainer.pt.Model.User;
import com.personaltrainer.pt.Repository.ClientRepository;
import com.personaltrainer.pt.Repository.RegistrationRepository;
import com.personaltrainer.pt.Repository.TrainerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/reg")
public class RegistrationController {
    @Autowired
    private RegistrationRepository registrationRepository;

    @Autowired
    private TrainerRepository trainerRepository;

    @Autowired
    private ClientRepository clientRepository;

    @RequestMapping("/all")
    public List<Registration> getAllRegistrations(){
        return registrationRepository.findAll();
    }

    @RequestMapping("/{username}")
    public ResponseEntity<User> findRegistration(@PathVariable String username){
        Registration registration = null;
        registration = registrationRepository.findRegistrationByUsername(username)
                .orElseThrow(() -> new ResourceNotFoundException("User not found!"));
        if (registration != null && registration.getRole().equalsIgnoreCase("Trainer")){
            Trainer trainer = trainerRepository.findByUsername(username).orElseThrow();
            return ResponseEntity.ok(trainer);
        } else {
            Client client = clientRepository.findByUsername(username).orElseThrow();
            return ResponseEntity.ok(client);
        }
    }
}
