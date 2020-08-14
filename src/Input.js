import React from "react";
import "./styles.css";

class Input extends React.Component {
  render() {
    return (
      <input
        value={this.props.value}
        onChange={(e) => this.updateInput("newItem", e.target.value)}
      />
    );
  }
}

export default Input;
