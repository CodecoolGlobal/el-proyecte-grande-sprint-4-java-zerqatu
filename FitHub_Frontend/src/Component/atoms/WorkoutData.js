import React from "react";
import UseFetch from "./UseFetch";

export default function WorkoutData() {
    let {fetchStatus, data} = UseFetch("/api/workouts")

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
                                    className="text-round-border">{entry.exercise.toLowerCase().replaceAll('_', ' ')}</div>;
                    })}
                </div>

            </div>)
    }
}