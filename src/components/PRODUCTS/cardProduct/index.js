import React from 'react';
import Star from '../../../assets/stars.png';

function CardProduct({ title, price, thumbnail, id }) {
  return (
      <div>
        <div className="flex justify-center">
          <img className="w-[100px]" src={thumbnail} alt="product" />
        </div>
        <div className="mt-[10px]">
          <p className="text-[12px]">{title}</p>
          <img src={Star} alt="star" className="w-[60px] mt-[2px]" />
          <div className="mt-[4px]">
            <span className="text-[10px] relative top-[-4px]">R$</span>
            <span>{price}</span>
          </div>
        </div>
      </div>
  );
}

export default CardProduct;
