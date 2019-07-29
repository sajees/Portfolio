import React, { Component } from "react";
import JobItem from "./__elements/portfolio-item";
import PortfolioImg1 from "../__images/sample-img.png";

export default class PortfolioPage extends Component {
  render() {
    
    return (
      <section className="sp-page-section">
        <div className="sp-page">
          <div className="sp-page__title">
            <h2>Portfolio</h2>
          </div>
          <div className="sp-page__content">
            <div className="sp-job-items-wrapper">
              <JobItem logo={PortfolioImg1} title="My title" desc="This is the dummy text description"/>
              <JobItem logo="" title="My title" desc="This is the dummy text description"/>
              <JobItem title="My title" desc="This is the dummy text description"/>
              <JobItem title="My title" desc="This is the dummy text description"/>
            </div>
          </div>
        </div>
      </section>
    );
  }
}