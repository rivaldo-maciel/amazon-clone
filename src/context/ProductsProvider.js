import React, { useState } from 'react';
import productsContext from './pruducts.context';

function ProductsProvider({ children }) {
  const [order, setOrder] = useState('');
  return (
    <productsContext.Provider value={{ order, setOrder }}>
      {
        children
      }
    </productsContext.Provider>
  );
}

export default ProductsProvider;