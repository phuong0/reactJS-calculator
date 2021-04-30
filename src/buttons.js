//each button has a unique prop to pass through, so don't need a lot of components
import React from "react";

function Button(props) {
  return <input type="button" value={props.label} />;
}

export default Button;
