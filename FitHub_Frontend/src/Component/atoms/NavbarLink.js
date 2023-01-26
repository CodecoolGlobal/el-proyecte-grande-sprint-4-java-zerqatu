import React from "react";
import {Link} from "react-router-dom";

const navbarLink = (title, link, fa) => {
    return(
        <li>
            <Link to={link}><i className={`fa-solid ${fa}`}></i><span className="mr-3"></span>{title}</Link>
        </li>
    )
}

export default navbarLink