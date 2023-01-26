import FitHubLogoWhite from "../atoms/FitHubLogoWhite";
import NavbarLink from "../atoms/NavbarLink";


const Navbar = () => {
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
                    <h1><a href="http://fithub.cool" className="logo">
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
                    {NavbarLink("Logout", "/", "fa-right-from-bracket")}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar