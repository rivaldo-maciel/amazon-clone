import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';
import CardProduct from '../cardProduct';
import productsContext from '../../../context/pruducts.context';

function ListProducts() {
  const { results: products } = useSelector(state => state.products);
  const { order } = useContext(productsContext);
  return (
    <section className="grid grid-cols-6 gap-2 p-[30px]">
      {
        products.sort((a, b) => order === 'Preço: alto a baixo' ? b.price - a.price : a.price - b.price)
        .map((product) => (
          <Link
            to={`/products/${product.id}`}
            className="w-[150px] h-[250px shadow-md border border-[#e4e4e4]"
            key={product.id}
          >
            <CardProduct
              title={product.title}
              price={product.price}
              thumbnail={product.thumbnail}
            />
          </Link>
        ))
      }
    </section>
  );
}

export default ListProducts;