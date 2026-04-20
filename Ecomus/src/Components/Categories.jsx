import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// Assets
import collection17 from '../assets/collections/collection-17.jpg';
import collection14 from '../assets/collections/collection-14.jpg';
import collection18 from '../assets/collections/collection-18.jpg';
import collection15 from '../assets/collections/collection-15.jpg';
import collection20 from '../assets/collections/collection-20.jpg';

const Categories = () => {
  const categories = [
    { id: 1, title: 'Clothing', img: collection17, bgColor: '#f2f2f2' },
    { id: 2, title: 'Sunglasses', img: collection14, bgColor: '#f5f7f1' },
    { id: 3, title: 'Bags', img: collection18, bgColor: '#fcf3f3' },
    { id: 4, title: 'Fashion', img: collection15, bgColor: '#f2f2f2' },
    { id: 5, title: 'Accessories', img: collection20, bgColor: '#f7f4ee' },
  ];

  return (
    <section className="py-12 px-4 lg:px-10 overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-[18px] md:text-[24px] font-bold text-gray-900 uppercase">Shop by Categories</h2>
          <div className="flex items-center gap-2">
            <button className="category-prev w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-colors group">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
            </button>
            <button className="category-next w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-colors group">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Swiper Slider */}
          <div className="flex-1 min-w-0">
            <Swiper
              modules={[Navigation]}
              spaceBetween={30}
              slidesPerView={1.2}
              navigation={{
                prevEl: '.category-prev',
                nextEl: '.category-next',
              }}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="categories-swiper"
            >
              {categories.map((cat) => (
                <SwiperSlide key={cat.id}>
                  <div 
                    className="relative rounded-[16px] overflow-hidden group cursor-pointer transition-transform duration-500 hover:scale-[1.02] transform-gpu"
                    style={{ backgroundColor: cat.bgColor, aspectRatio: '4/5' }}
                  >
                    <img 
                      src={cat.img} 
                      alt={cat.title} 
                      className="block w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute bottom-0 left-0 bg-white rounded-tr-[12px] rounded-bl-[16px] z-10 m-0">
                      <span className="block text-black text-[14px] md:text-[15px] font-semibold px-6 py-3">
                        {cat.title}
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Discovery Card */}
          <div className="w-full lg:w-[320px] shrink-0 mt-6 lg:mt-0">
            <div className="border-[1.5px] border-black rounded-[12px] p-5 md:p-8 flex flex-row lg:flex-col items-center lg:items-start justify-between min-h-0 lg:min-h-[300px] hover:bg-gray-50 transition-colors group cursor-pointer">
              <h3 className="text-[20px] md:text-[24px] lg:text-[34px] font-medium text-gray-900 leading-[1.2] lg:mb-10">
                Discovery all new items
              </h3>
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-black flex flex-shrink-0 items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300 ml-4 lg:ml-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:scale-110"><path d="M7 17L17 7" /><path d="M7 7h10v10" /></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
