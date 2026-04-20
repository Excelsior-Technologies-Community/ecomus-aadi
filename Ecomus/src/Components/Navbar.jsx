import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Login from '../Pages/Login';
import SearchDrawer from '../Pages/SearchDrawer';

// Assets
import logo from '../assets/logo/logo.svg';
import orange1 from '../assets/products/orange-1.jpg';
import white1 from '../assets/products/white-1.jpg';
import black1 from '../assets/products/black-1.jpg';
import white2 from '../assets/products/white-2.jpg';
import white3 from '../assets/products/white-3.jpg';
import white4 from '../assets/products/white-4.jpg';
import white5 from '../assets/products/white-5.jpg';
import pink1 from '../assets/products/pink-1.jpg';
import black2 from '../assets/products/black-2.jpg';
import brown2 from '../assets/products/brown-2.jpg';
import brown3 from '../assets/products/brown-3.jpg';
import collection1 from '../assets/collections/collection-1.jpg';
import collection2 from '../assets/collections/collection-2.jpg';
import flagUS from '../assets/flags/us.png';
import flagFR from '../assets/flags/fr.png';
import flagDE from '../assets/flags/de.png';
import flagVN from '../assets/flags/vn.png';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const menuTimeoutRef = React.useRef(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isSticky, setIsSticky] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if sticky (scrolled past top)
      if (currentScrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
        setIsVisible(true);
      }

      // Determine visibility based on direction
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        // Scrolling down and past threshold
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleOpenSearch = () => setIsSearchOpen(true);
    const handleOpenLogin = () => setIsLoginOpen(true);
    
    document.addEventListener('openSearchDrawer', handleOpenSearch);
    document.addEventListener('openLoginModal', handleOpenLogin);
    
    return () => {
      document.removeEventListener('openSearchDrawer', handleOpenSearch);
      document.removeEventListener('openLoginModal', handleOpenLogin);
    };
  }, []);


  const handleMouseEnter = (menuName) => {
    if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current);
    setActiveMenu(menuName);
  };

  const handleMouseLeave = () => {
    menuTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  const [bestSellerIndex, setBestSellerIndex] = useState(0);
  const [activeColors, setActiveColors] = useState({ 1: 0, 2: 0, 3: 0, 4: 0 });

  const bestSellers = [
    {
      id: 1,
      title: 'Ribbed Tank Top',
      price: '$16.95',
      img: orange1,
      imgHover: white1,
      colors: [
        { name: 'Orange', bg: '#e07b39', img: orange1 },
        { name: 'Black', bg: '#1a1a1a', img: black1 },
        { name: 'White', bg: '#f5f5f5', img: white1 },
      ]
    },
    {
      id: 2,
      title: 'Oversized Printed T-shirt',
      price: '$10.00',
      img: white3,
      imgHover: white4,
      colors: []
    },
    {
      id: 3,
      title: 'Oversized Printed T-shirt',
      price: '$16.95',
      img: white2,
      imgHover: pink1,
      colors: [
        { name: 'White', bg: '#f5f5f5', img: white2 },
        { name: 'Pink', bg: '#c084f5', img: pink1 },
        { name: 'Black', bg: '#1a1a1a', img: black2 },
      ]
    },
    {
      id: 4,
      title: 'V-neck linen T-shirt',
      price: '$114.95',
      img: brown2,
      imgHover: brown3,
      colors: [
        { name: 'Brown', bg: '#a0785a', img: brown2 },
        { name: 'White', bg: '#f5f5f5', img: white5 },
      ]
    },
  ];

  const productLayouts = [
    'Product default', 'Product grid 1', 'Product grid 2', 'Product stacked',
    'Product right thumbnails', 'Product bottom thumbnails', 'Product drawer sidebar',
    'Product description accordion', 'Product description list', 'Product description vertical'
  ];
  const productDetails = [
    'Product inner zoom', 'Product zoom magnifier', 'Product no zoom', 'Product photoswipe popup',
    'Product external zoom and photoswipe popup', 'Product video', 'Product 3D, AR models',
    'Product options & customizer', 'Advanced product types', 'Recipient information form for gift card products'
  ];
  const productSwatches = [
    'Product color swatch', 'Product rectangle', 'Product rectangle color', 'Product swatch image',
    'Product swatch image rounded', 'Product swatch dropdown', 'Product swatch dropdown color'
  ];
  const productFeatures = [
    { name: 'Frequently bought together', isNew: false },
    { name: 'Frequently bought together 2', isNew: false },
    { name: 'Product upsell features', isNew: false },
    { name: 'Product pre-orders', isNew: false },
    { name: 'Back in stock notification', isNew: false },
    { name: 'Product pickup', isNew: false },
    { name: 'Variant images grouped', isNew: false },
    { name: 'Complimentary products', isNew: false },
    { name: 'Quick order list', isNew: true },
    { name: 'Volume Discount', isNew: true },
    { name: 'Volume Discount Grid', isNew: true },
    { name: 'Buy X Get Y', isNew: true },
  ];
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const [currentCurrency, setCurrentCurrency] = useState({
    code: 'USD',
    symbol: '$',
    country: 'United States',
    flag: flagUS
  });

  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('English');

  const languages = ['English', 'العربية', '简体中文', 'اردو'];

  const currencies = [
    { code: 'EUR', symbol: '€', country: 'France', flag: flagFR },
    { code: 'EUR', symbol: '€', country: 'Germany', flag: flagDE },
    { code: 'USD', symbol: '$', country: 'United States', flag: flagUS },
    { code: 'VND', symbol: '₫', country: 'Vietnam', flag: flagVN },
  ];

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  return (
    <div className={`navbar-container absolute top-0 left-0 w-full z-[1000] ${
      isSticky ? 'navbar-sticky' : 'navbar-top'
    } ${
      !isVisible ? 'navbar-hidden' : (isSticky ? 'navbar-sticky-main' : '')
    }`}>
      {/* Top Bar (Marked Section) */}
      <div className="w-full bg-white px-4 lg:px-10 py-[10px] flex flex-wrap md:flex-nowrap items-center justify-center md:justify-between text-[13px] text-gray-800">
        {/* Social Icons */}
        <div className="hidden md:flex items-center gap-2">
          <a href="#" className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-200 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a href="#" className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-200 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="#" className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-200 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>
          <a href="#" className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-200 transition-colors">
             <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12.525.02c1.31-.02 2.61-.01 3.91.04.15 1.53 1 2.94 2.41 3.65 1.25.59 2.65.75 3.96.9v3.83c-1.45-.04-2.85-.38-4.14-1.01-.26-.14-.52-.29-.76-.46v6.1c.06 2.37-1.14 4.67-3.23 5.86-2.02 1.13-4.52 1.09-6.49-.09-1.92-1.17-2.98-3.32-2.73-5.54.26-2.12 1.94-3.86 4.02-4.18.5-.07 1-.06 1.49.03v3.91c-1.39.23-2.58 1.48-2.61 2.89-.01 1.25.96 2.45 2.18 2.82 1.16.34 2.45-.07 3.14-1.04.57-.86.72-1.94.59-2.94V.02z"/></svg>
          </a>
          <a href="#" className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-200 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/></svg>
          </a>
        </div>

        {/* Center Text Swiper */}
        <div className="flex-1 text-center font-medium my-2 md:my-0 w-full overflow-hidden max-w-[350px] mx-auto">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            speed={1000}
            className="w-full"
          >
            <SwiperSlide className="flex items-center justify-center">
              <div className="top-bar-text font-medium text-[13px]">
                Spring Fashion Sale
                <Link to="/shop" className="underline decoration-1 underline-offset-[3px] ml-1.5 inline-flex items-center text-[#f52b41] hover:text-red-700 transition-colors">
                  Shop now
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-0.5"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center">
              <div className="top-bar-text font-medium text-[13px]">Summer sale discount off 70%</div>
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center">
              <div className="top-bar-text font-medium text-[13px]">Time to refresh your wardrobe.</div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Locale & Currency */}
        <div className="hidden md:flex items-center gap-5">
          <div className="relative group">
            <div 
              className="flex items-center gap-1.5 cursor-pointer hover:text-black transition-colors"
              onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
            >
              <img src={currentCurrency.flag} alt={currentCurrency.code} className="w-[18px] h-[13px] border border-gray-200 object-cover rounded-sm" />
              <span className="font-medium">{currentCurrency.code}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform ${isCurrencyOpen ? 'rotate-180' : ''}`}><path d="m6 9 6 6 6-6"/></svg>
            </div>
            
            {/* Currency Dropdown Menu */}
            {isCurrencyOpen && (
              <div 
                className="absolute right-0 top-full mt-2 w-[220px] bg-white border border-gray-100 shadow-xl rounded-md py-2 z-[9999]"
                onMouseLeave={() => setIsCurrencyOpen(false)}
              >
                <ul className="flex flex-col">
                  {currencies.map((curr, index) => (
                    <li key={index}>
                      <button
                        className={`w-full text-left px-4 py-2 flex items-center gap-2 hover:bg-gray-50 transition-colors ${currentCurrency.country === curr.country ? 'bg-gray-50 text-black' : 'text-gray-600'}`}
                        onClick={() => {
                          setCurrentCurrency(curr);
                          setIsCurrencyOpen(false);
                        }}
                      >
                        <img src={curr.flag} alt={curr.country} className="w-5" />
                        <span className="text-[13px] font-medium">
                          {curr.code} {curr.symbol} | {curr.country}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="relative group">
            <div 
              className="flex items-center gap-1.5 cursor-pointer hover:text-black transition-colors"
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
            >
              <span className="font-medium text-gray-800">{currentLanguage}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform ${isLanguageOpen ? 'rotate-180' : ''}`}><path d="m6 9 6 6 6-6"/></svg>
            </div>

            {/* Language Dropdown Menu */}
            {isLanguageOpen && (
              <div 
                className="absolute right-0 top-full mt-2 w-[120px] bg-white border border-gray-100 shadow-xl rounded-md py-2 z-[9999]"
                onMouseLeave={() => setIsLanguageOpen(false)}
              >
                <ul className="flex flex-col">
                  {languages.map((lang, index) => (
                    <li key={index}>
                      <button
                        className={`w-full text-left px-4 py-2 text-[13px] font-medium transition-colors hover:bg-gray-50 ${currentLanguage === lang ? 'text-[#f52b41]' : 'text-gray-600'}`}
                        onClick={() => {
                          setCurrentLanguage(lang);
                          setIsLanguageOpen(false);
                        }}
                      >
                        {lang}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div 
        className="w-full bg-transparent px-4 lg:px-10 py-5 flex items-center justify-between z-40 relative border-none border-b-0" 
        onMouseLeave={handleMouseLeave}
      >
        
        {/* Left: Mobile Menu Toggle & Desktop Logo container */}
        <div className="flex items-center xl:w-[150px]">
          <button 
            className="xl:hidden text-black hover:text-gray-600 transition-colors focus:outline-none mr-4"
            onClick={() => document.dispatchEvent(new CustomEvent('openMobileMenuDrawer'))}
          >
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16" fill="currentColor">
                <path d="M2.00056 2.28571H16.8577C17.1608 2.28571 17.4515 2.16531 17.6658 1.95098C17.8802 1.73665 18.0006 1.44596 18.0006 1.14286C18.0006 0.839753 17.8802 0.549063 17.6658 0.334735C17.4515 0.120408 17.1608 0 16.8577 0H2.00056C1.69745 0 1.40676 0.120408 1.19244 0.334735C0.978109 0.549063 0.857702 0.839753 0.857702 1.14286C0.857702 1.44596 0.978109 1.73665 1.19244 1.95098C1.40676 2.16531 1.69745 2.28571 2.00056 2.28571ZM0.857702 8C0.857702 7.6969 0.978109 7.40621 1.19244 7.19188C1.40676 6.97755 1.69745 6.85714 2.00056 6.85714H22.572C22.8751 6.85714 23.1658 6.97755 23.3801 7.19188C23.5944 7.40621 23.7148 7.6969 23.7148 8C23.7148 8.30311 23.5944 8.59379 23.3801 8.80812C23.1658 9.02245 22.8751 9.14286 22.572 9.14286H2.00056C1.69745 9.14286 1.40676 9.02245 1.19244 8.80812C0.978109 8.59379 0.857702 8.30311 0.857702 8ZM0.857702 14.8571C0.857702 14.554 0.978109 14.2633 1.19244 14.049C1.40676 13.8347 1.69745 13.7143 2.00056 13.7143H12.2863C12.5894 13.7143 12.8801 13.8347 13.0944 14.049C13.3087 14.2633 13.4291 14.554 13.4291 14.8571C13.4291 15.1602 13.3087 15.4509 13.0944 15.6653C12.8801 15.8796 12.5894 16 12.2863 16H2.00056C1.69745 16 1.40676 15.8796 1.19244 15.6653C0.978109 15.4509 0.857702 15.1602 0.857702 14.8571Z" />
             </svg>
          </button>
          
          <Link to="/" className="logo-header hidden xl:block">
             <img src={logo} alt="logo" className="logo" />
          </Link>
        </div>

        {/* Center: Mobile Logo */}
        <div className="xl:hidden absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
          <Link to="/" className="logo-header">
             <img src={logo} alt="logo" className="h-[24px] w-auto" />
          </Link>
        </div>


        {/* Center: Desktop Navigation Nav */}
        <nav className="hidden xl:flex items-center gap-9 absolute left-1/2 -translate-x-1/2">

           {/* Home */}
           <Link to="/" className="group relative cursor-pointer flex items-center gap-1 font-medium text-[16px] text-gray-900 hover:text-black py-2">
              Home
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
           </Link>

           {/* Shop trigger */}
           <div
             className="group/shop relative"
             onMouseEnter={() => handleMouseEnter('shop')}
           >
             <Link to="/shop" className="cursor-pointer flex items-center gap-1 font-medium text-[16px] text-gray-900 hover:text-black py-2 transition-colors relative">
                Shop
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`text-gray-500 transition-transform duration-300 ${activeMenu === 'shop' ? 'rotate-180' : ''}`}><path d="m6 9 6 6 6-6"/></svg>
                <span className={`absolute bottom-0 left-0 h-[2px] bg-black transition-all duration-300 ${activeMenu === 'shop' ? 'w-full' : 'w-0'}`}></span>
             </Link>
           </div>

           {/* Products */}
           <div
             className="group/products relative"
             onMouseEnter={() => handleMouseEnter('products')}
           >
             <Link to="/products" className="cursor-pointer flex items-center gap-1 font-medium text-[16px] text-gray-900 hover:text-black py-2 transition-colors relative">
                Products
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`text-gray-500 transition-transform duration-300 ${activeMenu === 'products' ? 'rotate-180' : ''}`}><path d="m6 9 6 6 6-6"/></svg>
                <span className={`absolute bottom-0 left-0 h-[2px] bg-black transition-all duration-300 ${activeMenu === 'products' ? 'w-full' : 'w-0'}`}></span>
             </Link>
           </div>

           {/* Pages */}
           <Link to="/pages" className="group relative cursor-pointer flex items-center gap-1 font-medium text-[16px] text-gray-900 hover:text-black py-2">
              Pages
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500"><path d="m6 9 6 6 6-6"/></svg>
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
           </Link>

           {/* Blog */}
           <Link to="/blog" className="group relative cursor-pointer flex items-center gap-1 font-medium text-[16px] text-gray-900 hover:text-black py-2">
              Blog
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500"><path d="m6 9 6 6 6-6"/></svg>
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
           </Link>



        </nav>

        {/* Shop Mega Menu — positioned relative to the full-width navbar div */}
        {activeMenu === 'shop' && (
          <div
            className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 z-[998] cursor-default"
            onMouseEnter={() => handleMouseEnter('shop')}
            onMouseLeave={handleMouseLeave}
          >
            <div className="w-full px-10 py-10 flex gap-0">
              {/* Shop Layouts */}
              <div className="flex-1 min-w-0 pr-8">
                <div className="font-bold text-[12px] uppercase tracking-widest mb-6 text-black">Shop Layouts</div>
                <ul className="flex flex-col gap-3">
                  {['Default','Left sidebar','Right sidebar','Fullwidth','Sub collection','Collections list'].map((item) => (
                    <li key={item}><Link to="/shop" className="text-[14px] text-gray-500 hover:text-black transition-colors whitespace-nowrap">{item}</Link></li>
                  ))}
                </ul>
              </div>

              {/* Features */}
              <div className="flex-1 min-w-0 pr-8">
                <div className="font-bold text-[12px] uppercase tracking-widest mb-6 text-black">Features</div>
                <ul className="flex flex-col gap-3">
                  {['Pagination links','Pagination loadmore','Pagination infinite scrolling','Filter sidebar','Filter hidden'].map((item) => (
                    <li key={item}><Link to="/shop" className="text-[14px] text-gray-500 hover:text-black transition-colors whitespace-nowrap">{item}</Link></li>
                  ))}
                </ul>
              </div>

              {/* Product Styles */}
              <div className="flex-1 min-w-0 pr-8">
                <div className="font-bold text-[12px] uppercase tracking-widest mb-6 text-black">Product Styles</div>
                <ul className="flex flex-col gap-3">
                  {[1,2,3,4,5,6,7].map((num) => (
                    <li key={num}><Link to={`/product-style-0${num}`} className="text-[14px] text-gray-500 hover:text-black transition-colors whitespace-nowrap">Product style 0{num}</Link></li>
                  ))}
                </ul>
              </div>

              {/* Men Collection Image */}
              <div className="w-[240px] flex-shrink-0 mr-4 relative overflow-hidden rounded-sm group/men">
                <Link to="/shop" className="block w-full h-[340px] relative">
                  <img
                    src={collection1}
                    alt="Men"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/men:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-5">
                    <span className="bg-white text-black text-[14px] font-medium px-10 py-3 rounded-[3px] hover:bg-black hover:text-white transition-colors inline-flex items-center gap-2 shadow-sm">
                      Men
                    </span>
                  </div>
                </Link>
              </div>

              {/* Women Collection Image */}
              <div className="w-[240px] flex-shrink-0 relative overflow-hidden rounded-sm group/women">
                <Link to="/shop" className="block w-full h-[340px] relative">
                  <img
                    src={collection2}
                    alt="Women"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/women:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-5">
                    <span className="bg-white text-black text-[14px] font-medium px-10 py-3 rounded-[3px] hover:bg-black hover:text-white transition-colors inline-flex items-center gap-2 shadow-sm">
                      Women
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Products Mega Menu */}
        {activeMenu === 'products' && (
          <div
            className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 z-[997] cursor-default"
            onMouseEnter={() => handleMouseEnter('products')}
            onMouseLeave={handleMouseLeave}
          >
            <div className="w-full px-10 py-10 flex gap-0">
              {/* Column 1 – Product Layouts */}
              <div className="flex-1 min-w-0 pr-8">
                <div className="font-bold text-[12px] uppercase tracking-widest mb-6 text-black">Product Layouts</div>
                <ul className="flex flex-col gap-[10px]">
                  {productLayouts.map((item) => (
                    <li key={item}><Link to="/products" className="text-[13px] text-gray-500 hover:text-black transition-colors whitespace-nowrap">{item}</Link></li>
                  ))}
                </ul>
              </div>

              {/* Column 2 – Product Details */}
              <div className="flex-1 min-w-0 pr-8">
                <div className="font-bold text-[12px] uppercase tracking-widest mb-6 text-black">Product Details</div>
                <ul className="flex flex-col gap-[10px]">
                  {productDetails.map((item) => (
                    <li key={item}><Link to="/products" className="text-[13px] text-gray-500 hover:text-black transition-colors">{item}</Link></li>
                  ))}
                </ul>
              </div>

              {/* Column 3 – Product Swatches */}
              <div className="flex-1 min-w-0 pr-8">
                <div className="font-bold text-[12px] uppercase tracking-widest mb-6 text-black">Product Swatches</div>
                <ul className="flex flex-col gap-[10px]">
                  {productSwatches.map((item) => (
                    <li key={item}><Link to="/products" className="text-[13px] text-gray-500 hover:text-black transition-colors whitespace-nowrap">{item}</Link></li>
                  ))}
                </ul>
              </div>

              {/* Column 4 – Product Features */}
              <div className="flex-1 min-w-0 pr-8">
                <div className="font-bold text-[12px] uppercase tracking-widest mb-6 text-black">Product Features</div>
                <ul className="flex flex-col gap-[10px]">
                  {productFeatures.map((item) => (
                    <li key={item.name} className="flex items-center gap-2">
                      <Link to="/products" className="text-[13px] text-gray-500 hover:text-black transition-colors">{item.name}</Link>
                      {item.isNew && (
                        <span className="inline-flex items-center justify-center bg-[#13a89e] text-white text-[10px] font-semibold px-[6px] py-[2px] rounded-sm leading-none">
                          New
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Best Seller Section */}
              <div className="w-[560px] flex-shrink-0">
                <div className="font-bold text-[12px] uppercase tracking-widest mb-6 text-black">Best Seller</div>

                {/* Slider wrapper — both cards + arrows share the same relative container */}
                <div className="relative group/slider">

                  {/* LEFT prev arrow */}
                  <button
                    onClick={() => setBestSellerIndex(Math.max(0, bestSellerIndex - 1))}
                    disabled={bestSellerIndex === 0}
                    className={`absolute left-[-15px] top-[40%] -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center transition-all duration-300 opacity-0 group-hover/slider:opacity-100 group-hover/slider:translate-x-[20px] ${
                      bestSellerIndex === 0 ? 'cursor-not-allowed text-gray-300' : 'hover:bg-black hover:text-white text-gray-800'
                    }`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                  </button>

                  {/* RIGHT next arrow */}
                  <button
                    onClick={() => setBestSellerIndex(Math.min(bestSellers.length - 2, bestSellerIndex + 1))}
                    disabled={bestSellerIndex >= bestSellers.length - 2}
                    className={`absolute right-[-15px] top-[40%] -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center transition-all duration-300 opacity-0 group-hover/slider:opacity-100 group-hover/slider:-translate-x-[20px] ${
                      bestSellerIndex >= bestSellers.length - 2 ? 'cursor-not-allowed text-gray-300' : 'hover:bg-black hover:text-white text-gray-800'
                    }`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                  </button>

                  {/* Two visible product cards */}
                  <div className="flex gap-[24px] overflow-hidden">
                    {bestSellers.slice(bestSellerIndex, bestSellerIndex + 2).map((product, cardIdx) => {
                      const activeIdx = activeColors[product.id] ?? 0;
                      const displayImg = product.colors.length > 0
                        ? product.colors[activeIdx].img
                        : product.img;
                      return (
                        <div key={product.id} className="w-[258px] flex-shrink-0 group/card relative">

                          {/* Image and actions container */}
                          <div className="relative overflow-hidden mb-[15px] rounded-sm group/image bg-[#f5f5f5]" style={{ aspectRatio: '3/4' }}>
                            {/* Primary image */}
                            <img
                              src={displayImg}
                              alt={product.title}
                              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out group-hover/card:opacity-0"
                            />
                            {/* Hover image */}
                            <img
                              src={product.imgHover}
                              alt={product.title}
                              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out opacity-0 group-hover/card:opacity-100"
                            />

                            {/* 4 separate action buttons — slides up onto the bottom of the image area */}
                            <div className="absolute bottom-[10px] left-[10px] z-10 flex items-center gap-[8px] translate-y-full group-hover/card:translate-y-0 opacity-0 group-hover/card:opacity-100 transition-all duration-300 ease-out">
                              {/* Quick Add icon */}
                              <button
                                title="Quick Add"
                                className="w-[40px] h-[40px] bg-white rounded-[6px] shadow-md flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-200 text-black"
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 10a3 3 0 0 0 6 0"/></svg>
                              </button>
                              {/* Wishlist icon */}
                              <button
                                title="Add to Wishlist"
                                className="w-[40px] h-[40px] bg-white rounded-[6px] shadow-md flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-200 text-black"
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                              </button>
                              {/* Compare icon (Crossed diagonal arrows / Shuffle style) */}
                              <button
                                title="Add to Compare"
                                className="w-[40px] h-[40px] bg-white rounded-[6px] shadow-md flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-200 text-black"
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 3h5v5"/><path d="M4 20L21 3"/><path d="M21 16v5h-5"/><path d="M15 15l6 6"/><path d="M4 4l5 5"/></svg>
                              </button>
                              {/* Quick View icon */}
                              <button
                                title="Quick View"
                                className="w-[40px] h-[40px] bg-white rounded-[6px] shadow-md flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-200 text-black"
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                              </button>
                            </div>
                          </div>

                          {/* Card info */}
                          <div className="mt-[5px]">
                            <Link to="/products" className="block text-[15px] font-medium text-gray-800 hover:text-black transition-colors leading-snug mb-[5px]">
                              {product.title}
                            </Link>
                            <span className="block text-[15px] text-gray-700 font-medium mb-[10px]">{product.price}</span>

                            {/* Color swatches */}
                            {product.colors.length > 0 && (
                              <ul className="flex items-center gap-[6px]">
                                {product.colors.map((c, idx) => (
                                  <li key={idx}>
                                    <button
                                      title={c.name}
                                      onClick={() => setActiveColors(prev => ({ ...prev, [product.id]: idx }))}
                                      className="relative w-[22px] h-[22px] rounded-full flex items-center justify-center transition-transform hover:scale-110 focus:outline-none"
                                      style={{
                                        boxShadow: activeIdx === idx
                                          ? `0 0 0 1.5px white, 0 0 0 3px ${c.bg === '#f5f5f5' ? '#aaa' : c.bg}`
                                          : 'none'
                                      }}
                                    >
                                      <span
                                        className="w-[17px] h-[17px] rounded-full block border"
                                        style={{
                                          backgroundColor: c.bg,
                                          borderColor: c.bg === '#f5f5f5' ? '#ccc' : 'transparent'
                                        }}
                                      />
                                    </button>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                </div>
              </div>
            </div>
          </div>
        )}

        {/* Right: Icons */}
        <div className="flex items-center gap-[22px] text-gray-900">
           <button 
             className="hover:text-black transition-colors" 
             title="Search"
             onClick={() => setIsSearchOpen(true)}
           >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
           </button>
           <button 
             className="hover:text-black transition-colors hidden sm:block" 
             title="Account"
             onClick={() => setIsLoginOpen(true)}
           >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
           </button>
           <Link to="/wishlist" className="hover:text-black transition-colors relative hidden sm:block" title="Wishlist">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
              <span className="absolute -top-[6px] -right-[6px] bg-[#f52b41] text-white text-[11px] font-medium w-[18px] h-[18px] flex items-center justify-center rounded-full">0</span>
           </Link>
           <button className="hover:text-black transition-colors relative" title="Cart">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
              <span className="absolute -top-[7px] -right-[7px] bg-[#f52b41] text-white text-[11px] font-medium w-[18px] h-[18px] flex items-center justify-center rounded-full">0</span>
           </button>
        </div>

      </div>

      <Login isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      <SearchDrawer isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </div>
  );
};

export default Navbar;
