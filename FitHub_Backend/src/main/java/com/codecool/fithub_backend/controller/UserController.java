package com.codecool.fithub_backend.controller;

import com.codecool.fithub_backend.model.User;
import com.codecool.fithub_backend.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }


    @GetMapping("/user/{id}")
    public Optional<User> getUsers(@PathVariable long id) {
        return userService.getUserById(id);
    }

    @PutMapping("/user")
    public void updateUser(@RequestBody User user) {
        userService.updateUser(user);
    }

}
