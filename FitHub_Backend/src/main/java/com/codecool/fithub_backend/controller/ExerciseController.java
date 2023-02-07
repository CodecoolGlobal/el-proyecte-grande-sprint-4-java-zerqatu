package com.codecool.fithub_backend.controller;

import com.codecool.fithub_backend.data.Exercise;
import com.codecool.fithub_backend.data.ExerciseDataReader;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/workouts")
public class ExerciseController {

    private final ExerciseDataReader exerciseDataReader;

    public ExerciseController(ExerciseDataReader exerciseDataReader) {
        this.exerciseDataReader = exerciseDataReader;
    }

    @GetMapping()
    public List<Exercise> getExercise() {
        System.out.println(exerciseDataReader.getExercises());
        return exerciseDataReader.getExercises();
    }
}