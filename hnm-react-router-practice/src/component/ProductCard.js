import React from "react";

const ProductCard = ({ item }) => {
  return (
    <div className="item-list">
      <img src={item?.img}></img>
      <div>{item?.new == true ? "Conscious choice" : ""}</div>
      <div>{item?.title}</div>
      <div>₩{item?.price}</div>
      <div>{item?.new == true ? "신제품" : ""}</div>
    </div>
  );
};

export default ProductCard;
