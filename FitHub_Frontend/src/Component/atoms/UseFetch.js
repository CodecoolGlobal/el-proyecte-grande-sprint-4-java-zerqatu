import React, {useState} from "react";
import useFetch from "react-fetch-hook"

export default function UseFetch(fetchUrl) {
    const {isLoading, error, data,} = useFetch(fetchUrl)
    let fetchStatus = null;
    if (isLoading) {
        fetchStatus = "Loading . . .";
    }
    if (error) {
        fetchStatus = "Error loading data";
    }
    console.log("DATA: " + data)
    return {fetchStatus, data};
}

