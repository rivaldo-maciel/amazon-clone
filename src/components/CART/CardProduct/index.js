import React, {useState, useEffect } from 'react';

function CardProduct({ title, price, thumbnail, quantity, setReload }) {
  const [qnty, setQnty] = useState(quantity);

  useEffect(() => {
    const cartList = JSON.parse(localStorage.getItem('cart'));
    const newCartList = cartList.filter((product) => product.title !== title);
    const editedItem = cartList.find((product) => product.title === title);
    editedItem.quantity = qnty;
      localStorage.setItem('cart', JSON.stringify([...newCartList, editedItem]));
  }, [qnty, title])

  useEffect(() => {
    setReload(prevState => !prevState);
  }, [qnty, setReload])

  const deleteProduct = () => {
    const cartList = JSON.parse(localStorage.getItem('cart'));
    const itemToDelete = cartList.find((product) => product.title === title);
    const newCartList = cartList.filter((product) => product.title !== itemToDelete.title);
    localStorage.setItem('cart', JSON.stringify(newCartList));
    setReload(prevState => !prevState);
  }

  return (
    <div className="grid grid-cols-[6.5rem_auto_auto] border-b border-[#d3d3d3] pb-[12px] w-[100%]">
      <div>
        <img
          src={thumbnail}
          alt="product"
          className="w-[6rem]"
        />
      </div>
      <div className="ml-[0.6rem]">
        <p className="text-[1rem]">{title}</p>
        <p className="text-[0.8rem] text-[green]">Em estoque</p>
        <div className="flex">
          <select
            value={quantity}
            className="text-[0.8rem] h-[1.8rem] shadow-md outline-[#3cc8eb] rounded-[5px] bg-[#e7e7e7] border border-[#9e9e9e]"
            onChange={({ target }) => {
              setQnty(Number(target.value))
            }}
          >
            {Array.from(Array(31).keys())
              .filter((numb) => numb !== 0)
              .map((number) => (
                <option className="" key={number}>{number}</option>
              ))}
          </select>
          <span className="text-[0.8rem] text-[#aaa9a9] self-center ml-[0.3rem]">|</span>
          <span
            className="text-[10px] ml-[0.2rem] self-center text-[#007185] cursor-pointer"
            onClick={deleteProduct}
          >Excluir</span>
        </div>
      </div>
      <div className="justify-self-end">
        <span className="font-bold mr-0">{`R$ ${price}`}</span>
      </div>
    </div>
  );
}

export default CardProduct;
