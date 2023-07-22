import React from 'react';
import { Table } from 'react-bootstrap';

const OrderSummary = ({ cartProductIds, getTotalPrice }) => {
  return (
    <div className="p-3">
      <Table size="md">
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cartProductIds.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.quantity}</td>
              <td>{(item.quantity * item.price).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
        <tr>
          <td colSpan={2}></td>
          <td colSpan={2}>Total Price : ₹ {getTotalPrice()}</td>
        </tr>
      </Table>
    </div>
  );
};

export default OrderSummary;
