import React from 'react';

function CardFourImages({ infos }) {
  return (
    <div className="bg-white w-[230px] h-[260px] text-[8px] flex justify-center items-center">
      <div className="grid grid-cols-[80px_80px] w-[180px] h-[200px] justify-center">
        <div className="col-span-2 text-[13px] mb-2 font-bold">{infos.title}</div>
        <div>
          <img className="w-[60px]" src={infos.img1} alt="offers" />
          <p>{infos.subtitle1}</p>
        </div>
        <div>
          <img className="w-[60px]" src={infos.img2} alt="offers" />
          <p>{infos.subtitle2}</p>
        </div>
        <div>
          <img className="w-[60px]" src={infos.img3} alt="offers" />
          <p>{infos.subtitle3}</p>
        </div>
        <div>
          <img className="w-[60px]" src={infos.img4} alt="offers" />
          <p>{infos.subtitle4}</p>
        </div>
      </div>
    </div>
  );
}

export default CardFourImages;
