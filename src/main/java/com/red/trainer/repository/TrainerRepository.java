package com.red.trainer.repository;

import com.red.trainer.model.Trainer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

public interface TrainerRepository extends JpaRepository<Trainer, Long> {
    Trainer findByFirstNameAndLastName(String firstName, String lastName);

    List<Trainer> findByFirstNameOrLastName(String firstName, String lastName);
}
