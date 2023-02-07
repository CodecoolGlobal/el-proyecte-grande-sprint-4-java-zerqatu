import {useState} from "react";
//import {useForm} from "react";

export default function LoginForm() {
    //const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    let url = '/profile'

    const submit = e => {
        e.preventDefault();
        fetch('/user/login', {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: {'Content-Type': 'application/json'},
        })
            .then(res => res.status >= 400 ? alert('Email already taken') :
                fetch('/user/login', {
                    method: 'GET',
                    body: JSON.stringify({email, password}),
                    headers: {'Content-Type': 'application/json'},
                }))
            .then(res => res.status >= 400 ? alert('You need to make an Account') : window.location.href = url)

    }

    return (
        <div id="content" className="p-4 p-md-5 pt-5">
            <h2 className="mb-4">Login</h2>
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