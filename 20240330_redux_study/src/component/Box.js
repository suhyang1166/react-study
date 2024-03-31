import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import GrandSonBox from "./GrandSonBox";

const Box = () => {
  let count = useSelector((state) => state.count);
  return (
    <div>
      This is Box {count}
      <GrandSonBox></GrandSonBox>
    </div>
  );
};

export default Box;
