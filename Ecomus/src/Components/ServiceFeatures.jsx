import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const features = [
  {
    id: 1,
    title: 'Free Shipping',
    desc: 'Free shipping over order $120',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-black">
        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>
      </svg>
    )
  },
  {
    id: 2,
    title: 'Flexible Payment',
    desc: 'Pay with Multiple Credit Cards',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-black">
        <rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/>
      </svg>
    )
  },
  {
    id: 3,
    title: '14 Day Returns',
    desc: 'Within 30 days for an exchange',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-black">
        <path d="m9 14-4-4 4-4"/><path d="M5 10h11a4 4 0 1 1 0 8h-1"/>
      </svg>
    )
  },
  {
    id: 4,
    title: 'Premium Support',
    desc: 'Outstanding premium support',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-black">
        <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/>
      </svg>
    )
  }
];

const FeatureCard = ({ feature }) => (
  <div className="flex flex-col items-center text-center p-8 border border-gray-100 rounded-[10px] w-full min-h-[180px] md:min-h-[220px] justify-center bg-white transition-all duration-300 hover:shadow-lg lg:hover:-translate-y-1">
    <div className="mb-5 p-4 bg-gray-50 rounded-full group-hover:bg-black group-hover:text-white transition-colors duration-300">
      {feature.icon}
    </div>
    <div className="space-y-1">
      <h3 className="text-[18px] font-medium text-black">{feature.title}</h3>
      <p className="text-[14px] text-gray-500">{feature.desc}</p>
    </div>
  </div>
);

const ServiceFeatures = () => {
  return (
    <section className="py-12 md:py-20 px-4 md:px-8 bg-white border-t border-gray-50">
      <div className="max-w-[1320px] mx-auto">
        {/* Desktop View: 4 Columns Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-7">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>

        {/* Mobile View: Swiper Carousel */}
        <div className="md:hidden">
          <Swiper
            modules={[Pagination]}
            spaceBetween={15}
            slidesPerView={1}
            pagination={{ 
              clickable: true,
              el: '.sw-pagination-services',
            }}
            className="pb-12"
          >
            {features.map((feature) => (
              <SwiperSlide key={feature.id}>
                <FeatureCard feature={feature} />
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom Pagination for Mobile */}
          <div className="sw-pagination-services flex justify-center gap-2">
            <style>{`
              .sw-pagination-services .swiper-pagination-bullet {
                width: 8px;
                height: 8px;
                background-color: #000 !important;
                opacity: 0.2;
                margin: 0 !important;
                cursor: pointer;
                transition: all 0.3s ease;
              }
              .sw-pagination-services .swiper-pagination-bullet-active {
                opacity: 1 !important;
                transform: scale(1.2);
              }
            `}</style>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatures;
