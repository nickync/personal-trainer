package com.project.trainer.pt.model;

import jakarta.persistence.*;

@Entity
public class Message {
    @Id
    @SequenceGenerator(name = "TABLE", sequenceName = "SEQ", initialValue = 10)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "TABLE")
    private Long id;

    @Column
    private Long trainerId;

    @Column
    private Long customerId;

    @Column(length = 1000)
    private String message;

    @Column
    private String time;

    @Column
    private String sender;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getTrainerId() {
        return trainerId;
    }

    public void setTrainerId(Long trainerId) {
        this.trainerId = trainerId;
    }

    public Long getCustomerId() {
        return customerId;
    }

    public void setCustomerId(Long customerId) {
        this.customerId = customerId;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getSender() {
        return sender;
    }

    public void setSender(String sender) {
        this.sender = sender;
    }
}
