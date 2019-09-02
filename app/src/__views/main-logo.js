import React, { Component } from "react";
import logo from "../__images/sp-main-logo.png";

export default class MainLogo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
      <div className={"sp-main-logo " + (this.props.cssClass ? this.props.cssClass : "")}>
        <img src={logo} alt="Logo" title="Profile Website" aria-label="Main Logo"/>
      </div>
      </>
    );
  }
}
