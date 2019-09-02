import React, { Component } from "react";
var classNames = require("classnames");

export default class MainMenuIcon extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.handleForMenuToggle();
  }
  render() {
    let menuIconClass = classNames({
      "menu-icon": true,
      open: this.props.isMenuOpen
    });
    return (
      <button aria-label="Open/Close main menu" title="Menu Icon" className={"sp-main-menu-icon " + (this.props.cssClass ? this.props.cssClass : "")} onClick={this.handleClick}>
        <div className={menuIconClass}>
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </button>
    );
  }
}
