package com.codecool.fithub_backend.beanConfiguration;

import com.codecool.fithub_backend.model.User;
import com.codecool.fithub_backend.userRepository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.time.Month;

@Configuration
public class UserConfiguration {

    @Bean
    CommandLineRunner commandLineRunner(UserRepository userRepository) {
        return args -> {
            User maxMustermann = new User(
                    "Max_Mustermann",
                    "max@mustermann@gmail.com",
                    LocalDate.of(1990, Month.APRIL, 1),
                    "male",
                    170,
                    80,
                    2500
            );

            userRepository.save(maxMustermann);
        };
    }
}
