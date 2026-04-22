import React, { useState, useEffect } from 'react';
import { useWishlist } from '../Context/WishlistContext';

// Assets
import orange1 from '../assets/products/orange-1.jpg';
import white1 from '../assets/products/white-1.jpg';
import black1 from '../assets/products/black-1.jpg';
import brown2 from '../assets/products/brown-2.jpg';
import brown3 from '../assets/products/brown-3.jpg';
import white2 from '../assets/products/white-2.jpg';
import pink1 from '../assets/products/pink-1.jpg';
import white3 from '../assets/products/white-3.jpg';
import white4 from '../assets/products/white-4.jpg';
import white5 from '../assets/products/white-5.jpg';

const productsData = [
  {
    id: 1,
    title: 'Ribbed Tank Top',
    price: '$16.95',
    img: orange1,
    hoverImg: white1,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Orange', color: '#f17b3f' },
      { name: 'Black', color: '#111111' },
      { name: 'White', color: '#ffffff', border: true }
    ]
  },
  {
    id: 2,
    title: 'Ribbed modal T-shirt',
    price: 'From $18.95',
    img: brown2,
    hoverImg: brown3,
    sizes: ['M', 'L', 'XL'],
    colors: [
      { name: 'Brown', color: '#8b572a' },
      { name: 'Purple', color: '#9013fe' },
      { name: 'Light Green', color: '#b8e986' }
    ],
    // countdown: 1007500
  },
  {
    id: 3,
    title: 'Oversized Printed T-shirt',
    price: '$10.00',
    img: white3,
    hoverImg: white4,
    colors: []
  },
  {
    id: 4,
    title: 'Oversized Printed T-shirt',
    price: '$16.95',
    img: white2,
    hoverImg: pink1,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'White', color: '#ffffff', border: true },
      { name: 'Pink', color: '#9013fe' },
      { name: 'Black', color: '#111111' }
    ]
  },
  {
    id: 5,
    title: 'V-neck linen T-shirt',
    price: '$114.95',
    img: brown2,
    hoverImg: white2,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Brown', color: '#8b572a' },
      { name: 'White', color: '#ffffff', border: true }
    ]
  },
  {
    id: 6,
    title: 'Loose Fit Sweatshirt',
    price: '$10.00',
    img: white5,
    hoverImg: orange1,
    colors: [
      { name: 'Light Green', color: '#b8e986' },
      { name: 'Black', color: '#111111' },
      { name: 'Blue', color: '#4a90e2' },
      { name: 'White', color: '#ffffff', border: true }
    ]
  },
  {
    id: 7,
    title: 'Regular Fit Oxford Shirt',
    price: '$10.00',
    img: black1,
    hoverImg: white1,
    sizes: ['S', 'M', 'L'],
    colors: [
      { name: 'Black', color: '#111111' },
      { name: 'Beige', color: '#f5f5dc' },
      { name: 'White', color: '#ffffff', border: true }
    ]
  },
  {
    id: 8,
    title: 'Loose Fit Hoodie',
    price: '$9.95',
    img: white1,
    hoverImg: black1,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'White', color: '#ffffff', border: true },
      { name: 'Black', color: '#111111' }
    ]
  }
];

const Countdown = ({ duration }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const d = Math.floor(timeLeft / (24 * 3600));
  const h = Math.floor((timeLeft % (24 * 3600)) / 3600);
  const m = Math.floor((timeLeft % 3600) / 60);
  const s = Math.floor(timeLeft % 60);

  return (
    <div className="text-[#e74c3c] font-bold text-sm">
      {d}d : {h}h : {m}m : {s}s
    </div>
  );
};

const ProductCard = ({ product }) => {
  const { toggleWishlist, isInWishlist } = useWishlist();
  const isWishlisted = isInWishlist(product.id);
  return (
    <div className="group relative flex flex-col">
      <div className="relative aspect-[3/4] overflow-hidden bg-[#f5f5f5] rounded-[15px]">
        {/* Images */}
        <a href="#" className="block h-full w-full">
          <img
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            src={product.img}
            alt={product.title}
          />
          <img
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            src={product.hoverImg}
            alt={product.title}
          />
        </a>

        {/* Desktop Action Buttons (Vertical, Right Side) */}
        <div className="hidden md:flex absolute top-3 right-3 flex-col gap-2 z-10 opacity-0 group-hover:opacity-100 transition-all duration-500">
          <button className="relative flex h-11 w-11 items-center justify-center rounded bg-white text-[#111] shadow-sm hover:bg-black hover:text-white transition-all duration-300 translate-x-5 group-hover:translate-x-0 group/btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
            <span className="absolute right-[55px] invisible opacity-0 whitespace-nowrap rounded bg-black px-3 py-1.5 text-[12px] text-white transition-all group-hover/btn:visible group-hover/btn:opacity-100">Quick Add</span>
          </button>

          <button className="relative flex h-11 w-11 items-center justify-center rounded bg-white text-[#111] shadow-sm hover:bg-black hover:text-white transition-all duration-300 delay-75 translate-x-5 group-hover:translate-x-0 group/btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0z" /><circle cx="12" cy="12" r="3" /></svg>
            <span className="absolute right-[55px] invisible opacity-0 whitespace-nowrap rounded bg-black px-3 py-1.5 text-[12px] text-white transition-all group-hover/btn:visible group-hover/btn:opacity-100">Quick View</span>
          </button>

          <button 
            onClick={() => toggleWishlist(product)}
            className={`relative flex h-11 w-11 items-center justify-center rounded bg-white shadow-sm hover:bg-black hover:text-white transition-all duration-300 delay-100 translate-x-5 group-hover:translate-x-0 group/btn ${isWishlisted ? 'bg-black text-white' : 'text-[#111]'}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill={isWishlisted ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
            <span className="absolute right-[55px] invisible opacity-0 whitespace-nowrap rounded bg-black px-3 py-1.5 text-[12px] text-white transition-all group-hover/btn:visible group-hover/btn:opacity-100">
              {isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
            </span>
          </button>

          <button className="relative flex h-11 w-11 items-center justify-center rounded bg-white text-[#111] shadow-sm hover:bg-black hover:text-white transition-all duration-300 delay-150 translate-x-5 group-hover:translate-x-0 group/btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18 3 3 3-3" /><path d="M18 15V9a2 2 0 0 0-2-2H9" /><path d="m9 6-3-3-3 3" /><path d="M6 9v6a2 2 0 0 0 2 2h7" /></svg>
            <span className="absolute right-[55px] invisible opacity-0 whitespace-nowrap rounded bg-black px-3 py-1.5 text-[12px] text-white transition-all group-hover/btn:visible group-hover/btn:opacity-100">Compare</span>
          </button>
        </div>

        {/* Mobile Action Buttons (Horizontal, Bottom Center) */}
        <div className="md:hidden absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          <button className="flex h-10 w-10 items-center justify-center rounded bg-white text-[#111] shadow-md border border-gray-100 active:bg-black active:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded bg-white text-[#111] shadow-md border border-gray-100 active:bg-black active:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0z" /><circle cx="12" cy="12" r="3" /></svg>
          </button>
        </div>

        {/* Size Selection */}
        {product.sizes && (
          <div className="absolute -bottom-10 left-0 right-0 hidden md:flex justify-center gap-4 bg-white/90 py-3 transition-all duration-300 group-hover:bottom-0 backdrop-blur-sm">
            {product.sizes.map(size => (
              <span key={size} className="text-[13px] font-medium text-gray-600 hover:text-black cursor-pointer">{size}</span>
            ))}
          </div>
        )}

        {/* Countdown */}
        {product.countdown && (
          <div className="absolute bottom-5 left-5 right-5 bg-white rounded-md py-2 px-4 shadow-xl text-center z-[5]">
            <Countdown duration={product.countdown} />
          </div>
        )}
      </div>

      <div className="pt-4 flex flex-col gap-1">
        <a href="#" className="text-[14px] md:text-[16px] font-medium text-black hover:text-gray-600 transition-colors truncate">{product.title}</a>
        <div className="flex items-center gap-2">
          <span className="text-[14px] md:text-[16px] font-bold text-black">{product.price}</span>
        </div>

        {product.colors && product.colors.length > 0 && (
          <div className="flex gap-2 mt-1 flex-wrap">
            {product.colors.map((color, index) => (
              <div
                key={index}
                className={`w-5 h-5 md:w-6 md:h-6 rounded-full p-0.5 border cursor-pointer transition-all ${index === 0 ? 'border-black' : 'border-transparent hover:border-black'}`}
              >
                <div
                  className="w-full h-full rounded-full"
                  style={{ backgroundColor: color.color, border: color.border ? '1px solid #e5e5e5' : 'none' }}
                ></div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const BestSeller = () => {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-[1320px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[28px] md:text-[34px] font-medium text-black mb-3">Best Seller</h2>
          <p className="text-[15px] md:text-[16px] text-gray-500">Shop the Latest Styles: Stay ahead of the curve with our newest arrivals</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 md:gap-x-8 md:gap-y-12 mb-12">
          {productsData.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="flex justify-center">
          <button className="px-10 py-3.5 border-2 border-black text-black font-semibold text-sm rounded-md hover:bg-black hover:text-white transition-all duration-300 uppercase tracking-wide">
            View all products
          </button>
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
