package com.personaltrainer.pt.Repository;

import com.personaltrainer.pt.Model.Registration;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RegistrationRepository extends JpaRepository<Registration, Long> {
    Optional<Registration> findRegistrationByUsername(String username);
}
