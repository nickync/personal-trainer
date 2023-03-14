package com.project.trainer.pt.repository;

import com.project.trainer.pt.model.Message;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MessageRepository extends JpaRepository<Message, Long> {
}
