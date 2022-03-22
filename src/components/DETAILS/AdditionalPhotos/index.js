import React from 'react';

function AdditionalPhotos({ pictures, setProductPicture }) {
  return (
    <section className="mr-[20px] flex flex-col">
      {
        pictures && pictures.filter((_pic, index) => index <= 3)
        .map((picture) => (
          <div onClick={() => setProductPicture(picture.url)}>
            <img className="w-[50px] mt-[10px] border border-[#ebebeb] cursor-pointer" src={picture.url} alt="product" />
          </div>
        ))
      }
    </section>
  );
}

export default AdditionalPhotos;