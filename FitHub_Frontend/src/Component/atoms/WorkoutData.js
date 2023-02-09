import React from "react";
import useFetch from "react-fetch-hook";

export default function WorkoutData() {

    const {isLoading, error, data} = useFetch("/api/workouts", {
        method: "get",
        headers: {"Authorization": localStorage.getItem('Authorization')}
    });
    if (isLoading) return "Loading . . . ";
    if (error) return "Error loading data";

    return (
        <div id="content" className="p-4 p-md-5 pt-5">
            <h2 className="mb-4">Workouts</h2>
            <div className="workout-box">
                {data.map((entry, i) => {
                    return <div key={i}
                                className="text-round-border">{entry.exercise.toLowerCase().replaceAll('_', ' ')}</div>;
                })}
            </div>
        </div>
    )
}