import React from 'react';
import alertIcon from '../../../assets/alertIcon.png';

function AlertMessage({ message }) {
  return (
    <div className="flex">
      <img src={alertIcon} alt="alert" className="w-[10px] h-[10px] mt-[4px] rotate-2" />
      <span className="text-[10px] text-red-600 ml-[5px]">{message}</span>
    </div>
  );
}

export default AlertMessage;