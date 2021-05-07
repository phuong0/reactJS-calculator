import "./styles.css";
import React, { useState } from "react";
import Button from "./buttons.js";
import Screen from "./screen.js";

export default function App() {
  //state keeping track of input
  //state keeping track of output
  let currentInput = "";
  let IsNum = false;

  let [inputString, setNewInput] = useState(currentInput);
  const newInput = (label) => {
    //33 or 3 3
    //change currentInput to something
    setNewInput(currentInput + label);
  };

  let [outputString, setNewOutput] = useState("");
  const newOutput = (label) => {
    setNewInput("");
    setNewOutput(calculate(inputString));
  };

  const calculate = (input, output) => {
    //test if the input is an actually expression
    output = eval(input);
  };

  return (
    <div className="App">
      <div>
        <Screen input={""} output={""} />
        <div>
          <Button label={"Clear"} />
          <Button label={"Delete"} />
          <Button label={"."} />
          <Button label={"/"} />
        </div>
        <div>
          <Button label={"7"} />
          <Button label={"8"} />
          <Button label={"9"} />
          <Button label={"*"} />
        </div>
        <div>
          <Button label={"4"} />
          <Button label={"5"} />
          <Button label={"6"} />
          <Button label={"-"} />
        </div>
        <div>
          <Button label={"1"} />
          <Button label={"2"} />
          <Button label={"3"} />
          <Button label={"+"} />
        </div>
        <div>
          <Button label={"0"} />
          <Button label={"="} />
        </div>
      </div>
    </div>
  );
}
