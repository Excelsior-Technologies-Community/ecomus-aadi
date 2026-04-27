import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

// Assets
import slide01 from '../assets/slides/fashion-slideshow-01.jpg';
import slide02 from '../assets/slides/fashion-slideshow-02.jpg';
import slide03 from '../assets/slides/fashion-slideshow-03.jpg';

const Hero = () => {
  const slides = [
    {
      title: "Glamorous\nGlam",
      desc: "From casual to formal, we've got you covered",
      image: slide02,
    },
    {
      title: "Simple\nStyle",
      desc: "From casual to formal, we've got you covered",
      image: slide01,
    },
    {
      title: "Glamorous\nGlam",
      desc: "From casual to formal, we've got you covered",
      image: slide03,
    }
  ];

  return (
    <div className="relative w-full h-[70vh] md:h-[80vh] lg:h-[850px] overflow-hidden bg-[#f4f1ea]">
      <Swiper
        modules={[EffectFade, Pagination]}
        effect="fade"
        loop={true}
        speed={1000}
        pagination={{
          clickable: true,
          bulletClass: 'hero-bullet',
          bulletActiveClass: 'hero-bullet-active',
          renderBullet: (index, className) => {
            return `<span class="${className} cursor-pointer inline-block w-2.5 h-2.5 rounded-full bg-black/20 mx-1.5 transition-all duration-300 hover:bg-black/50 ${className.includes('active') ? '!bg-black !w-4' : ''}"></span>`;
          },
        }}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <div className="relative w-full h-full bg-[#f4f1ea]">
                {/* Background Image */}
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover object-[85%_center] sm:object-right md:object-center"
                />

                {/* Content Overlay */}
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full max-w-[1400px] mx-auto px-5 lg:px-10">
                    <div className="max-w-[280px] md:max-w-[700px] mt-0">
                      <h1 className={`text-[46px] md:text-[70px] lg:text-[85px] leading-[1.05] font-medium text-[#111] mb-5 tracking-tight transition-all duration-1000 transform ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '300ms', whiteSpace: 'pre-line' }}>
                        {slide.title}
                      </h1>
                      <p className={`hidden md:block text-[17px] md:text-[19px] text-[#333] mb-9 transition-all duration-1000 transform ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '500ms' }}>
                        {slide.desc}
                      </p>
                      <div className={`transition-all duration-1000 transform ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '700ms' }}>
                        <Link
                          to="/shop"
                          className="inline-flex items-center justify-center bg-black text-white px-7 md:px-10 py-3.5 md:py-4 text-[15px] font-medium transition-all duration-300 rounded-[3px] group overflow-hidden"
                        >
                          <span className="relative z-10">Shop collection</span>
                          {/* Desktop Arrow */}
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="hidden md:block ml-2.5 relative z-10 transition-transform group-hover:translate-x-1"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                          {/* Mobile Chevron */}
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="block md:hidden ml-2 relative z-10 transition-transform group-hover:translate-x-1"><path d="m9 18 6-6-6-6" /></svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      <style dangerouslySetInnerHTML={{
        __html: `
        .swiper-pagination {
          bottom: 40px !important;
          z-index: 20;
        }
        .hero-bullet {
          width: 8px;
          height: 8px;
          background-color: rgba(0, 0, 0, 0.15);
          display: inline-block;
          border-radius: 50%;
          margin: 0 6px;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .hero-bullet-active {
          width: 24px;
          height: 8px;
          border-radius: 4px;
          background-color: #000;
        }
        @media (max-width: 768px) {
          .swiper-pagination {
            bottom: 20px !important;
          }
        }
      `}} />
    </div>
  );
};

export default Hero;
