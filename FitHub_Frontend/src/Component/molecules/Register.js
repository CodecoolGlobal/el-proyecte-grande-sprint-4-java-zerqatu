import {useState} from "react";
import UseFetch from "../atoms/UseFetch";
import Navbar from "./Navbar";
import Fetch from "../atoms/Fetch";

export default function RegisterForm() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const submit = e => {
        e.preventDefault();
        fetch('/registration', {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: {'Content-Type': 'application/json'},
        })
            .then(res => res.status >= 400 ? alert('Email already taken') : console.log("ok"))
    }

/*
let {fetchStatus, data} = UseFetch()
console.log(fetchStatus)
console.log(data)
 */



    // json https://makemeapassword.ligos.net/api/v1/passphrase/json?pc=1&wc=2&sp=y&maxCh=20
    // text https://makemeapassword.ligos.net/api/v1/passphrase/plain?pc=1&wc=2&sp=y&maxCh=20"


/*

    let fetchUrl = 'https://makemeapassword.ligos.net/api/v1/passphrase/plain?pc=1&wc=2&sp=y&maxCh=20'
    let fetchMethod = 'GET'
    //let fetchBody = id + ', ' + userName + ', ' + email + ', ' + password + ', 2010-02-02, ' + gender + ', ' + height + ', ' + weight + ', ' + activity
    let fetchBody = {}
    let fetchHeaders = 'plain/text'
    let fetchAlert = ''

    let passwordz = Fetch(fetchUrl, fetchMethod, fetchBody, fetchHeaders, fetchAlert)
    console.log("PASSWORDZ : " , passwordz)


    const [data, setData] = useState();

    console.log("DATA 1: " + data)
    fetch('https://makemeapassword.ligos.net/api/v1/passphrase/plain?pc=1&wc=2&sp=y&maxCh=20')
        .then(response => response.text())
        .then(data => setData(data));
    console.log("DATA 2: " + data)



 */


    return (

        <div id="content" className="p-4 p-md-5 pt-5">
            <h2 className="mb-4">Register</h2>
            <div>
                <form onSubmit={submit}>
                    <div className="grid-form-input grid-three-columns">
                        <label>Email</label>
                        <input
                            type="text"
                            name="user[email]"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}/>
                        <span></span>


                        <label>Password</label>
                        <input
                            type="text"
                            name="user[password]"
                            required
                            value={password}
                            pattern=".{8,}"
                            title="Minimum 8 characters"
                            onChange={(e) => setPassword(e.target.value)}/>
                        <button className="text-round-border"><i className="fa-solid fa-dice"></i>&nbsp;&nbsp;Generate</button>

                        <span></span>
                        <span></span>
                        <span></span>

                        <span></span>
                        <span><button type="submit" className="text-round-border">Submit</button></span>
                        <span></span>
                    </div>
                </form>
            </div>
        </div>
    )
}






