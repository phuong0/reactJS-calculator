import "./styles.css";
import React from "react";
import Screen from "./screen.js";
import Button from "./buttons.js";

export default function App() {
  //state keeping track of input
  //math(calculate): array(pop/push)
  //state keeping track of output
  let currentNum = "";
  let IsNum = false;

  return (
    <div className="App">
      <div>
        <Screen />
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
