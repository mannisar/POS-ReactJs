import React, { Component } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";

class Navbar extends Component {
  render() {
    const fontAW = {
      cursor: "pointer",
      color: "#fa7578",
      textShadow: "1px 1px 1px #ccc",
      padding: "10px 32px 10px 32px",
      textDecoration: "none",
      fontSize: "1.5em"
    };
    return (
      <React.Fragment>
        <div className="pos-f-t">
          <div className="collapse" id="navbarToggleExternalContent">
            <Link className="fa fa-cutlery" style={fontAW} to="/api"></Link>
            <Link
              className="fa fa-file"
              style={fontAW}
              to="/api/order/history"
            ></Link>
            <span
              className="fa fa-minus"
              style={fontAW}
              data-toggle="modal"
              data-target="#exampleModal"
            ></span>
          </div>
          <nav className="navbar navbar-light bg-white">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarToggleExternalContent"
              aria-controls="navbarToggleExternalContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <Link className="navbar-brand" to="/api">
              Food Items
            </Link>
            <form className="form-inline">
              <input
                className="form-control"
                style={{ border: "none" }}
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </nav>
        </div>
        <Modal />
      </React.Fragment>
    );
  }
}

export default Navbar;
