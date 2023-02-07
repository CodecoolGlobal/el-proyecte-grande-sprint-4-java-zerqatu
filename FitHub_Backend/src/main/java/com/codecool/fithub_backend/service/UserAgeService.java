package com.codecool.fithub_backend.service;

import com.codecool.fithub_backend.model.User;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.Period;

@Service
public class UserAgeService {

    public void calculateUserAge(User user) {
        user.setAge(Period.between(LocalDate.parse(user.getDateOfBirth()), LocalDate.now()).getYears());
    }
}
