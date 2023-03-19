package com.project.trainer.pt.model;

import org.aspectj.lang.annotation.Before;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class CustomerTest {
    private Customer customer = new Customer();
    @BeforeEach
    void setUp(){

        customer.setId(1);
    }

    @Test
    void getId() {
        customer.setId(1);
        assertEquals(1, customer.getId());
    }
}