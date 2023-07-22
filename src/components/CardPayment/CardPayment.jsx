import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import routes from '../../routes/routes.json';

const CardPayment = () => {
  
  const [cardNumber, setCardNumber] = useState('');
  const [cardOtp, setCardOtp] = useState('');
  const [cardTypeSelected, setCardTypeSelected] = useState(false);

  const navigate = useNavigate();

  const cartProductIds = useSelector((state) => state.cart.cartProductIds);

  const getTotalPrice = () => {
    const total = cartProductIds.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    return total.toLocaleString('en-IN', { maximumFractionDigits: 2 });
  };

  const cardTypeHandler = () => {
    setCardTypeSelected(true);
  };

  const cardNumberHandler = (e) => {
    const value = e.target.value;
    const digitsOnly = value.replace(/\D/g, '');

    setCardNumber(digitsOnly);
  };

  const cardOtpHandler = (e) => {
    const value = e.target.value;
    const digitsOnly = value.replace(/\D/g, '');

    setCardOtp(digitsOnly);
  };

  const payHandler = () => {
    if (cardNumber.length < 16 || cardOtp.length < 3) {
      alert('Please fill all the details properly');
      return;
    } else {
      navigate(routes.ORDERPLACED);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
      <div className="p-3">
        <h3 className="mb-4">Card Payment</h3>
        Total : {getTotalPrice()} /-
        <Form className="mt-3">
          <Form.Group className="mb-3">
            <div className="d-flex">
              <div className="mr-3">
                <Form.Check
                  label="Credit Card"
                  type="radio"
                  name="cardOption"
                  onChange={cardTypeHandler}
                />
              </div>
              <div>
                <Form.Check
                  style={{ marginLeft: '15px' }}
                  label="Debit Card"
                  type="radio"
                  name="cardOption"
                  onChange={cardTypeHandler}
                />
              </div>
            </div>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Card Number</Form.Label>
            <Form.Control
              type="text"
              maxLength="16"
              value={cardNumber}
              onChange={cardNumberHandler}
              style={{ width: '600px' }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Enter OTP</Form.Label>
            <Form.Control
              type="text"
              maxLength="4"
              value={cardOtp}
              onChange={cardOtpHandler}
              style={{ width: '600px' }}
            />
          </Form.Group>
        </Form>
        <div className="text-left">
          <Button
            variant="danger"
            disabled={!cardNumber || !cardOtp || !cardTypeSelected}
            onClick={payHandler}
          >
            PAY
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardPayment;
