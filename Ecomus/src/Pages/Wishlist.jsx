import React from 'react';
import { Link } from 'react-router-dom';
import { useWishlist } from '../Context/WishlistContext';

const WishlistCard = ({ product, onRemove }) => {
  return (
    <div className="group flex flex-col">
      <div className="relative aspect-[3/4] overflow-hidden bg-[#f5f5f5] rounded-[10px]">
        {/* Product Images */}
        <Link to="#" className="block h-full w-full">
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
        </Link>

        {/* Remove Wishlist Button (Top Right) */}
        <div className="absolute top-3 right-3 z-10 flex flex-col gap-2">
            <button 
                onClick={() => onRemove(product.id)}
                className="w-10 h-10 rounded-full bg-white text-black shadow-md flex items-center justify-center hover:bg-black hover:text-white transition-all transform hover:rotate-90 group/remove"
                title="Remove Wishlist"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
        </div>

        {/* Action Buttons (Bottom Center - Hidden on Mobile, Slide up on Desktop Hover) */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <button className="w-10 h-10 rounded-md bg-white text-black shadow-md flex items-center justify-center hover:bg-black hover:text-white transition-colors" title="Quick Add">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          </button>
          <button className="w-10 h-10 rounded-md bg-white text-black shadow-md flex items-center justify-center hover:bg-black hover:text-white transition-colors" title="Add to Compare">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 3h5v5"/><path d="M4 20L21 3"/><path d="M21 16v5h-5"/><path d="M15 15l6 6"/><path d="M4 4l5 5"/></svg>
          </button>
          <button className="w-10 h-10 rounded-md bg-white text-black shadow-md flex items-center justify-center hover:bg-black hover:text-white transition-colors" title="Quick View">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
          </button>
        </div>

        {/* Sizes (Bottom Strip on Hover) */}
        {product.sizes && (
            <div className="absolute top-1/2 left-0 right-0 bg-white/90 py-2 flex justify-center gap-3 translate-y-20 opacity-0 group-hover:translate-y-4 group-hover:opacity-100 transition-all duration-500 font-medium text-[12px]">
                {product.sizes.map(size => <span key={size} className="hover:text-black cursor-pointer text-gray-500">{size}</span>)}
            </div>
        )}
      </div>

      <div className="pt-4 flex flex-col gap-1.5 px-1">
        <Link to="#" className="text-[17px] font-medium text-[#111] hover:text-gray-600 transition-colors leading-tight">{product.title}</Link>
        <div className="flex items-center gap-2">
          <span className="text-[16px] font-bold text-black">{product.price}</span>
        </div>

        {product.colors && product.colors.length > 0 && (
          <div className="flex items-center gap-2.5 mt-1">
            {product.colors.map((color, idx) => (
              <div 
                key={idx} 
                className={`w-6 h-6 rounded-full p-[2px] border cursor-pointer transition-all ${idx === 0 ? 'border-black' : 'border-transparent hover:border-black'}`}
              >
                <div 
                    className="w-full h-full rounded-full border border-gray-100 shadow-sm" 
                    style={{ backgroundColor: color.bg }}
                ></div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Page Header */}
      <div className="tf-page-title mt-[100px] md:mt-[140px] relative py-16 md:py-24 bg-white border-b border-gray-50 uppercase font-medium">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_#fff3f2_0%,_#ffffff_100%)] opacity-80"></div>
        
        <div className="container-full mx-auto w-full relative z-10 px-4">
          <div className="heading text-center">
            <h1 className="text-[36px] md:text-[52px] font-medium text-[#111] tracking-tight">Your wishlist</h1>
          </div>
        </div>
      </div>

      <main className="flat-spacing-2 py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-[1440px]">
          {wishlist.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
              {wishlist.map((item) => (
                <WishlistCard key={item.id} product={item} onRemove={removeFromWishlist} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 flex flex-col items-center">
              <h2 className="text-[28px] font-medium text-black mb-4">Your wishlist is empty</h2>
              <p className="text-gray-500 mb-10 max-w-sm mx-auto font-medium">Explore our collections and save your favorite items here!</p>
              <Link to="/" className="inline-block px-12 py-4 bg-black text-white font-semibold text-[14px] rounded-md hover:bg-gray-800 transition-all uppercase tracking-widest">
                Start Shopping
              </Link>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Wishlist;
