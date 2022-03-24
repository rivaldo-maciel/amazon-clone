import React from 'react';
import { useHistory } from 'react-router-dom';
import {useSelector} from 'react-redux';
import Stars from '../../../assets/stars.png';

function CartSideBar() {
  const {results} = useSelector(state => state.products);
  const products = results.filter((_product, index) => index >= 10 && index <= 15);
  const history = useHistory();

  const saveOnCart = async (title, price, thumbnail) => {
    const newItem = { title, price, thumbnail, quantity: 1 };
    const cartList = JSON.parse(localStorage.getItem('cart'));
    const item = cartList.find((it) => it.title === newItem.title);
    if (item) {
      item.quantity += newItem.quantity;
      const newCartList = cartList.filter((it) => it.title !== newItem.title);
      localStorage.setItem('cart', JSON.stringify([...newCartList, item]));
      localStorage.setItem('itemPic', JSON.stringify(thumbnail));
      history.push('/prevcart');
      return
    } 
    localStorage.setItem('cart', JSON.stringify([...cartList, newItem]));
    localStorage.setItem('itemPic', JSON.stringify(thumbnail));
    history.push('/prevcart');
  }
  return (
    <aside className="bg-white p-[10px] w-[200px] ml-[30px] mt-[30px] rounded-md">
      <div>
        <p className="text-[10px] font-bold">Os clientes que compraram os itens que se encontram em seu histórico recente também compraram</p>
      </div>
      {
        products.map((product) => (
          <div className="flex mt-[10px]">
            <div>
              <img src={product.thumbnail} alt="product" className="w-[60px]" />
            </div>
            <div className="flex flex-col ml-[10px]">
              <span className="text-[12px] truncate w-[100px] text-[#007185]">{product.title}</span>
              <img src={Stars} alt="stars" className="w-[60px]"/>
              <span className="text-[12px]">{`R$ ${product.price}`}</span>
              <button
                type="button"
                className="text-[8px] bg-[#FFD814] hover:bg-[#F7CA00] w-[100px] h-[15px] rounded-md"
                onClick={() => saveOnCart(product.title, product.price, product.thumbnail)}
              >
                Adicionar ao carrinho
              </button>
            </div>
          </div>
        ))
      }
    </aside>
  );
}

export default CartSideBar;