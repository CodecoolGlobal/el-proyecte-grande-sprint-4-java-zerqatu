package com.codecool.fithub_backend.service;

import com.codecool.fithub_backend.model.User;


import java.util.Arrays;
import java.util.List;
import java.util.Random;

public class UserCreator {

    private static List<String> userNames = Arrays.asList("Marc","Natasha","Raffi");

    public static User createRandomUser(){
        String randomName = userNames.get(new Random().nextInt(userNames.size()));
        return new User(randomName);
    }
}
