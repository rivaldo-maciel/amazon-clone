import React from 'react';
import { SearchIcon } from '@heroicons/react/solid';
import CartIcon from '../../assets/Cart-Icon.svg';
import AmazingIcon from '../../assets/amazing.png';

function Header() {
  return (
    <header className="bg-[#060B28] h-10 flex justify-evenly">
      <div className="self-center hover:border-[1px] hover:border-white p-[2px] rounded-sm">
        <a href="/">
          <img src={AmazingIcon} alt="site icon" className="h-7"/>
        </a>
      </div>
      <div className="flex items-center">
        <input type="text" className="h-7 w-[500px] rounded-sm text-xs p-2 outline-[#ff9735] focus:outline focus:outline-2"/>
        <button
          className="bg-[#E7AB56] h-7 w-8 ml-[-32px] rounded-r-sm flex justify-center items-center hover:bg-[#E89A2C]"
        >
            <SearchIcon className="h-5 w-5 text-gray-800"/>
        </button>
      </div>
      <button>
        <div className="text-center">
          <img src={CartIcon} alt="cart" className="h-7 "/>
          <div className="absolute top-[2px] right-[112px] w-[18px]">
            <span className="text-[#DD5303] font-bold w-auto">0</span>
          </div>
        </div>
      </button>
    </header>
  );
}

export default Header;