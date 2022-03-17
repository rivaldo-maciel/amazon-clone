import React from 'react';
import { SearchIcon } from '@heroicons/react/solid';

function SearchButton({ searchProducts }) {
  return (
    <button
      className="bg-[#E7AB56] h-7 w-8 ml-[-32px] rounded-r-sm flex justify-center items-center hover:bg-[#E89A2C]"
      onClick={searchProducts}
    >
      <SearchIcon className="h-5 w-5 text-gray-800" />
    </button>
  );
}

export default SearchButton;
