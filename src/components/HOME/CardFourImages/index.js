import React from 'react';

function CardFourImages({ infos }) {
  return (
    <div className="bg-white w-[300px] h-[320px] text-[12px] flex justify-center items-center">
      <div className="grid grid-cols-[90px_90px] w-[180px] justify-center gap-2">
        <div className="col-span-2 text-[14px] mb-2 font-bold">{infos.title}</div>
        <div>
          <img className="w-[90px]" src={infos.img1} alt="offers" />
          <p>{infos.subtitle1}</p>
        </div>
        <div>
          <img className="w-[90px]" src={infos.img2} alt="offers" />
          <p>{infos.subtitle2}</p>
        </div>
        <div>
          <img className="w-[90px]" src={infos.img3} alt="offers" />
          <p>{infos.subtitle3}</p>
        </div>
        <div>
          <img className="w-[90px]" src={infos.img4} alt="offers" />
          <p>{infos.subtitle4}</p>
        </div>
      </div>
    </div>
  );
}

export default CardFourImages;
