import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Brands = () => {
  const brands = [
    {
      id: 1,
      content: <span className="text-[20px] font-bold font-sans tracking-tight text-black">SSENSE</span>
    },
    {
      id: 2,
      content: <span className="text-[18px] font-serif font-black tracking-[0.05em] text-black">BURBERRY</span>
    },
    {
      id: 3,
      content: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="h-[28px] w-auto fill-black">
          <path d="M10.1,51.8c0,0,29.9-4.8,55,14.6c6.2,4.8,11.8,10,21.9,4.5c1.8-1,3.4-3.5,0.7-5.5 c-15.6-11.8-49.4-4.8-77.9-13.6C10.1,51.8,10.1,51.8,10.1,51.8z" />
        </svg>
      )
    },
    {
      id: 4,
      content: <span className="text-[28px] font-sans font-black tracking-tighter text-black leading-none lowercase">asos</span>
    },
    {
      id: 5,
      content: <span className="text-[18px] font-sans font-black tracking-tighter text-black">PULL&BEAR</span>
    },
    {
      id: 6,
      content: <span className="text-[22px] font-sans font-black tracking-tight text-black flex items-start">GILDAN<span className="text-[7px] font-bold mt-1 ml-0.5">®</span></span>
    }
  ];

  return (
    <section className="bg-white pt-4 pb-8 px-4 md:px-8">
      <div className="max-w-[1320px] mx-auto">
        <div className="border border-gray-100 rounded-[12px] overflow-hidden">
          <Swiper
            modules={[Pagination]}
            spaceBetween={0}
            slidesPerView={2}
            breakpoints={{
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 6 }
            }}
            pagination={{ 
              clickable: true,
              el: '.sw-pagination-brand',
            }}
            className="brands-swiper"
          >
            {brands.map((brand, index) => (
              <SwiperSlide key={brand.id}>
                <div className={`h-[115px] md:h-[135px] flex items-center justify-center p-4 ${index !== brands.length - 1 ? 'border-r border-gray-100' : ''}`}>
                  {brand.content}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Custom Pagination Container - Mobile Only */}
        <div className="sw-pagination-brand flex md:hidden justify-center items-center gap-4 mt-8">
          <style>{`
            .sw-pagination-brand .swiper-pagination-bullet {
              width: 5px;
              height: 5px;
              background-color: #d1d1d1;
              opacity: 1;
              margin: 0 !important;
              cursor: pointer;
              transition: all 0.3s ease;
              position: relative;
            }
            .sw-pagination-brand .swiper-pagination-bullet-active {
              background-color: #000 !important;
              margin: 0 6px !important;
            }
            .sw-pagination-brand .swiper-pagination-bullet-active::after {
              content: '';
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              width: 16px;
              height: 16px;
              border: 1px solid #000;
              border-radius: 50%;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default Brands;
