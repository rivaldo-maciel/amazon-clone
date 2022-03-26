import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import purchaseFlow from '../../assets/purchaseFlow-1.gif';
import countries from './countries.json';

function Address() {
  const [country, setCountry] = useState('Afeganistão');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [cep, setCep] = useState('');
  const [phone, setPhone] = useState('');

  const history= useHistory();

  const saveUserData = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    user.data = {country, name, address, city, state, cep, phone};
    localStorage.setItem('user', JSON.stringify(user));
    history.push('/payment-method');
  }
  return (
    <main className="flex flex-col">
      <div className="p-[10px] self-center">
      <img src={purchaseFlow} alt="purchase flow" className="w-[400px]" />
        <h1 className="w-[600px] mt-[30px] text-[18px] text-gray-800">Selecionar um endereço de envio</h1>
        <p className="w-[800px] mt-[15px] text-[10px] text-gray-800 self-start">
          Insira um endereço de envio para esse pedido. Indique também se o
          endereço de cobrança é o mesmo que o endereço de envio inserido. Ao
          concluir, clique no botão "Continuar". Ou, se estiver enviando os
          itens para mais de um destino, clique no botão "Adicionar outro
          endereço" para inserir endereços adicionais.
        </p>
        <hr className="mt-[20px]"></hr>
      </div>
      <form className="ml-[110px] w-[350px] text-gray-800 mb-[100px]">
        <h1 className="font-[600] text-gray-800 text-[14px]">Adicionar um novo endereço</h1>
        <label className="flex flex-col mt-[15px] text-[10px] font-[800]">
          País/Região
          <select
            className="h-[20px] border border-[#bcc1c8] text-[10px] bg-gradient-to-t from-[#e7e9ec] outline-none to-[#f7f8fa] rounded-[2px]"
            onChange={({target}) => setCountry(target.value)}
          >
            {
              countries.map((country) => (
                <option>{country.nome}</option>
              ))
            }
          </select>
        </label>
        <label className="flex flex-col mt-[15px] text-[10px] font-[800]">
          Nome completo (Nome e Sobrenome)
          <input
            type="text"
            className="border border-[#bcc1c8] h-[20px] text-[10px] rounded-[2px] outline-none p-[5px]"
            onChange={({target}) => setName(target.value)}
          />
        </label>
        <label className="flex flex-col mt-[15px] text-[10px] font-[800]">
          Endereço
          <input
            type="text"
            placeholder="Endereço, caixa postal, nome da empresa, A/C"
            className="border border-[#bcc1c8] h-[20px] text-[10px] rounded-[2px] outline-none p-[5px]"
            onChange={({target}) => setAddress(target.value)}
          />
        </label>
        <label className="flex flex-col mt-[15px] text-[10px] font-[800]">
          Cidade
          <input
            type="text"
            className="border border-[#bcc1c8] h-[20px] text-[10px] rounded-[2px] outline-none p-[5px]"
            onChange={({target}) => setCity(target.value)}
          />
        </label>
        <label className="flex flex-col mt-[15px] text-[10px] font-[800]">
          Estado/ Província / Região
          <input
            type="text"
            className="border border-[#bcc1c8] h-[20px] text-[10px] rounded-[2px] outline-none p-[5px]"
            onChange={({target}) => setState(target.value)}
          />
        </label>
        <label className="flex flex-col mt-[15px] text-[10px] font-[800]">
          CEP
          <input
            type="text"
            className="border border-[#bcc1c8] h-[20px] text-[10px] rounded-[2px] outline-none p-[5px]"
            onChange={({target}) => setCep(target.value)}
          />
        </label>
        <label className="flex flex-col mt-[15px] text-[10px] font-[800]">
          Telefone
          <input
            type="text"
            className="border border-[#bcc1c8] h-[20px] text-[10px] rounded-[2px] outline-none p-[5px]"
            onChange={({target}) => setPhone(target.value)}
          />
        </label>
        <button
          type="button"
          className="text-[10px] bg-gradient-to-t from-[#f0c14b] to-[#f7dfa5] hover:brightness-[96%] rounded-[2px] border border-[#a88734] mt-[10px] h-[22px] p-1"
          onClick={saveUserData}
        >
          Usar este endereço
        </button>
      </form>
    </main>
  );
}

export default Address;
