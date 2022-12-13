package com.codecool.fithub_backend.controller;

import com.codecool.fithub_backend.model.User;
import com.codecool.fithub_backend.model.UserStorage;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {

    public UserStorage userStorage = new UserStorage();

    @GetMapping("users")
    public List<User> getUsers(){
        return userStorage.getUsers();
    }

    @GetMapping("users/random")
    public User getRandomUser(){
        return userStorage.addRandomUser();
    }
}
