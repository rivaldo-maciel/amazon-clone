import React from 'react';

function LinksFooterUl({infos}) {
  return (
    <div className="w-[6.8rem]">
    <h4 className=" text-[0.62rem] font-bold">{infos.title}</h4>
    <ul className="text-[0.6rem] mt-[1.5rem]">
      {
        infos.links.map((link, index) => (
          <li key={index}><a href="/">{link}</a></li>
        ))
      }
    </ul>
  </div>
  );
}

export default LinksFooterUl;