package com.codecool.fithub_backend.model;


import javax.persistence.*;
import java.time.LocalDate;
import java.time.Period;

@Entity
@Table(name = "Users")
public class User {
    @Id
    @GeneratedValue
    private long id;
    private String userName;
    private String email;
    private String password;
    private LocalDate dateOfBirth;
    @Transient
    private Integer age;
    @Enumerated(EnumType.STRING)
    private Gender gender;
    private int height;
    private int weight;
    private int dailyCalories;
    private double BMI;
    @Enumerated(EnumType.STRING)
    private BmiType bmiType;
    private int Activity;



    public User() {
    }

    public User(String email, String password) {
        this.email = email;
        this.password = password;
    }

    public User(String userName,
                String email,
                String password,
                LocalDate dateOfBirth,
                Gender gender,
                int height,
                int weight,
                int dailyCalories,
                int activity) {
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
        this.height = height;
        this.weight = weight;
        this.dailyCalories = dailyCalories;
        this.Activity = activity;
    }

    public long getId() {
        return id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public LocalDate getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(LocalDate dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public Gender getGender() {
        return gender;
    }

    public void setGender(Gender gender) {
        this.gender = gender;
    }

    public int getHeight() {
        return height;
    }

    public void setHeight(int height) {
        this.height = height;
    }

    public int getWeight() {
        return weight;
    }

    public void setWeight(int weight) {
        this.weight = weight;
    }

    public int getDailyCalories() {
        return dailyCalories;
    }

    public void setDailyCalories(int dailyCalories) {
        this.dailyCalories = dailyCalories;
    }

    public Integer getAge() {
        return Period.between(this.dateOfBirth, LocalDate.now()).getYears();
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public double getBMI() {
        return BMI;
    }

    public void setBMI(double BMI) {
        this.BMI = BMI;
    }

    public BmiType getBmiType() {
        return bmiType;
    }

    public void setBmiType(BmiType bmiType) {
        this.bmiType = bmiType;
    }

    public int getActivity() {
        return Activity;
    }

    public void setActivity(int activity) {
        Activity = activity;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", userName='" + userName + '\'' +
                ", email='" + email + '\'' +
                ", dateOfBirth=" + dateOfBirth +
                ", age=" + age +
                ", gender='" + gender + '\'' +
                ", height=" + height +
                ", weight=" + weight +
                ", dailyCalories=" + dailyCalories +
                '}';
    }
}