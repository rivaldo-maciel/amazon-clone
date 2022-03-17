import React from 'react';
import {useSelector} from 'react-redux';
import CardProduct from '../cardProduct';

function ListProducts() {
  const { results: products } = useSelector(state => state.products);
  return (
    <section className="grid grid-cols-6 gap-2 p-[30px]">
      {
        products.sort((a, b) => a.price - b.price).map((product) => (
          <CardProduct
            title={product.title}
            price={product.price}
            thumbnail={product.thumbnail}
            id={product.id}
          />
        ))
      }
    </section>
  );
}

export default ListProducts;