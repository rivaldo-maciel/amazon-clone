import React from 'react';
import PurchaseFlow from '../../assets/purchaseFlow-2.gif';
import PixIcon from '../../assets/pixIcon.png';
import BarCode from '../../assets/barCode.jpg';

function PaymentMethod() {
  return (
    <main className="p-[12px]">
      <img src={PurchaseFlow} alt="purchase flow" className="w-[400px] ml-[100px]" />
      <div className="ml-[100px] mt-[20px] flex">
        <div>
          <h1>Selecione uma forma de pagamento</h1>
          <div className="border border-[#cccccc] w-[550px] rounded-[2px] p-[10px] mt-[10px]">
            <h4 className="font-bold text-[12px] border-b border-[#cccccc]">Boleto</h4>
            <div className="flex mt-[8px] items-center">
              <input type="radio" />
              <img src={BarCode} alt="bar code icon" className="w-[20px] h-[14px] ml-[5px]"/>
              <span className="text-[10px] ml-[5px]">
                Vencimento em 1 dia útil. A data de entrega será alterada devido
                ao tempo de processamento do Boleto. Veja mais na próxima página.
              </span>
            </div>
            <h4 className="font-bold text-[12px] border-b border-[#cccccc] mt-[30px]">Pix</h4>
            <div className="flex mt-[8px] items-center">
              <input type="radio" />
              <img src={PixIcon} alt="bar code icon" className="w-[20px] ml-[5px]"/>
              <span className="text-[10px] ml-[5px]">
                Vencimento em 30 minutos. Após o pagamento seu pedido será processado.
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col border border-[#cccccc] h-[80px] w-[200px] mt-[34px] ml-[18px] rounded-[2px] p-[8px] bg-[#f1f1f1]">
          <button
            type="button"
            className="text-[10px] bg-gradient-to-t from-[#f0c14b] to-[#f7dfa5] hover:brightness-[96%] rounded-[2px] border border-[#a88734] h-[22px]"
          >
            Continuar
          </button>
          <span className="text-[10px] text-center mt-[10px]">Você pode revisar este pedido antes que seja finalizado</span>
        </div>
      </div>
    </main>
  );
}

export default PaymentMethod;
