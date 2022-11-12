package com.red.trainer.model;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;

@Entity
@Table(name = "trainers")
public class Trainer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name = "first_name", nullable = false)
    private String firstName;
    @Column(name = "last_name", nullable = false)
    @NotEmpty
    private String lastName;
    @Column(name = "years_exp")
    private int years;
    @Column(name = "age")
    private int age;
    @Column(name = "image_url")
    private String image;

    public Trainer(){

    }

    public Trainer(String firstName, String lastName, int years, int age, String imageUrl) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.years = years;
        this.age = age;
        this.image = imageUrl;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public int getYears() {
        return years;
    }

    public void setYears(int years) {
        this.years = years;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getImage() {
        return image;
    }

    public void setImageUrl(String image) {
        this.image = image;
    }
}
