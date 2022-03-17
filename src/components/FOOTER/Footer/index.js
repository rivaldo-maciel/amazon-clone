import React from 'react';
import LinksFooterUl from '../LinksFooterUl';
import linksFooter from '../Footer/linksFooter';
import Logo from '../../../assets/amazing.png';
import CountriesFooter from '../CountriesFooter';

function Footer() {
  return (
    <footer className="h-[470px] mt-[50px] text-white">
      <a href="#top">
        <div className="bg-[#37475A] h-[45px] flex justify-center items-center hover:bg-[#435164] cursor-pointer">
        <span className="text-[8px]">Voltar ao início</span>
      </div>
      </a>
      <div className="bg-[#232F3E] h-[300px] flex justify-center items-center">
        <div className="h-[240px] w-[600px] flex justify-evenly">
          <LinksFooterUl infos={linksFooter.meetUs} />
          <LinksFooterUl infos={linksFooter.earnyMoney} />
          <LinksFooterUl infos={linksFooter.letUsHelp} />
          <LinksFooterUl infos={linksFooter.payment} />
        </div>
      </div>
        <hr className="text-[#969696]"/>
        <div className="bg-[#232F3E] flex justify-center">
          <div className="flex flex-col justify-center">
            <a href="/" className="self-center">
              <img className="h-[30px] mt-[10px]" src={Logo} alt="amazing" />
            </a>
            <CountriesFooter />
          </div>
        </div>
      <div className="bg-[#131A22] h-[160px] flex justify-center items-center">
        <p>Aplicação feita unicamente para fins de estudos, todos os direitos reservados á: amazon.com.br e mercadolivre.com.br</p>
      </div>
    </footer>
  );
}

export default Footer;