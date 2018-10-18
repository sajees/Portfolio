import React, { Component } from "react";
import MainLogo from "./__views/main-logo";
import MainMenuIcon from "./__views/main-menu-icon";
import MainMenu from "./__views/main-menu";
import PageContentHandler from "./__views/page-content-handler";
import "./__sass/app.scss";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuOpen: false
        }
        this.handleForMenuToggle = this.handleForMenuToggle.bind(this);
    }
    handleForMenuToggle() {
        this.setState(state => ({
            isMenuOpen: !state.isMenuOpen
        }));
    }
  render() {
    return (
      <>
        <MainLogo/>
        <MainMenuIcon isMenuOpen={this.state.isMenuOpen} handleForMenuToggle={this.handleForMenuToggle}/>
        <MainMenu isMenuOpen={this.state.isMenuOpen} handleForMenuToggle={this.handleForMenuToggle}/>
        <PageContentHandler/>
      </>
    );
  }
}