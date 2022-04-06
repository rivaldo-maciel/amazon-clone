import React from 'react';
import Header from '../../components/HEADER/Header';
import Footer from '../../components/FOOTER/Footer';
import Pix from '../../components/FINISH-PAYMENT/Pix';
import BankSlip from '../../components/FINISH-PAYMENT/BankSlip';
import CheckIcon from '../../assets/check.png';

function FinishPayment() {
  const { paymentMethod } = JSON.parse(localStorage.getItem('user')).data;
  const BankSlipTitle = 'Obrigado, Seu pedido foi feito e será processado após o pagamento do Boleto';
  const PixTitle = 'Seu pedido foi reservado. Pague em até 30 minutos para processarmos seu pedido';

  return (
    <main>
      <Header />
      <section className="p-[10px]">
        <div className="bg-[#ececec] rounded-[10px] p-[10px]">
          <div className="bg-white p-[15px] rounded-[10px] border border-[#d3d2d2]">
            {
              paymentMethod === 'Boleto'
              ? <h1 className="text-[12px] font-bold">{BankSlipTitle}</h1>
              : (
                <div className="flex">
                  <img src={CheckIcon} alt="check" className="w-[14px] h-[14px]" />
                  <h1 className="text-[12px] text-green-600 font-bold ml-[5px]">{PixTitle}</h1>
                </div>
              )
            }
            {
              paymentMethod === 'Boleto'
              ? <BankSlip />
              : <Pix />
            }
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default FinishPayment;