import React, {useState} from 'react';
import Header from '../../components/HEADER/Header';
import Footer from '../../components/FOOTER/Footer';
import CartProducts from '../../components/CART/CartProducts';

function Cart() {
  const [reload, setReload] = useState(false);
  return (
    <main className="bg-[#e9e9e9]">
      <Header />
        <div className="p-[20px]">
          <CartProducts setReload={setReload}/>
        </div>
      <Footer />
    </main>
  );
}

export default Cart;