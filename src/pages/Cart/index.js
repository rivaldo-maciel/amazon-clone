import React, {useState} from 'react';
import Header from '../../components/HEADER/Header';
import Footer from '../../components/FOOTER/Footer';
import CartProducts from '../../components/CART/CartProducts';
import CardTotal from '../../components/CART/CardTotal';
import CartSideBar from '../../components/CART/CartSideBar';

function Cart() {
  const [reload, setReload] = useState(false);
  const cartList = JSON.parse(localStorage.getItem("cart"));
  return (
    <main className="bg-[#e9e9e9]">
      <Header />
        <div className="p-[20px] flex justify-center">
          <CartProducts setReload={setReload}/>
          <div>
          {
            cartList.length > 0 
            && (
              <>
                <CardTotal />
                <CartSideBar />
              </>
            )
          }
          </div>
        </div>
      <Footer />
    </main>
  );
}

export default Cart;