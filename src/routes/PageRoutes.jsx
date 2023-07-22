import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavbarHeader from '../components/NavbarHeader/NavbarHeader';
import Cardpay from '../pages/Cardpay';
import Carts from '../pages/Carts';
import Checkout from '../pages/Checkout';
import Error from '../pages/Error';
import Home from '../pages/Home';
import Login from '../pages/Login';
import OrderSuccess from '../pages/OrderSuccess';
import UPIPay from '../pages/UPIPay';
import PrivateRoute from './PrivateRoute';
import routes from './routes.json';

const PageRoutes = () => {


  return (
    <>
      <NavbarHeader />
      <Routes>
        <Route path={routes.HOME} element={<PrivateRoute />}>
          <Route path={routes.HOME} element={<Home />} />
        </Route>

        <Route path={routes.LOGIN} element={<Login />} />
        <Route path={routes.CART} element={<Carts />} />
        <Route path={routes.CHECKOUT} element={<Checkout />} />
        <Route path={routes.CARDPAY} element={<Cardpay />} />
        <Route path={routes.UPIPAY} element={<UPIPay />} />
        <Route path={routes.ORDERPLACED} element={<OrderSuccess />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default PageRoutes;
