import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getProductDetails from '../../../services/getProductDetails';
import Stars from '../../../assets/stars.png'
import dataIcons from '../iconDetails/dataIcons';
import IconDetails from '../iconDetails';
import SideBar from '../SideBar';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import InnerImageZoom from 'react-inner-image-zoom';
import AdditionalPhotos from '../AdditionalPhotos';


function SectionDetails() {
  const [details, setDetails] = useState({});
  const { title, price, pictures } = details;
  const [productPicture, setProductPicture] = useState('');
  const { id } = useParams();

  useEffect(() => {
    getProductDetails(id).then(({ data }) => setDetails(data));
  }, [id]);

  useEffect(() => {
    setProductPicture(pictures && pictures[0].url);
  }, [pictures]);

  return (
    <section className="flex self-center mt-[3rem]">
      <AdditionalPhotos
        pictures={pictures && pictures}
        setProductPicture={setProductPicture}
      />
      <div className="flex">
        <div className="mt-[1.5rem]">
            <InnerImageZoom
              src={productPicture}
              alt="procut"
              zoomPreload={true}
              zoomType="hover"
              zoomScale={1}
              width={180}
            />
        </div>
        <div className="ml-[1.8rem]">
        <div className="w-[17rem] border-b border-[#cfcfcf] items-center mt-[0.2rem]">
          <span className="text-[1rem]">{title}</span>
          <img src={Stars} alt="stars" className="w-[5rem] mb-[0.4rem]"/>
        </div>
        <div className="mt-[0.8rem]">
          <span className="text-[0.8rem] relative top-[-0.45rem]">R$</span>
          <span className="text-[2rem]">{price}</span>
        </div>
        <div className="flex w-[15rem] justify-between">
          {
            dataIcons.map((icon) => (
              <IconDetails
                src={ icon.src}
                title={ icon.title }
                key={ icon.src }
              />
            ))
          }
        </div>
        </div>
      </div>
      <SideBar
        price={price}
        title={title}
        thumbnail={pictures && pictures[0].url}
        />
    </section>
  );
}

export default SectionDetails;
