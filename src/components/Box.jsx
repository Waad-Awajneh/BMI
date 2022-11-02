import React from "react";

function Box(props) {
  return (
    <>
      <div className="row rounded  border font-weight-bold alert alert-secondary">
        <div className="row">
          <h3>BMI = {props.bmi}</h3>
        </div>
        <div className="row ">
          <h3>{props.bmiClass}</h3>
        </div>
      </div>
    </>
  );
}
export default Box;
