# FitHub

This team project was planned to be a fitness tracker.  
Currently it's possible to register, login, change the user profile via settings, and view workouts.  
The website was built using Java with Spring, Spring Boot, Spring Security, PostgreSQL, and React.

## Installing & running the project

### Cloning the repository

```shell
$ git clone git@github.com:CodecoolGlobal/el-proyecte-grande-sprint-4-java-zerqatu.git
```

### Backend

```shell
$ cd ~/el-proyecte-grande-sprint-4-java-zerqatu/FitHub_Backend
$ mvn compile
$ mvn package
$ export PSQL_USERNAME=<your username here>
$ export PSQL_PASSWORD=<your password here>
$ java -jar target/FitHub_Backend-0.0.1-SNAPSHOT.jar
```

### Frontend

```shell
$ cd ~/el-proyecte-grande-sprint-4-java-zerqatu/FitHub_Frontend
$ npm install
$ npm start
```

The database already contains a user with the following login credentials:  
e-mail: `user@fithub.cool`  
password: `123`
