import React from 'react';
import { Link } from 'react-router-dom';
import { useWishlist } from '../Context/WishlistContext';

const MobileBottomNav = () => {
  const { wishlist } = useWishlist();
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full bg-white z-[999] border-t border-gray-200 px-2 py-2 flex items-center justify-between shadow-[0_-2px_10px_rgba(0,0,0,0.05)] pb-safe-area">
      {/* Shop */}
      <button 
        className="flex flex-col items-center justify-center gap-1 w-1/5 text-black hover:text-[#f52b41] transition-colors"
        onClick={() => document.dispatchEvent(new CustomEvent('openShopDrawer'))}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect width="7" height="7" x="3" y="3" rx="1"/>
          <rect width="7" height="7" x="14" y="3" rx="1"/>
          <rect width="7" height="7" x="14" y="14" rx="1"/>
          <rect width="7" height="7" x="3" y="14" rx="1"/>
        </svg>
        <span className="text-[11px] font-medium">Shop</span>
      </button>

      {/* Search */}
      <button 
        className="flex flex-col items-center justify-center gap-1 w-1/5 text-black hover:text-[#f52b41] transition-colors"
        onClick={() => document.dispatchEvent(new CustomEvent('openSearchDrawer'))}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"/>
          <path d="m21 21-4.3-4.3"/>
        </svg>
        <span className="text-[11px] font-medium">Search</span>
      </button>

      {/* Account */}
      <button 
        className="flex flex-col items-center justify-center gap-1 w-1/5 text-black hover:text-[#f52b41] transition-colors"
        onClick={() => document.dispatchEvent(new CustomEvent('openLoginModal'))}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
        <span className="text-[11px] font-medium">Account</span>
      </button>

      {/* Wishlist */}
      <Link to="/wishlist" className="flex flex-col items-center justify-center gap-1 w-1/5 text-black hover:text-[#f52b41] transition-colors relative">
        <div className="relative">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
          </svg>
          <span className="absolute -top-[5px] -right-[5px] bg-[#f52b41] text-white text-[10px] font-bold w-[16px] h-[16px] flex items-center justify-center rounded-full leading-none">{wishlist.length}</span>
        </div>
        <span className="text-[11px] font-medium">Wishlist</span>
      </Link>

      {/* Cart */}
      <button className="flex flex-col items-center justify-center gap-1 w-1/5 text-black hover:text-[#f52b41] transition-colors relative">
        <div className="relative">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/>
            <path d="M3 6h18"/>
            <path d="M16 10a4 4 0 0 1-8 0"/>
          </svg>
          <span className="absolute -top-[5px] -right-[4px] bg-[#f52b41] text-white text-[10px] font-bold w-[16px] h-[16px] flex items-center justify-center rounded-full leading-none">1</span>
        </div>
        <span className="text-[11px] font-medium">Cart</span>
      </button>

    </div>
  );
};

export default MobileBottomNav;
