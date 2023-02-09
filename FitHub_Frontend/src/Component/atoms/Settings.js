import useFetch from "react-fetch-hook";
import {useState} from "react";
import Fetch from "./Fetch";

export default function SettingsForm() {
    let [userName, setUserName] = useState();
    let [dateOfBirth, setDateOfBirth] = useState();
    let [height, setHeight] = useState();
    let [weight, setWeight] = useState();
    let [gender, setGender] = useState();
    let [activity, setActivity] = useState();

    const {isLoading, error, data} = useFetch("/user/1");
    if (isLoading) return "Loading...";
    if (error) return "Error loading data";

    const submit = e => {
        e.preventDefault();
        let id = data.id;
        let email = data.email;
        let password = data.password;
        userName = document.getElementById("formUserName").value;
        dateOfBirth = document.getElementById("formDateOfBirth").value;
        height = document.getElementById("formHeight").value;
        weight = document.getElementById("formWeight").value;
        gender = document.getElementById("formGender").value;
        activity = document.getElementById("formActivity").value;

        let redirectUrl = '/profile';
        let fetchUrl = '/user';
        let fetchMethod = 'PUT';
        let fetchBody = {id, userName, email, password, dateOfBirth, gender, height, weight, activity};
        let fetchHeaders = 'application/json';
        let fetchAlert = '';

        Fetch(fetchUrl, fetchMethod, fetchBody, fetchHeaders, fetchAlert, redirectUrl);
    }

    return (
        <div id="content" className="p-4 p-md-5 pt-5">
            <h2 className="mb-4">Settings</h2>
            <div>
                <form onSubmit={submit}>

                    <div className="grid-form-input grid-two-columns">
                        <label>Name</label>
                        <input defaultValue={data.userName} pattern=".{1,}" id="formUserName"
                               onChange={(e) => setUserName(e.target.value)}></input>
                        <label>Date of birth</label>
                        <input defaultValue={data.dateOfBirth} pattern="\d{4}-\d{2}-\d{2}" title="YYYY-MM-DD"
                               id="formDateOfBirth" onChange={(e) => setDateOfBirth(e.target.value)}></input>
                        <label>Height (in cm)</label>
                        <input defaultValue={data.height} pattern=".{2,}" title="Minimum 2 characters" id="formHeight"
                               onChange={(e) => setHeight(e.target.value)}></input>
                        <label>Weight (in kg)</label>
                        <input defaultValue={data.weight} pattern=".{2,}" title="Minimum 2 characters" id="formWeight"
                               onChange={(e) => setWeight(e.target.value)}></input>
                        <label>Gender</label>
                        <select id="formGender" onChange={(e) => setGender(e.target.value)}>
                            <option value="MALE">male</option>
                            <option value="FEMALE">female</option>
                        </select>
                        <label>Activity level</label>
                        <select id="formActivity" onChange={(e) => setActivity(e.target.value)}>
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