import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ onFieldSearch }) => {
  const fontAW = {
    cursor: "pointer",
    color: "#fa7578",
    textShadow: "1px 1px 1px #ccc",
    padding: "10px 32px 10px 32px",
    textDecoration: "none",
    fontSize: "1.5em"
  };
  return (
    <Fragment>
      <div className="pos-f-t">
        <div className="collapse" id="navbarToggleExternalContent">
          <Link className="fa fa-cutlery" style={fontAW} to="/"></Link>
          <Link
            className="fa fa-file"
            style={fontAW}
            to="/api/order/history"
          ></Link>
          <span
            className="fa fa-plus"
            style={fontAW}
            data-toggle="modal"
            data-target="#modalinput"
          ></span>
          <span
            className="fa fa-pencil"
            style={fontAW}
            data-toggle="modal"
            data-target="#modaledit"
          ></span>
          <span
            className="fa fa-minus"
            style={fontAW}
            data-toggle="modal"
            data-target="#modaldelete"
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
          <span className="navbar-text" style={{ fontSize: 16, color: 'black' }}>

            Food Items
            </span>
          <form className="form-inline">
            <input
              className="form-control"
              style={{ border: "none" }}
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={onFieldSearch}
            />
          </form>
        </nav>
      </div>
    </Fragment>
  );
}

export default Navbar;
