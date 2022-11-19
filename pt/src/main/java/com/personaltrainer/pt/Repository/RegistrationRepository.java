package com.personaltrainer.pt.Repository;

import com.personaltrainer.pt.Model.Registration;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RegistrationRepository extends JpaRepository<Registration, Long> {
}
