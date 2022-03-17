import React from 'react';

function SearchInput({handleChange, query, setQuery}) {
  return (
    <input
      type="text"
      className="h-7 w-[500px] rounded-sm text-xs p-2 outline-[#ff9735] focus:outline focus:outline-2 pl-[150px]"
      value={query}
      onChange={(e) => handleChange(e, setQuery)}
    />
  );
}

export default SearchInput;