import React from 'react';

function IconDetails({ src, title }) {
  return (
    <a href="/">
      <div className="text-[10px] text-center mt-[20px] text-[#007185]">
        <div className="flex justify-center">
          <img src={src} alt="politic icon" className="w-[30px]" />
        </div>
        <div className="w-[70px]">
          <span>{title}</span>
        </div>
      </div>
    </a>
  );
}

export default IconDetails;
