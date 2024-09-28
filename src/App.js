import React, { useState } from "react";
import Login from "./component/Login"; // Adjust the path as necessary
import TodoList from "./component/TodoApp"; // Adjust the path as necessary
import './App.css'; // Include your CSS styles

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  const handleLogin = (user) => {
    setIsLoggedIn(true);
    setUsername(user);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <div>
          <h1>Welcome, {username}!</h1>
          <TodoList />
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
