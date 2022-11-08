import React from 'react';
import {useHistory} from 'react-router-dom';

function CardTotal() {
  const cartList = JSON.parse(localStorage.getItem("cart"));
  const total = cartList.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
  const history = useHistory();

  const closeOrder = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      return history.push('/login');
    }
    return history.push('/payment-method');
  }
  return (
    <div className="bg-white p-[20px] ml-[2rem] h-[8rem]">
      <div>
        <span className="text-[1rem]">
          {
            cartList.length === 1
            ? `Subtotal (${cartList.length} item):`
            : `Subtotal (${cartList.length} itens):`
          }
        </span>
        <span
          className="text-[1rem] font-bold ml-[0.2rem]"
        >
          {
            `R$ ${total.toFixed(2)}`
          }
        </span>
      </div>
      <button
        type="button"
        className="bg-[#FFD814] hover:bg-[#F7CA00] w-[14rem] h-[2rem] rounded-md text-[0.8rem] p-[2px] mt-[1.5rem]"
        onClick={closeOrder}
      >Fechar pedido</button>
    </div>
  );
}

export default CardTotal;
