import React, { useEffect } from 'react';
import Header from '../../components/HEADER/Header';
import CarouselHome from '../../components/HOME/CarouselHome';
import HomeProducts from '../../components/HOME/HomeProducts';
import Footer from '../../components/FOOTER/Footer';

function Home() {
  useEffect(() => {
    const cartList = localStorage.getItem('cart');
    if (!cartList) {
      localStorage.setItem('cart', JSON.stringify([]));
    }
  }, []);
  return (
    <>
      <Header />
      <div className="bg-[#EAEDED]">
        <CarouselHome />
        <HomeProducts />
        <Footer />
      </div>
    </>
  );
}

export default Home;
