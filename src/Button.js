import React from "react";
import "./styles.css";

class Button extends React.Component {
  state = {
    clicked: false,
  };

  handleOnClick = () => {
    if (!this.state.clicked) {
      this.props.updateValue(this.props.letter);
      this.setState({
        clicked: true,
      });
    }
  };

  render() {
    return (
      <button onClick={this.handleOnClick} disabled={this.state.clicked}>
        {this.props.letter}
      </button>
    );
  }
}

export default Button;
