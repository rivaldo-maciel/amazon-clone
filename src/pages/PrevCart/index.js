import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/HEADER/Header';
import Footer from '../../components/FOOTER/Footer';
import IconCheck from '../../assets/check.png';
import CarouselProducts from '../../components/PREVCART/CarouselProducts';

function PrevCart() {
  const src = JSON.parse(localStorage.getItem("itemPic"));
  const cartList = JSON.parse(localStorage.getItem("cart"));
  const total = cartList.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );
  const history = useHistory();

  const closeOrder = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      return history.push('/login');
    }
    return history.push('/payment-method');
  }

  return (
    <main>
      <Header />
      <section className="bg-[#e9e9e9] flex flex-col p-[20px]">
        <div className="flex h-[12rem] justify-between">
          <div className="bg-white h-[15rem] w-[70%] border flex justify-center items-center">
            <div className="flex">
              <img src={src} alt="product" className="w-[5rem]" />
              <div className="flex ml-[1.5rem] mt-[1.2rem]">
                <img
                  src={IconCheck}
                  alt="check"
                  className="w-[1rem] h-[1rem] mt-[0.2rem]"
                />
                <span className="font-bold text-[1rem] ml-[0.8rem]">
                  Adicionado ao carrinho
                </span>
              </div>
            </div>
          </div>
          <div className="bg-white h-[15rem] w-[28%] p-[20px] flex flex-col">
            <p className="text-[1rem]">
              {cartList.length === 1
                ? `subtotal do carrinho (${cartList.length} produto):`
                : `subtotal do carrinho (${cartList.length} produtos):`}
            </p>
            <p className="font-bold">R${total.toFixed(2)}</p>
            <button
              type="button"
              className="bg-[#FFD814] rounded-md mt-[0.8rem] text-[1rem] h-[2rem] hover:bg-[#f3c136]"
              onClick={closeOrder}
            >
              Fechar pedido
            </button>
            <button
              type="button"
              className="shadow rounded-md mt-[0.8rem] border border-[#c9c9c9] text-[1rem] h-[2rem] hover:bg-[#dfdede]"
              onClick={() => history.push("/cart")}
            >
              Ir para o carrinho
            </button>
          </div>
        </div>
        <CarouselProducts />
      </section>
      <Footer />
    </main>
  );
}

export default PrevCart;
