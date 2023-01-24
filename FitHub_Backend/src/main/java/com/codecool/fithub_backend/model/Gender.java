package com.codecool.fithub_backend.model;

public enum Gender {
    MALE("male"),
    FEMALE("female");

    private String genderDescription;

    Gender(String genderDescription) {
        this.genderDescription = genderDescription;
    }

    public String getGenderDescription() {
        return genderDescription;
    }
}
