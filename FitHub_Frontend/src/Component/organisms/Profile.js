import Navbar from "../molecules/Navbar";
import UserData from "../atoms/UserData";

const Profile = () => {
    return(
        <div className="profile">
            <Navbar/>
            <UserData/>
        </div>
    )
}

export default Profile