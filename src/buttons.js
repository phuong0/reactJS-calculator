//each button has a unique prop to pass through, so don't need a lot of components
import React from "react";

function Button(props) {
  return (
    <input
      class={props.class}
      type="button"
      value={props.label}
      onClick={props.clicked}
    />
  );
}

export default Button;
