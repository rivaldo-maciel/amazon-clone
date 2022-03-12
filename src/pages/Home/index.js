import React from 'react';
import Header from '../../components/Header';
import CarouselHome from '../../components/CarouselHome';
import HomeProducts from '../../components/HomeProducts';
import Footer from '../../components/Footer';

function Home() {
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