
import { ConnectingAirportsOutlined } from "@mui/icons-material";
import { Card, CardContent, CardActionArea, CardMedia, Typography, } from "@mui/material";
import { Button } from "@mui/material";
import { type } from "@testing-library/user-event/dist/type";

const ProductCard = ({ product }) => {

  const { name, price, image, id, description } = product;

  function subimit() {
    var products = JSON.parse(localStorage.getItem('Carrito'));
    console.log(typeof products);
    if (products.length === 0) {
      products.push({
        name: name,
        price: price,
        image: image,
        id: id,
        cantidad: 1,
      });
      localStorage.setItem('Carrito', JSON.stringify(products));
    } else {
      var existe = false;
      products.forEach(element => {
        if (element.id === id) {
          element.cantidad = element.cantidad + 1;
          localStorage.setItem('Carrito', JSON.stringify(products));
          existe = true;
        }
      });
      if (!existe) {
        products.push({
          name: name,
          price: price,
          image: image,
          id: id,
          cantidad: 1,
        });
        localStorage.setItem('Carrito', JSON.stringify(products));
      }
    }

  }





  return (
    <Card key={id} sx={{ maxWidth: 340, minWidth: 270 }}>
      <CardActionArea
        onClick={subimit}
      >
        <CardMedia
          component="img"
          height="100%"
          image={image}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" align="left">
            {name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            ${price}
          </Typography>
          <Typography variant="body2" color="text.secondary" align="left">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ProductCard;