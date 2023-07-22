import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ProductCard = ({ item, isItemAdded, isDisabled, addToCartHandler }) => {
  return (
    <Card style={{ width: '18rem' }} key={item.id}>
      <Card.Img variant="top" src={item.url} />
      <Card.Body>
        <Card.Text>{item.title}</Card.Text>
        <Card.Title>₹ {item.price.toLocaleString()}</Card.Title>
        <Card.Text>{item.text}</Card.Text>

        <Button
          className="mx-1"
          variant="outline-primary"
          size="sm"
          onClick={() => addToCartHandler(item)}
          disabled={isDisabled}
        >
          {isItemAdded ? 'Added to cart' : 'Add To Cart'}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
