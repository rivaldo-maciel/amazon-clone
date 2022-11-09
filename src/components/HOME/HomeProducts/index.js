import React from 'react';
import CardFourImages from '../CardFourImages';
import cardImages from './cardImages';
import FanImage from '../../../assets/home-products/img-second-card.jpg';
import Sandals from '../../../assets/home-products/img-fifith-card.jpg';

function HomeProducts() {
  return (
    <section className="flex justify-evenly mt-[-16rem] z-[1] relative">
      <CardFourImages infos={cardImages.weakConsumer}/>
      <div className="bg-white w-[19rem] h-[22rem] p-[20px] cursor-pointer">
        <div>
          <img src={FanImage} alt="fan" />
          <div className="mt-3">
            <p className="text-[1rem]">Ventilador de Teto, Fênix 370, Branco, 127v, Ventisol</p>
            <p className="font-bold text-[1.3rem]">R$180,00</p>
          </div>
        </div>
      </div>
      <CardFourImages infos={cardImages.devices}/>
      <div className="bg-white w-[19rem] h-[22rem] p-[20px] cursor-pointer">
        <div>
          <img src={Sandals} alt="air" />
          <div className="mt-3">
            <p className="text-[1rem]">Seleção de calçados Grendene Kids</p>
            <p className="text-[1.3rem] font-bold">R$25,90-R$69,90</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeProducts;