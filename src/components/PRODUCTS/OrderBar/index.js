import React, {useEffect, useContext} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getProducts} from '../../../redux/actions';
import productsContext from '../../../context/pruducts.context';

function OrderProducts() {
  const { results, query } = useSelector(state => state.products);
  const {setOrder} = useContext(productsContext);
  const dispatch = useDispatch();

  useEffect(() => {
    if (results === undefined) {
      const {category, searchQuery} = JSON.parse(localStorage.getItem('search'));
      dispatch(getProducts(category, searchQuery));
    }
  }, [dispatch, results]);

  return (
    <section className="flex items-center justify-between h-[3rem] shadow-[0px_4px_4px_0px_rgba(61,61,61,0.2)]">
      <div className="flex text-[1rem] ml-[0.8rem]">
        <p>
          {`${results && results.length} resultados para`}
        </p>
        <span
          className="ml-[0.4rem] text-[#ce6b32] font-bold"
        >
          {`"${query}"`}
        </span>
      </div>
      <div className="text-[0.8rem]">
      <select
        className="h-[1.5rem] mr-[0.8rem] outline-[#3cc8eb] rounded-[5px] bg-[#e7e7e7] border border-[#9e9e9e]"
        onChange={({target}) => setOrder(target.value)}
      >
          <option selected disabled>Ordenar Por:</option>
          <option>Preço: alto a baixo</option>
          <option>Preço: baixo a alto</option>
        </select>
      </div>
    </section>
  );
}

export default OrderProducts;