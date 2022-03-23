import React, {useState} from 'react';
import CardProduct from '../CardProduct';

function CartProducts() {
  const [reload, setReload] = useState(false);
  const cartList = JSON.parse(localStorage.getItem('cart'));

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
            />
          ))
        }
    </section>
  );
}

export default CartProducts;