import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-secondary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              BMI CALCULATOR
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            ></div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
