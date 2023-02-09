package com.codecool.fithub_backend.controller;

import com.codecool.fithub_backend.model.User;
import com.codecool.fithub_backend.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/user")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }


    @GetMapping("/{id}")
    public Optional<User> getUsers(@PathVariable long id) {
        return userService.getUserById(id);
    }

    @PutMapping
    public void updateUser(@RequestBody User user) {
        userService.updateUser(user);
    }

    @PostMapping("/login")
    public void getUserByLogin(@RequestBody User user) {
        String mail = user.getEmail();
        String password = user.getPassword();
        System.out.println(mail);
        System.out.println(password);

    }

    @GetMapping("/{mail}/{password}")
    public Optional<User> getUserByMail(@PathVariable("mail") String mail,
                                        @PathVariable("password") String password) {
        return userService.getUserByEmail(mail, password);
    }
}
