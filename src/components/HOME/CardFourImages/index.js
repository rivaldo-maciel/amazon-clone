import React from 'react';

function CardFourImages({ infos }) {
  return (
    <div className="bg-white w-[19rem] h-[22rem] text-[0.7rem] flex justify-center items-center cursor-pointer">
      <div className="grid grid-cols-[5.7rem_5.7rem] w-[11rem] justify-center gap-2">
        <div className="col-span-2 text-[14px] mb-2 font-bold">{infos.title}</div>
        <div>
          <img className="w-[5.7rem]" src={infos.img1} alt="offers" />
          <p>{infos.subtitle1}</p>
        </div>
        <div>
          <img className="w-[5.7rem]" src={infos.img2} alt="offers" />
          <p>{infos.subtitle2}</p>
        </div>
        <div>
          <img className="w-[5.7rem]" src={infos.img3} alt="offers" />
          <p>{infos.subtitle3}</p>
        </div>
        <div>
          <img className="w-[5.7rem]" src={infos.img4} alt="offers" />
          <p>{infos.subtitle4}</p>
        </div>
      </div>
    </div>
  );
}

export default CardFourImages;
