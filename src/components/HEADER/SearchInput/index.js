import React, { useEffect, useRef } from 'react';

function SearchInput({handleChange, query, setQuery, category}) {
  const ref = useRef();

  useEffect(() => {
    const padding = (category.length * 8) + 20;
    ref.current.style.paddingLeft = `${padding}px`;
  }, [category]);

  return (
    <input
      type="text"
      className="h-[2.5rem] w-[40rem] rounded-[4px] text-[1rem] p-2 outline-[#ff9735] focus:outline focus:outline-[3.2px]"
      value={query}
      onChange={(e) => handleChange(e, setQuery)}
      ref={ref}
    />
  );
}

export default SearchInput;