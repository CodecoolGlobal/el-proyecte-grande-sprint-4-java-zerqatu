import './assets/style/App.css';
import './assets/style/Navbar.css';
import './assets/style/UserData.css';
import './assets/style/App.css';
import './assets/style/Navbar.css';
import {Route, Routes} from "react-router-dom";
import Profile from "./Component/organisms/Profile";
import Login from "./Component/molecules/Login";
import Register from "./Component/molecules/Register";

function App() {
  return (
      <Routes>
          <Route path="/profile" element={<Profile />}>Profile</Route>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
      </Routes>
  );
}

export default App;
