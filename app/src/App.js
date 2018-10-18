import React, { Component } from "react";
import MainLogo from "./__views/main-logo";
import MainMenuIcon from "./__views/main-menu-icon";
import MainMenu from "./__views/main-menu";
import "./__sass/app.scss";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuOpen: false
        }
        this.clickHandleForMenuOpen = this.clickHandleForMenuOpen.bind(this);
    }
    clickHandleForMenuOpen() {
        console.log('opend');
        this.setState(state => ({
            isMenuOpen: !state.isMenuOpen
        }));
    }
  render() {
    return (
      <>
        <MainLogo/>
        <MainMenuIcon clickHandleForMenuOpen={this.clickHandleForMenuOpen}/>
        <MainMenu isMenuOpen={this.state.isMenuOpen}/>
      </>
    );
  }
}