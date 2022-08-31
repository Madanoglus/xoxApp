import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-first">
          <div className="header-logo">
            <h1>xoxApp</h1>
          </div>
        </div>
        <div className="header-second">
          <div className="header-gameselect">
            <Link to="/SinglePlayer">
              <button className="header-select-button">SİNGLEPLAYER</button>
            </Link>
            <Link to="/MultiPlayer">
              <button className="header-select-button">MULTİPLAYER</button>
            </Link>
          </div>
          <div className="header-aboutus">
            <Link to="/AboutUs">
              <button className="header-aboutus-button">ABOUT APP</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
