import { Component } from "react";

export default class CounterClass extends Component {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    if (this.state.count < 10) {
      this.setState({ count: this.state.count + 1 });
    }
  };

  handleDecrement = () => {
    if (this.state.count > -10) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  render() {
    return (
      <>
        <h1> hi from class </h1>
        <h3>counter : {this.state.count}</h3>
        <button onClick={this.handleIncrement}>icrement</button>
        <button onClick={this.handleDecrement}>decrement</button>
      </>
    );
  }

  componentDidMount() {
    console.log("start!");
  }
}
