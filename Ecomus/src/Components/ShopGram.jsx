import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const galleryImages = [
  { id: 1, url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop', link: '#quick_add', tooltip: 'Quick Add' },
  { id: 2, url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop', link: '#quick_add', tooltip: 'Quick Add' },
  { id: 3, url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600&auto=format&fit=crop', link: '#quick_add', tooltip: 'Quick Add' },
  { id: 4, url: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=600&auto=format&fit=crop', link: '/product-detail', tooltip: 'View Product' },
  { id: 5, url: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=600&auto=format&fit=crop', link: '/product-detail', tooltip: 'View Product' },
  { id: 6, url: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=600&auto=format&fit=crop', link: '#quick_add', tooltip: 'Quick Add' }
];

const GalleryItem = ({ item }) => (
  <div className="relative group overflow-hidden rounded-[20px]">
    <div className="aspect-[1/1] md:aspect-[4/5] overflow-hidden">
      <img 
        src={item.url} 
        alt="Gallery fashion" 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>
    
    {/* Overlay Icon - Centered as per 'after' ref image */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <a 
        href={item.link}
        className="pointer-events-auto w-14 h-14 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300 hover:bg-black hover:text-white"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <rect width="18" height="14" x="3" y="6" rx="2"/><path d="M9 6V4a3 3 0 0 1 6 0v2"/>
        </svg>
        {/* Tooltip */}
        <span className="absolute left-1/2 -top-12 -translate-x-1/2 px-2 py-1 bg-black text-white text-[10px] rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
          {item.tooltip}
        </span>
      </a>
    </div>
  </div>
);

const ShopGram = () => {
  return (
    <section className="pt-10 md:pt-14 pb-16 md:pb-20 px-4 md:px-8 bg-white overflow-hidden">
      <div className="max-w-[1320px] mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-[28px] md:text-[40px] font-medium text-black mb-3">Shop Gram</h2>
          <p className="text-[15px] md:text-[16px] text-gray-500 max-w-[600px] mx-auto px-4">
            Inspire and let yourself be inspired, from one unique fashion to another.
          </p>
        </div>

        <div className="relative">
          <Swiper
            modules={[Pagination]}
            spaceBetween={7}
            slidesPerView={2}
            pagination={{ 
              clickable: true,
              el: '.sw-pagination-gallery',
            }}
            breakpoints={{
              640: { slidesPerView: 3, spaceBetween: 7 },
              1024: { slidesPerView: 5, spaceBetween: 7 }
            }}
            className="pb-12"
          >
            {galleryImages.map((item) => (
              <SwiperSlide key={item.id}>
                <GalleryItem item={item} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination Container */}
          <div className="sw-pagination-gallery flex justify-center gap-2 mt-4">
            <style>{`
              .sw-pagination-gallery .swiper-pagination-bullet {
                width: 8px;
                height: 8px;
                background-color: #000 !important;
                opacity: 0.2;
                margin: 0 !important;
                cursor: pointer;
                transition: all 0.3s ease;
              }
              .sw-pagination-gallery .swiper-pagination-bullet-active {
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

export default ShopGram;
