import React from 'react';
import { Container, Button, Badge } from 'react-bootstrap';
import { ArrowLeft } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import routes from '../../routes/routes.json';

const OrderPlaced = () => {
  const navigate = useNavigate();

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center vh-100">
      <h1 className="display-1 mb-5 text-primary">
        Thank you for shopping with us!
        <br />
        <small>You have a nice day!!</small>
      </h1>
      <Button
        variant="outline-primary"
        size="lg"
        onClick={() => navigate(routes.HOME)}
      >
        <ArrowLeft size={25} className="me-2" />
        Go to Home
      </Button>
    </Container>
  );
};

export default OrderPlaced;
