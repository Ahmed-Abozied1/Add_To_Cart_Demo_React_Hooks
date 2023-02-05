import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import data from "../backend/data.json";
function ProductCard() {
  return (
    data.map((product)=>(
        <Card >
        <Card.Img variant="top" src={product.image} alt={product.name}/>
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
        ${product.price}
          </Card.Text>
          <Button variant="primary">Add to cart</Button>
        </Card.Body>
      </Card>
    ))
  )
     
}

export default ProductCard;