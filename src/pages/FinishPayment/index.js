import React from 'react';
import Header from '../../components/HEADER/Header';
import Footer from '../../components/FOOTER/Footer';
import BankSlip from '../../components/FINISH-PAYMENT/BankSlip';

function FinishPayment() {
  return (
    <main>
      <Header />
      <section className="p-[10px]">
        <div className="bg-[#ececec] rounded-[10px] p-[10px]">
          <div className="bg-white p-[15px] rounded-[10px] border border-[#d3d2d2]">
            <h1 className="text-[12px] font-bold">Obrigado, Seu pedido foi feito e será processado após o pagamento do Boleto</h1>
            <BankSlip />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default FinishPayment;