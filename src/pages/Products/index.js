import React from 'react';
import Header from '../../components/HEADER/Header';
import Footer from '../../components/FOOTER/Footer';
import OrderProducts from '../../components/PRODUCTS/OrderBar';
import ListProducts from '../../components/PRODUCTS/ListProducts';
import ProductsProvider from '../../context/ProductsProvider';

function Products() {
  return (
    <div>
      <Header />
      <ProductsProvider>
        <OrderProducts />
        <ListProducts />
      </ProductsProvider>
      <Footer />
    </div>
  );
}

export default Products;