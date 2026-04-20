import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// Assets
import lookbook1 from '../assets/common/lookbook-1.png';
import lookbook2 from '../assets/common/lookbook-2.png';
import orange1 from '../assets/products/orange-1.jpg';
import brown2 from '../assets/products/brown-2.jpg';
import white3 from '../assets/products/white-3.jpg';

const ProductPin = ({ product, position }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="absolute z-20 group"
      style={{ top: position.top, left: position.left }}
    >
      {/* Pin Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex items-center justify-center w-6 h-6 rounded-full bg-white shadow-lg transition-transform hover:scale-110 active:scale-95"
      >
        <span className="w-2 h-2 rounded-full bg-black"></span>
        {/* Pulsing ring */}
        <span className="absolute inset-0 rounded-full bg-white animate-ping opacity-75"></span>
      </button>

      {/* Product Popup */}
      <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-[220px] bg-white rounded-lg shadow-xl p-3 transition-all duration-300 transform origin-bottom ${isOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
        <div className="flex gap-3">
          <div className="w-16 h-20 shrink-0 overflow-hidden rounded-md bg-gray-100">
            <img src={product.img} alt={product.title} className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col justify-center gap-1">
            <h4 className="text-[14px] font-medium text-gray-900 line-clamp-1">{product.title}</h4>
            <p className="text-[14px] font-bold text-black">{product.price}</p>
            <button className="flex items-center gap-1.5 text-[12px] font-semibold text-gray-400 hover:text-black transition-colors uppercase mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2.062 12.348a1 1 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0z"/><circle cx="12" cy="12" r="3"/></svg>
              View
            </button>
          </div>
        </div>
        {/* Simple arrow */}
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-[8px] border-transparent border-t-white"></div>
      </div>

      {/* Overlay to close when clicking elsewhere - optional, but let's keep it simple with toggle for now */}
    </div>
  );
};

const ShopTheLook = () => {
  const lookbooks = [
    {
      id: 1,
      image: lookbook1,
      pins: [
        {
          id: 1,
          position: { top: '35%', left: '35%' },
          product: { title: 'Ribbed Tank Top', price: '$16.95', img: orange1 }
        },
        {
          id: 2,
          position: { top: '75%', left: '55%' },
          product: { title: 'Ribbed modal T-shirt', price: '$18.95', img: brown2 }
        }
      ]
    },
    {
      id: 2,
      image: lookbook2,
      pins: [
        {
          id: 3,
          position: { top: '45%', left: '75%' },
          product: { title: 'Oversized Printed T-shirt', price: '$10.00', img: white3 }
        }
      ]
    }
  ];

  return (
    <section className="py-16 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 md:px-0">
        <div className="text-center mb-12 px-4">
          <h2 className="text-[28px] md:text-[34px] font-medium text-black mb-3">Shop the look</h2>
          <p className="text-[15px] md:text-[16px] text-gray-500">Inspire and let yourself be inspired, from one unique fashion to another.</p>
        </div>

        <Swiper
          modules={[Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ 
            clickable: true,
            bulletClass: 'swiper-pagination-bullet !bg-black !opacity-20',
            bulletActiveClass: '!bg-black !opacity-100 shadow-sm'
          }}
          breakpoints={{
            768: { slidesPerView: 2 }
          }}
          className="shop-look-swiper pb-16"
        >
          {lookbooks.map((look) => (
            <SwiperSlide key={look.id}>
              <div className="relative w-full aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] overflow-hidden">
                <img 
                  src={look.image} 
                  alt="Shop the look" 
                  className="w-full h-full object-cover transition-transform duration-10000 hover:scale-110" 
                />
                {look.pins.map((pin) => (
                  <ProductPin key={pin.id} {...pin} />
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ShopTheLook;
