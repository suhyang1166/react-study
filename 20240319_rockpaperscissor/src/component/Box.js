import React from "react";

const Box = (props) => {
  let result;
  if (
    props.title === "Computer🕶️" &&
    props.result !== "tie" &&
    props.result !== ""
  ) {
    result = props.result === "win" ? "lose" : "win";
  } else {
    result = props.result;
  }
  return (
    <div className="box">
      <h1>{props.title}</h1>
      <div className={`imgWrap ${result}`}>
        <img src={props.item && props.item.img}></img>
      </div>
      <h2>{result}</h2>
    </div>
  );
};

export default Box;
