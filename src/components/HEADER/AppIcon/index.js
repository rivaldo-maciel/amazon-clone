import React from 'react'
import AmazingIcon from '../../../assets/amazon-logo.png'

function AppIcon() {
  return (
    <div className="self-center hover:border-[1px] hover:border-white p-[2px] rounded-sm mt-[5px]">
        <a href="/">
          <img src={AmazingIcon} alt="site icon" className="h-7"/>
        </a>
      </div>
  );
}

export default AppIcon;
