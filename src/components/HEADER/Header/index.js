import React from 'react';
import AppIcon from '../AppIcon';
import SelectCategories from '../SelectCategories';
import SearchInput from '../SearchInput';
import SearchButton from '../SearchButton';
import CartButton from '../CartButton';

function Header() {
  return (
    <header className="bg-[#060B28] h-10 flex justify-evenly">
      <AppIcon />
      <div className="flex items-center">
        <SelectCategories />
        <SearchInput />
        <SearchButton />
      </div>
      <CartButton />
    </header>
  );
}

export default Header;