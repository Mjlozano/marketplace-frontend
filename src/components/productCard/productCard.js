
import { Card, CardContent, CardActionArea, CardMedia, Typography } from "@mui/material";

const ProductCard = ( { product } ) => {

  const { name, price, image, id, description } = product;


  return (
    <Card key={id} sx={{ maxWidth: 340, minWidth: 270 }}>
      <CardActionArea>
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