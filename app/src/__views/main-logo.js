import React, { Component } from "react";
import logo from "../__images/sp-main-logo.png";

export default class MainLogo extends Component {
  render() {
    return (
      <div className="sp-main-logo">
        <img src={logo} alt="Logo" title="Profile Website" aria-label="Main Logo"/>
      </div>
    );
  }
}
