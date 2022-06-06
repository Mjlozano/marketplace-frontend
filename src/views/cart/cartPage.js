import React, { useState } from "react";
import { Container } from "@mui/material";
import { Button } from "@mui/material";
import ProductCart from "../../components/productsCart/productsCart";
import "./styles/cartView.css";

const Cart = () => {

  console.log(localStorage.getItem("Carrito"));
  return (
    <div>
      <h1>Carrito de compras</h1>
      <ProductCart/>
    </div>
  );
};
export default Cart;
