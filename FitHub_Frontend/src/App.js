import './assets/style/style.css';
import {Route, Routes} from "react-router-dom";
import ProfilePage from "./Component/pages/ProfilePage";
import Landing from "./Component/molecules/Landing";
import WorkoutsPage from "./Component/pages/WorkoutsPage";
import LoginPage from "./Component/pages/LoginPage";
import Template from "./Component/templates/Template";
import RegisterPage from "./Component/pages/RegisterPage";
import SettingsPage from "./Component/pages/SettingsPage";
import NotFound from "./Component/pages/NotFound";

function App() {
    return (
        <Routes>
            <Route path="/" element={Template(Landing())}></Route>
            <Route path="/profile" element={Template(ProfilePage())}></Route>
            {/*Notifications*/}
            <Route path="/workouts" element={Template(WorkoutsPage())}></Route>
            {/*Meals*/}
            <Route path="/settings" element={Template(SettingsPage())}></Route>
            {/*Logout*/}
            <Route path="/login" element={Template(LoginPage())}></Route>
            <Route path="/register" element={Template(RegisterPage())}></Route>
            <Route path="/*" element={Template(NotFound())}></Route>

        </Routes>
    );
}

export default App;
