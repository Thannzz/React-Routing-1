import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigat = useNavigate();
  const handleClick = (id) => {
    if (id === 1) {
      navigat("/products/1");
    }
    if (id === 2) {
      navigat("/products/2");
    }
    if (id === 3) {
      navigat("/products/3");
    }
  };
  return (
    <div>
      <Link to="/">Home</Link>
      <br />
      <Link to="/about">About</Link>
      <br />
      <Link to="/products">Product</Link>
      <button onClick={() => handleClick(1)}>Go to Products 1</button>
      <button onClick={() => handleClick(2)}>Go to Products 2</button>
      <button onClick={() => handleClick(3)}>Go to Products 3</button>
    </div>
  );
};
