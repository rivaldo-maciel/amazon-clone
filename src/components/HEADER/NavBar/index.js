import React from 'react';
import { links } from './links';

function NavBar() {
  return (
    <nav className="h-[2.6rem] bg-[#212F42] flex items-center justify-between text-white text-[0.85rem]">
      <div className="w-[66rem] flex justify-evenly">
        {links.map((link) => (
        <a
          href="/"
          className="p-[4px] border border-[transparent] hover:border hover:border-white rounded-sm"
          key={link}
        >
          {link}
        </a>
      ))}
      </div>
      <h1 className="text-[1.3rem] font-bold mr-[1rem] cursor-pointer">Esquenta Black Friday</h1>
    </nav>
  );
}

export default NavBar;
