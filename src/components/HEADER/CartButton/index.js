import React from 'react';
import { Link } from 'react-router-dom';
import CartIcon from '../../../assets/Cart-Icon.svg';

function CartButton() {
  const cartList = JSON.parse(localStorage.getItem('cart'));
  return (
    <Link className="flex items-center relative" to="/cart">
      <img src={CartIcon} alt="cart" className="h-7" />
      <span className="text-[#f08804] font-bold w-auto absolute left-[0.5rem] top-[0.5rem]">
        {cartList ? cartList.length : 0}
      </span>
    </Link>
  );
}

export default CartButton;
