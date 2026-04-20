import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
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
      image: slide01,
    },
    {
      title: "Simple\nStyle",
      desc: "From casual to formal, we've got you covered",
      image: slide02,
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
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        loop={true}
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
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
              <div className="relative w-full h-full">
                {/* Background Image */}
                <img 
                  src={slide.image} 
                  alt={slide.title} 
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full max-w-[1400px] mx-auto px-4 lg:px-10">
                    <div className="max-w-[700px] mt-10 lg:mt-0">
                      <h1 className={`text-[50px] md:text-[70px] lg:text-[85px] leading-[1.05] font-medium text-[#111] mb-5 tracking-tight transition-all duration-1000 transform ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '300ms', whiteSpace: 'pre-line' }}>
                        {slide.title}
                      </h1>
                      <p className={`text-[17px] md:text-[19px] text-[#333] mb-9 transition-all duration-1000 transform ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '500ms' }}>
                        {slide.desc}
                      </p>
                      <div className={`transition-all duration-1000 transform ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '700ms' }}>
                        <Link 
                          to="/shop" 
                          className="inline-flex items-center justify-center bg-black text-white px-10 py-4 text-[15px] font-medium hover:bg-[#111] transition-all duration-300 rounded-sm group overflow-hidden"
                        >
                          <span className="relative z-10">Shop collection</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ml-2.5 relative z-10 transition-transform group-hover:translate-x-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
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

      <style dangerouslySetInnerHTML={{ __html: `
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
