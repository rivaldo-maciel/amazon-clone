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
    console.log(results);
  }, [dispatch, results]);

  return (
    <section className="flex items-center justify-between h-[30px] border-b border-[#b4b2b2] shadow-[0_1px_#e2e2e2]">
      <div className="flex text-[11px] ml-[10px]">
        <p>
          {`${results && results.length} resultados para`}
        </p>
        <span
          className="ml-[4px] text-[#ce6b32] font-bold"
        >
          {`"${query}"`}
        </span>
      </div>
      <div className="text-[10px]">
      <select
        className="h-[16px] mr-[10px] outline-[#3cc8eb] rounded-[5px] bg-[#e7e7e7] border border-[#9e9e9e]"
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