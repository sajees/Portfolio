import React, { Component } from "react";
import EducationList from "./education-list";
import ExperienceList from "./experience-list";

export default class ResumePage extends Component {
  render() {
      return (
        <div>
          <section className="sp-page-section">
            <div className="sp-page">
              <div className="sp-page__title">
                <h2>Resume</h2>
              </div>
              <div className="sp-page__content">
                <div className="sp-page__sub-title txt-center">
                  <h2>Employment</h2>
                </div>
                <ExperienceList/>
                <div className="sp-page__sub-title txt-center">
                  <h2>Education</h2>
                </div>
                <EducationList />
              </div>
            </div>
          </section>
        </div>
      );
    }
}
