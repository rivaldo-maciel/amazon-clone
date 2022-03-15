import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getCategories} from '../../../redux/actions';

function SelectCategories() {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.saveCategories);

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(getCategories());
    }
  }, [categories.length, dispatch]);

  return (
    <select
      className="mr-[-145px] z-[1] h-7 bg-[#e6e4e4] outline-[#ff9735] focus:outline focus:outline-2 rounded-l-sm text-[10px] w-auto cursor-pointer border-r-[1px] border-gray-300"
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