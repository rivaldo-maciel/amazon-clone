import React from 'react';
import Alert from '../../../assets/alertTrinagle.png';
import BarCode from '../../../assets/barCodeImage.jpeg';

function BankSlip() {
  const total = JSON.parse(localStorage.getItem('endTotal'));
  return (
    <div className='text-[10px] w-[500px] mt-[10px] bg-white p-[10px] border-[1.5px] border-l-[8px] border-[#FFAF38] rounded-[5px]'>
      <div className="flex">
        <img src={Alert} alt="alert" className="w-[15px]" />
        <span className="ml-[10px]">
          Realize o pagamento do Boleto antes de seu vencimento para concluir
          sua compra.
        </span>
      </div>
      <div className="ml-[25px]">
        <h3 className="font-bold mt-[10px]">Vencimento</h3>
        <p>Quinta-feira, 7 de Abr.</p>
        <h3 className="font-bold mt-[10px]">Valor do pedido</h3>
        <p>{`R$ ${total}`}</p>
        <p className="font-bold mt-[10px]">
          Código do Boleto 73590.00331 89850.969657 90715.837743 3
          89471000025771
        </p>
        <img
          src={BarCode}
          alt="bar code"
          className="w-[500px] h-[30px] mt-[10px] ml-[-15px]"
        />
        <div className="flex flex-col mt-[10px]">
          <button
            type="button"
            className="border border-[#c9c9c9] w-[100px] rounded-md p-[2px]"
          >
            Visualizar Boleto</button>
          <button
            type="button"
            className="border border-[#c9c9c9] w-[130px] rounded-md p-[2px] mt-[10px]"
          >
            Copia Código do Boleto</button>
        </div>
          <hr className="mt-[10px]"></hr>
          <div className="text-[9px]">
          <h4 className="font-bold mt-[15px]">Informações importantes sobre o pagamento do Boleto</h4>
          <p>
            - Você pode não conseguir realizar o pagamento imediatamente. Neste
            caso, <strong>tente novamente após 30 segundos.</strong>
          </p>
          <p>
            - Se o Boleto não for pago até a data de vencimento, seu pedido será
            cancelado. O Boleto estará disponível em Seus pedidos até esta data.
          </p>
          <p>
            <strong>- Evite pagar o boleto no dia do vencimento caso haja algum feriado
            local em sua cidade, assim como após o expediente bancário em dias
            úteis.</strong> Alguns lugares recebem o pagamento, mas só o repassam para a
            Amazon no dia útil seguinte, quando o boleto pode já ter vencido.
            Atente-se às regras de onde você fará o pagamento para evitar que seu
            pedido seja cancelado. - Devido à situação com a COVID-19,
            recomendamos que os pagamentos de boletos sejam realizados pelos
            canais digitais do seu banco (aplicativo ou Internet Banking). Caso
            não tenha acesso a estes canais, veja quais outras formas de pagamento
            são aceitas para que você não precise sair de casa.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BankSlip;
