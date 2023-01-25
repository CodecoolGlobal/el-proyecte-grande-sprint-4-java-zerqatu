import {useState} from "react";

const LoginForm = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const submit = e => {
        e.preventDefault();
        fetch('/user/login', {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: {'Content-Type': 'application/json'},
        })
            .then(res => res.status >= 400 ? alert('Email already taken') : console.log("ok"))
            .then(res => res.json())
    }

    return(
        <div className="centered">
            <form onSubmit={submit}>
                <label className="label">Login</label><br/>
                <input
                    className="inputLogin"
                    type="text"
                    name="user[email]"
                    placeholder="Enter email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/><br/>
                <input
                    className="inputLogin"
                    type="text"
                    name="user[password]"
                    placeholder="Enter password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/><br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default LoginForm