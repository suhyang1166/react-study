import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/products/${item.id}`);
  };

  return (
    <div className="item-list" onClick={showDetail}>
      <img src={item?.img}></img>
      <div>{item?.new == true ? "Conscious choice" : ""}</div>
      <div>{item?.title}</div>
      <div>₩{item?.price}</div>
      <div>{item?.new == true ? "신제품" : ""}</div>
    </div>
  );
};

export default ProductCard;
