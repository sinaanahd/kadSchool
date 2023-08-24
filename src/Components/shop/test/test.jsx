import { CartContext, CartProvider } from "../../context/CartContext";
import React, { useState, useContext } from "react";
const TestComponent = () => {
  const { test_obj } = useContext(CartContext);
  return (
    <>
      <h1>{test_obj}</h1>
    </>
  );
};

export default TestComponent;
