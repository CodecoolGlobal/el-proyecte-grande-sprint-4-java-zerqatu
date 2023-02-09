package com.codecool.fithub_backend.controller;

import com.codecool.fithub_backend.model.User;
import com.codecool.fithub_backend.service.UserService;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
public class LandingController {

    private final UserService userService;
    private final PasswordEncoder passwordEncoder;

    public LandingController(UserService userService, PasswordEncoder passwordEncoder) {
        this.userService = userService;
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping("/registration")
    public void registerUser(@RequestBody User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userService.addUser(user);
    }

    @GetMapping("/login")
    public String login(Authentication authentication) {
        System.out.println("authentication = " + authentication.getName());
        return "Logged in! from Backend!";
    }
}
