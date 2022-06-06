import React from 'react'
import { Grid } from '@mui/material';
import ProductList from '../../components/productList/productList';

import products from '../../helpers/products';


const MainPage = ({titulo}) => {
    const productsByCategory = products.reduce((acc, product) => {
        if (!acc[product.category]) {
            acc[product.category] = [];
        }
        acc[product.category].push(product);
        return acc;
    }
    , {});



  return (
      <Grid container spacing={3}>
        <Grid item xs={12}>
            <h1>{titulo}</h1>
        </Grid>
        {
            Object.keys(productsByCategory).map(category => (
                <Grid item xs={12}>
                    <h2>{category}</h2>
                    <ProductList products={productsByCategory[category]} />
                </Grid>
            ))
        }
      </Grid>
  )
}

export default MainPage