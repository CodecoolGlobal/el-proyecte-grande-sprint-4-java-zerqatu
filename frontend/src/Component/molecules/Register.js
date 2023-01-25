import {useState} from "react";


const RegisterForm = () => {
    //let history = useHistory();
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const submit = e => {
        e.preventDefault()
        fetch('/registration',{
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: {'Content-Type': 'application/json' },
        })
            .then(res => res.json())

                //history.push()
    }

    return(
        <div className="centered">
            <form onSubmit={submit}>
                <label>Register</label><br/>
                <input
                    type="text"
                    name="user[email]"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/><br/>
                <input
                    type="text"
                    name="user[password]"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/><br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default RegisterForm






