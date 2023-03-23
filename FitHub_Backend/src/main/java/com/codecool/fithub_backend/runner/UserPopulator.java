package com.codecool.fithub_backend.runner;

import com.codecool.fithub_backend.model.User;
import com.codecool.fithub_backend.userRepository.UserRepository;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class UserPopulator {
    @Bean
    ApplicationRunner populate(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        return args -> {
            User demoUser = new User("user@fithub.cool", passwordEncoder.encode("123"));
            userRepository.save(demoUser);
        };
    }
}
