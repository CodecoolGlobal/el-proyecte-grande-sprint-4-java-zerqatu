package com.codecool.fithub_backend.model;

public enum BmiType {
    UNDERWEIGHT("underweight"),
    NORMAL_WEIGHT("normal weight"),
    OVERWEIGHT("overweight"),
    OBESITY("obese");

    private String BMIDescription;

    BmiType(String BMIDescription) {
        this.BMIDescription = BMIDescription;
    }

    public String getBMIDescription() {
        return BMIDescription;
    }
}
