import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getProductDetails from '../../../services/getProductDetails';
import Stars from '../../../assets/stars.png'
import dataIcons from '../iconDetails/dataIcons';
import IconDetails from '../iconDetails';
import SideBar from '../SideBar';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import InnerImageZoom from 'react-inner-image-zoom';


function SectionDetails() {
  const [details, setDetails] = useState({});
  const { title, price, pictures } = details;
  const { id } = useParams();

  useEffect(() => {
    getProductDetails(id).then(({ data }) => setDetails(data));
  }, [id]);

  return (
    <section className="flex self-center mt-[40px]">
      <div className="flex">
        <div>
            <InnerImageZoom
              src={pictures && pictures[0].url}
              alt="procut"
              className="w-[280px]"
              zoomPreload={true}
              zoomType="hover"
              zoomScale={1}
            />
        </div>
        <div className="ml-[20px]">
        <div className="w-[270px] border-b border-[#cfcfcf] items-center mt-[8px]">
          <span>{title}</span>
          <img src={Stars} alt="stars" className="w-[80px] mb-[5px]"/>
        </div>
        <div className="mt-[10px]">
          <span className="text-[10px] relative top-[-7px]">R$</span>
          <span className="text-[20px]">{price}</span>
        </div>
        <div className="flex w-[250px] justify-between">
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
      <SideBar price={price} />
    </section>
  );
}

export default SectionDetails;
