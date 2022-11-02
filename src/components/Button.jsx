import React from "react";

function Button(props) {
  return (
    <button className="btn btn-primary " onClick={props.onClick}>
      {props.label}
    </button>
  );
}

export default Button;
