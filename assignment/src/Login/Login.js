import React from "react";
import "./Login.css";
import {Link} from "react-router-dom";
export const Login = () => {
  return (
    <div className="wrapper">
      <h1>Welcome To RevMeUp!</h1>
      <p>Please fill in the following details to get started.</p>
      <br></br>
      <div className="username">
        <label>Username</label>
        <br></br>
        <input type="text" placeholder="Enter your username" />
      </div>
      <div className="pass">
        <label>Password</label>
        <br></br>
        <input type="password" placeholder="Enter your password" />
      </div>
      <Link to = "/home">
      <button className="myButton">Submit</button>
      </Link>
    </div>
  );
};
export default Login;
