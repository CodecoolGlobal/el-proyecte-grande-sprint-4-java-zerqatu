import FitHubLogoWhite from "../atoms/FitHubLogoWhite";
import NavbarLink from "../atoms/NavbarLink";
import {Link} from "react-router-dom";
import React from "react";

export default function Navbar() {
    console.log(localStorage.getItem('Authorization'))
    let loggedIn = localStorage.getItem('Authorization')
    console.log("logged in", loggedIn)

    function logout() {
        window.location.href = "/";
        localStorage.removeItem('Authorization');
    }

    if (loggedIn === null) {
        return (
            <nav id="sidebar" className="">
                <div className="custom-menu">
                    <button type="button" id="sidebarCollapse" className="btn btn-primary">
                        <i className="fa fa-bars"></i>
                        <span className="sr-only">Toggle Menu</span>
                    </button>
                </div>
                <div className="p-4">
                    <div className="logo-div">
                        <h1><a href="/" className="logo">
                            <span>{FitHubLogoWhite()}</span>
                            FitHub <span>Your Fitness Tracker</span></a></h1>
                    </div>
                    <ul className="list-unstyled components mb-5">
                        {NavbarLink("Home", "/", "fa-house")}
                        {NavbarLink("Login", "/login", "fa-right-to-bracket")}
                        {NavbarLink("Register", "/register", "fa-user-plus")}
                    </ul>
                </div>
            </nav>
        )
    } else {
        return (
            <nav id="sidebar" className="">
                <div className="custom-menu">
                    <button type="button" id="sidebarCollapse" className="btn btn-primary">
                        <i className="fa fa-bars"></i>
                        <span className="sr-only">Toggle Menu</span>
                    </button>
                </div>
                <div className="p-4">
                    <div className="logo-div">
                        <h1><a href="/" className="logo">
                            <span>{FitHubLogoWhite()}</span>
                            FitHub <span>Your Fitness Tracker</span></a></h1>
                    </div>
                    <ul className="list-unstyled components mb-5">
                        {NavbarLink("Home", "/", "fa-house")}
                        {NavbarLink("Profile", "/profile", "fa-user")}
                        {NavbarLink("Notifications", "/notifications", "fa-envelope")}
                        {NavbarLink("Workouts", "/workouts", "fa-dumbbell")}
                        {NavbarLink("Meals", "/meals", "fa-apple-whole")}
                        {NavbarLink("Settings", "/settings", "fa-gear")}
                        <li>
                            <Link to="#" onClick={logout}><i className="fa-solid fa-right-from-bracket"></i><span
                                className="mr-3"></span>Logout</Link>
                        </li>

                    </ul>
                </div>
            </nav>
        )
    }
}