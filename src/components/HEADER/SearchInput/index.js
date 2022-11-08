import React from 'react';

function SearchInput({handleChange, query, setQuery}) {
  return (
    <input
      type="text"
      className="h-[2.5rem] w-[40rem] rounded-[4px] text-xs p-2 outline-[#ff9735] focus:outline focus:outline-[3.2px] pl-[150px]"
      value={query}
      onChange={(e) => handleChange(e, setQuery)}
    />
  );
}

export default SearchInput;