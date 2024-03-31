import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Box from "./component/Box";

function App() {
  let count = useSelector((state) => state.count);
  let id = useSelector((state) => state.id);
  let password = useSelector((state) => state.password);
  const dispatch = useDispatch();

  const increase = () => {
    dispatch({ type: "INCREMENT", payload: { num: 1 } });
  };

  const decrement = () => {
    dispatch({ type: "DECREMENT", payload: { num: 1 } });
  };

  const login = () => {
    dispatch({ type: "LOGIN", payload: { id: "Hi🙌", password: "1004" } });
  };

  return (
    <div className="wrap">
      <h1>
        {id},{password}
      </h1>
      <button onClick={login}>Login</button>
      <h1>{count}</h1>
      <Box></Box>
      <div className="updown">
        <button onClick={increase}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  );
}

export default App;
