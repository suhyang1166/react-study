import React, { Component } from "react";

export default class BoxClass extends Component {
  constructor() {
    super();
    this.result = "";
  }

  finalResult = () => {
    if (
      this.props.title === "Computer🕶️" &&
      this.props.result !== "tie" &&
      this.props.result !== ""
    ) {
      this.result = this.props.result === "win" ? "lose" : "win";
    } else {
      this.result = this.props.result;
    }
  };

  render() {
    this.finalResult();
    return (
      <div className="box">
        <h1>{this.props.title}</h1>
        <div className={`imgWrap ${this.result}`}>
          <img src={this.props.item && this.props.item.img}></img>
        </div>
        <h2>{this.result}</h2>
      </div>
    );
  }
}
