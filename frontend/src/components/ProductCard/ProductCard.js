import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function ProductCard({AddToCart,product}) { 
 
  return (
   
        <Card >
        <Card.Img variant="top" src={product.image} alt={product.name}/>
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
        ${product.price}
          </Card.Text>
          <Button onClick={()=>AddToCart(product)}  variant="primary">Add to cart</Button>
        </Card.Body>
      </Card>
  
  )
     
}

export default ProductCard;