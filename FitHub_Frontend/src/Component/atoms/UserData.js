import React from "react";
import useFetch from "react-fetch-hook"
import UserLogo from "./UserLogo";

export default function UserData() {
    const {isLoading, error, data} = useFetch("/user/1")
    if (isLoading) return "Loading...";
    if (error) return "Error loading data";

    return (
        <div className="userData">
            <div className="user-data">
                <UserLogo></UserLogo>
                <div>{data.userName}</div>
                <div>{data.age} years</div>
                <div>{data.gender}</div>
                <div>{data.height} cm</div>
                <div>{data.weight} kg</div>
                <div>{data.dailyCalories} kcal</div>
            </div>
        </div>

    )
}
