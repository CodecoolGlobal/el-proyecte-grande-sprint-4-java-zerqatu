import {useState} from "react";

export default function LoginForm() {
let [email, setEmail] = useState();
    let [password, setPassword] = useState();
    let userData = JSON.stringify({email, password})

    console.log("userdata" + userData);

    const submit = e => {
        e.preventDefault();
        email = document.getElementById("formEmail").value;
        password = document.getElementById("formPassword").value;
        fetch('/login', {
            method: 'GET',
            headers: {'Content-Type': 'application/json', 'authenticate': userData},
        })
            .then(res => {
                if(res.status === 200) {
                    localStorage.setItem('authentication', userData);
                    window.location.href = "/profile";
                } else {
                    alert("Fuck you!");
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
                            onChange={(e) => setEmail(e.target.value)}/>
                        <label>Password</label>
                        <input
                            type="password"
                            name="user[password]"
                            required
                            value={password}
                            id="formPassword"
                            onChange={(e) => setPassword(e.target.value)}/>
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