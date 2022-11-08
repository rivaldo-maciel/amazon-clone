import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
import { Pagination, Navigation } from 'swiper';
import Stars from '../../../assets/stars.png';

function CarouselProducts() {
  const {results} = useSelector(state => state.products);
  const history = useHistory();

  const saveOnCart = async (title, price, thumbnail) => {
    const newItem = { title, price, thumbnail, quantity: 1 };
    const cartList = JSON.parse(localStorage.getItem('cart'));
    const item = cartList.find((it) => it.title === newItem.title);
    if (item) {
      item.quantity += newItem.quantity;
      const newCartList = cartList.filter((it) => it.title !== newItem.title);
      localStorage.setItem('cart', JSON.stringify([...newCartList, item]));
      localStorage.setItem('itemPic', JSON.stringify(thumbnail));
      history.push('/prevcart');
      return
    } 
    localStorage.setItem('cart', JSON.stringify([...cartList, newItem]));
    localStorage.setItem('itemPic', JSON.stringify(thumbnail));
    history.push('/prevcart');
  }
  return (
    <div className="mb-[8rem] p-[15px] bg-white w-[100%] self-center mt-[5rem]">
      <p className="text-[1rem]">Melhores escolhar para você</p>
      <Swiper
        slidesPerView={5}
        spaceBetween={0}
        slidesPerGroup={5}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper flex h-[14rem] swiper-products"
      >
        {
          results.filter((_product, index) => index <= 11)
          .map((product) => (
            <SwiperSlide key={product.id}>
              <div className="w-[10rem] flex flex-col">
                <Link to={`/products/${product.id}`} className="flex flex-col">
                  <img src={product.thumbnail} alt="product" className="h-[6rem] self-center"/>
                  <p className="text-[0.8rem] mt-[10px] text-[#007185] line-clamp-1 overflow-hidden text-ellipsis">{product.title}</p>
                  <img src={Stars} alt="stars" className="w-[4rem]"/>
                  <div>
                    <span>R$</span>
                    <span>{product.price}</span>
                  </div>
                </Link>
              <button
                type="button"
                className="text-[0.6rem] bg-[#FFD814] w-[8rem] rounded-md h-[1.6rem] p-[5px]"
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