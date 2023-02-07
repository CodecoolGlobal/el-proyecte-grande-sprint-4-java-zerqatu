import useFetch from "react-fetch-hook";
import {useState} from "react";

export default function SettingsForm() {
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

        fetch('/user', {
            method: 'PUT',
            body: JSON.stringify({id, userName, email, password, dateOfBirth, gender, height, weight, activity}),
            headers: {'Content-Type': 'application/json'},
        })
            .then(res => res.status >= 400 ? console.log(res) : window.location.href = url)
    }

    return (
        <div id="content" className="p-4 p-md-5 pt-5">
            <h2 className="mb-4">Settings</h2>
            <div>
                <form onSubmit={submit}>

                    <div className="grid-form-input">
                        <label>Name</label>
                        <input placeholder={data.userName} onChange={(e) => setUserName(e.target.value)}></input>
                        <label>Date of birth</label>
                        <input placeholder={data.dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)}></input>
                        <label>Height (in cm)</label>
                        <input placeholder={data.height} onChange={(e) => setHeight(e.target.value)}></input>
                        <label>Weight (in kg)</label>
                        <input placeholder={data.weight} onChange={(e) => setWeight(e.target.value)}></input>
                        <label>Gender</label>
                        <select id="genderId">
                            <option selected="selected" value="MALE">male</option>
                            <option value="FEMALE">female</option>
                        </select>
                        <label>Activity level</label>
                        <select onChange={(e) => setActivity(e.target.value)}>
                            <option value="1">none</option>
                            <option value="2">light</option>
                            <option value="3">normal</option>
                            <option value="4">sporty</option>
                            <option value="5">very sporty</option>
                        </select>
                        <span></span>
                        <span></span>
                        <span></span>
                        <button type="submit" className="text-round-border">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}