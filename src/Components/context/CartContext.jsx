import axios from "axios";
import { createContext, useState, useEffect } from "react";
import convert_to_persian from "../functions/convert-to-persian";
const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [test_obj, setTestObj] = useState("sina");
  return (
    <CartContext.Provider value={{ test_obj }}>{children}</CartContext.Provider>
  );
};

export { CartContext, CartProvider };
