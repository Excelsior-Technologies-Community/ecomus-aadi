import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Assets (reusing from products)
import white1 from '../assets/products/white-1.jpg';
import brown2 from '../assets/products/brown-2.jpg';
import white3 from '../assets/products/white-3.jpg';
import white5 from '../assets/products/white-5.jpg';

const StarRating = () => (
  <div className="flex gap-1.5 mb-5 md:mb-6">
    {[...Array(5)].map((_, i) => (
      <svg key={i} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="#f17b3f" stroke="#f17b3f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
    ))}
  </div>
);

const TestimonialCard = ({ testimonial }) => (
  <div className="bg-white border border-gray-100 hover:border-black rounded-[12px] p-8 md:p-10 h-full flex flex-col shadow-sm transition-all duration-500 group/card">
    <StarRating />
    <h3 className="text-[17px] md:text-[18px] font-semibold text-black mb-3.5 leading-tight">{testimonial.heading}</h3>
    <p className="text-[15px] md:text-[16px] text-[#111] leading-relaxed mb-8 flex-grow">
      "{testimonial.text}"
    </p>
    
    <div className="mb-10">
      <div className="text-[13px] font-bold text-black uppercase tracking-[0.1em] mb-1">{testimonial.author}</div>
      <div className="text-[13px] text-gray-500 font-normal">{testimonial.location}</div>
    </div>

    {/* Product Snippet */}
    <div className="pt-8 border-t border-gray-100 flex items-center justify-between group/product cursor-pointer mt-auto">
      <div className="flex items-center gap-4">
        <div className="w-[55px] h-[70px] overflow-hidden rounded bg-gray-50 shrink-0">
          <img src={testimonial.product.img} alt={testimonial.product.title} className="w-full h-full object-cover group-hover/product:scale-110 transition-transform duration-700" />
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="text-[13px] font-medium text-black transition-colors">{testimonial.product.title}</h4>
          <p className="text-[13px] font-bold text-black">{testimonial.product.price}</p>
        </div>
      </div>
      <div className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-gray-200 bg-white items-center justify-center text-black shadow-sm transition-all duration-300 transform group-hover/product:bg-black group-hover/product:text-white group-hover/product:border-black group-hover/product:-translate-y-0.5 hidden md:flex">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      heading: 'Best Online Fashion Site',
      text: 'I always find something stylish and affordable on this web fashion site',
      author: 'Robert smith',
      location: 'Customer from USA',
      product: { title: 'Jersey thong body', price: '$105.95', img: white1 }
    },
    {
      id: 2,
      heading: 'Great Selection and Quality',
      text: 'I love the variety of styles and the high-quality clothing on this web fashion site.',
      author: 'Allen Lyn',
      location: 'Customer from France',
      product: { title: 'Cotton jersey top', price: '$7.95', img: brown2 }
    },
    {
      id: 3,
      heading: 'Best Customer Service',
      text: 'I finally found a web fashion site with stylish and flattering options in my size.',
      author: 'Peter Rope',
      location: 'Customer from USA',
      product: { title: 'Ribbed modal T-shirt', price: 'From $18.95', img: white3 }
    },
    {
      id: 4,
      heading: 'Excellent Design',
      text: 'The user experience on this site is top-notch. High-quality fashion at great prices.',
      author: 'Hellen Ase',
      location: 'Customer from Japan',
      product: { title: 'Ribbed modal T-shirt', price: '$16.95', img: white5 }
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-white border-t border-gray-50">
      <div className="max-w-[1320px] mx-auto relative px-4 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-[28px] md:text-[40px] font-medium text-black mb-3">Happy Clients</h2>
          <p className="text-[15px] md:text-[16px] text-gray-500">Hear what they say about us</p>
        </div>

        <div className="relative group">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ 
              clickable: true,
              el: '.sw-pagination-testimonial'
            }}
            navigation={{
              nextEl: '.nav-next-testimonial',
              prevEl: '.nav-prev-testimonial',
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1100: { slidesPerView: 3 }
            }}
            className="pb-8 md:pb-16"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <button className="nav-prev-testimonial absolute left-[-20px] md:left-[-60px] top-[45%] -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center text-black hover:bg-black hover:text-white transition-all duration-300 z-10 shadow-sm opacity-0 group-hover:opacity-100 hidden md:flex">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>
          <button className="nav-next-testimonial absolute right-[-20px] md:right-[-60px] top-[45%] -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center text-black hover:bg-black hover:text-white transition-all duration-300 z-10 shadow-sm opacity-0 group-hover:opacity-100 hidden md:flex">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>

        {/* Custom Pagination Container */}
        <div className="sw-pagination-testimonial flex md:hidden justify-center gap-3 mt-4 md:mt-0">
          <style>{`
            .sw-pagination-testimonial .swiper-pagination-bullet {
              width: 8px;
              height: 8px;
              background-color: #000 !important;
              opacity: 0.2;
              margin: 0 !important;
              cursor: pointer;
              transition: all 0.3s ease;
            }
            .sw-pagination-testimonial .swiper-pagination-bullet-active {
              opacity: 1 !important;
              transform: scale(1.2);
            }
          `}</style>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
