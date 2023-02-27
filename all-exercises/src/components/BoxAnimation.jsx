import { Component } from "react";

export default class BoxAnimation extends Component {
  state = {
    isVisible: false,
  };
  componentDidMount() {
    console.log("hello");
    this.timer = setTimeout(() => {
      this.setState({
        isVisible: true,
      });
    }, 4000);
  }

  render() {
    const style = {
      width: this.props.size + "px",
      height: this.props.size + "px",
      boeder: "1px solid black",
      backgroundColor: "lightblue",
      display: this.state.isVisible ? "block" : "none",
    };
    return (
      <>
        <div style={style}></div>
      </>
    );
  }
}
