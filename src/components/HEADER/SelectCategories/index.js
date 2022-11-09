import React, {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getCategories} from '../../../redux/actions';

function SelectCategories({ handleChange, setCategory, category }) {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.saveCategories);

  const ref = useRef();

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(getCategories());
    }
  }, [categories.length, dispatch]);

  useEffect(() => {
    const length = (category.length * 8) + 15;
    ref.current.style.width = `${length}px`
  }, [category]);

  return (
    <select
      className="absolute text-[0.7rem] z-[1] h-[2.5rem] bg-[#f3f3f3] outline-[#ff9735] focus:outline focus:outline-[3.2px] rounded-l-[5px] cursor-pointer border-r-[1px] border-gray-300"
      onChange={(e) => {
        handleChange(e, setCategory);
      }}
      ref={ref}
    >
      <option>Todos</option>
      {
        categories.map((category) => (
          <option key={category.id}>{category.name}</option>
        ))
      }
    </select>
  );
}

export default SelectCategories;