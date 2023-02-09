import { useState } from "react";
import { Buffer } from "buffer"

export default function LoginForm() {
    let [email, setEmail] = useState();
    let [password, setPassword] = useState();

    const submit = e => {
        e.preventDefault();
        email = document.getElementById("formEmail").value;
        password = document.getElementById("formPassword").value;
        console.log(email + password);
        const headers = new Headers();
        const auth = Buffer.from(email + ":" + password).toString("base64");
        console.log(auth);
        headers.set("Authorization", "Basic " + auth)
        fetch('/login', {
            method: 'GET',
            headers: headers,
        })
            /*.then(res => res.text())
            .then(text => console.log(text))*/
            .then(res => {
                if(res.status === 200) {
                    localStorage.setItem('Authorization', "Basic " + auth);
                    console.log(localStorage.getItem('Authorization'));
                    alert("Successfully logged in!");
                    window.location.href = "/workouts";
                } else {
                    alert("Your login credentials are incorrect. Please try again!");
                }
            })
    }

    return (
        <div id="content" className="p-4 p-md-5 pt-5">
            <h2 className="mb-4">Login</h2>
            <div>
                <form onSubmit={submit}>
                    <div className="grid-form-input grid-two-columns">
                        <label>Email</label>
                        <input
                            type="text"
                            name="user[email]"
                            required
                            value={email}
                            id="formEmail"
                            onChange={(e) => setEmail(e.target.value)} />
                        <label>Password</label>
                        <input
                            type="password"
                            name="user[password]"
                            required
                            value={password}
                            id="formPassword"
                            onChange={(e) => setPassword(e.target.value)} />
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