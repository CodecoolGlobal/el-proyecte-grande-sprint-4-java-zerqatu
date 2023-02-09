import React from "react";
import UseFetch from "./UseFetch";
import Fetch from "./Fetch";

export default function WorkoutData() {
//    let {fetchStatus, data} = UseFetch("/api/workouts")

let credentials = localStorage.getItem('Authorization')
console.log(credentials)
console.log(localStorage)

let fetchHeaders = {'Authorization': credentials};
let fetchWorkouts = Fetch('/api/workouts', 'GET', '', fetchHeaders, '', '/workouts')

console.log("workouts:" + fetchWorkouts)

    if (fetchWorkouts !== null) {
        return (
            <div id="content" className="p-4 p-md-5 pt-5">
                <h2 className="mb-4">Workouts</h2>
                <div>
                    {fetchWorkouts}
                </div>
            </div>
        )
    } else {
        return (
            <div id="content" className="p-4 p-md-5 pt-5">
                <h2 className="mb-4">Workouts</h2>

                <div className="workout-box">
                    {fetchWorkouts.map((entry, i) => {
                        return <div key={i}
                                    className="text-round-border">{entry.exercise.toLowerCase().replaceAll('_', ' ')}</div>;
                    })}
                </div>

            </div>)
    }
}