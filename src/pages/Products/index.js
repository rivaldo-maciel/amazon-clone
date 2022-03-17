import React from 'react';
import Header from '../../components/HEADER/Header';
import Footer from '../../components/FOOTER/Footer';
import OrderProducts from '../../components/PRODUCTS/OrderBar';

function Products() {
  return (
    <div>
      <Header />
      <OrderProducts />
      <Footer />
    </div>
  );
}

export default Products;