import React from "react";
import { useNavigate } from "react-router-dom";

const Aboutpage = () => {
  const navigate = useNavigate();

  const goToHomapage = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>about page</h1>
      <button onClick={goToHomapage}>Go to homepage</button>
    </div>
  );
};

export default Aboutpage;
