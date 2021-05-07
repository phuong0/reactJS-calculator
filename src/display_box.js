import React from "react";

function DisplayBox(props) {
  return (
    <div>
      <input type="text" readOnly value={props.value} />
    </div>
  );
}

export default DisplayBox;
