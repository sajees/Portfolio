import React, { Component } from "react";

export default class Service extends Component {
    constructor(props) {
        super(props);
    }
  render() {
    return (
      <div 
        className={"service-slot "+ (this.props.cssClass ? this.props.cssClass :"")}
        id={(this.props.id)}
      >
        <i
          className={this.props.fontIconClass}
          aria-hidden="true"
        />
        <h3>{this.props.name}</h3>
        <p>{this.props.description}</p>
      </div>
    );
  }
}
