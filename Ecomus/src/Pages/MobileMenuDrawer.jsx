import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import flagUS from '../assets/flags/us.png';

const MobileMenuDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedCats, setExpandedCats] = useState({});

  useEffect(() => {
    const openDrawer = () => setIsOpen(true);
    document.addEventListener('openMobileMenuDrawer', openDrawer);
    return () => document.removeEventListener('openMobileMenuDrawer', openDrawer);
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

  const navItems = [
    {
      id: 'shop',
      title: 'Shop',
      children: [
        { id: 's1', title: 'Shop layouts', link: '/shop' },
        { id: 's2', title: 'Features', link: '/shop' },
      ]
    },
    {
      id: 'products',
      title: 'Products',
      children: [
        { id: 'p1', title: 'Product layouts', link: '/products' },
        { id: 'p2', title: 'Product details', link: '/products' },
      ]
    },
    {
      id: 'pages',
      title: 'Pages',
      children: [
        { id: 'pg1', title: 'About us', link: '/pages' },
        { id: 'pg2', title: 'Contact', link: '/pages' },
      ]
    },
    {
      id: 'blog',
      title: 'Blog',
      children: [
        { id: 'b1', title: 'Blog list', link: '/blog' },
      ]
    },
    {
      id: 'buynow',
      title: 'Buy now',
      link: '/buy-now'
    }
  ];

  const NavItem = ({ item, level = 0 }) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedCats[item.id];

    return (
      <li className={`border-b border-gray-100 ${level > 0 ? 'bg-gray-50/50' : ''}`}>
        <div 
          className="flex items-center justify-between py-[18px] px-5 flex-1 w-full cursor-pointer hover:bg-gray-50 transition-colors"
          onClick={() => {
            if (hasChildren) {
              toggleCat(item.id);
            } else if (item.link) {
              window.location.href = item.link;
            }
          }}
          style={{ paddingLeft: level > 0 ? `${1.25 + level * 1.5}rem` : '1.25rem' }}
        >
          <span className={`text-[15px] text-gray-900 ${level === 0 ? 'font-medium' : 'font-normal'}`}>{item.title}</span>
          {hasChildren && (
            <button className="w-6 h-6 flex items-center justify-center text-gray-900">
              {isExpanded ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              )}
            </button>
          )}
        </div>
        
        {hasChildren && (
          <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <ul className="flex flex-col">
              {item.children.map(child => (
                <NavItem key={child.id} item={child} level={level + 1} />
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
        <div className="px-5 py-5 flex items-center">
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
          {/* Main Navigation */}
          <ul className="flex flex-col w-full">
            {navItems.map(item => (
              <NavItem key={item.id} item={item} />
            ))}
          </ul>

          {/* Other Content */}
          <div className="px-5 py-8 flex flex-col gap-8">
            {/* Wishlist & Search Boxes */}
            <div className="flex items-center gap-4">
              <button 
                onClick={() => { onClose(); document.dispatchEvent(new CustomEvent('openSearchDrawer')); }}
                className="flex-1 bg-gray-50 hover:bg-gray-100 transition-colors py-3 px-4 rounded-[3px] flex items-center justify-center gap-2 group text-[15px] font-medium text-gray-900"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                Wishlist
              </button>
              <button 
                onClick={() => { onClose(); document.dispatchEvent(new CustomEvent('openSearchDrawer')); }}
                className="flex-1 bg-gray-50 hover:bg-gray-100 transition-colors py-3 px-4 rounded-[3px] flex items-center justify-center gap-2 group text-[15px] font-medium text-gray-900"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                Search
              </button>
            </div>

            {/* Need Help Section */}
            <div>
              <h4 className="text-[15px] font-medium text-gray-900 mb-4 inline-block border-b border-black pb-0.5">Need help ?</h4>
              <ul className="flex flex-col gap-2.5 text-[15px] text-gray-500">
                <li>Address: 1234 Fashion Street, Suite 567,<br/>New York, NY 10001</li>
                <li>Email: <span className="font-semibold">info@fashionshop.com</span></li>
                <li>Phone: <span className="font-semibold">(212) 555-1234</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="px-5 py-4 mt-auto border-t border-gray-100 bg-white">
          <button 
            onClick={() => { onClose(); document.dispatchEvent(new CustomEvent('openLoginModal')); }}
            className="mb-5 bg-gray-50 hover:bg-gray-100 transition-colors py-3 px-5 rounded-[3px] flex items-center gap-2.5 w-fit text-[15px] font-medium text-gray-900"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            Login
          </button>
          
          <div className="flex items-center gap-6">
            {/* Currency */}
            <button className="flex items-center gap-2 text-[14px] text-gray-900 font-medium">
              <img src={flagUS} alt="US" className="w-[18px] border border-gray-200 rounded-sm" />
              USD
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </button>
            
            {/* Language */}
            <button className="flex items-center gap-1.5 text-[14px] text-gray-900 font-medium">
              English
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenuDrawer;
