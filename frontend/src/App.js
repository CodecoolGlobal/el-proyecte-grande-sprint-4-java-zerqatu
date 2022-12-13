import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        </a>
        <button id="clickButton" onClick={handleClick}>Click me!</button>
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
