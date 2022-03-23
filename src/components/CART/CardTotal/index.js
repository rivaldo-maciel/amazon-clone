import React from 'react';

function CardTotal() {
  const cartList = JSON.parse(localStorage.getItem("cart"));
  const total = cartList.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
  return (
    <div className="bg-white p-[20px] ml-[30px] h-[110px]">
      <div>
        <span className="text-[12px]">
          {
            cartList.length === 1
            ? `Subtotal (${cartList.length} item):`
            : `Subtotal (${cartList.length} itens):`
          }
        </span>
        <span
          className="text-[12px] font-bold ml-[3px]"
        >
          {
            `R$ ${total.toFixed(2 )}`
          }
        </span>
      </div>
      <button
        type="button"
        className="bg-[#FFD814] hover:bg-[#F7CA00] w-[160px] rounded-md text-[12px] p-[2px] mt-[20px]"
      >Fechar pedido</button>
    </div>
  );
}

export default CardTotal;
