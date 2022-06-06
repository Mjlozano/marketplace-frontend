import React from "react";
import { Container, Box } from "@mui/material";
import { Button } from "@mui/material";

const ProductCart = ({titulo,imagen,precio,cantidad}) => {
  return (
    <Container sx={{ width: "50%" }} className="container-cart">
      <h1 className="titulo">SEXOOOOOOOOOOOOOOOOOOO</h1>
      <div className="product-box">
        <Box
          className="image"
          component="img"
          sx={{
            height: 233,
            width: 350,
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
          }}
          alt="The house from the offer."
          src={imagen}
        />
        <div className="image-info">
          <h1 className="precio">$ {precio}</h1>
          <p className="cantidad">Cantidad: {cantidad}</p>
          <p className="cantidad">total por producto:${precio * cantidad}</p> 
        </div>
      </div>
    </Container>
  );
};

export default ProductCart;
