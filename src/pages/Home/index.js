import React from 'react';
import Header from '../../components/Header';
import CarouselHome from '../../components/CarouselHome';
import HomeProducts from '../../components/HomeProducts';

function Home() {
  return (
    <main>
      <Header />
      <CarouselHome />
      <HomeProducts />
    </main>
  );
}

export default Home;