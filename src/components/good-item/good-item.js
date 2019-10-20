import React, { Fragment } from 'react';
import './good-item.css';
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const GoodItem = ({ good, onAddedToCart }) => {
  const { name, weight, price, img  } = good;
  return (    
    <Fragment>
      <Card bg="light" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={ img } ></Card.Img>
        <Card.Body>
          <Card.Title>{ price } $</Card.Title>
          <Card.Text>
            <span>{ name }</span>
            <span>{ weight }</span>
          </Card.Text>
        <Button
         onClick = { onAddedToCart }
         variant = "primary">
         Add to Cart
        </Button>
        </Card.Body>
      </Card>
    </Fragment>
  );
};


export default GoodItem;
