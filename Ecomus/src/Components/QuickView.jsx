import React, { useState, useEffect } from 'react';
import { useCart } from '../Context/CartContext';
import { useWishlist } from '../Context/WishlistContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const QuickView = ({ product, isOpen, onClose }) => {
    const { addToCart } = useCart();
    const { toggleWishlist, isInWishlist } = useWishlist();
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        if (product) {
            setSelectedColor(product.colors?.[0]?.name || null);
            setSelectedSize(product.sizes?.[0] || null);
            setQuantity(1);
        }
    }, [product]);

    if (!product || !isOpen) return null;

    const handleAddToCart = () => {
        addToCart(product, {
            color: selectedColor,
            size: selectedSize,
            quantity: quantity
        });
        onClose();
    };

    const priceValue = parseFloat(product.price.replace(/[^\d.]/g, '')) || 0;
    const totalPrice = (priceValue * quantity).toFixed(2);
    
    // Construct images array
    const images = [];
    if (product.img) images.push(product.img);
    if (product.hoverImg) images.push(product.hoverImg);

    return (
        <div className="fixed inset-0 z-[3000] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
                onClick={onClose}
            />
            
            {/* Modal Content */}
            <div className="relative w-full max-w-[900px] h-auto max-h-[90vh] bg-white rounded-xl shadow-2xl overflow-hidden transform transition-all duration-300 animate-in fade-in zoom-in flex flex-col md:flex-row">
                
                {/* Close Button */}
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-black z-20 p-2 transition-colors bg-white/80 rounded-full md:bg-transparent"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </button>

                {/* Left Side: Image Gallery */}
                <div className="w-full md:w-1/2 bg-[#f5f5f5] relative flex items-center shrink-0">
                    <Swiper
                        modules={[Navigation]}
                        navigation={{
                            nextEl: '.quickview-next',
                            prevEl: '.quickview-prev',
                        }}
                        loop={images.length > 1}
                        className="w-full h-full aspect-[3/4] md:aspect-auto md:absolute md:inset-0"
                    >
                        {images.map((img, idx) => (
                            <SwiperSlide key={idx} className="flex items-center justify-center h-full">
                                <img src={img} alt={`${product.title} view ${idx + 1}`} className="w-full h-full object-cover" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    
                    {images.length > 1 && (
                        <>
                            <button className="quickview-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow hover:bg-black hover:text-white transition-colors group">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mr-0.5"><path d="m15 18-6-6 6-6"/></svg>
                            </button>
                            <button className="quickview-next absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow hover:bg-black hover:text-white transition-colors group">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="ml-0.5"><path d="m9 18 6-6-6-6"/></svg>
                            </button>
                        </>
                    )}
                </div>

                {/* Right Side: Product Details */}
                <div className="w-full md:w-1/2 p-6 md:p-8 overflow-y-auto max-h-[50vh] md:max-h-[90vh] scrollbar-thin">
                    <h2 className="text-[28px] font-medium text-gray-900 tracking-tight mb-4">{product.title}</h2>
                    
                    {/* Badges */}
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="px-3 py-1 border border-black text-[10px] font-bold uppercase tracking-wider text-black rounded-sm whitespace-nowrap">Best seller</span>
                        <div className="flex items-center gap-2 text-[#f52b41]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M11 21.05V13H6.5l8.5-12v8.05h4.5l-8.5 12z" strokeWidth="0" stroke="currentColor"/></svg>
                            <span className="text-[14px] font-bold text-gray-900">Selling fast! 48 people have this in their carts.</span>
                        </div>
                    </div>

                    <div className="text-[24px] font-normal text-black mb-6">{product.price}</div>

                    <p className="text-[15px] text-gray-500 mb-8 leading-relaxed">
                        Nunc arcu faucibus a et lorem eu a mauris adipiscing conubia ac aptent ligula facilisis a auctor habitant parturient a a.Interdum fermentum.
                    </p>

                    <div className="space-y-6">
                        {/* Color Selection */}
                        {product.colors && product.colors.length > 0 && (
                            <div>
                                <div className="text-[14px] font-medium text-gray-900 mb-3">
                                    Color: <span className="font-bold">{selectedColor}</span>
                                </div>
                                <div className="flex gap-3">
                                    {product.colors.map((color, index) => (
                                        <div key={index} className="relative group/color">
                                            <button
                                                onClick={() => setSelectedColor(color.name)}
                                                className={`w-10 h-10 rounded-full border-2 transition-all flex items-center justify-center ${selectedColor === color.name ? 'border-black' : 'border-transparent hover:border-gray-200'}`}
                                            >
                                                <div 
                                                    className="w-7 h-7 rounded-full border border-gray-200"
                                                    style={{ backgroundColor: color.color }}
                                                />
                                            </button>
                                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-black text-white text-[11px] rounded invisible group-hover/color:visible opacity-0 group-hover/color:opacity-100 transition-all pointer-events-none whitespace-nowrap">
                                                {color.name}
                                                <div className="absolute top-full left-1/2 -translate-x-1/2 border-x-4 border-x-transparent border-t-4 border-t-black" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Size Selection */}
                        {product.sizes && product.sizes.length > 0 && (
                            <div>
                                <div className="flex justify-between items-end mb-3">
                                    <div className="text-[14px] font-medium text-gray-900">
                                        Size: <span className="font-bold">{selectedSize}</span>
                                    </div>
                                    <a href="#" className="text-[14px] font-bold text-gray-900 underline hover:text-[#f52b41] transition-colors">Find your size</a>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {product.sizes.map(size => (
                                        <button
                                            key={size}
                                            onClick={() => setSelectedSize(size)}
                                            className={`min-w-[44px] h-11 px-4 text-[13px] font-bold rounded border transition-all ${selectedSize === size ? 'bg-black text-white border-black' : 'bg-white text-gray-900 border-gray-200 hover:border-black'}`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Quantity Selector */}
                        <div>
                            <div className="text-[14px] font-medium text-gray-900 mb-3">Quantity</div>
                            <div className="inline-flex items-center bg-[#f5f5f5] rounded-md p-1">
                                <button 
                                    onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                                    className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-black transition-colors rounded-md hover:bg-white hover:shadow-sm"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/></svg>
                                </button>
                                <input 
                                    type="text" 
                                    value={quantity} 
                                    readOnly
                                    className="w-12 text-center text-[15px] font-bold outline-none border-none pointer-events-none bg-transparent"
                                />
                                <button 
                                    onClick={() => setQuantity(prev => prev + 1)}
                                    className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-black transition-colors rounded-md hover:bg-white hover:shadow-sm"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14"/><path d="M5 12h14"/></svg>
                                </button>
                            </div>
                        </div>

                        {/* Buy Buttons */}
                        <div className="space-y-4 pt-2">
                            <div className="flex gap-2">
                                <button 
                                    onClick={handleAddToCart}
                                    className="flex-1 bg-black text-white text-[15px] font-bold py-4 rounded hover:bg-gray-800 transition-all flex items-center justify-center gap-2"
                                >
                                    Add to cart - ${totalPrice}
                                </button>
                                <button 
                                    onClick={() => toggleWishlist(product)}
                                    className={`w-14 border rounded flex items-center justify-center transition-all ${isInWishlist(product.id) ? 'bg-black border-black text-white' : 'border-gray-200 text-gray-900 hover:border-black'}`}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill={isInWishlist(product.id) ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                                </button>
                                <button className="w-14 border border-gray-200 rounded flex items-center justify-center text-gray-900 hover:border-black transition-all">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18 3 3 3-3"/><path d="M18 15V9a2 2 0 0 0-2-2H9"/><path d="m9 6-3-3-3 3"/><path d="M6 9v6a2 2 0 0 0 2 2h7"/></svg>
                                </button>
                            </div>
                            
                            <div className="space-y-3">
                                <button className="w-full bg-[#ffc439] py-3.5 rounded flex items-center justify-center hover:bg-[#f2ba36] transition-colors">
                                    <span className="text-gray-800 text-[14px]">Buy with </span>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-4 ml-1" />
                                </button>
                                <a href="#" className="w-full text-[14px] text-gray-500 underline text-center block hover:text-black transition-colors decoration-1 underline-offset-4">
                                    More payment options
                                </a>
                            </div>

                            <div className="pt-4 flex justify-center pb-2">
                                <a href="#" className="inline-flex items-center gap-1 text-[14px] font-bold text-black border-b-[2px] border-black pb-0.5 hover:text-[#f52b41] hover:border-[#f52b41] transition-colors">
                                    View full details
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuickView;
