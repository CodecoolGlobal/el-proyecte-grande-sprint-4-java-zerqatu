import React from "react";
import UseFetch from "./UseFetch";

export default function UserData() {
    let {fetchStatus, data} = UseFetch("/user/1")

    if (fetchStatus !== null) {
        return (
            <div id="content" className="p-4 p-md-5 pt-5">
                <h2 className="mb-4">User Profile</h2>
                <div>
                    {fetchStatus}
                </div>
            </div>
        )
    } else {
        return (
            <div id="content" className="p-4 p-md-5 pt-5">
                <h2 className="mb-4">User Profile</h2>
                <div>{data.userName} username</div>
                <div>{data.password} password</div>
                <div>{data.age} years</div>
                <div>{data.email}</div>
                <div>{data.gender}</div>
                <div>{data.height} cm</div>
                <div>{data.weight} kg</div>
                <div>{data.dailyCalories} kcal</div>
                <div>{data.bmi} BMI</div>
            </div>)
    }
}
