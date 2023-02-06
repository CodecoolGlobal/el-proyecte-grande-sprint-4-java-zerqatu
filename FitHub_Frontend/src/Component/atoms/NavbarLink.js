import React from "react";
import Link from "react-router-dom";

export default function navbarLink(title, link, fa) {
    return (
        <li>
            <Link to={link}><i className={`fa-solid ${fa}`}></i><span className="mr-3"></span>{title}</Link>
        </li>
    )
}