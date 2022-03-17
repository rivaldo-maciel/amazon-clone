import React from 'react';
import Header from '../../components/HEADER/Header';
import Footer from '../../components/FOOTER/Footer';
import OrderProducts from '../../components/PRODUCTS/OrderBar';
import ListProducts from '../../components/PRODUCTS/ListProducts';

function Products() {
  return (
    <div>
      <Header />
      <OrderProducts />
      <ListProducts />
      <Footer />
    </div>
  );
}

export default Products;