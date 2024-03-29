package com.codecool.fithub_backend.service;

import com.codecool.fithub_backend.model.User;
import com.codecool.fithub_backend.userRepository.UserRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.Period;
import java.util.Optional;


@Service
public class UserService {

    private final UserRepository userRepository;
    private final UserLogicService userLogicService;

    public UserService(UserRepository userRepository, UserLogicService userLogicService) {
        this.userRepository = userRepository;
        this.userLogicService = userLogicService;
    }

    public Optional<User> getUserById(long id) {
        return userRepository.findById(id);
    }

    public void updateUser(User user) {
        userLogicService.processUser(user);
        userRepository.save(user);
    }


    public void addUser(User user) {
        userRepository.save(user);
    }

    public Optional<User> getUserByEmail(String mail, String password) {
        return userRepository.findUserByEmailAndPassword(mail, password);
    }
}
