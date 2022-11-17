package com.personaltrainer.pt.Repository;

import com.personaltrainer.pt.Model.Trainer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TrainerRepository extends JpaRepository<Trainer, Long> {
}
