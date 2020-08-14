import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Table, Badge } from "react-bootstrap";
import React from "react";
import ReactDOM from "react-dom";
import ButtonHolder from "./ButtonHolder";
import Input from "./Input";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      letters: ["P", "L", "P", "T", "S", "A", "C", "E", "H", "D"],
      value: "",
      refresh: false,
      list: [],
      count: 0,
    };
  }

  updateValue = (letter) => {
    // update the word
    this.setState({
      value: this.state.value + letter,
    });
  };

  addItem = () => {
    // include new item

    const newItem = {
      value: this.state.value,
    };

    // copy current list of items
    const list = [...this.state.list];

    // add the new item to the list

    list.push(newItem);

    // update state with new list, reset the new item input

    this.setState((prevState) => {
      return {
        list,
        newItem: "",
        value: "",
        refresh: !prevState.refresh,
        count: this.state.count + 1,
      };
    });
  };
  //clear the item input
  clearWord = () => {
    this.setState((prevState) => {
      return {
        value: "",
        refresh: !prevState.refresh,
      };
    });
  };

  render() {
    return (
      <Card border="danger" className="card ">
        <Card.Body>
          <h1>Give Me Five!</h1>

          <ButtonHolder
            letters={this.state.letters}
            updateValue={this.updateValue}
            refresh={this.state.refresh}
          />

          <div>
            <Input value={this.state.value} />

            <Button
              className="btn"
              variant="warning"
              onClick={() => this.addItem()}
              disabled={!this.state.value.length || this.state.count === 5}
            >
              Add
            </Button>

            <Button className="btn" variant="warning" onClick={this.clearWord}>
              Clear
            </Button>
          </div>
        </Card.Body>
        <Card.Body>
          <Table>
            <tbody>
              {this.state.list.map((item) => {
                return (
                  <tr>
                    <td className="value">{item.value}</td>
                    <td>
                      <Badge variant="danger" className="badge">
                        {item.value.length}
                      </Badge>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
