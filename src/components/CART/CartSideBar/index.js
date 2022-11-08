import React from 'react';
import { Link, useHistory } from 'react-router-dom';
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
    <aside className="bg-white p-[10px] w-[17rem] ml-[2rem] mt-[2rem] rounded-md">
      <div>
        <p className="text-[0.8rem] font-bold">Os clientes que compraram os itens que se encontram em seu histórico recente também compraram</p>
      </div>
      {
        products.map((product) => (
          <Link
            to={`/products/${product.id}`}
            className="flex mt-[0.6rem]"
            key={product.id}
          >
            <div>
              <img src={product.thumbnail} alt="product" className="w-[5rem]" />
            </div>
            <div className="flex flex-col ml-[0.6rem]">
              <span className="text-[0.8rem] truncate w-[10rem] text-[#007185]">{product.title}</span>
              <img src={Stars} alt="stars" className="w-[4rem]"/>
              <span className="text-[0.8rem]">{`R$ ${product.price}`}</span>
              <button
                type="button"
                className="text-[0.6rem] bg-[#FFD814] hover:bg-[#F7CA00] w-[8rem] h-[1.2rem] rounded-md"
                onClick={() => saveOnCart(product.title, product.price, product.thumbnail)}
              >
                Adicionar ao carrinho
              </button>
            </div>
          </Link>
        ))
      }
    </aside>
  );
}

export default CartSideBar;