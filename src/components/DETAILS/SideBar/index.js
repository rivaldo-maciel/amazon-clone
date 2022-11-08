import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import IconLocation from '../../../assets/location.png';
import Padlock from '../../../assets/padlock-sidebar.png';

function SideBar({ title, price, thumbnail }) {
  const [quantity, setQuantity] = useState(1);
  const history = useHistory();

  const saveOnCart = async (title, price, thumbnail, quantity) => {
    const newItem = { title, price, thumbnail, quantity };
    const cartList = JSON.parse(localStorage.getItem('cart'));
    const item = cartList.find((it) => it.title === newItem.title);
    if (item && item.quantity === 30) {
      return alert('limite de quantidade de produto atingido(30)');
    }
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
    <aside className="border border-[#969696] w-[13rem] p-[10px] rounded-md ml-[10px]">
      <div>
        <span className="text-[#9e2727]">R${price}</span>
        <div>
          <a href="/" className="text-[0.7rem] mr-[0.1rem] text-[#007185]">Entrega GRÁTIS:</a>
          <span className="text-[0.8rem] font-bold">Segunda-feira, 4 de Abril</span>
        </div>
        <div className="mt-[10px]">
          <p className="text-[0.8rem]">Ou Entrega mais rápida:</p>
          <p className="text-[0.8rem] font-bold">Quinta-feira, 31 de Março</p>
        </div>
        <div className="text-[0.6rem] text-[#007185] flex items-center mt-[0.6rem]">
          <img src={IconLocation} alt="location" className="w-[0.6rem] h-[0.6rem] mr-[0.6rem]" />
          <a href="/">Selecione o endereço</a>
        </div>
        <div className="mt-[0.6rem]">
          <span className="text-[green]">Em estoque.</span>
        </div>
        <div className="mt-[0.6rem]">
          <label className="text-[0.7rem]">
            Quantidade:
            <select
              className="ml-[0.2rem] w-[2rem] h-[1.5rem]"
              onChange={(e) => setQuantity(Number(e.target.value))}
              value={quantity}
            >
              {Array.from(Array(31).keys())
              .filter((numb) => numb !== 0)
              .map((number) => (
                <option key={number}>{number}</option>
              ))}
            </select>
          </label>
        </div>
        <div className="mt-[0.6rem]">
          <button
            type="button"
            className="bg-[#f3c136] text-[0.6rem] h-[1.4rem] w-[11.5rem] rounded-full"
            onClick={() => saveOnCart(title, price, thumbnail, quantity)}
          >
            Adicionar ao carrinho
          </button>
          <button
            type="button"
            className="bg-[#fa9829] text-[0.6rem] h-[1.4rem] w-[11.5rem] rounded-full"
          >
            Comprar agora
          </button>
        </div>
        <div className="flex mt-[0.8rem]">
          <img src={Padlock} alt="secury transation" className="w-[0.8rem] h-[1rem]"/>
          <a href="/" className="ml-[0.5rem] text-[0.7rem] text-[#007185]">Transação segura</a>
        </div>
        <div className="text-[0.6rem] mt-[0.6rem]">
          <div>
          <span className="text-[gray]">Enviado por</span>
          <span className="ml-[0.5rem]">Amazing.com.br</span>
          </div>
          <div>
          <span className="text-[gray]">Vendido por</span>
          <span className="ml-[0.5rem]">Amazing.com.br</span>
          </div>
        </div>
        <div className="text-[0.7rem] mt-[0.6rem]">
          <input type="checkbox" />
          <span className="ml-[0.2rem]">Sim, eu quero frete GRÁTIS para este pedido com o</span>
          <p className="text-[#007185]">Amazing Prime</p>
        </div>
        <div className="text-[0.7rem] mt-[0.6rem]">
        <input type="checkbox" />
          <span className="ml-[0.2rem]">Comprar este item como presente</span>
        </div>
      </div>
    </aside>
  );
}

export default SideBar;
