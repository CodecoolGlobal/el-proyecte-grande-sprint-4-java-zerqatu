import fithubLogo from "../../assets/images/fithub_logo_text_white.png";
import App from "../../App";
import logo from "../../logo.svg";
import React from "react";


const fitHubLogoWhite  = () => {
    return(
        <div className="fitHubLogo">
            <img src={fithubLogo} className={App-logo} alt="logo"/>
        </div>
    )
}

export default fitHubLogoWhite