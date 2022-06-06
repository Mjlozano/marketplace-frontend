import React from "react";
import { Container, Box } from "@mui/material";
import { Button } from "@mui/material";

const ProductCart = () => {
  return (
    <Container sx={{ width: "50%" }} className="container">
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
          src="https://media.4rgos.it/i/Argos/9520103_R_Z001A?w=750&h=440&qlt=70"
        />
        <div className="image-info">
          <h1 className="precio">$ 25.000.000</h1>
          <p className="cantidad">Cantidad: 2</p>
        </div>
      </div>
    </Container>
  );
};

export default ProductCart;
