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
            .then(res => res.status >= 400 ? alert('Email already taken') : window.location.href = "/login")
    }

    const generatePassword = e => {
        e.preventDefault();
        fetch('https://makemeapassword.ligos.net/api/v1/passphrase/plain?pc=1&wc=2&sp=y&maxCh=20')
            .then(data => data.text())
            .then(text =>
            {document.getElementById("formPassword").value = text;
            setPassword(document.getElementById("formPassword").value)})
    }

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
                            onChange={(e) => setEmail(e.target.value)}/>
                        <span></span>
                        <label>Password</label>
                        <input
                            type="text"
                            name="user[password]"
                            required
                            pattern=".{8,}"
                            title="Minimum 8 characters"
                            id="formPassword"
                            onChange={(e) => setPassword(e.target.value)}/>
                        <button className="text-round-border" type="button" onClick={generatePassword}><i
                            className="fa-solid fa-dice"></i>&nbsp;&nbsp;Generate
                        </button>
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






