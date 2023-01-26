import React from "react";
import useFetch from "react-fetch-hook"

export default function WorkoutData() {
    const {isLoading, error, data} = useFetch("/exercises")
    let fetchStatus = null;
    if (isLoading) {
        fetchStatus = "Loading . . .";
    }
    if (error) {
        fetchStatus = "Error loading data";
    }
    if (fetchStatus !== null) {
        return (
            <div id="content" className="p-4 p-md-5 pt-5">
                <h2 className="mb-4">Workouts</h2>
                <div>
                    {fetchStatus}
                </div>
            </div>
        )
    } else {
        return (
            <div id="content" className="p-4 p-md-5 pt-5">
                <h2 className="mb-4">Workouts</h2>

                <div className="workout-box">
                    {data.map((entry, i) => {
                        return <div key={i}
                                    className="workouts">{entry.exercise.toLowerCase().replaceAll('_', ' ')}</div>;
                    })}
                </div>

            </div>)
    }
}