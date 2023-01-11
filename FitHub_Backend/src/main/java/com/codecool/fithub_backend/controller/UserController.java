package com.codecool.fithub_backend.controller;

import com.codecool.fithub_backend.model.User;
import com.codecool.fithub_backend.service.UserService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }


    @GetMapping("user/{id}")
    public Optional<User> getUsers(@PathVariable long id){
        return userService.getUserById(id);
    }

}
