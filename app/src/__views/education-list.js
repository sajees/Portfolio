import React, { Component } from "react";

export default class EducationList extends Component {
  constructor() {
    super();
    this.state = {
      eduError: null,
      eduIsLoaded: false,
      eduItems: []
    };
  }
  componentDidMount() {
    fetch("/api/education")
      .then(res => res.json())
      .then(
        results => {
          this.setState({
            eduIsLoaded: true,
            eduItems: results
          });
        },
        eduError => {
          this.setState({
            eduIsLoaded: true,
            eduError
          });
        }
      );
  }

  render() {
    const { eduError, eduIsLoaded, eduItems } = this.state;

    if (eduError) {
      return <div>eduError: {eduError.message}</div>;
    } else if (!eduIsLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="sp-emp-list">
          <ul>
            {eduItems.map(item => (
              <li key={item.id} className="sp-expe">
                <div className="sp-expe-inner">
                  <div className="sp-expe__comp-desc">
                    <div className="sp-expe__comp-slot">
                      <h6>{item.digree}</h6>
                      <span>{item.digree}</span>
                    </div>
                  </div>
                  <div className="sp-expe__position-desc">
                    <h5>{item.digree}</h5>
                    <p>
                      {item.digree}
                      <br />
                      {item.digree}
                    </p>
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
