import './assets/style/Sidebar.css';
import './assets/style/App.css';
import Route from "react-router-dom";
import Routes from "react-router-dom";
import Profile from "./Component/organisms/Profile";
import Landing from "./Component/molecules/Landing";
import Register from "./Component/molecules/Register";
import Login from "./Component/molecules/Login";
import Workouts from "./Component/organisms/Workouts";
import SettingsModal from "./Component/atoms/SettingsPage";

function App() {
  return (
      <Routes>
          <Route path="/profile" element={<Profile />}>Profile</Route>
          <Route path="/" element={<Landing/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/workouts" element={<Workouts/>}></Route>
          <Route path="settings" element={<SettingsModal/>}></Route>
      </Routes>
  );
}

export default App;
