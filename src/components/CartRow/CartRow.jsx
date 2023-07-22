import React from 'react';
import { Button } from 'react-bootstrap';
import { XCircle } from 'react-bootstrap-icons';
import { useDispatch } from 'react-redux';
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from '../../reducers/cartSlice';

const CartRow = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <tr key={item.id}>
      <td>
        <img
          src={item.url}
          alt={item.title}
          style={{ width: '70px', height: '70px' }}
        />
      </td>
      <td>
        {item.title} <p>{item.text}</p>
      </td>

      <td>
        <Button
          variant="light"
          onClick={() => dispatch(decrementQuantity(item.id))}
        >
          -
        </Button>
        <span className="mx-2">{item.quantity}</span>
        <Button
          variant="light"
          onClick={() => dispatch(incrementQuantity(item.id))}
        >
          +
        </Button>
      </td>

      <td>{(item.price * item.quantity).toLocaleString()} Rs</td>
      <td>
        <XCircle
          size={25}
          color="red"
          style={{ cursor: 'pointer' }}
          onClick={() => dispatch(removeFromCart(item.id))}
        />
      </td>
    </tr>
  );
};

export default CartRow;
