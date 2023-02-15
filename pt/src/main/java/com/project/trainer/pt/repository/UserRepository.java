package com.project.trainer.pt.repository;

import com.project.trainer.pt.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
