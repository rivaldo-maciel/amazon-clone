import React from 'react';
import countries from './countries';

function CountriesFooter() {
  return (
    <div className="text-[10px] mt-[10px] mb-[10px]">
      {
        countries.map((country) => (
          <a className="ml-[4px]" href="/">{country} |</a>
        ))
      }
    </div>
  );
}

export default CountriesFooter;