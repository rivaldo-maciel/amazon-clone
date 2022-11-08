import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import PurchaseFlow from '../../assets/purchaseFlow-2.gif';
import PixIcon from '../../assets/pixIcon.png';
import BarCode from '../../assets/barCode.jpg';

function PaymentMethod() {
  const [method, setMethod] = useState('');
  const history = useHistory();

  const savePaymentMethod = (paymentMethod) => {
    const user = JSON.parse(localStorage.getItem('user'));
    user.data.paymentMethod = paymentMethod;
    localStorage.setItem('user', JSON.stringify(user));
    history.push('/confirm-request');
  }

  return (
    <main className="p-[12px]">
      <img src={PurchaseFlow} alt="purchase flow" className="w-[35rem] ml-[6rem]" />
      <div className="ml-[6rem] mt-[1.5rem] flex">
        <div>
          <h1>Selecione uma forma de pagamento</h1>
          <div className="border border-[#cccccc] w-[35rem] rounded-[2px] p-[10px] mt-[0.6rem]">
            <h4 className="font-bold text-[0.8rem] border-b border-[#cccccc]">Boleto</h4>
            <div
              className={ method === 'Boleto' ? "flex mt-[0.5rem] items-center bg-[#fcf5ee] border border-[#fbd8b4] rounded-[2px] p-[4px]" : "flex mt-[0.5rem] items-center p-[4px]"}
            >
              <input
                type="radio"
                name="method"
                value="Boleto"
                onChange={({target}) => setMethod(target.value)}
              />
              <img src={BarCode} alt="bar code icon" className="w-[2rem] h-[1rem] ml-[0.3rem]"/>
              <span className="text-[0.7rem] ml-[0.5rem]">
                Vencimento em 1 dia útil. A data de entrega será alterada devido
                ao tempo de processamento do Boleto. Veja mais na próxima página.
              </span>
            </div>
            <h4 className="font-bold text-[0.8rem] border-b border-[#cccccc] mt-[2rem]">Pix</h4>
            <div
              className={ method === 'Pix' ? "flex mt-[8px] items-center bg-[#fcf5ee] border border-[#fbd8b4] rounded-[2px] p-[4px]" : "flex mt-[8px] items-center p-[4px]"}
            >
              <input
                type="radio"
                name="method"
                value="Pix"
                onChange={({target}) => setMethod(target.value)}
              />
              <img src={PixIcon} alt="bar code icon" className="w-[1.5rem] ml-[0.3rem]"/>
              <span className="text-[0.7rem] ml-[0.3rem]">
                Vencimento em 30 minutos. Após o pagamento seu pedido será processado.
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col border border-[#cccccc] h-[5rem] w-[14rem] mt-[2rem] ml-[18px] rounded-[2px] p-[8px] bg-[#f1f1f1]">
          <button
            type="button"
            className="text-[0.7rem] bg-gradient-to-t from-[#f0c14b] to-[#f7dfa5] hover:brightness-[96%] rounded-[2px] border border-[#a88734] h-[1.5rem]"
            onClick={() => savePaymentMethod(method)}
            disabled={method === '' && true }
          >
            Continuar
          </button>
          <span className="text-[0.6rem] text-center mt-[0.6rem]">Você pode revisar este pedido antes que seja finalizado</span>
        </div>
      </div>
    </main>
  );
}

export default PaymentMethod;
