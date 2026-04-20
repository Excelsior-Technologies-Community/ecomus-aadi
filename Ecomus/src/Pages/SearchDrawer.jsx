import React, { useEffect, useState } from 'react';

// Assets
import white3 from '../assets/products/white-3.jpg';
import white2 from '../assets/products/white-2.jpg';
import white1 from '../assets/products/white-1.jpg';

const SearchDrawer = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const quickLinks = ['Fashion', 'Men', 'Women', 'Accessories'];
  const inspiration = [
    {
      id: 1,
      title: 'Cotton jersey top',
      img: white3,
      price: '$8.00',
      oldPrice: '$10.00'
    },
    {
      id: 2,
      title: 'Mini crossbody bag',
      img: white2,
      price: '$18.00'
    },
    {
      id: 3,
      title: 'Oversized Printed T-shirt',
      img: white1,
      price: '$18.00'
    }
  ];

  return (
    <div className={`fixed inset-0 z-[2000] overflow-hidden transition-all duration-500 ${isOpen ? 'visible' : 'invisible pointer-events-none'}`}>
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black/50 backdrop-blur-[2px] transition-opacity duration-500 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        style={{ cursor: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Ccircle cx='16' cy='16' r='14' fill='white'/%3E%3Cline x1='11' y1='11' x2='21' y2='21' stroke='black' stroke-width='2' stroke-linecap='round'/%3E%3Cline x1='21' y1='11' x2='11' y2='21' stroke='black' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E\") 16 16, pointer" }}
        onClick={onClose}
      />

      {/* Drawer */}
      <div 
        className={`absolute top-0 right-0 h-full w-full max-w-[450px] bg-white shadow-2xl transform transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full bg-white">
          {/* Header */}
          <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
            <h2 className="text-[20px] font-medium text-gray-900">Search our site</h2>
            <button 
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-black transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
          </div>

          {/* Search Input Bar */}
          <div className="px-6 py-6 border-b border-gray-100 sticky top-0 bg-white z-10">
            <form className="relative" onSubmit={(e) => e.preventDefault()}>
              <button className="absolute left-0 top-0 h-full w-[46px] flex items-center justify-center text-gray-900 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              </button>
              <input 
                type="text" 
                placeholder="Search" 
                className="w-full h-[46px] pl-11 pr-5 border border-gray-200 text-gray-900 placeholder:text-gray-900 text-[15px] focus:outline-none focus:border-black transition-colors rounded-sm"
                autoFocus
              />
            </form>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            {/* Quick Links */}
            <div className="mb-8">
              <h3 className="text-[15.5px] font-medium text-gray-900 mb-4">Quick link</h3>
              <ul className="flex flex-col gap-3.5">
                {quickLinks.map(link => (
                  <li key={link}>
                    <a href="#" className="text-[14.5px] text-gray-800 hover:text-black transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Inspiration List */}
            <div>
              <h3 className="text-[15.5px] font-medium text-gray-900 mb-5">Need some inspiration?</h3>
              <div className="flex flex-col">
                {inspiration.map((item, index) => (
                  <div key={item.id} className={`flex gap-4 group cursor-pointer py-4 ${index !== 0 ? 'border-t border-gray-100' : 'pt-0'}`}>
                    <div className="w-[70px] h-[90px] overflow-hidden bg-gray-50 flex-shrink-0">
                      <img 
                        src={item.img} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex flex-col justify-center gap-1.5 pt-1">
                      <h4 className="text-[14.5px] text-gray-900 hover:text-[#f52b41] transition-colors">{item.title}</h4>
                      <div className="flex items-center gap-2">
                        {item.oldPrice && (
                          <span className="text-[14px] text-gray-500 line-through">{item.oldPrice}</span>
                        )}
                        <span className={`text-[14px] font-semibold ${item.oldPrice ? 'text-[#f52b41]' : 'text-gray-900'}`}>
                          {item.price}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchDrawer;
