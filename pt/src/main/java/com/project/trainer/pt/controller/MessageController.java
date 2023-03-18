package com.project.trainer.pt.controller;

import com.project.trainer.pt.model.Message;
import com.project.trainer.pt.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

@RestController
public class MessageController {

    @Autowired
    private MessageRepository messageRepository;

    @PostMapping("/sendMessage")
    public void sendMessage(@RequestBody Message message){
        System.out.println(message.getMessage());
        messageRepository.save(message);
    }

    @GetMapping("/getMessage")
    public List<Message> getMessage(@RequestParam Long trainerId, @RequestParam Long customerId){
        List<Message> messages = messageRepository.findAll();
        return messages.stream().filter( i -> Objects.equals(i.getTrainerId(), trainerId) && Objects.equals(i.getCustomerId(), customerId)).toList();
    }

}
