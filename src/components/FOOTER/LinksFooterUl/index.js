import React from 'react';

function LinksFooterUl({infos}) {
  return (
    <div className="w-[110px]">
    <h4 className=" text-[10px] font-bold w-[120px]">{infos.title}</h4>
    <ul className="text-[10px] mt-[20px]">
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