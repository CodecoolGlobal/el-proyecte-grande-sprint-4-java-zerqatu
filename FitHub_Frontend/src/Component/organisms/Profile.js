import Navbar from "../molecules/Navbar";
import UserData from "../atoms/UserData";

const Profile = () => {
    return(
        <div className="wrapper d-flex align-items-stretch">
            <Navbar/>
            <UserData/>
        </div>
    )
}

export default Profile