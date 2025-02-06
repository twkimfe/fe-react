import { Component } from "react";

export default class App extends Component {
  state = {
    value: 0,
  };

  constructor(props) {
    super(props);
    this.state = {
      value: 1,
    };
  }

  resetValue() {
    this.setState({ value: 0 }, () => {
      console.log("value:", this.state.value);
    });
  }

  render() {
    return (
      <div>
        <h1>value: {this.state.value}</h1>
        <button
          onClick={() => {
            this.setState(
              (state) => ({
                value: state.value + 1,
              }),
              () => {
                console.log("value:", this.state.value);
              }
            );
          }}
        >
          Increase value
        </button>
        <button
          onClick={() => {
            this.resetValue.bind(this)();
          }}
        >
          Reset value
        </button>
      </div>
    );
  }
}
