import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { ShoppingContext } from "../context/ShoppingContext";
function ProductCard({ product }) {
  const { AddToCart } = useContext(ShoppingContext);

  return (
    <Card>
      <Card.Img variant="top" src={product.image} alt={product.name} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>${product.price}</Card.Text>
        <Button onClick={() => AddToCart(product)} variant="primary">
          Add to cart
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
