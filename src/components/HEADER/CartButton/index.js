import React from 'react';
import CartIcon from '../../../assets/Cart-Icon.svg';

function CartButton() {
  const cartList = JSON.parse(localStorage.getItem('cart'));
  return (
    <button>
        <div className="text-center">
          <img src={CartIcon} alt="cart" className="h-7"/>
          <div className="absolute top-[2px] right-[108px] w-[18px]">
            <span className="text-[#DD5303] font-bold w-auto">{cartList ? cartList.length : 0}</span>
          </div>
        </div>
      </button>
  );
}

export default CartButton;