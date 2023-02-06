package com.codecool.fithub_backend.service;

import com.codecool.fithub_backend.model.User;
import org.springframework.stereotype.Service;

@Service
public class UserCalorieService {

    private int calculateDailyCalories(User user) {
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
