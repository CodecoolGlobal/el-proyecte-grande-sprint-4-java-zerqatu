import {Link} from "react-router-dom";
import {Fragment} from "react";
import FitHubLogo from "../atoms/FitHubLogoBlack";


const Navbar = () => {
    return(
    <div className="sideNav">
        <FitHubLogo></FitHubLogo>
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