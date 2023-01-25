import React from "react";
import {Link} from "react-router-dom";

const loginButton = () => {
    return(
        <Link to="/login">
            <button className="button" id="loginButton" ><span>LOGIN</span></button>
        </Link>
    )
}

export default loginButton