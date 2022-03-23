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
    <aside className="border border-[#969696] w-[200px] p-[10px] rounded-md ml-[10px]">
      <div>
        <span className="text-[#9e2727]">R${price}</span>
        <div>
          <a href="/" className="text-[11px] mr-[2px] text-[#007185]">Entrega GRÁTIS:</a>
          <span className="text-[12px] font-bold">Segunda-feira, 4 de Abril</span>
        </div>
        <div className="mt-[10px]">
          <p className="text-[12px]">Ou Entrega mais rápida:</p>
          <p className="text-[12px] font-bold">Quinta-feira, 31 de Março</p>
        </div>
        <div className="text-[10px] text-[#007185] flex items-center mt-[10px]">
          <img src={IconLocation} alt="location" className="w-[10px] h-[10px] mr-[10px]" />
          <a href="/">Selecione o endereço</a>
        </div>
        <div className="mt-[10px]">
          <span className="text-[green]">Em estoque.</span>
        </div>
        <div className="mt-[10px]">
          <label className="text-[11px]">
            Quantidade:
            <select
              className="ml-[3px] w-[30px] h-[20px]"
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
        <div className="mt-[10px]">
          <button
            type="button"
            className="bg-[#f3c136] text-[10px] h-[22px] w-[180px] rounded-full"
            onClick={() => saveOnCart(title, price, thumbnail, quantity)}
          >
            Adicionar ao carrinho
          </button>
          <button
            type="button"
            className="bg-[#fa9829] text-[10px] h-[22px] w-[180px] rounded-full"
          >
            Comprar agora
          </button>
        </div>
        <div className="flex mt-[12px]">
          <img src={Padlock} alt="secury transation" className="w-[10px] h-[15px]"/>
          <a href="/" className="ml-[8px] text-[12px] text-[#007185]">Transação segura</a>
        </div>
        <div className="text-[10px] mt-[10px]">
          <div>
          <span className="text-[gray]">Enviado por</span>
          <span className="ml-[8px]">Amazing.com.br</span>
          </div>
          <div>
          <span className="text-[gray]">Vendido por</span>
          <span className="ml-[8px]">Amazing.com.br</span>
          </div>
        </div>
        <div className="text-[12px] mt-[10px]">
          <input type="checkbox" />
          <span className="ml-[4px]">Sim, eu quero frete GRÁTIS para este pedido com o</span>
          <p className="text-[#007185]">Amazing Prime</p>
        </div>
        <div className="text-[12px] mt-[10px]">
        <input type="checkbox" />
          <span className="ml-[4px]">Comprar este item como presente</span>
        </div>
      </div>
    </aside>
  );
}

export default SideBar;
