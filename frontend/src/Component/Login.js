import fithubLogo from "../images/fithub_logo_text.png";
import logo from "../logo.svg";
import App from "../App";

const Login = () => {
    return(
        <div className="App">
            <img src={fithubLogo} className={App-logo} alt="logo"/>
            <div className="centered">
                <button className="button" id="loginButton" ><span>LOGIN</span></button>
                <button className="button" id="registerButton" ><span>REGISTER</span></button>
            </div>
            <header className="App-header">

            </header>
        </div>
    )
}

export default Login