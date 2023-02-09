import React from "react";
import {useState} from "react";

export default function Fetch(fetchUrl, fetchMethod, fetchBody, fetchHeaders, fetchAlert, redirectUrl) {
    const url = "/profile"
/*
    return fetch(fetchUrl, {
        method: fetchMethod,
        body: fetchBody,
        headers: {'Content-Type': fetchHeaders}
    })
 */
    //.then(res => res.status)
        //.then(res => res.status >= 400 ? alert(fetchAlert) : window.location.href = url)
    //console.log(fetch.res)



    return fetch(fetchUrl,{
        method: fetchMethod,
        //body: JSON.stringify(fetchBody),
        headers: fetchHeaders,
    })
        //.then(res => res.status >= 400 ? console.log(res): console.log("xy)"))
    .then(res => res.status >= 400 ? console.log(res): window.location.href = redirectUrl)



/*
    const [data, setData] = useState();

    fetch(fetchUrl,{
        method: fetchMethod,
        //body: JSON.stringify(fetchBody),
        //headers: {'Content-Type': fetchHeaders },
    })
        .then(response => response.text())
        .then(data => setData(data))
        .then(data => {
            return data
        });
    console.log("DATA 3 from fetch.js: " + data)
    //return data
 */








}