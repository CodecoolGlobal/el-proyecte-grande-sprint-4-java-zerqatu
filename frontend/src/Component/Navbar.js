import {Link} from "react-router-dom";
import fithubLogo from "../assets/images/fithub_logo_text.png";
import App from "../App";
import logo from "../logo.svg";

const Navbar = () => {
    return(
    <div className="sideNav">
        <div className="item">
            <img src={fithubLogo} className={App-logo} alt="logo"/>
        </div>
        <div className="item">
            <Link to="/profile">Overview</Link>
        </div>
        <div className="item">
            <Link to="/message">Messages</Link>
        </div>
        <div className="item">
            <Link to="/meals">Meals</Link>
        </div>
        <div className="item">
            <Link to="/workout">Workout</Link>
        </div>
        <div className="item item2">
            <Link to="/settings">Settings</Link>
        </div>
        <div className="item">
            <Link to="/">Logout</Link>
        </div>
    </div>
    )
}

export default Navbar