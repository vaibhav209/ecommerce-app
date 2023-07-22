import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { ArrowLeft, Cart, XCircle } from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';
import {
  removeFromCart,
  clearAllItems,
  incrementQuantity,
  decrementQuantity,
} from '../../reducers/cartSlice';
import { useNavigate } from 'react-router-dom';
import routes from '../../routes/routes.json';
import CartRow from '../CartRow/CartRow';

const Cartproducts = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const cartProductIds = useSelector((state) => state.cart.cartProductIds);

  const getTotalPrice = () => {
    const total = cartProductIds.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    return total.toLocaleString('en-IN', { maximumFractionDigits: 2 });
  };

  return (
    <>
      {cartProductIds.length > 0 ? (
        <div className="p-3">
          <Table size="md">
            <thead>
              <tr>
                <th>Products</th>
                <th>Product Details</th>
                <th>Quantity</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cartProductIds.map((item) => (
                <CartRow key={item.id} item={item} />
              ))}
            </tbody>
          </Table>
          <div className="d-flex justify-content-end align-items-center mt-3">
            <strong className="m-0 me-4">Total :{getTotalPrice()} ₹</strong>
            <Button
              className="flex-end"
              variant="outline-success"
              onClick={() => navigate(routes.CHECKOUT)}
            >
              Order Now
            </Button>
          </div>
          <Button
            className="flex-start"
            variant="outline-danger"
            onClick={() => dispatch(clearAllItems())}
          >
            Clear Cart
          </Button>
        </div>
      ) : (
        <div className="text-center mt-5">
          <Cart size={100} color="#1565C0" />
          <div className="mt-1">
            <h3 style={{ color: '#1565C0' }}>Oops! Your Cart is Empty.</h3>
          </div>
          <div className="mt-4">
            <Button
              variant="outline-info"
              onClick={() => navigate(routes.HOME)}
            >
              <ArrowLeft />
              Start Shopping
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Cartproducts;
