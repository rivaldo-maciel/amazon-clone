import React from 'react'
import AmazingIcon from '../../../assets/amazon-logo.png'

function AppIcon() {
  return (
    <div className="flex items-center justify-center w-[8rem] h-[3rem] self-center hover:border-[1px] hover:border-white rounded-sm mt-[5px]">
        <a href="/">
          <img src={AmazingIcon} alt="site icon" className="w-[6.5rem]"/>
        </a>
      </div>
  );
}

export default AppIcon;
