import React, { useState } from "react";
import { Container } from "@mui/material";
import { Button } from "@mui/material";
import ProductCart from "../../components/productsCart/productsCart";
import "./styles/cartView.css";
import Pago from "../../components/productsCart/TotalAPagar";

const Cart = () => {

  const productosCarro = JSON.parse(localStorage.getItem('Carrito'));
  var paga = 0;
  productosCarro.forEach(element => {
    paga = paga + element.price * element.cantidad
  });

  function cambiodePagina() {
    localStorage.removeItem('Carrito');
    alert("Gracias por su compra");
    window.location.href = "/";
  }

  return (
    <div>
      <h1>Carrito de compras</h1>
      {productosCarro.map(producto => (
        <ProductCart
          titulo={producto.name}
          precio={producto.price}
          imagen={producto.image}
          cantidad={producto.cantidad}
        />
      ))}
      <div className="pago">
        <Pago
          total={paga}
        />
        <Button
          onClick={cambiodePagina}
          sx={{height: 60,
              width: 200,ml: 2, mt: 1}}
        variant="outlined">Continuar compra</Button>
      </div>
    </div>
  );
};
export default Cart;
