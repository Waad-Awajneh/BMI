import React, { Component } from "react";

class Box extends Component {
  render() {
    return (
      <>
        <div className="row rounded  border font-weight-bold alert alert-secondary">
          <div className="row">
            <h3>BMI = {this.props.bmi}</h3>
          </div>
          <div className="row ">
            <h3>{this.props.bmiClass}</h3>
          </div>
        </div>
      </>
    );
  }
}

export default Box;
