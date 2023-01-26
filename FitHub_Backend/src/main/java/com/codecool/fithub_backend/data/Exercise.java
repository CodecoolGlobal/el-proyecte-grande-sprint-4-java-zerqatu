package com.codecool.fithub_backend.data;

import java.util.List;

public class Exercise {
    private String exercise;
    private List<String> category;
    private List<String> tag;

    public Exercise(String exercise, List<String> category, List<String> tag) {
        this.exercise = exercise;
        this.category = category;
        this.tag = tag;
    }

    public String getExercise() {
        return exercise;
    }

    public void setExercise(String exercise) {
        this.exercise = exercise;
    }

    public List<String> getCategory() {
        return category;
    }

    public void setCategory(List<String> category) {
        this.category = category;
    }

    public List<String> getTag() {
        return tag;
    }

    public void setTag(List<String> tag) {
        this.tag = tag;
    }

    @Override
    public String toString() {
        return "Exercise{" +
                "exercise='" + exercise + '\'' +
                ", category=" + category +
                ", tag=" + tag +
                '}';
    }
}
