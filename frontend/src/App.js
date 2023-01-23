import './assets/style/App.css';
import './assets/style/Navbar.css';
import './assets/style/UserData.css';
import './assets/style/App.css';
import './assets/style/Navbar.css';
import {Route, Routes} from "react-router-dom";
import Profile from "./Component/molecules/Profile";
import Login from "./Component/molecules/Login";

function App() {
  return (
      <Routes>
          <Route path="/profile" element={<Profile />}>Profile</Route>
          <Route path="/" element={<Login/>}></Route>
      </Routes>
  );
}

export default App;
