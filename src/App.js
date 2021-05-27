import "./styles.css";
import React, { useState } from "react";
import Button from "./buttons.js";
import Screen from "./screen.js";

export default function App() {
  //strings not adding together right
  let [inputString, setNewInput] = useState("");
  const eachInput = (label) => {
    setNewInput(inputString + label);
  };

  const deleteInput = () => {
    if (inputString !== "") {
      setNewInput(inputString.slice(0, -1));
    }
  };
  const clearInput = () => {
    setNewInput("");
    setNewOutput("");
  };

  let [outputString, setNewOutput] = useState("");
  const newOutput = () => {
    setNewOutput(eval(inputString));
    setNewInput("");
  };

  //need to add the labels to the function each input
  return (
    <div className="App">
      <div>
        <h1 id="title">Phuong's Basic Calculator</h1>
        <div id="calc-whole">
          <Screen input={inputString} output={outputString} />
          <div id="calc-body">
            <div>
              <Button class="mistake" label={"Clear"} clicked={clearInput} />
              <Button class="mistake" label={"Delete"} clicked={deleteInput} />
              <Button
                class="operators"
                label={"%"}
                clicked={() => eachInput("%")}
              />
              <Button
                class="operators"
                label={"^"}
                clicked={() => eachInput("**")}
              />
            </div>
            <div>
              <Button
                class="nums"
                label={"π"}
                clicked={() => eachInput(Math.PI)}
              />
              <Button
                class="nums"
                label={"e"}
                clicked={() => eachInput(Math.E)}
              />
              <Button
                class="operators"
                label={"."}
                clicked={() => eachInput(".")}
              />
              <Button
                class="operators"
                label={"/"}
                clicked={() => eachInput("/")}
              />
            </div>
            <div>
              <Button class="nums" label={"7"} clicked={() => eachInput("7")} />
              <Button class="nums" label={"8"} clicked={() => eachInput("8")} />
              <Button class="nums" label={"9"} clicked={() => eachInput("9")} />
              <Button
                class="operators"
                label={"*"}
                clicked={() => eachInput("*")}
              />
            </div>
            <div>
              <Button class="nums" label={"4"} clicked={() => eachInput("4")} />
              <Button class="nums" label={"5"} clicked={() => eachInput("5")} />
              <Button class="nums" label={"6"} clicked={() => eachInput("6")} />
              <Button
                class="operators"
                label={"-"}
                clicked={() => eachInput("-")}
              />
            </div>
            <div>
              <Button class="nums" label={"1"} clicked={() => eachInput("1")} />
              <Button class="nums" label={"2"} clicked={() => eachInput("2")} />
              <Button class="nums" label={"3"} clicked={() => eachInput("3")} />
              <Button
                class="operators"
                label={"+"}
                clicked={() => eachInput("+")}
              />
            </div>
            <div>
              <Button
                class="operators"
                label={"("}
                clicked={() => eachInput("(")}
              />
              <Button
                class="operators"
                label={")"}
                clicked={() => eachInput(")")}
              />
              <Button class="nums" label={"0"} clicked={() => eachInput("0")} />
              <Button class="equal" label={"="} clicked={newOutput} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
