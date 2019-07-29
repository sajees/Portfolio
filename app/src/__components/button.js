import React, { Component } from "react";

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.btnAction = this.btnAction.bind(this);
  }
  btnAction() {
    this.props.btnAction();
  }
  render() {
    return (
      <div className="sp-btn-wrapper">
        <button
          className={"sp-btn "+ (this.props.btnType ? "sp-btn-icon":"sp-btn--plain")}
          onClick={this.props.btnAction}
          title={this.props.btnTitle}
          >
          <i className={"fa "+ (this.props.fontIcon ? this.props.fontIcon :"sp-hide")} aria-hidden="true"></i>
          {this.props.btnLabel}
        </button>
      </div>
    );
  }
}
