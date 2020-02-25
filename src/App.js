import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Product from "./controllers/Product";
import Cart from "./components/Cart";

function App() {
  return (
    <Router>
      <div className="row">
        <div className="col-md-9" id="col_posts">
          <Navbar />
          <Route exact path="/api" component={Product} />
        </div>
        <div className="col-md-3" id="col_posts">
          <Cart />
        </div>
      </div>
    </Router>
  );
}

export default App;