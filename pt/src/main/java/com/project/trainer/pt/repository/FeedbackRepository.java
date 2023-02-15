package com.project.trainer.pt.repository;

import com.project.trainer.pt.model.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FeedbackRepository extends JpaRepository<Feedback, Long> {
}
