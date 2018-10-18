import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./home-page";
import ProfilePage from "./profile-page";
import ResumePage from "./resume-page";
import ServicesPage from "./services-page";
import PortfolioPage from "./portfolio-page";
import ContactPage from "./contact-page";

export default class PageContentHandler extends Component {
  render() {
    return (
      <div className="content">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/resume" component={ResumePage} />
          <Route path="/services" component={ServicesPage} />
          <Route path="/portfolio" component={PortfolioPage} />
          <Route path="/contact" component={ContactPage} />
        </Switch>
      </div>
    );
  }
}
