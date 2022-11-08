import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getCategories} from '../../../redux/actions';

function SelectCategories({ handleChange, setCategory, category }) {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.saveCategories);

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(getCategories());
    }
  }, [categories.length, dispatch]);

  return (
    <select
      className="z-[1] h-[2.5rem] mr-[-9.2rem] bg-[#f3f3f3] outline-[#ff9735] focus:outline focus:outline-[3.2px] rounded-l-[5px] text-[10px] w-auto cursor-pointer border-r-[1px] border-gray-300"
      onChange={(e) => handleChange(e, setCategory)}
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