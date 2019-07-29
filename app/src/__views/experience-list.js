import React, { Component } from "react";

export default class ExperienceList extends Component {
  constructor() {
    super();
    this.state = {
      expError: null,
      expIsLoaded: false,
      expItems: []
    };
  }
  componentDidMount() {
    fetch("/api/experience")
      .then(res => res.json())
      .then(
        results => {
          this.setState({
            expIsLoaded: true,
            expItems: results
          });
        },
        expError => {
          this.setState({
            expIsLoaded: true,
            expError
          });
        }
      );
  }
  render() {
    const { expError, expIsLoaded, expItems } = this.state;

    function ExpProjectsSlot(props) {
      return (
        <div className="sp-expe__position-desc__projects">
          <label>Few main Projects</label>
          <div>{props.projects}</div>
        </div>
      );
    }

    if (expError) {
      return <div>expError: {expError.message}</div>;
    } else if (!expIsLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="sp-emp-list m-b-100">
          <ul>
            {expItems.map(item => (
              <li key={item.id} className="sp-expe">
                <div className="sp-expe-inner">
                  <div className="sp-expe__comp-desc">
                    <div className="sp-expe__comp-slot">
                      <h6>{item.company}</h6>
                      <span>{item.duration}</span>
                    </div>
                  </div>
                  <div className="sp-expe__position-desc">
                    <h5>{item.jobTitle}</h5>
                    <p>
                      {item.description}
                      <br />
                      {item.year}
                    </p>
                    {item.projects ? (
                      <ExpProjectsSlot projects={item.projects} />
                    ) : null}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }
}
