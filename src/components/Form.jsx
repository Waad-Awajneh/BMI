// import React from "react";
// import React, {  } from "react";
import TextInput from "./TextInput.jsx";
import Button from "./Button.jsx";
import Box from "./Box";
import React, { useState } from "react";

function Form() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmiClass, setBmiClass] = useState("");
  const [bmi, setBmi] = useState(0);

  const weightChanged = (weightValue) => {
    console.log(weightValue);
    setWeight(weightValue);
  };

  const heightChanged = (heightValue) => {
    setHeight(heightValue);
  };

  const computeBmi = () => {
    let bmiValue = (weight / height / height) * 10000;
    setBmi(bmiValue);
    let bmiClass = getBmi(bmiValue);
    setBmiClass(bmiClass);
  };

  function getBmi(bmi) {
    if (bmi < 18.5) {
      return "Underweight";
    }
    if (bmi >= 18.5 && bmi < 24.9) {
      return "Normal weight";
    }
    if (bmi >= 25 && bmi < 29.9) {
      return "Overweight";
    }
    if (bmi >= 30) {
      return "Obesity";
    }
  }

  return (
    <div className="container">
      <div className="row m-5">
        <div className="col-sm-6">
          <TextInput
            label="Height"
            placeholder="Enter height in meters"
            onChange={heightChanged}
          />
          <TextInput
            label="Weight"
            placeholder="Enter weight in kg"
            onChange={weightChanged}
          />

          <div className=" m-2">
            <Button label="SUBMIT" onClick={computeBmi} />
          </div>
        </div>

        <div className="col-sm-6">
          <Box bmi={bmi} bmiClass={bmiClass} />
        </div>
      </div>
    </div>
  );
}

export default Form;
