import React, {useState, useEffect} from 'react';
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
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (products.results) {
      history.push('/products');
    } 
  }, [history, products.results]);

  const handleChange = ({ target }, stateFunction) => {
    stateFunction(target.value);
  }

  const searchProducts = () => {
    const selectedCategory = categories.find((currCategory) => currCategory.name = category);
    dispatch(getProducts(selectedCategory.id, query));
    localStorage.setItem('search', JSON.stringify({searchQuery: query, category: selectedCategory.id}));
  }

  return (
    <header className="bg-[#060B28] h-10 flex justify-evenly">
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