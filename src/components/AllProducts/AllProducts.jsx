import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import items from '../../data';
import { addToCart } from '../../reducers/cartSlice';
import ProductCard from '../ProductCard/ProductCard';

const AllProducts = () => {
  const [selectCategory, setSelectCategory] = useState('All');
  const [addedItems, setAddedItems] = useState([]);

  const dispatch = useDispatch();

  const cartProductIds = useSelector((state) => state.cart.cartProductIds);

  const addToCartHandler = (item) => {
    setAddedItems([...addedItems, item.id]);
    dispatch(addToCart(item));
  };

  return (
    <>
      <div style={{ width: '15rem', padding: '10px', marginLeft: '38pt' }}>
        <p>Sort by Category :</p>
        <Form.Select
          value={selectCategory}
          onChange={(e) => setSelectCategory(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Mobiles">Mobiles</option>
          <option value="Watches">Watches</option>
          <option value="Sunglasses">Sunglasses</option>
          <option value="Headphones">Headphones</option>
        </Form.Select>
      </div>

      <div className="d-flex flex-row flex-wrap justify-content-evenly gap-4">
        {items
          .filter(
            (item) =>
              selectCategory === 'All' || item.category === selectCategory
          )

          .map((item) => {
            const isItemAdded = addedItems.includes(item.id);
            const isDisabled =
              isItemAdded ||
              cartProductIds.find((index) => index.id === item.id);

            return (
              <ProductCard
                item={item}
                isItemAdded={isItemAdded}
                isDisabled={isDisabled}
                addToCartHandler={addToCartHandler}
              />
            );
          })}
      </div>
    </>
  );
};

export default AllProducts;
