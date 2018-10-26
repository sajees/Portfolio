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
            isMenuOpen: false,
            staticData: null
        }
        this.handleForMenuToggle = this.handleForMenuToggle.bind(this);
    }
    // componentDidMount() {
    //     fetch("/api/static-data")
    //     .then(response => response.json())
    //     .then(statData => this.setState({
    //       staticData: statData[0].HomePage[0].PageTitle
    //     }))
    //   }
    handleForMenuToggle() {
        this.setState(state => ({
            isMenuOpen: !state.isMenuOpen
        }));
    }
  render() {
    // console.log(this.state.staticData);
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