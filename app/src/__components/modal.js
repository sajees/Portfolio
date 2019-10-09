import React, { Component } from "react";
import DefaultPortfolioImg from "../__images/design-img.png";

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalClose: false
    };
    this.modalClose = this.modalClose.bind(this);
  }
  modalClose() {
    this.setState = {
      isModalClose: true
    };
    let modalComponent = document.querySelector('.sp-modal');
    modalComponent.classList.remove('modal-open');
    this.props.modalState();
    // this.props.closeAction();
  }
  render() {
    return (
      <div
        className={"sp-modal " + (this.props.cssClass ? this.props.cssClass : "")}>
        <div className="sp-modal-inner-wrapper">
          <div onClick={this.modalClose} className="sp-modal__close">
            <i className="fa fa-times"/>
          </div>
          <div className="sp-modal__inner">
            <div className="sp-modal__content">
              <img
                src={
                  this.props.modalImg
                    ? this.props.modalImg
                    : DefaultPortfolioImg
                }
                alt="Project"
              />
              <h6>{this.props.modalTitle}</h6>
              <p>{this.props.modalDesc}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
