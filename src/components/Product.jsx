import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

export const Product = () => {
  const { id } = useParams();
  const [pName, setPname] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      let r = await fetch(`http://localhost:8080/products/${id}`);
      let d = await r.json();
      setPname(d);
      // console.log(d);
    };

    fetchProducts();
  }, [id]);

  return (
    <div>
      Product ID : {id}
      <div>Product Name : {pName.name}</div>
    </div>
  );
};
