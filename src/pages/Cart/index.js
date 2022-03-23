import React from 'react';
import Header from '../../components/HEADER/Header';
import Footer from '../../components/FOOTER/Footer';
import CartProducts from '../../components/CART/CartProducts';

function Cart() {
  return (
    <main className="bg-[#e9e9e9]">
      <Header />
        <div className="p-[20px]">
          <CartProducts />
        </div>
      <Footer />
    </main>
  );
}

export default Cart;