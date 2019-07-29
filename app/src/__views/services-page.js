import React, { Component } from "react";
import Service from "./__elements/service";

export default class ServicesPage extends Component {
  render() {
    return (
      <section className="sp-page-section">
        <div className="sp-page">
          <div className="sp-page__title">
            <h2>Services</h2>
          </div>
          <div className="sp-page__content">
            <div className="sp-services-wrapper">
              <Service
                cssClass="dfdf sajee"
                fontIconClass="fa fa-phone-square"
                name="Graphic Designing"
                description="Lorem ipsum is the dummy text of the industry since 1992"
              />
              <Service
                fontIconClass="fa fa-calendar"
                name="Graphic Designingddddd"
                description="Lorem ipsum is the dummy text of the industry since 1992s"
              />
              <Service
                cssClass="dfdf sajee"
                fontIconClass="fa fa-phone-square"
                name="Graphic Designing"
                description="Lorem ipsum is the dummy text of the industry since 1992"
              />
              <Service
                fontIconClass="fa fa-calendar"
                name="Graphic Designingddddd"
                description="Lorem ipsum is the dummy text of the industry since 1992s"
              />
              <Service
                fontIconClass="fa fa-calendar"
                name="Graphic Designingddddd"
                description="Lorem ipsum is the dummy text of the industry since 1992s"
              />
              <Service
                fontIconClass="fa fa-calendar"
                name="Graphic Designingddddd"
                description="Lorem ipsum is the dummy text of the industry since 1992s"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
