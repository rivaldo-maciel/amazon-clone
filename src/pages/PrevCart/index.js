import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/HEADER/Header';
import Footer from '../../components/FOOTER/Footer';
import IconCheck from '../../assets/check.png';
import CarouselProducts from '../../components/PREVCART/CarouselProducts';

function PrevCart() {
  const src = JSON.parse(localStorage.getItem('itemPic'));
  const cartList = JSON.parse(localStorage.getItem('cart'));
  const total = cartList.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
  const history = useHistory();

  return (
    <main>
      <Header />
        <section className="bg-[#e9e9e9] flex flex-col p-[20px]">
          <div className="flex h-[180px] justify-between">
            <div className="bg-white h-[160px] w-[70%] border flex justify-center items-center">
              <div className="flex">
                <img src={src} alt="product" className="w-[60px]" />
                <div className="flex ml-[25px] mt-[24px]">
                  <img src={IconCheck} alt="check" className="w-[15px] h-[15px]" />
                  <span className="font-bold text-[14px] ml-[10px]">Adicionado ao carrinho</span>
                </div>
              </div>
            </div>
            <div className="bg-white h-[160px] w-[28%] p-[20px] flex flex-col">
              <p className="text-[12px]">{`subtotal do carrinho (${cartList.length} produtos):`}</p>
              <p className="font-bold">R${total.toFixed(2)}</p>
              <button
                type="button"
                className="bg-[#FFD814] rounded-md mt-[10px] text-[12px] h-[25px] hover:bg-[#f3c136]"
              >
                Fechar pedido
              </button>
              <button
                type="button"
                className="shadow rounded-md mt-[10px] border border-[#c9c9c9] text-[12px] h-[25px] hover:bg-[#dfdede]"
                onClick={() => history.push('/cart')}
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