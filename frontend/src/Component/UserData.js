import React from "react";
import useFetch from "react-fetch-hook"
import App from "../App";
import logo from "../logo.svg";
import usericon from "../assets/images/usericon.png";

export default function UserData() {
    const {isLoading, error, data} = useFetch("/user/1")
    if (isLoading) return "Loading...";
    if (error) return "Error loading data";

    return (
        <div className="userData">
            <div className="user-data">
                <img src={usericon} className={App-logo} alt="logo"/>
                <div>{data.userName}</div>
                <div>{data.age} years</div>
                <div>{data.gender}</div>
                <div>{data.height} cm</div>
                <div>{data.weight} kg</div>
            </div>
            <div className="user-calories">
                {data.dailyCalories} kcal
            </div>
            <div className="left">
                Left
            </div>
        </div>

    )
}
