import React, { useState } from "react";

function TextInput(props) {
  const [value, setValue] = useState(0);

  // handleChange(event) {
  //   // console.log(this);
  //   let inputValue = event.target.value;
  //   this.setState({ value: inputValue });
  //   this.props.onChange(inputValue);
  // }

  const styles = {
    fontSizes: 30,
    fontFamily: "Roboto, sans-serif",
    fontWeight: "bold",
  };

  const handleChange = (event) => {
    // console.log(this);
    let inputValue = event.target.value;
    setValue(inputValue);
    props.onChange(event.target.value);
  };

  return (
    <div>
      <label className="m-2" style={styles}>
        {props.label}
      </label>
      <input
        className="rounded"
        type="text"
        placeholder={props.placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

export default TextInput;
