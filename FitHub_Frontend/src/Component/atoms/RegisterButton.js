import React from "react";
import {Link} from "react-router-dom";

const RegisterButton = () => {
    return(
        <Link to="/register">
            <button className="button" id="registerButton"><span>REGISTER</span></button>
        </Link>
    )
}

export default RegisterButton