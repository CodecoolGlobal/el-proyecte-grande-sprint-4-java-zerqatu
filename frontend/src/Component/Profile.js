import Navbar from "./Navbar";
import UserStats from "./UserStats";

const Profile = () => {
    return(
        <div className="profile">
            <Navbar/>
            <UserStats/>
            <UserData/>
        </div>
    )
}

export default Profile