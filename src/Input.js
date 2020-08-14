import React from "react";
import "./styles.css";

class Input extends React.Component {
  render() {
    return <input value={this.props.value} />;
  }
}

export default Input;
