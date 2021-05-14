import React from "react";

function DisplayBox(props) {
  return (
    <div class="display-row">
      <input type="text" readOnly value={props.value} />
    </div>
  );
}

export default DisplayBox;
