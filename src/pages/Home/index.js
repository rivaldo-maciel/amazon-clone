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
    <main className="bg-[#b4b3b3]">
      <Header />
      <CarouselHome />
      <HomeProducts />
      <Footer />
    </main>
  );
}

export default Home;