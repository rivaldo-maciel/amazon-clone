import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { Pagination, Navigation } from "swiper";
import Stars from '../../../assets/stars.png';

function CarouselProducts() {
  const {results} = useSelector(state => state.products);
  const history = useHistory();

  const saveOnCart = async (title, price, thumbnail) => {
    const item = { title, price, thumbnail, quantity: 1 };
    const cartList = JSON.parse(localStorage.getItem('cart'));
    localStorage.setItem('cart', JSON.stringify([...cartList, item]));
    localStorage.setItem('itemPic', JSON.stringify(thumbnail));
    history.push('/prevcart');
  }
  return (
    <div className="p-[15px] bg-white w-[100%] self-center">
      <p className="text-[12px]">Melhores escolhar para você</p>
      <Swiper
        slidesPerView={5}
        spaceBetween={0}
        slidesPerGroup={5}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper flex h-[200px] swiper-products"
      >
        {
          results.filter((_product, index) => index <= 11)
          .map((product) => (
            <SwiperSlide>
              <div className="w-[160px] flex flex-col">
                <Link to={`/products/${product.id}`} className="flex flex-col">
                  <img src={product.thumbnail} alt="product" className="h-[80px] self-center"/>
                  <p className="text-[10px] mt-[10px] text-[#007185]">{product.title}</p>
                  <img src={Stars} alt="stars" className="w-[60px]"/>
                  <div>
                    <span>R$</span>
                    <span>{product.price}</span>
                  </div>
                </Link>
              <button
                type="button"
                className="text-[10px] bg-[#FFD814] w-[120px] rounded-md h-[24px] p-[5px]"
                onClick={() => saveOnCart(product.title, product.price, product.thumbnail)}
              >
                Adicionar ao carrinho
              </button>
            </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
}

export default CarouselProducts;