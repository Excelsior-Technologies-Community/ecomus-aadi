import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useCart } from '../Context/CartContext';

// Assets
import white3 from '../assets/products/white-3.jpg';
import white2 from '../assets/products/white-2.jpg';

const CartDrawer = () => {
    const { cartItems, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart();
    const [openTool, setOpenTool] = useState(null); // 'note', 'gift', 'shipping'

    useEffect(() => {
        if (isCartOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
            setOpenTool(null);
        }
    }, [isCartOpen]);

    const freeShippingThreshold = 100;
    const progress = Math.min((cartTotal / freeShippingThreshold) * 100, 100);
    const amountLeft = Math.max(freeShippingThreshold - cartTotal, 0);

    const closeTools = () => setOpenTool(null);

    return (
        <div className={`fixed inset-0 z-[2000] overflow-hidden transition-all duration-500 ${isCartOpen ? 'visible' : 'invisible pointer-events-none'}`}>
            {/* Backdrop */}
            <div
                className={`absolute inset-0 bg-black/50 backdrop-blur-[2px] transition-opacity duration-500 ease-in-out ${isCartOpen ? 'opacity-100' : 'opacity-0'}`}
                onClick={() => setIsCartOpen(false)}
            />

            {/* Main Drawer */}
            <div
                className={`absolute top-0 right-0 h-full w-full max-w-[450px] bg-white shadow-2xl transform transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="flex flex-col h-full bg-white relative overflow-hidden">
                    {/* Header */}
                    <div className="px-6 py-5 flex items-center justify-between">
                        <h2 className="text-[24px] font-bold text-[#111] tracking-[-0.02em]">Shopping cart</h2>
                        <button
                            onClick={() => setIsCartOpen(false)}
                            className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-black transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                        </button>
                    </div>

                    <div className="border-t border-gray-100 flex-1 overflow-y-auto overflow-x-hidden scrollbar-thin">
                        {/* Free Shipping Threshold */}
                        <div className="px-6 py-6 border-b border-gray-100">
                            <div className="relative h-[6px] w-full bg-[#f2f2f2] rounded-full mb-4">
                                <div 
                                    className="absolute top-0 left-0 h-full bg-black transition-all duration-1000 ease-out flex items-center justify-end rounded-full"
                                    style={{ width: `${progress}%` }}
                                >
                                    {progress > 0 && (
                                        <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center -mr-4 shadow-lg border-[3px] border-white overflow-hidden">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 21 14" fill="white">
                                                <path d="M0 0.875C0 0.391751 0.391751 0 0.875 0H13.5625C14.0457 0 14.4375 0.391751 14.4375 0.875V3.0625H17.3125C17.5867 3.0625 17.845 3.19101 18.0104 3.40969L20.8229 7.12844C20.9378 7.2804 21 7.46572 21 7.65625V11.375C21 11.8582 20.6082 12.25 20.125 12.25H17.7881C17.4278 13.2695 16.4554 14 15.3125 14C14.1696 14 13.1972 13.2695 12.8369 12.25H7.72563C7.36527 13.2695 6.39293 14 5.25 14C4.10706 14 3.13473 13.2695 2.77437 12.25H0.875C0.391751 12.25 0 11.8582 0 11.375V0.875ZM2.77437 10.5C3.13473 9.48047 4.10706 8.75 5.25 8.75C6.39293 8.75 7.36527 9.48046 7.72563 10.5H12.6875V1.75H1.75V10.5H2.77437ZM14.4375 8.89937V4.8125H16.8772L19.25 7.94987V10.5H17.7881C17.4278 9.48046 16.4554 8.75 15.3125 8.75C15.0057 8.75 14.7112 8.80264 14.4375 8.89937ZM5.25 10.5C4.76676 10.5 4.375 10.8918 4.375 11.375C4.375 11.8582 4.76676 12.25 5.25 12.25C5.73323 12.25 6.125 11.8582 6.125 11.375C6.125 10.8918 5.73323 10.5 5.25 10.5ZM15.3125 10.5C14.8293 10.5 14.4375 10.8918 14.4375 11.375C14.4375 11.8582 14.8293 12.25 15.3125 12.25C15.7957 12.25 16.1875 11.8582 16.1875 11.375C16.1875 10.8918 15.7957 10.5 15.3125 10.5Z"></path>
                                            </svg>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="text-[14px] text-gray-600 font-medium">
                                {amountLeft > 0 ? (
                                    <>Buy <span className="font-bold text-black">${amountLeft.toFixed(2)}</span> more to enjoy <span className="font-bold text-black underline underline-offset-4">Free Shipping</span></>
                                ) : (
                                    <span className="font-bold text-black uppercase tracking-wider">Congratulations! You qualify for Free Shipping!</span>
                                )}
                            </div>
                        </div>

                        {/* Cart Items */}
                        <div className="px-6 py-6 space-y-6">
                            {cartItems.length > 0 ? (
                                cartItems.map((item) => (
                                    <div key={item.cartKey} className="flex gap-4 group">
                                        <div className="w-[100px] aspect-[3/4] bg-gray-50 overflow-hidden rounded-md relative flex-shrink-0">
                                            <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                            <button 
                                                onClick={() => removeFromCart(item.cartKey)}
                                                className="absolute top-1 right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm hover:bg-black hover:text-white"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                                            </button>
                                        </div>
                                        <div className="flex-1 flex flex-col justify-between py-1">
                                            <div>
                                                <h3 className="text-[15px] font-medium text-gray-900 leading-snug mb-1 hover:text-[#f52b41] cursor-pointer">{item.title}</h3>
                                                {(item.color || item.size) && (
                                                    <p className="text-[12px] text-gray-500 mb-1">
                                                        {item.color}{item.color && item.size && ' / '}{item.size}
                                                    </p>
                                                )}
                                                <p className="text-[14px] text-black font-semibold">{item.price}</p>
                                            </div>
                                            <div className="flex items-center justify-between mt-3">
                                                <div className="flex items-center border border-gray-200 rounded-sm">
                                                    <button 
                                                        onClick={() => updateQuantity(item.cartKey, item.quantity - 1)}
                                                        className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-black"
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/></svg>
                                                    </button>
                                                    <span className="w-8 text-center text-[14px] font-medium">{item.quantity}</span>
                                                    <button 
                                                        onClick={() => updateQuantity(item.cartKey, item.quantity + 1)}
                                                        className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-black"
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14"/><path d="M5 12h14"/></svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="text-center py-10">
                                    <p className="text-gray-500 font-medium">Your cart is empty.</p>
                                </div>
                            )}
                        </div>

                        {/* Recommendations */}
                        <div className="px-6 py-8 border-t border-gray-100 bg-[#f9f9f9]">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-[17px] font-medium text-gray-900">You may also like</h3>
                                <div className="swiper-pagination-dots !relative !w-auto"></div>
                            </div>
                            <Swiper
                                modules={[Pagination]}
                                spaceBetween={20}
                                slidesPerView={1}
                                pagination={{
                                    el: '.swiper-pagination-dots',
                                    clickable: true,
                                    bulletClass: 'swiper-pagination-bullet !w-2 !h-2 !bg-gray-300 !opacity-100 !mx-1',
                                    bulletActiveClass: '!bg-black'
                                }}
                                className="w-full"
                            >
                                <SwiperSlide>
                                    <div className="flex items-center gap-4 bg-white p-3 rounded-md shadow-sm border border-gray-100">
                                        <img src={white3} alt="Loose Fit Sweatshirt" className="w-[70px] h-[90px] object-cover rounded-sm" />
                                        <div className="flex-1">
                                            <h4 className="text-[14px] font-medium text-gray-900 hover:text-[#f52b41] cursor-pointer">Loose Fit Sweatshirt</h4>
                                            <p className="text-[14px] font-bold text-black mt-1">$25.00</p>
                                        </div>
                                        <button className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                                        </button>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="flex items-center gap-4 bg-white p-3 rounded-md shadow-sm border border-gray-100">
                                        <img src={white2} alt="Loose Fit Hoodie" className="w-[70px] h-[90px] object-cover rounded-sm" />
                                        <div className="flex-1">
                                            <h4 className="text-[14px] font-medium text-gray-900 hover:text-[#f52b41] cursor-pointer">Loose Fit Hoodie</h4>
                                            <p className="text-[14px] font-bold text-black mt-1">$25.00</p>
                                        </div>
                                        <button className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                                        </button>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>

                    {/* Bottom Area */}
                    <div className="border-t border-gray-100 p-6 bg-white shrink-0">
                        {/* Tool Buttons */}
                        <div className="flex items-center justify-center gap-6 mb-6">
                            <button onClick={() => setOpenTool('note')} className="text-gray-900 hover:text-[#f52b41] transition-colors" title="Add Note">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 18" fill="currentColor">
                                    <path d="M5.12187 16.4582H2.78952C2.02045 16.4582 1.39476 15.8325 1.39476 15.0634V2.78952C1.39476 2.02045 2.02045 1.39476 2.78952 1.39476H11.3634C12.1325 1.39476 12.7582 2.02045 12.7582 2.78952V7.07841C12.7582 7.46357 13.0704 7.77579 13.4556 7.77579C13.8407 7.77579 14.1529 7.46357 14.1529 7.07841V2.78952C14.1529 1.25138 12.9016 0 11.3634 0H2.78952C1.25138 0 0 1.25138 0 2.78952V15.0634C0 16.6015 1.25138 17.8529 2.78952 17.8529H5.12187C5.50703 17.8529 5.81925 17.5407 5.81925 17.1555C5.81925 16.7704 5.50703 16.4582 5.12187 16.4582Z"></path>
                                    <path d="M15.3882 10.0971C14.5724 9.28136 13.2452 9.28132 12.43 10.0965L8.60127 13.9168C8.51997 13.9979 8.45997 14.0979 8.42658 14.2078L7.59276 16.9528C7.55646 17.0723 7.55292 17.1993 7.58249 17.3207C7.61206 17.442 7.67367 17.5531 7.76087 17.6425C7.84807 17.7319 7.95768 17.7962 8.07823 17.8288C8.19879 17.8613 8.32587 17.8609 8.44621 17.8276L11.261 17.0479C11.3769 17.0158 11.4824 16.9543 11.5675 16.8694L15.3882 13.0559C16.2039 12.2401 16.2039 10.9129 15.3882 10.0971ZM10.712 15.7527L9.29586 16.145L9.71028 14.7806L12.2937 12.2029L13.2801 13.1893L10.712 15.7527ZM14.4025 12.0692L14.2673 12.204L13.2811 11.2178L13.4157 11.0834C13.6876 10.8115 14.1301 10.8115 14.402 11.0834C14.6739 11.3553 14.6739 11.7977 14.4025 12.0692Z"></path>
                                </svg>
                            </button>
                            <button onClick={() => setOpenTool('gift')} className="text-gray-900 hover:text-[#f52b41] transition-colors" title="Add Gift Wrap">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 17 18" fill="currentColor">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M2.99566 2.73409C2.99566 0.55401 5.42538 -0.746668 7.23916 0.463462L8.50073 1.30516L9.7623 0.463462C11.5761 -0.746668 14.0058 0.55401 14.0058 2.73409V3.24744H14.8225C15.9633 3.24744 16.8881 4.17233 16.8881 5.31312V6.82566C16.8881 7.21396 16.5734 7.52873 16.1851 7.52873H15.8905V15.1877C15.8905 15.1905 15.8905 15.1933 15.8905 15.196C15.886 16.7454 14.6286 18 13.0782 18H3.92323C2.37003 18 1.11091 16.7409 1.11091 15.1877V7.52877H0.81636C0.42806 7.52877 0.113281 7.21399 0.113281 6.82569V5.31316C0.113281 4.17228 1.03812 3.24744 2.179 3.24744H2.99566V2.73409ZM4.40181 3.24744H7.79765V2.52647L6.45874 1.63317C5.57987 1.0468 4.40181 1.67677 4.40181 2.73409V3.24744ZM9.20381 2.52647V3.24744H12.5996V2.73409C12.5996 1.67677 11.4216 1.0468 10.5427 1.63317L9.20381 2.52647ZM2.179 4.6536C1.81472 4.6536 1.51944 4.94888 1.51944 5.31316V6.12261H5.73398L5.734 4.6536H2.179ZM5.73401 7.52873V13.9306C5.73401 14.1806 5.86682 14.4119 6.08281 14.5379C6.29879 14.6639 6.56545 14.6657 6.78312 14.5426L8.50073 13.5715L10.2183 14.5426C10.436 14.6657 10.7027 14.6639 10.9187 14.5379C11.1346 14.4119 11.2674 14.1806 11.2674 13.9306V7.52873H14.4844V15.1603C14.4844 15.1627 14.4843 15.1651 14.4843 15.1675V15.1877C14.4843 15.9643 13.8548 16.5938 13.0782 16.5938H3.92323C3.14663 16.5938 2.51707 15.9643 2.51707 15.1877V7.52877H5.73401ZM9.86129 4.6536H7.14017V12.7254L8.15469 12.1518C8.36941 12.0304 8.63204 12.0304 8.84676 12.1518L9.86129 12.7254V4.6536Z"></path>
                                </svg>
                            </button>
                            <button onClick={() => setOpenTool('shipping')} className="text-gray-900 hover:text-[#f52b41] transition-colors" title="Estimate Shipping">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 25 18" fill="currentColor">
                                    <path d="M0 0.811989C0 0.36354 0.36354 0 0.811989 0H15.4278C15.8763 0 16.2398 0.36354 16.2398 0.811989V3.10596H21.0144C23.6241 3.10596 25.8643 5.05894 25.8643 7.61523V14.6414C25.8643 15.0899 25.5007 15.4534 25.0523 15.4534H23.545C23.2139 16.9115 21.9098 18 20.3514 18C18.7931 18 17.4889 16.9115 17.1578 15.4534H8.69534C8.36423 16.9115 7.0601 18 5.50175 18C3.9434 18 2.63927 16.9115 2.30815 15.4534H0.811989C0.36354 15.4534 0 15.0899 0 14.6414V0.811989ZM2.35089 13.8294C2.74052 12.4562 4.00366 11.4503 5.50175 11.4503C6.99983 11.4503 8.26298 12.4562 8.6526 13.8294H14.6158V1.62398H1.62398V13.8294H2.35089ZM16.2398 4.72994V7.95749H24.2403V7.61523C24.2403 6.08759 22.8649 4.72994 21.0144 4.72994H16.2398ZM24.2403 9.58147H16.2398V13.8294H17.2006C17.5902 12.4562 18.8533 11.4503 20.3514 11.4503C21.8495 11.4503 23.1126 12.4562 23.5023 13.8294H24.2403V9.58147ZM5.50175 13.0743C4.58999 13.0743 3.85087 13.8134 3.85087 14.7251C3.85087 15.6369 4.58999 16.376 5.50175 16.376C6.41351 16.376 7.15263 15.6369 7.15263 14.7251C7.15263 13.8134 6.41351 13.0743 5.50175 13.0743ZM20.3514 13.0743C19.4397 13.0743 18.7005 13.8134 18.7005 14.7251C18.7005 15.6369 19.4397 16.376 20.3514 16.376C21.2632 16.376 22.0023 15.6369 22.0023 14.7251C22.0023 13.8134 21.2632 13.0743 20.3514 13.0743Z"></path>
                                </svg>
                            </button>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center justify-between font-medium text-gray-900">
                                <span className="text-[17px]">Subtotal</span>
                                <span className="text-[17px] font-bold">${cartTotal.toFixed(2)} USD</span>
                            </div>
                            <p className="text-[13px] text-gray-500">Taxes and <Link to="#" className="underline">shipping</Link> calculated at checkout</p>
                            
                            <div className="flex items-center gap-2 py-2">
                                <input type="checkbox" id="agree" className="w-4 h-4 rounded border-gray-300 text-black focus:ring-black" />
                                <label htmlFor="agree" className="text-[13px] text-gray-600">
                                    I agree with the <Link to="#" className="underline">terms and conditions</Link>
                                </label>
                            </div>

                            <div className="flex flex-col gap-3">
                                <Link to="/view-cart" className="w-full py-3.5 border border-black rounded-md text-center text-[14px] font-bold tracking-widest uppercase hover:bg-black hover:text-white transition-all">
                                    View cart
                                </Link>
                                <button className="w-full py-3.5 bg-black text-white rounded-md text-center text-[14px] font-bold tracking-widest uppercase flex items-center justify-center gap-2 group relative overflow-hidden">
                                    <span className="relative z-10">Check out</span>
                                    <div className="absolute inset-0 bg-red-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Tool Sidebars */}
                    {/* Note Tool */}
                    <div className={`absolute inset-0 bg-white z-[50] transform transition-transform duration-500 ease-in-out ${openTool === 'note' ? 'translate-y-0' : 'translate-y-full'}`}>
                        <div className="flex flex-col h-full">
                            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                                <h3 className="text-[18px] font-medium">Add Order Note</h3>
                                <button onClick={closeTools} className="text-gray-400 hover:text-black">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                                </button>
                            </div>
                            <div className="p-6 flex-1">
                                <textarea 
                                    className="w-full h-40 border border-gray-200 rounded-md p-4 focus:outline-none focus:border-black resize-none"
                                    placeholder="How can we help you?"
                                />
                                <button onClick={closeTools} className="w-full mt-6 py-3 bg-black text-white rounded-md font-bold uppercase tracking-widest text-[13px]">Save Note</button>
                            </div>
                        </div>
                    </div>

                    {/* Gift Tool */}
                    <div className={`absolute inset-0 bg-white z-[50] transform transition-transform duration-500 ease-in-out ${openTool === 'gift' ? 'translate-y-0' : 'translate-y-full'}`}>
                        <div className="flex flex-col h-full">
                            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                                <h3 className="text-[18px] font-medium">Add Gift Wrap</h3>
                                <button onClick={closeTools} className="text-gray-400 hover:text-black">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                                </button>
                            </div>
                            <div className="p-6 flex-1 flex flex-col items-center justify-center text-center">
                                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><rect x="3" y="11" width="18" height="10" rx="2"/><path d="M12 11V7"/><path d="M7.5 7h9a2.5 2.5 0 0 0 0-5h-9a2.5 2.5 0 0 0 0 5Z"/></svg>
                                </div>
                                <p className="text-[16px] font-medium mb-1">Make it a gift!</p>
                                <p className="text-[14px] text-gray-500 mb-8">Only <span className="font-bold text-black">$5.00</span> for premium gift wrapping.</p>
                                <button onClick={closeTools} className="w-full py-3 bg-black text-white rounded-md font-bold uppercase tracking-widest text-[13px]">Add a gift wrap</button>
                                <button onClick={closeTools} className="mt-4 text-[13px] font-bold uppercase tracking-widest text-gray-400 underline">Cancel</button>
                            </div>
                        </div>
                    </div>

                    {/* Shipping Tool */}
                    <div className={`absolute inset-0 bg-white z-[50] transform transition-transform duration-500 ease-in-out ${openTool === 'shipping' ? 'translate-y-0' : 'translate-y-full'}`}>
                        <div className="flex flex-col h-full">
                            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                                <h3 className="text-[18px] font-medium">Estimate Shipping</h3>
                                <button onClick={closeTools} className="text-gray-400 hover:text-black">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                                </button>
                            </div>
                            <div className="p-6 flex-1 overflow-y-auto">
                                <div className="space-y-5">
                                    <div>
                                        <label className="block text-[14px] font-medium text-gray-700 mb-2">Country</label>
                                        <select className="w-full border border-gray-200 rounded-md p-3 focus:outline-none focus:border-black appearance-none bg-no-repeat bg-[right_1rem_center] bg-[length:1em_1em]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")` }}>
                                            <option>United States</option>
                                            <option>Canada</option>
                                            <option>United Kingdom</option>
                                            <option>Australia</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-[14px] font-medium text-gray-700 mb-2">Zip code</label>
                                        <input type="text" className="w-full border border-gray-200 rounded-md p-3 focus:outline-none focus:border-black" placeholder="Zip code" />
                                    </div>
                                    <button onClick={closeTools} className="w-full py-3 bg-black text-white rounded-md font-bold uppercase tracking-widest text-[13px]">Estimate</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartDrawer;
