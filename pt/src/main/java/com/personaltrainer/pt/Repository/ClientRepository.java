package com.personaltrainer.pt.Repository;

import com.personaltrainer.pt.Model.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepository extends JpaRepository<Client, Long> {
}
