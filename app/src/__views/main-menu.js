import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class MainMenu extends Component {
  constructor() {
    super();
    this.handleMenuClose = this.handleMenuClose.bind(this);
  }

  handleMenuClose() {
    this.props.handleForMenuToggle();
  }

  render() {
    
    return (
      <nav  className={"main-menu-wrapper "+ (this.props.isMenuOpen ? "main-menu-wrapper--opened":"main-menu-wrapper--closed")}>
        <div className="main-menu-wrapper-inner">
            <ul className="main-menu">
                <li className="main-menu__item main-menu__item--active"><Link to="/" onClick={this.handleMenuClose}>Home</Link></li>
                <li className="main-menu__item"><Link to="/profile" onClick={this.handleMenuClose}>Profile</Link></li>
                <li className="main-menu__item"><Link to="/resume" onClick={this.handleMenuClose}>Resume</Link></li>
                <li className="main-menu__item"><Link to="/services" onClick={this.handleMenuClose}>Services</Link></li>
                <li className="main-menu__item"><Link to="/portfolio" onClick={this.handleMenuClose}>Portfolio</Link></li>
                <li className="main-menu__item"><Link to="/contact" onClick={this.handleMenuClose}>Contact</Link></li>
            </ul>
        </div>
      </nav>
    );
  }
}