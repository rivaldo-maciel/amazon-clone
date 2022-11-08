import React from 'react';
import Star from '../../../assets/stars.png';

function CardProduct({ title, price, thumbnail, id }) {
  return (
      <div className="p-[10px]">
        <div className="flex justify-center">
          <img className="w-[8rem]" src={thumbnail} alt="product" />
        </div>
        <div className="mt-[0.8rem]">
          <p className="text-[1rem]">{title}</p>
          <img src={Star} alt="star" className="w-[5rem] mt-[0.2rem]" />
          <div className="mt-[0.4rem]">
            <span className="text-[0.7rem] relative top-[-0.2rem]">R$</span>
            <span className="text-[1rem]">{price}</span>
          </div>
        </div>
      </div>
  );
}

export default CardProduct;
