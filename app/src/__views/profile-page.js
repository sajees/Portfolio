import React, { Component } from "react";
import Button from "../__components/button";

export default class ProfilePage extends Component {
  constructor() {
    super();
    this.myButtonClick = this.myButtonClick.bind(this);
  }
  myButtonClick() {
    alert("clicked");
  }
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
              <div className="sp-profile-right sp-profile-info">
                <h3>Lorem Ipsum Dummy</h3>
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
                      className="fa fa-phone-square"
                      aria-hidden="true"
                    />
                    <label htmlFor="contactPhone">
                      <a href="tel:+779201456">+94 77 920 14 56</a>
                    </label>
                  </div>
                  <div className="sp-profile__contacts__item">
                    <i
                      id="contactBirth"
                      className="fa fa-calendar"
                      aria-hidden="true"
                    />
                    <label htmlFor="contactBirth">February 28, 1987</label>
                  </div>
                  <div className="sp-profile__contacts__item">
                    <i
                      id="contactAdd"
                      className="fa fa-home"
                      aria-hidden="true"
                    />
                    <label htmlFor="contactAdd">
                      Henegama, Pokunuwita, Sri Lanka.
                    </label>
                  </div>
                  <div className="sp-profile__contacts__item">
                    <i
                      id="contactLinked"
                      className="fa fa-linkedin-square"
                      aria-hidden="true"
                    />
                    <label htmlFor="contactLinked">
                      <a
                        target="_blank"
                        href="https://www.linkedin.com/in/sajee-subasinghe"
                        rel="noopener noreferrer"
                      >
                        www.linkedin.com/in/sajee-subasinghe
                      </a>
                    </label>
                  </div>
                  <div className="sp-profile__contacts__item">
                    <i
                      id="contactEmail"
                      className="fa fa-envelope"
                      aria-hidden="true"
                    />
                    <label htmlFor="contactEmail">
                      <a href="mailto:sajeeushan@gmail.com">
                        sajeeushan@gmail.com
                      </a>
                    </label>
                  </div>
                  <div className="sp-profile__contacts__item">
                    <i
                      id="contactWeb"
                      className="fa fa-link"
                      aria-hidden="true"
                    />
                    <label htmlFor="contactWeb">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.sajeedesigns.com"
                      >
                        www.sajeedesigns.com
                      </a>
                    </label>
                  </div>
                </div>
                <div className="sp-profile__buttons">
                  <Button
                    btnLabel="Download My CV"
                    btnTitle="Download My CV"
                    btnType=""
                    fontIcon="fa-download"
                  />
                  <Button
                    btnLabel="Hire Me Now"
                    btnTitle="Hire Me Now"
                    btnType=""
                    fontIcon="fa-hand-o-right"
                  />
                </div>
                </div>
            </div>
            <div className="sp-profile-hobbies">
                  <div className="sp-profile-hobby">
                    <div className="sp-profile-hobby__inner">
                      <i className="fa fa-music" />
                      <h5>Music</h5>
                    </div>
                  </div>
                  <div className="sp-profile-hobby">
                    <div className="sp-profile-hobby__inner">
                      <i className="fa fa-gamepad" />
                      <h5>Games</h5>
                    </div>
                  </div>
                  <div className="sp-profile-hobby">
                    <div className="sp-profile-hobby__inner">
                      <i className="fa fa-globe" />
                      <h5>Cricket</h5>
                    </div>
                  </div>
                  <div className="sp-profile-hobby">
                    <div className="sp-profile-hobby__inner">
                      <i className="fa fa-plane" />
                      <h5>Travelling</h5>
                    </div>
                  </div>
                  <div className="sp-profile-hobby">
                    <div className="sp-profile-hobby__inner">
                      <i className="fa fa-glass" />
                      <h5>Party</h5>
                    </div>
                  </div>
                </div>
              
          </div>
        </div>
      </section>
    );
  }
}
