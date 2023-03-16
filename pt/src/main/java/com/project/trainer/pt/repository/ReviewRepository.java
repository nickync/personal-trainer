package com.project.trainer.pt.repository;

import com.project.trainer.pt.model.Review;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewRepository extends JpaRepository<Review, Long> {
}
