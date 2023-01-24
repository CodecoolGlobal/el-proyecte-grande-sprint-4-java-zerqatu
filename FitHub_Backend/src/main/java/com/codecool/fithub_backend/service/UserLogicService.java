package com.codecool.fithub_backend.service;

import com.codecool.fithub_backend.model.BmiType;
import com.codecool.fithub_backend.model.User;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.math.RoundingMode;

@Service
public class UserLogicService {

    public void calculateBMI(User user) {
        double bmi = user.getWeight() / Math.pow((user.getHeight() / 100.0), 2);
        System.out.println(bmi);
        BigDecimal bigBmi = new BigDecimal(bmi).setScale(2, RoundingMode.HALF_UP);
        double roundedBmi = bigBmi.doubleValue();
        user.setBMI(roundedBmi);
        setBmiTypeByBmi(user);
    }

    public void setBmiTypeByBmi(User user) {
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

    public int calculateDailyCalories(User user) {
        switch (user.getGender()) {
            case MALE -> {
                return (int) (88.362 +
                        (13.397 * user.getWeight()) +
                        (4.799 * user.getHeight()) -
                        (5.677 * user.getAge()));
            }
            case FEMALE -> {
                return (int) (447.593 +
                        (9.247 * user.getWeight()) +
                        (3.098 * user.getHeight()) -
                        (4.330 * user.getAge()));
            }
            default -> {
                return 0;
            }
        }
    }

    public void setDailyCaloriesByActivity(User user) {
        switch (user.getActivity()) {
            case 1 -> user.setDailyCalories((int) (calculateDailyCalories(user) * 1.2));
            case 2 -> user.setDailyCalories((int) (calculateDailyCalories(user) * 1.375));
            case 3 -> user.setDailyCalories((int) (calculateDailyCalories(user) * 1.55));
            case 4 -> user.setDailyCalories((int) (calculateDailyCalories(user) * 1.725));
            case 5 -> user.setDailyCalories((int) (calculateDailyCalories(user) * 1.9));
            default -> user.setDailyCalories(calculateDailyCalories(user));
        }
    }


}
