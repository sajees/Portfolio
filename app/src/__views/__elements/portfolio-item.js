import React, { Component } from "react";
import DefaultPortfolioImg from "../../__images/design-img.png";

export default class JobItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="sp-job">
        <div className="sp-job__inner">
          <img
            className="sp-job__img"
            src={this.props.logo ? this.props.logo : DefaultPortfolioImg}
            alt="Image of the project"
          />
          <div className="sp-job__hover-wrapper">
            <div className="sp-job__hover-wrapper__inner">
              <h6 className="sp-job__title">{this.props.title}</h6>
              <p className="sp-job__desc">{this.props.desc}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
