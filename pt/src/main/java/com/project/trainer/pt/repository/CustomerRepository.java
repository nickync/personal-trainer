package com.project.trainer.pt.repository;

import com.project.trainer.pt.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
}
