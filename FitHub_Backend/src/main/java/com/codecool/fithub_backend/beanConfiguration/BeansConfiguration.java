package com.codecool.fithub_backend.beanConfiguration;

import com.codecool.fithub_backend.service.UserLogicService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class BeansConfiguration {

    @Bean
    UserLogicService userLogicService() {
        return new UserLogicService();
    }
}
