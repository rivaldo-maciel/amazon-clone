import React from 'react';
import moment from 'moment';
import Alert from '../../../assets/alertTrinagle.png';
import QrCode from '../../../assets/qrCode.png';

function Pix() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const currHour = `${hours}:${minutes}`;
  const expireIn = moment(currHour, 'hh:mm').add(30, 'minutes').format('hh:mm');
  const total = JSON.parse(localStorage.getItem('endTotal'));
  return (
    <div className="text-[0.7rem] w-[32rem] mt-[0.7rem] bg-white p-[10px] border-[1.5px] border-l-[8px] border-[#FFAF38] rounded-[5px]">
      <div className="flex">
        <img src={Alert} alt="alert" className="w-[1rem]" />
        <span className="font-bold ml-[0.5rem]">Vencimento</span>
      </div>
      <div className="ml-[1.5rem] text-[0.8rem]">
        <p className="mt-[0.7rem]">{`Hoje, ${expireIn} - Horário de Brasília`}</p>
        <p className="font-bold mt-[0.7rem]">Valor do pedido</p>
        <p className="mt-[0.7rem]">{`R$ ${total}`}</p>
        <img src={QrCode} alt="qr code" className="w-[14rem]" />
        <p className="font-bold mt-[0.7rem]">
          Em caso de erro copie o Código abaixo:
        </p>
        <p className="mt-[10px] text-[0.65rem]">
          00020101021226800014br.gov.bcb.pix2558pix.juno.com.br/qr/v2/7F6415B5B6C0A9224BBF9
          23BB97D49CF05165204000053039865802BR5905EBANX6008CURITIBA62070503***63048B04
        </p>
        <button
          type="button"
          className="border border-[#c9c9c9] w-[8rem] rounded-md p-[2px] mt-[0.7rem] shadow-md"
        >
          Copiar código Pix
        </button>
        <p className="font-bold mt-[0.7rem]">Informações importantes sobre o pagamento</p>
        <p className="mt-[0.7rem]">
          Após finalizar o pedido, realize o pagamento em até 30 minutos. Caso
          contrário, o pedido será cancelado e um novo deverá ser feito.
          Lembre-se que Ofertas podem ter expirado após esse período
        </p>
        <p className="font-bold mt-[0.7rem]">Como pagar com pix</p>
        <ol className="list-decimal list-inside my-5 pl-2">
          <option>
            1. Entre no aplicativo da sua instituição financeira e acesse o
            ambiente Pix;
          </option>
          <option>2. Escolha a opção de Ler o QR Code;</option>
          <option>3. Escaneie o QR Code;</option>
          <option>4. Confirme as informações e confirme o pagamento.</option>
        </ol>
      </div>
    </div>
  );
}

export default Pix;