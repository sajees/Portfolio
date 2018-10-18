import React, { Component } from "react";
import logo from "../__images/logo.svg";

export default class MainLogo extends Component {
  render() {
    return (
      <div className="sp-main-logo">
        <img src={logo}/>
      </div>
    );
  }
}
