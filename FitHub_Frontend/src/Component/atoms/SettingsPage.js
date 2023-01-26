import useFetch from "react-fetch-hook";
import {useState} from "react";


const SettingsForm = () => {
    const [activity, setActivity] = useState();
    const [dateOfBirth, setDateOfBirth] = useState();
    const [height, setHeight] = useState();
    const [userName, setUserName] = useState();
    const [weight, setWeight] = useState();


    const {isLoading, error, data} = useFetch("/user/1")
    console.log(data)
    if (isLoading) return "Loading...";
    if (error) return "Error loading data";

    const submit = e => {
        const url = "/profile"
        e.preventDefault();
        let age = data.age
        let bmi = data.bmi
        let bmiType = data.bmiType
        let dailyCalories = data.dailyCalories
        let email = data.email
        let id = data.id
        let password = data.password
        let noGender = document.getElementById("genderId")
        let gender = noGender.value


        fetch('/user',{
            method: 'PUT',
            body: JSON.stringify({id, userName, email, password, dateOfBirth, gender, height, weight, activity}),
            headers: {'Content-Type': 'application/json' },
        })
            .then(res => res.status >= 400 ? console.log(res): window.location.href = url)
    }

    return(
        <div className="centered1">
            <form onSubmit={submit}>
                <label className="labelHeader">User Stats</label><br/>

                <label className="labelItem">User Name</label><input placeholder={data.userName} onChange={(e) => setUserName(e.target.value)}></input><br/>

                <label className="labelItem">Date of Birth</label><input placeholder={data.dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)}></input><br/>

                <label className="labelItem">Height</label><input placeholder={data.height} onChange={(e) => setHeight(e.target.value)}></input><br/>

                <label className="labelItem">Weight</label><input placeholder={data.weight} onChange={(e) => setWeight(e.target.value)}></input><br/>

                <label className="labelItem">Gender</label>
                    <select id="genderId">
                    <option selected="selected" value="MALE">Male</option>
                    <option value="FEMALE">Female</option>
                    </select>

                    <label className="labelItem">Activity level</label>
                    <select onChange={(e) => setActivity(e.target.value)}>
                    <option value="1">None</option>
                    <option value="2">Light</option>
                    <option value="3">Normal</option>
                    <option value="4">Sporty</option>
                    <option value="5">Very Sporty</option>
                    </select>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export  default SettingsForm