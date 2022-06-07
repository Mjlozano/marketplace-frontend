
import { Card, CardContent, CardActionArea, CardMedia, Typography, CardActions } from "@mui/material";
import Button from "@mui/material/Button";

const ProductCard = ({ product }) => {

  const { name, price, image, id, description } = product;

  function subimit() {
    var products = JSON.parse(localStorage.getItem('Carrito'));
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

  const styles = {
    media: {
      height: 250,
      objectFit: 'contain',
    }
  }




return (
  <><Card key={id} sx={{ maxWidth: 340, minWidth: 270 }}>
    <CardActionArea
    //onClick={subimit}
    >
      <CardMedia
        className="media"
        style={styles.media}
        component="img"
        //height="100%"
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
    <CardActions style={{ display: 'flex', flexDirection: 'row', justifyContent: 'end' }}>
      <Button size="small" onClick={subimit}>Comprar</Button>
    </CardActions>
  </Card>
  </>

);
}

export default ProductCard;