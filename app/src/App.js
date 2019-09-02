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
      staticData: null,
      isScrollTop: true,
    };
    this.handleForMenuToggle = this.handleForMenuToggle.bind(this);
  }
  handleForMenuToggle() {
    this.setState(state => ({
      isMenuOpen: !state.isMenuOpen
    }));
  }
  componentDidMount(){
      document.getElementById('pageWrapper').onscroll = ()=> {
        this.handleScroll();
      };
  }
  componentWillUnmount(){
    document.getElementById('pageWrapper').onscroll = ()=> {
      this.handleScroll();
    };
  }
  handleScroll() {
    const scrollPosition = document.getElementById('pageWrapper').scrollTop;
    if ( scrollPosition > 200 ) {
      this.setState(state => ({
        isScrollTop : false,
      }));
    } else {
      this.setState(state => ({
        isScrollTop : true,
      }));
    }

  }
  render() {
    return (
      <>
        <div className={"sp-sm-header-wrapper " + (this.state.isScrollTop ? '':'sp-header-wrapper--opened')}></div>
        <MainLogo 
          cssClass= {this.state.isScrollTop ? '':'sp-header-wrapper--opened'}
        />
        <MainMenuIcon
          isMenuOpen={this.state.isMenuOpen}
          cssClass= {this.state.isScrollTop ? '':'sp-header-wrapper--opened'}
          handleForMenuToggle={this.handleForMenuToggle}
        />
        <MainMenu
          isMenuOpen={this.state.isMenuOpen}
          handleForMenuToggle={this.handleForMenuToggle}
        />
        <PageContentHandler />
      </>
    );
  }
}
