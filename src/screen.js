import React from "react";
import DisplayBox from "./display_box.js";

function Screen(props) {
  return (
    <div id="screen">
      <DisplayBox value={props.input} />
      <DisplayBox value={props.output} />
    </div>
  );
}

export default Screen;
