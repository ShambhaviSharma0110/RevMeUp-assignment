import React from "react";
import './App.css';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import Login from './Login/Login'
import Home from './Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
          <Route exact path="/" component={Login} />
          <Route path = "/home" component = {Home}/>
      </Router>
    </div>
  );
}

export default App;
