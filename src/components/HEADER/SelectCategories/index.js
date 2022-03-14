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
  }, [dispatch]);

  return (
    <select>
      {
        categories.map((category) => (
          <option key={category.id}>{category.name}</option>
        ))
      }
    </select>
  );
}

export default SelectCategories;