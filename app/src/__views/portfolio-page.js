import React, { Component } from "react";
import JobItem from "./__elements/portfolio-item";
import PortfolioImg1 from "../__images/sample-img.png";
import Modal from "../__components/modal";

export default class PortfolioPage extends Component {
  constructor(props){
    super(props);
    this.state = ({
      isModalOpen: false,
      selectedTitle: '',
      selectedDesc: '',
      selectedImg: ''
    });
    this.handleClickData = this.handleClickData.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
  }
  handleClickData(data) {
    this.setState({
      isModalOpen: true,
      selectedTitle: data.modalTitle,
      selectedDesc: data.modalDesc,
      selectedImg: data.modalImg
    });
  }
  handleModalClose() {
    this.setState({
      isModalOpen: false
    });
  }
  render() {
    return (
      <>
        <section className="sp-page-section">
          <div className="sp-page">
            <div className="sp-page__title">
              <h2>Portfolio</h2>
            </div>
            <div className="sp-page__content">
              <div className="sp-job-items-wrapper">
                <JobItem
                  logo={PortfolioImg1}
                  title="MY Title"
                  desc="This is the dummy text description"
                  jobItemClickAction={this.handleClickData}
                />
                <JobItem
                  logo=""
                  title="my title 2"
                  desc="LOrem ipsum"
                  jobItemClickAction={this.handleClickData}
                />
                <JobItem
                  title="My title"
                  desc="This is the dummy text description"
                  jobItemClickAction={this.handleClickData}
                />
                <JobItem
                  cssClass="height2 sajee"
                  title="My title"
                  desc="This is the dummy text description"
                  jobItemClickAction={this.handleClickData}
                />
                <JobItem
                  cssClass="width2 height2"
                  logo=""
                  title="My title"
                  desc="This is the dummy text description"
                  jobItemClickAction={this.handleClickData}
                />
                <JobItem
                  cssClass="width3 height2"
                  logo=""
                  title="My title"
                  desc="This is the dummy text description"
                  jobItemClickAction={this.handleClickData}
                />
              </div>
            </div>
          </div>
        </section>
        <Modal
          cssClass={" " + (this.state.isModalOpen ? "modal-open" : "")}
          modalImg={this.state.selectedImg}
          modalTitle={this.state.selectedTitle}
          modalDesc={this.state.selectedDesc}
          modalState={this.handleModalClose}
        />
      </>
    );
  }
}
