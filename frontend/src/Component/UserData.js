import React from "react";
import useFetch from "react-fetch-hook"

export default function UserData() {
    const {isLoading, error, data} = useFetch("/user/1")
    if (isLoading) return "Loading...";
    if (error) return "Error loading data";

    return (
        <div className="userData">
            <div>{data.id}</div>
            <div>{data.userName}</div>
            <div>{data.email}</div>
            <div>{data.dateOfBirth}</div>
            <div>{data.age}</div>
            <div>{data.gender}</div>
            <div>{data.height}</div>
            <div>{data.weight}</div>
            <div>{data.dailyCalories}</div>
        </div>
    )
}
