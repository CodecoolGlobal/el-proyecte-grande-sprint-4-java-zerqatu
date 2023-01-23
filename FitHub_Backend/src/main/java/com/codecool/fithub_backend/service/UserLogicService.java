package com.codecool.fithub_backend.service;

import com.codecool.fithub_backend.model.BmiType;
import com.codecool.fithub_backend.model.User;
import org.springframework.stereotype.Service;

@Service
public class UserLogicService {

    private void calculateBMI(User user) {
        user.setBMI(user.getWeight() / (user.getHeight() / 100.0));
    }

    private void setBmiTypeByBmi(User user) {
        double userBmi = user.getBMI();
        if (userBmi >= 30) {
            user.setBmiType(BmiType.OBESITY);
        } else if (userBmi <= 29.9 && userBmi >= 25){
            user.setBmiType(BmiType.OVERWEIGHT);
        } else if (userBmi <= 24.9 && userBmi >= 18.5) {
            user.setBmiType(BmiType.NORMAL_WEIGHT);
        } else {
            user.setBmiType(BmiType.UNDERWEIGHT);
        }
    }
}
