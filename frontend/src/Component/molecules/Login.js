import FitHubLogoBlack from "../atoms/FitHubLogoBlack";
import LoginButton from "../atoms/LoginButton";
import RegisterButton from "../atoms/RegisterButton";

const Login = () => {
    return(
        <div className="App">
            <FitHubLogoBlack></FitHubLogoBlack>
            <div className="centered">
                <LoginButton></LoginButton>
                <RegisterButton></RegisterButton>
            </div>
            <header className="App-header"></header>
        </div>
    )
}

export default Login