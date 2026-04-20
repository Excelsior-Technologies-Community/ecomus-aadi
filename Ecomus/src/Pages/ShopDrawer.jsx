import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Placeholder Assets
import cate1 from '../assets/products/orange-1.jpg'; // Accessories
import cate2 from '../assets/products/white-1.jpg';  // Dog
import cate3 from '../assets/products/black-1.jpg';  // Grocery
import cate4 from '../assets/products/white-2.jpg';  // Handbag
import cate5 from '../assets/collections/collection-1.jpg'; // Fashion
import cate6 from '../assets/collections/collection-2.jpg'; // Men
import cate7 from '../assets/products/white-3.jpg';  // Tee
import cate8 from '../assets/products/white-4.jpg';  // Shoes
import cate9 from '../assets/products/white-5.jpg';  // Women

const ShopDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedCats, setExpandedCats] = useState({});

  useEffect(() => {
    const openDrawer = () => setIsOpen(true);
    document.addEventListener('openShopDrawer', openDrawer);
    return () => document.removeEventListener('openShopDrawer', openDrawer);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const onClose = () => setIsOpen(false);

  const toggleCat = (id) => {
    setExpandedCats(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const categories = [
    {
      id: 'accessories',
      title: 'Accessories',
      img: cate1,
      link: '/shop',
    },
    {
      id: 'dog',
      title: 'Dog',
      img: cate2,
      link: '/shop',
    },
    {
      id: 'grocery',
      title: 'Grocery',
      img: cate3,
      link: '/shop',
    },
    {
      id: 'handbag',
      title: 'Handbag',
      img: cate4,
      link: '/shop',
    },
    {
      id: 'fashion',
      title: 'Fashion',
      img: cate5,
      children: [
        {
          id: 'mens-fashion',
          title: 'Mens',
          img: cate6,
          children: [
            { id: 'acc-mens', title: 'Accessories', img: cate1, link: '/shop' },
            { id: 'shoes-mens', title: 'Shoes', img: cate8, link: '/shop' },
          ]
        },
        {
          id: 'womens-fashion',
          title: 'Womens',
          img: cate9,
          children: [
            { id: 'handbag-womens', title: 'Handbag', img: cate4, link: '/shop' },
            { id: 'tee-womens', title: 'Tee', img: cate7, link: '/shop' },
          ]
        }
      ]
    },
    {
      id: 'men',
      title: 'Men',
      img: cate6,
      children: [
        { id: 'acc-men', title: 'Accessories', img: cate1, link: '/shop' },
        { id: 'shoes-men', title: 'Shoes', img: cate8, link: '/shop' },
      ]
    },
    {
      id: 'tee',
      title: 'Tee',
      img: cate7,
      link: '/shop',
    },
    {
      id: 'shoes',
      title: 'Shoes',
      img: cate8,
      link: '/shop',
    },
    {
      id: 'women',
      title: 'Women',
      img: cate9,
      children: [
        { id: 'handbag-women', title: 'Handbag', img: cate4, link: '/shop' },
        { id: 'tee-women', title: 'Tee', img: cate7, link: '/shop' },
      ]
    }
  ];

  // Recursive component for rendering category items
  const CategoryItem = ({ item, level = 0 }) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedCats[item.id];

    return (
      <li className={`border-b border-gray-100 ${level > 0 ? 'bg-gray-50/50' : ''}`}>
        <div 
          className="flex items-center justify-between py-3 px-6 cursor-pointer hover:bg-gray-50 transition-colors"
          onClick={() => {
            if (hasChildren) {
              toggleCat(item.id);
            } else if (item.link) {
              // Navigate to link logic here, or just close drawer
              window.location.href = item.link; 
            }
          }}
          style={{ paddingLeft: level > 0 ? `${1.5 + level * 1.5}rem` : '1.5rem' }}
        >
          <div className="flex items-center gap-4">
            <div className="w-[38px] h-[38px] rounded-full overflow-hidden border border-gray-100 flex-shrink-0 flex items-center justify-center bg-gray-50">
              <img src={item.img} alt={item.title} className="w-[85%] h-[85%] object-cover rounded-full" />
            </div>
            <span className="text-[15px] font-medium text-gray-900">{item.title}</span>
          </div>
          {hasChildren && (
            <button className="w-8 h-8 flex items-center justify-center text-gray-900">
              {isExpanded ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              )}
            </button>
          )}
        </div>
        
        {/* Render children if expanded */}
        {hasChildren && (
          <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <ul className="flex flex-col">
              {item.children.map(child => (
                <CategoryItem key={child.id} item={child} level={level + 1} />
              ))}
            </ul>
          </div>
        )}
      </li>
    );
  };

  return (
    <div className={`fixed inset-0 z-[2000] overflow-hidden transition-all duration-500 ${isOpen ? 'visible' : 'invisible pointer-events-none'}`}>
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black/50 backdrop-blur-[2px] transition-opacity duration-500 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div 
        className={`absolute top-0 left-0 h-full w-[85%] max-w-[400px] bg-white shadow-2xl transform transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {/* Header */}
        <div className="px-5 py-5 border-b border-gray-100 flex items-center">
          <button 
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-start text-gray-900 transition-colors"
            aria-label="Close menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        </div>

        {/* Scrollable Action Body */}
        <div className="flex-1 overflow-y-auto w-full no-scrollbar">
          <ul className="flex flex-col w-full">
            {categories.map(item => (
              <CategoryItem key={item.id} item={item} />
            ))}
          </ul>
        </div>

        {/* Bottom Section */}
        <div className="p-6 bg-gray-50/50 mt-auto border-t border-gray-100">
          <Link to="/shop" className="inline-flex items-center gap-1.5 text-[15px] font-bold text-gray-900 group decoration-2 underline-offset-[4px] border-b-[2px] border-black pb-0.5" onClick={onClose}>
            View all collection
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShopDrawer;
