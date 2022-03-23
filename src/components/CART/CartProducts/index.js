import React from 'react';
import CardProduct from '../CardProduct';

function CartProducts({ setReload }) {
  const cartList = JSON.parse(localStorage.getItem('cart'));
  const total = cartList.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);

  return (
    <section className="bg-white w-[70%] p-[12px]">
      <div className="flex justify-between border-b border-[#d3d3d3]">
        <h3 className="font-[500] mb-[10px]">Carrinho de Compras</h3>
        <p className="text-[10px] self-end text-[#6d6d6d]">Preço</p>
      </div>
        {
          cartList.map((product) => (
            <CardProduct
              title={product.title}
              price={product.price}
              thumbnail={product.thumbnail}
              quantity={product.quantity}
              setReload={setReload}
              key={product.thumbnail}
            />
          ))
        }
        <div className="flex justify-end">
          <span
            className="text-[12px]"
          >{
            cartList.length === 1 ? `Subtotal (${cartList.length} item):` : `Subtotal (${cartList.length} itens):`
          }
        </span>
          <span className="text-[12px] font-bold ml-[3px]">{`R$ ${total.toFixed(2)}`}</span>
        </div>
    </section>
  );
}

export default CartProducts;