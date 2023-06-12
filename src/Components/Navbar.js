import React from "react";
import propTypes from "prop-types";

export default function Navbar(props) {
  const toggler = () => {};
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}
      >
        <a className="navbar-brand" href="/">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" href="/">
              {props.title} <span className="sr-only">(current)</span>
            </a>
            <a className="nav-link" href="/">
              {props.Features}
            </a>
            <a className="nav-link" href="/">
              {props.Pricing}
            </a>
          </div>
        </div>

        <div
          className={`custom-control custom-switch text-${
            props.mode === "light" || "dark" ? "green" : "light"
          }`}
        >
          <input
            type="checkbox"
            className="custom-control-input "
            id="customSwitch1"
            onClick={props.greentoggler}
          />
          <label className="custom-control-label " htmlFor="customSwitch1">
            Green Mode
          </label>
        </div>

        <div
          className={`custom-control custom-switch text-${
            props.mode === "light" || "green" ? "dark" : "light"
          }`}
        >
          <input
            type="checkbox"
            className="custom-control-input "
            id="customSwitch2"
            onClick={props.toggler}
          />
          <label className="custom-control-label " htmlFor="customSwitch2">
            Dark Mode
          </label>
        </div>
      </nav>
    </>
  );
}
Navbar.propTypes = { title: propTypes.string };
Navbar.defaultProps = { title: "title" };
