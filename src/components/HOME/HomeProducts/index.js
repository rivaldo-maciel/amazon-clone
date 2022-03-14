import React from 'react';
import CardFourImages from '../CardFourImages';
import cardImages from './cardImages';
import FanImage from '../../../assets/home-products/img-second-card.jpg';
import Sandals from '../../../assets/home-products/img-fifith-card.jpg';

function HomeProducts() {
  return (
    <section className="flex justify-evenly mt-[-230px] z-[1] relative">
      <CardFourImages infos={cardImages.weakConsumer}/>
      <CardFourImages infos={cardImages.devices}/>
      <div className="bg-white w-[230px] h-[260px] p-[10px]">
        <div>
          <img src={FanImage} alt="fan" />
          <div className="mt-3">
            <p className="text-[10px]">Ventilador de Teto, Fênix 370, Branco, 127v, Ventisol</p>
            <p>R$180,00</p>
          </div>
        </div>
      </div>
      <div className="bg-white w-[230px] h-[260px] p-[10px]">
        <div>
          <img src={Sandals} alt="air" />
          <div className="mt-3">
            <p>R$25,90-R$69,90</p>
            <p className="text-[10px]">Seleção de calçados Grendene Kids</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeProducts;