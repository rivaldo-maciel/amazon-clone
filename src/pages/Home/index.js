import React, {useEffect} from 'react';
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
      <CarouselHome />
      <HomeProducts />
      <Footer />
    </>
  );
}

export default Home;