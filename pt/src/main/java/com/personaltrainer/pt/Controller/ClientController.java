package com.personaltrainer.pt.Controller;

import com.personaltrainer.pt.Model.Client;
import com.personaltrainer.pt.Repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/cli")
public class ClientController {
    @Autowired
    private ClientRepository clientRepository;

    @GetMapping("/i")
    public List<Client> getAll(){
        return clientRepository.findAll();
    }
}
