import React, { Component } from "react";
import BoxClass from "./component/BoxClass";

const choice = {
  rock: {
    name: "Rock",
    img: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FpSJwo%2FbtqXJV1lACE%2Fnx5XrxkCLWXh9UsnoS8vbK%2Fimg.png",
  },
  scissors: {
    name: "Scissors",
    img: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FHfURw%2FbtqXKvOTNWK%2FgWTwPXEg9QzSV0ilOuwuak%2Fimg.png",
  },
  paper: {
    name: "Paper",
    img: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbmjB2s%2FbtqXHhp6kpG%2FTH14W4U612SxKo9uuR2sB0%2Fimg.png",
  },
};

const state = {
  userDefault: {
    name: "user",
    img: "https://i.pinimg.com/564x/42/aa/be/42aabe8a7bb5797e92889b64f36c0fd2.jpg",
  },
  computerDefault: {
    name: "computer",
    img: "https://i.pinimg.com/564x/16/08/e4/1608e4f3e81f666437ef984884908a77.jpg",
  },
};

export default class AppClass extends Component {
  constructor() {
    super();
    this.state = {
      userSelect: state.userDefault,
      computerSelect: state.computerDefault,
      result: "",
      userResult: "",
    };
  }

  play = (userChoice) => {
    let computerChoice = this.randomChoice();
    this.setState({
      userSelect: choice[userChoice],
      computerSelect: computerChoice,
      result: this.judgement(choice[userChoice], computerChoice),
      userResult: this.lastResult(choice[userChoice], computerChoice),
    });
  };

  judgement = (user, computer) => {
    if (user.name === computer.name) {
      return "tie";
    } else if (user.name === "Rock") {
      return computer.name == "Scissors" ? "win" : "lose";
    } else if (user.name === "Scissors") {
      return computer.name == "Paper" ? "win" : "lose";
    } else if (user.name === "Paper") {
      return computer.name == "Rock" ? "win" : "lose";
    }
  };

  randomChoice = () => {
    let itemArray = Object.keys(choice);

    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];

    return choice[final];
  };

  lastResult = (user, computer) => {
    if (user.name === computer.name) {
      return "무승부 입니다!";
    } else if (user.name === "Rock") {
      return computer.name == "Scissors" ? "이겼습니다!" : "졌습니다ㅠㅡㅠ";
    } else if (user.name === "Scissors") {
      return computer.name == "Paper" ? "이겼습니다!" : "졌습니다ㅠㅡㅠ";
    } else if (user.name === "Paper") {
      return computer.name == "Rock" ? "이겼습니다!" : "졌습니다ㅠㅡㅠ";
    }
  };

  render() {
    return (
      <div className="wrap">
        <div className="main">
          <BoxClass
            title="You🥰"
            item={this.state.userSelect}
            result={this.state.result}
          ></BoxClass>
          <BoxClass
            title="Computer🕶️"
            item={this.state.computerSelect}
            result={this.state.result}
          ></BoxClass>
        </div>
        <p>👇YOUR CHOICE👇</p>
        <div className="btns">
          <button onClick={() => this.play("scissors")}>✌️가위✌️</button>
          <button onClick={() => this.play("rock")}>✊바위✊</button>
          <button onClick={() => this.play("paper")}>🖐️보🖐️</button>
        </div>
        <div className="result" userResult={this.state.userResult}>
          {this.state.userResult}
        </div>
      </div>
    );
  }
}
