package com.codecool.fithub_backend.data;

import com.codecool.fithub_backend.factory.YamlPropertySourceFactory;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
@ConfigurationProperties("exercise-data")
@PropertySource(value = "classpath:exerciseData.yml", factory = YamlPropertySourceFactory.class)
public class ExerciseDataReader {

    private List<Exercise> exercises = new ArrayList<>();

    public List<Exercise> getExercises() {
        return exercises;
    }

    public void setExercises(List<Exercise> exercises) {
        this.exercises = exercises;
    }

}
