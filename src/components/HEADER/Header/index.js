import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import AppIcon from '../AppIcon';
import SelectCategories from '../SelectCategories';
import SearchInput from '../SearchInput';
import SearchButton from '../SearchButton';
import CartButton from '../CartButton';
import {getProducts} from '../../../redux/actions';

function Header() {
  const [category, setCategory] = useState('Todos');
  const [query, setQuery] = useState('');
  const categories = useSelector(state => state.saveCategories);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = ({ target }, stateFunction) => {
    stateFunction(target.value);
  }

  const searchProducts = async () => {
    const selectedCategory = categories.find((currCategory) => currCategory.name = category);
    await dispatch(getProducts(selectedCategory.id, query));
    history.push('/products');
    localStorage.setItem('search', JSON.stringify({searchQuery: query, category: selectedCategory.id}));
  }

  return (
    <header className="bg-[#131921] h-10 flex justify-evenly">
        <AppIcon />
      <div className="flex items-center">
        <SelectCategories
          handleChange={handleChange}
          setCategory={setCategory}
        />
        <SearchInput
          handleChange={handleChange}
          setQuery={setQuery}
          query={query}
        />
        <SearchButton
          searchProducts={searchProducts}
        />
      </div>
      <CartButton />
    </header>
  );
}

export default Header;