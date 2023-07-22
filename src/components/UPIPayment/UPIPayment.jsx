import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import routes from '../../routes/routes.json';

const UPIPayment = () => {
  const [upiId, setUpiId] = useState('');
  const [upiOtp, setUpiOtp] = useState('');

  const navigate = useNavigate();

  const cartProductIds = useSelector((state) => state.cart.cartProductIds);

  const getTotalPrice = () => {
    const total = cartProductIds.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    return total.toLocaleString('en-IN', { maximumFractionDigits: 2 });
  };

  const upiIdHandler = (e) => {
    setUpiId(e.target.value);
  };

  const upiOtpHandler = (e) => {
    const value = e.target.value;
    const digitsOnly = value.replace(/\D/g, '');

    setUpiOtp(digitsOnly);
  };

  const payHandler = () => {
    if (upiId.length <= 3 || upiOtp.length < 4) {
      alert('Please fill all the details properly');
      return;
    } else {
      navigate(routes.ORDERPLACED);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
      <div className="p-3">
        <h3 className="mb-3">UPI Payment</h3>
        Total : {getTotalPrice()} /-
        <Form>
          <Form.Group className="mb-3">
            <Form.Label className="mt-3">UPI ID</Form.Label>
            <Form.Control
              type="text"
              value={upiId}
              onChange={upiIdHandler}
              style={{ width: '600px' }}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Enter OTP</Form.Label>
            <Form.Control
              type="text"
              maxLength="4"
              value={upiOtp}
              onChange={upiOtpHandler}
              style={{ width: '600px' }}
            />
          </Form.Group>
        </Form>
        <div className="text-left">
          <Button
            variant="danger"
            disabled={!upiId || !upiOtp}
            onClick={payHandler}
          >
            PAY
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UPIPayment;
