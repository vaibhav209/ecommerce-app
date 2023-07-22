import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import routes from '../../routes/routes.json';
import OrderSummary from '../OrderSummary/OrderSummary';

const CheckoutProducts = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [mobile, setMobile] = useState('');
  const [paymentOptions, setPaymentOptions] = useState('');

  const cartProductIds = useSelector((state) => state.cart.cartProductIds);

  const navigate = useNavigate();

  const getTotalPrice = () => {
    const total = cartProductIds.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    return total.toLocaleString('en-IN', { maximumFractionDigits: 2 });
  };

  const paymentOptionHandler = (e) => {
    setPaymentOptions(e.target.value);
  };

  const mobilePattern = /^[6-9]\d{9}$/;

  const confirmOrderHandler = () => {
    if (
      mobilePattern.test(mobile) === false ||
      name.length <= 10 ||
      address.length <= 5 ||
      paymentOptions === ''
    ) {
      alert('Please fill all the details properly');
      return;
    }
    if (paymentOptions === 'Credit / Debit Card') {
      navigate(routes.CARDPAY);
    } else if (paymentOptions === 'Cash on Delivery') {
      navigate(routes.ORDERPLACED);
    } else if (paymentOptions === 'UPI') {
      navigate(routes.UPIPAY);
    }
  };

  return (
    <div
      className="p-3"
      style={{ width: '50%', marginLeft: '20%', marginRight: '10%' }}
    >
      <h3 className="mb-4">Fill Your Details</h3>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicMobile">
          <Form.Label>Mobile</Form.Label>
          <Form.Control
            type="number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Payment Options</Form.Label>
          <div>
            <Form.Check
              className="d-block"
              label="Credit / Debit Card"
              type="radio"
              name="paymentOptionGroup"
              value="Credit / Debit Card"
              onClick={paymentOptionHandler}
            />
            <Form.Check
              className="d-block"
              label="UPI"
              type="radio"
              name="paymentOptionGroup"
              value="UPI"
              onClick={paymentOptionHandler}
            />
            <Form.Check
              className="d-block"
              label="Cash on Delivery"
              type="radio"
              name="paymentOptionGroup"
              value="Cash on Delivery"
              onClick={paymentOptionHandler}
            />
          </div>
        </Form.Group>
      </Form>

      <h3 className="mb-4">Order Summary</h3>

      <OrderSummary
        cartProductIds={cartProductIds}
        getTotalPrice={getTotalPrice}
      />
      <div className="d-flex justify-content-end">
        <Button variant="warning" onClick={confirmOrderHandler}>
          Confirm Order
        </Button>
      </div>
    </div>
  );
};

export default CheckoutProducts;
