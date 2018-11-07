import React, { Component } from "react";

export default class ProfilePage extends Component {
  render() {
    return (
      <section className="sp-page-section">
        <div className="sp-page sp-profile-page">
          <div className="sp-page__title">
            <h2>Profile</h2>
          </div>
          <div className="sp-page__content">
            <div className="sp-profile-section">
              <div className="sp-profile-left" />
              <div className="sp-profile-right">
                <h3>Lorem Ipsum is the Dummy Text</h3>
                <h6>UI Engineer</h6>
                <p>
                  Versatile UI Engineer with 6+ years of experience implementing
                  and managing complex User Interfaces for cross browser and
                  cross platform. Specializes in Pixel perfect UI implementation
                  with Responsiveness.
                </p>
                <div className="sp-profile__contacts">
                  <div className="sp-profile__contacts__item">
                    <i
                      id="contactPhone"
                      className="fa fa-bluetooth"
                      aria-hidden="true"
                    />
                    <label htmlFor="contactPhone">
                      <a href="tel:+779201456">+94 77 920 14 56</a>
                    </label>
                  </div>
                  <div className="sp-profile__contacts__item">
                    <i
                      id="contactPhone"
                      className="fa fa-bluetooth"
                      aria-hidden="true"
                    />
                    <label htmlFor="contactPhone">
                      February 28, 1987
                    </label>
                  </div>
                  <div className="sp-profile__contacts__item">
                    <i
                      id="contactPhone"
                      className="fa fa-bluetooth"
                      aria-hidden="true"
                    />
                    <label htmlFor="contactPhone">
                      Henegama, Pokunuwita, Sri Lanka.
                    </label>
                  </div>
                  <div className="sp-profile__contacts__item">
                    <i
                      id="contactPhone"
                      className="fa fa-bluetooth"
                      aria-hidden="true"
                    />
                    <label htmlFor="contactPhone">
                      <a target="_blank" href="https://www.linkedin.com/in/sajee-subasinghe">www.linkedin.com/in/sajee-subasinghe</a>
                    </label>
                  </div>
                  <div className="sp-profile__contacts__item">
                    <i
                      id="contactPhone"
                      className="fa fa-bluetooth"
                      aria-hidden="true"
                    />
                    <label htmlFor="contactPhone">
                      <a href="mailto:sajeeushan@gmail.com">sajeeushan@gmail.com</a>
                    </label>
                  </div>
                  <div className="sp-profile__contacts__item">
                    <i
                      id="contactPhone"
                      className="fa fa-bluetooth"
                      aria-hidden="true"
                    />
                    <label htmlFor="contactPhone">
                      <a target="_blank" href="https://www.sajeedesigns.com">www.sajeedesigns.com</a>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
