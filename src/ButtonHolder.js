import React from "react";
import Button from "./Button";
import "./styles.css";

class ButtonHolder extends React.Component {
  state = {
    refresh: false,
  };
  componentDidUpdate(prevProps) {
    if (this.props.refresh !== prevProps.refresh) {
      this.setState((prevState) => {
        return {
          refresh: !prevState.refresh,
        };
      });
    }
  }

  createButtons = () => {
    const letters = this.props.letters;
    return letters.map((letter) => (
      <Button letter={letter} updateValue={this.props.updateValue} />
    ));
  };

  render() {
    const refresh = this.state.refresh;
    return (
      <div>
        {!refresh ? this.createButtons() : null}
        {refresh ? this.createButtons() : null}
      </div>
    );
  }
}

export default ButtonHolder;
