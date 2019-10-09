import React, { Component } from "react";

export default class ContactPage extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      name: '',
      email: '',
      message: '',
      formSubmitted: false
    });
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleNameChange(e) {
    this.setState({name: e.target.value});
  }
  handleEmailChange(e) {
    this.setState({email: e.target.value});
  }
  handleMessageChange(e) {
    this.setState({message: e.target.value});
  }
  handleSubmit(e) {
    e.preventDefault();

    fetch('/api/send-email', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        name: this.state.name,
        message: this.state.message
      }),
    });
    this.setState({formSubmitted: true});
  }
  render() {
    return (
      <section className="sp-page-section">
        <div className="sp-page">
          <div className="sp-page__title">
            <h2>Contact</h2>
          </div>
          <div className="sp-page__content">
            <div className="sp-general-info">
              <div className="sp-general-info__item">
                <i className="fa fa-phone-square"></i>
                <h6>Phone</h6>
                <span>+94 77 920 1456</span>
              </div>
              <div className="sp-general-info__item">
                <i className="fa fa-envelope-open"></i>
                <h6>Email</h6>
                <span>sajeeushan@gmail.com</span>
              </div>
              <div className="sp-general-info__item">
                <i className="fa fa-map"></i>
                <h6>Address</h6>
                <span>Pokunuwita, Horana, Sri Lanka.</span>
              </div>
            </div>
            <div className="sp-page__sub-title txt-center"><h2>Let's get Started!</h2></div>
            <div className="sp-contact-form-wrapper">
              <div className={"sp-contact-form " + (this.state.formSubmitted===true ? 'sp-hide':'')}>
                <form onSubmit={this.handleSubmit}>
                  <input type="text" placeholder="Name" required value={this.state.name} onChange={this.handleNameChange} />
                  <input type="email" placeholder="Email" required value={this.state.email} onChange={this.handleEmailChange} />
                  <textarea placeholder="Message" required value={this.state.message} onChange={this.handleMessageChange} ></textarea>
                  <input type="submit" value="Submit"/>
                </form>
              </div>
              <div className={"sp-contact-form-messager " + (this.state.formSubmitted===true ? '':'sp-hide')}>
                <i className="fa fa-check-circle" aria-hidden="true"></i> Form data is submitted Successfully
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
