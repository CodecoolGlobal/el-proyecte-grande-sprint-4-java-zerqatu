package com.codecool.fithub_backend.model;

import java.util.ArrayList;
import java.util.List;

public class UserStorage {

    public List<User> users = new ArrayList<>();

    public void add(User user){
        users.add(user);
    }

    public List<User> getUsers(){
        return users;
    }

}
