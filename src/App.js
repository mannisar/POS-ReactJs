import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Login from "./auth/Login"
import Home from "./controllers/Home"

function App() {
  return (
    <Router>
      <Route exact path="/api" component={Home} />
      <Route path="/login" component={Login} />
    </Router>
  );
}

export default App;