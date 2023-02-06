package com.codecool.fithub_backend.service;

import com.codecool.fithub_backend.model.BmiType;
import com.codecool.fithub_backend.model.User;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.math.RoundingMode;

@Service
public class UserBmiService {

    public void calculateBMI(User user) {
        double bmi = user.getWeight() / Math.pow((user.getHeight() / 100.0), 2);
        System.out.println(bmi);
        BigDecimal bigBmi = new BigDecimal(bmi).setScale(2, RoundingMode.HALF_UP);
        double roundedBmi = bigBmi.doubleValue();
        user.setBMI(roundedBmi);
        setBmiTypeByBmi(user);
    }

    private void setBmiTypeByBmi(User user) {
        double userBmi = user.getBMI();
        if (userBmi >= 30) {
            user.setBmiType(BmiType.OBESITY);
        } else if (userBmi <= 29.9 && userBmi >= 25) {
            user.setBmiType(BmiType.OVERWEIGHT);
        } else if (userBmi <= 24.9 && userBmi >= 18.5) {
            user.setBmiType(BmiType.NORMAL_WEIGHT);
        } else {
            user.setBmiType(BmiType.UNDERWEIGHT);
        }
    }
}
