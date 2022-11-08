import React from 'react';
import { SearchIcon } from '@heroicons/react/solid';

function SearchButton({ searchProducts }) {
  return (
    <button
      className="bg-[#E7AB56] h-[2.5rem] w-[3rem] ml-[-3rem] rounded-r-sm flex justify-center items-center hover:bg-[#E89A2C]"
      onClick={searchProducts}
    >
      <SearchIcon className="h-[1.6rem] text-gray-800"/>
    </button>
  );
}

export default SearchButton;
