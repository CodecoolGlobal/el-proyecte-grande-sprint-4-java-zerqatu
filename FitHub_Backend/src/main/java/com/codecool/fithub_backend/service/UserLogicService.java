package com.codecool.fithub_backend.service;

import com.codecool.fithub_backend.model.BmiType;
import com.codecool.fithub_backend.model.User;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.math.RoundingMode;

@Service
public class UserLogicService {

    private final UserAgeService userAgeService;
    private final UserBmiService userBmiService;
    private final UserCalorieService userCalorieService;

    public UserLogicService(UserAgeService userAgeService,
                            UserBmiService userBmiService,
                            UserCalorieService userCalorieService) {
        this.userAgeService = userAgeService;
        this.userBmiService = userBmiService;
        this.userCalorieService = userCalorieService;
    }

    public void processUser(User user) {
        userAgeService.calculateUserAge(user);
        userBmiService.calculateBMI(user);
        userCalorieService.setDailyCaloriesByActivity(user);
    }
}
