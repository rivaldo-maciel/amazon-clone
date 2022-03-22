import React from 'react';
import Header from '../../components/HEADER/Header';
import Footer from '../../components/FOOTER/Footer';
import SectionDetails from '../../components/DETAILS/SectionDetails';

function ProductDetails() {
  return (
    <main className="flex flex-col justify-center">
      <Header />
      <SectionDetails />
      <Footer />
    </main>
  );
}

export default ProductDetails;