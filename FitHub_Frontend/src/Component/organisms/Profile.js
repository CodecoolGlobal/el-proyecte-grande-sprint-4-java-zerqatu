import Navbar from "../molecules/Navbar";
import UserData from "../atoms/UserData";

export default function Profile() {

    return (
        <div className="wrapper d-flex align-items-stretch">
            <Navbar/>
            <UserData/>
        </div>
    )
}