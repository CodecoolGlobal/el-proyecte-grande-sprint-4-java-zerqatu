package com.codecool.fithub_backend.data;

public enum ExerciseType {
    //CARDIO
    WALKING(0.679710997014925),
    RUNNING(2.77977425671642),
    JOGGING(1.64782526567164),
    CYCLING(1.64782526567164),
    CYCLING_STATIONARY(1.44133935522388),
    SWIMMING(1.23485344477612),
    HIKING(1.23485344477612),


    //CORE
    CRUNCHES(1.64782526567164),
    PLANK(1.64782526567164),
    RUSSIAN_TWIST(1.64782526567164),
    JACKKNIFE(1.64782526567164),
    LEG_RAISE(1.64782526567164),
    SIDE_PLANK(0.61742672238806),



    //LEGS
    SQUATS(0.61742672238806),
    ROMANIAN_DEADLIFT(1.23485344477612),
    GOBLET_SQUAT(1.23485344477612),
    LEG_EXTENSION(1.23485344477612),
    LUNGES(0.61742672238806),
    CALF_RAISES(0.61742672238806),
    LEG_PRESS(0.61742672238806),
    LEG_CURL(0.61742672238806),


    //LOWER BACK
    BENT_OVER_ROW(0.61742672238806),
    BACK_EXTENSION(0.61742672238806),
    SUPERMAN(0.61742672238806),


    //UPPER BACK AND SHOULDERS
    SEATED_CABLE_ROWS(0.61742672238806),
    PULL_UP(0.61742672238806),
    PULL_DOWN(0.61742672238806),
    BACK_ROWS(0.61742672238806),
    SHOULDER_SHRUG(0.61742672238806),


    //UPPER BODY

    OVERHEAD_PRESS(0.61742672238806),
    DUMBBELL_BENCH_PRESS(0.61742672238806),
    PUSH_UPS(0.61742672238806),
    DUMBBELL_BICEP_CURLS(0.61742672238806),
    BENCH_PRESS(0.61742672238806),
    CHIN_UP(0.61742672238806),
    TRICEP_DIPS(0.61742672238806),
    OVERHEAD_TRICEP_EXTENSION(0.61742672238806),
    PUSH_DOWN(0.61742672238806),
    DUMBBELL_FLYES(0.61742672238806),
    INCLINE_DUMBBELL_PRESS(0.61742672238806),
    DECLINE_DUMBBELL_PRESS(0.61742672238806);


    ExerciseType(double caloriesBurnedByKg) {
    }
}
