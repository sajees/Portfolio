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
      selectedImg: '',
      selectedCategory: 'all'
    });
    this.handleClickData = this.handleClickData.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
    this.tabClickAll = this.tabClickAll.bind(this);
    this.tabClickWeb = this.tabClickWeb.bind(this);
    this.tabClickPrint = this.tabClickPrint.bind(this);
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
  tabClickAll(e) {
    e.preventDefault();
    this.setState({
      selectedCategory: 'all'
    });
  }
  tabClickWeb(e) {
    e.preventDefault();
    this.setState({
      selectedCategory: 'web'
    });
  }
  tabClickPrint(e) {
    e.preventDefault();
    this.setState({
      selectedCategory: 'print'
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
              <div className="sp-tabs">
                <button className={"sp-tab " + (this.state.selectedCategory === "all" ? "active" : "")} onClick={this.tabClickAll}>All</button>
                <button className={"sp-tab " + (this.state.selectedCategory === "web" ? "active" : "")} onClick={this.tabClickWeb}>Web</button>
                <button className={"sp-tab " + (this.state.selectedCategory === "print" ? "active" : "")} onClick={this.tabClickPrint}>Printing</button>
              </div>
              <div className={"sp-job-items-wrapper " + this.state.selectedCategory}>
                <JobItem
                  logo={PortfolioImg1}
                  title="1 MY Title"
                  desc="This is the dummy text description"
                  jobItemClickAction={this.handleClickData}
                  jobType="web"
                />
                
                <JobItem
                  cssClass="width2"
                  logo=""
                  title="2 5555555555"
                  desc="rrrrrrrrrrrrrrrrr"
                  jobItemClickAction={this.handleClickData}
                  jobType="print"
                />
                <JobItem
                  cssClass="width2 height2 "
                  title="3 My title"
                  desc="This is the dummy text description"
                  jobItemClickAction={this.handleClickData}
                />
                <JobItem
                  cssClass="height2 sajee "
                  title="4 My title"
                  desc="This is the dummy text description"
                  jobItemClickAction={this.handleClickData}
                  jobType="all"
                />
                <JobItem
                  cssClass="width1 height1 "
                  logo=""
                  title="5 My title"
                  desc="This is the dummy text description"
                  jobItemClickAction={this.handleClickData}
                  jobType="print"
                />
                <JobItem
                  cssClass="width2 height1 "
                  logo=""
                  title="6 My title"
                  desc="This is the dummy text description"
                  jobItemClickAction={this.handleClickData}
                  jobType="web"
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
