import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ onFieldSearch, onSort }) => {
  const fontAW = {
    cursor: "pointer",
    color: "#fa7578",
    textShadow: "1px 1px 1px #ccc",
    padding: "10px 32px 10px 32px",
    textDecoration: "none",
    fontSize: "1.5em"
  };

  const titleAW = {
    display: "inline-grid",
    marginLeft: "25px",
    marginBottom: "10px",
    fontSize: "unset",
    textAlign: "center"
  }
  return (
    <Fragment>
      <div className="pos-f-t">
        <div className="collapse" id="navbarToggleExternalContent">
          <span style={titleAW}><Link className="fa fa-home" style={fontAW} to="/api" />HOME</span>
          {/* <span style={titleAW}><Link className="fa fa-cutlery" style={fontAW} to="/api/product" />PRODUCT</span>
          <span style={titleAW}><Link className="fa fa-tags" style={fontAW} to="#" />CATEGORY</span>
          <span style={titleAW}><Link className="fa fa-bar-chart" style={fontAW} to="#" />HISTROY</span>
          <span style={titleAW}><Link className="fa fa-sign-out" style={fontAW} to="#" />LOGOUT</span> */}
          <span
            style={titleAW}
            data-toggle="modal"
            data-target="#modalinput"
          ><Link className="fa fa-plus"
            style={fontAW} to="#" />ADD PRODUCT</span>
          <span
            style={titleAW}
            data-toggle="modal"
            data-target="#modaledit"
          ><Link className="fa fa-pencil-square-o"
            style={fontAW} to="#" />EDIT PRODUCT</span>
          <span
            style={titleAW}
            data-toggle="modal"
            data-target="#modaldelete"
          ><Link className="fa fa-trash-o"
            style={fontAW} to="#" />DELETE PRODUCT</span>
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
            CASHIERUN V1.3
            </span>
          <form className="form-inline">
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                SORT
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                <button className="dropdown-item" type="button" onClick={onSort} value={'price'}>LOW PRICE</button>
                <button className="dropdown-item" type="button" onClick={onSort} value={'date_updated'}>NEW MENU</button>
              </div>
            </div>
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
    </Fragment >
  );
}

export default Navbar;
