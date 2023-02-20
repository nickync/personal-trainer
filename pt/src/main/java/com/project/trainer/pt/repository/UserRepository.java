package com.project.trainer.pt.repository;

import com.project.trainer.pt.model.SysUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<SysUser, Long> {
    SysUser findByUsername(String username);
}
