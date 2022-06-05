import React from "react";
import { Grid, List, ListItem } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ProductCard from "../productCard/productCard";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    padding: 0,
    maxHeight: '100%', 
    overflow: 'auto',
  },
}));

const ProductList = ({products}) => {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <List className={classes.root}>
        {products.map((product) => (
          <ListItem>
            <ProductCard key={product.id} product={product} />
          </ListItem>
        ))}
      </List>
    </Grid>
  );
};

export default ProductList;
