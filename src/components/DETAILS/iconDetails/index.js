import React from 'react';

function IconDetails({ src, title }) {
  return (
    <a href="/">
      <div className="text-[0.6rem] text-center mt-[2rem] text-[#007185]">
        <div className="flex justify-center">
          <img src={src} alt="politic icon" className="w-[2rem]" />
        </div>
        <div className="w-[4rem]">
          <span>{title}</span>
        </div>
      </div>
    </a>
  );
}

export default IconDetails;
