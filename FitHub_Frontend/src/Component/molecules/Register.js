import {useState} from "react";

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

    return (
        <div id="content" className="p-4 p-md-5 pt-5">
            <h2 className="mb-4">Register</h2>
            <div>
                <form onSubmit={submit}>
                    <div className="grid-form-input">
                        <label>Email</label>
                        <input
                            type="text"
                            name="user[email]"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}/>
                        <label>Password</label>
                        <input
                            type="password"
                            name="user[password]"
                            required
                            value={password}
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






