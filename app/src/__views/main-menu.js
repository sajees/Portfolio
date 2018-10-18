import React, { Component } from "react";

export default class MainMenu extends Component {
  render() {
    
    return (
      <div  className={"main-menu-wrapper "+ (this.props.isMenuOpen ? "main-menu-wrapper--opened":"main-menu-wrapper--closed")}>
        <div className="main-menu-wrapper-inner">
            <ul className="main-menu">
                <li className="main-menu__item main-menu__item--active"><a href="./">Home</a></li>
                <li className="main-menu__item main-menu__item--active"><a href="./">Profile</a></li>
                <li className="main-menu__item main-menu__item--active"><a href="./">Resume</a></li>
                <li className="main-menu__item main-menu__item--active"><a href="./">Services</a></li>
                <li className="main-menu__item main-menu__item--active"><a href="./">Portfolio</a></li>
                <li className="main-menu__item main-menu__item--active"><a href="./">Contact</a></li>
            </ul>
        </div>
      </div>
    );
  }
}