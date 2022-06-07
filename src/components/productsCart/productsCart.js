import React from "react";
import { Container, Box } from "@mui/material";
import { Button } from "@mui/material";

const ProductCart = ({ titulo, imagen, precio, cantidad }) => {
  var carrito = JSON.parse(localStorage.getItem("Carrito"));
  function quitar() {
    carrito.forEach((element) => {
      if (element.name === titulo) {
        element.cantidad = element.cantidad - 1;
        if (element.cantidad == 0) {
          carrito.splice(element.index, 1);
        }
        localStorage.setItem("Carrito", JSON.stringify(carrito));
        window.location.reload();
      }
    });
  }

  function poner() {
    carrito.forEach((element) => {
      if (element.name === titulo) {
        element.cantidad = element.cantidad + 1;
        localStorage.setItem("Carrito", JSON.stringify(carrito));
        window.location.reload();
      }
    });
  }

  return (
    <Container sx={{ width: "50%" }} className="container-cart">
      <h1 className="titulo">{titulo}</h1>
      <div className="product-box">
        <Box
          className="image"
          component="img"
          sx={{
            height: 250,
            //width: 350,
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
          }}
          alt="The house from the offer."
          src={imagen}
        />
        <div className="image-info">
          <h1 className="precio">$ {precio}</h1>
          <p className="cantidad">Cantidad: {cantidad}</p>
          <p className="total">Total por producto: ${precio * cantidad}</p>
          <Button variant="text" onClick={quitar}>
            -
          </Button>
          <Button variant="text" onClick={poner}>
            +
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default ProductCart;
