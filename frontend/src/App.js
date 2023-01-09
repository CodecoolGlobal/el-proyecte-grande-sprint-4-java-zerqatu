import logo from './logo.svg';
import fithubLogo from '../src/images/fithub_logo_text.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={fithubLogo} className={App-logo} alt="logo"/>
      <div className="centered">
        <button className="button" id="loginButton" ><span>LOGIN</span></button>
        <button className="button" id="registerButton" ><span>REGISTER</span></button>
      </div>
        <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>*/}


      </header>
    </div>
  );
}

let handleClick = async event =>{
  let response = await fetch('users',{
    headers:{
      "Content-Type": "application/json",
    },
    method: "get",
  })
  let users = await response.json()
  createUser(users, event.target)
}

let createUser = function (users, button){
  let nameButton = document.getElementById("clickButton")
  users.forEach(user =>{
    let userItem = document.createElement("h2")
    userItem.innerText = user.name
    console.log(users)
    console.log(user)
    console.log(user.innerText)
    nameButton.appendChild(userItem)
  })
}



export default App;
