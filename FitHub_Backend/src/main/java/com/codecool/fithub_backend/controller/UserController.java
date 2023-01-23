package com.codecool.fithub_backend.controller;

import com.codecool.fithub_backend.model.User;
import com.codecool.fithub_backend.service.UserLogicService;
import com.codecool.fithub_backend.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping
public class UserController {

    private final UserService userService;
    private final UserLogicService userLogicService;

    public UserController(UserService userService, UserLogicService userLogicService) {
        this.userService = userService;
        this.userLogicService = userLogicService;
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
