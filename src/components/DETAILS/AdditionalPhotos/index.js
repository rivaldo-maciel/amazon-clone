import React from 'react';

function AdditionalPhotos({ pictures, setProductPicture }) {
  return (
    <section className="mr-[1.5rem] flex flex-col">
      {
        pictures && pictures.filter((_pic, index) => index <= 3)
        .map((picture) => (
          <div onClick={() => setProductPicture(picture.url)} key={picture.url}>
            <img className="w-[4rem] mt-[0.7rem] border border-[#ebebeb] cursor-pointer" src={picture.url} alt="product" />
          </div>
        ))
      }
    </section>
  );
}

export default AdditionalPhotos;