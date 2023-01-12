import './assets/style/App.css';
import './assets/style/Navbar.css';
import './assets/style/User.css'
import {Route, Routes} from "react-router-dom";
import Profile from "./Component/Profile";
import Login from "./Component/Login";

function App() {
  return (
      <Routes>
          <Route path="/profile" element={<Profile />}>Profile</Route>
          <Route path="/" element={<Login/>}></Route>
      </Routes>
  );
}

export default App;
