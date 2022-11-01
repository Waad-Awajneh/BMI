import React from "react";

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    // binding of 'this' in our constructor to our method handleChange is necessary for 'this' to work in handleChange method
    // this.handleChange = this.handleChange.bind(this);
  }

  // handleChange(event) {
  //   // console.log(this);
  //   let inputValue = event.target.value;
  //   this.setState({ value: inputValue });
  //   this.props.onChange(inputValue);
  // }

  styles = {
    fontSizes: 30,
    fontFamily: "Roboto, sans-serif",
    fontWeight: "bold",
  };

  handleChange = (event) => {
    console.log(this);
    let inputValue = event.target.value;
    this.setState({ value: inputValue });
    this.props.onChange(event.target.value);
  };

  render() {
    return (
      <div>
        <label className="m-2" style={this.styles}>
          {this.props.label}
        </label>
        <input
          className="rounded"
          type="text"
          placeholder={this.props.placeholder}
          value={this.state.value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default TextInput;
