import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo/logo.svg';
import flagUS from '../assets/flags/us.png';
import flagFR from '../assets/flags/fr.png';
import flagDE from '../assets/flags/de.png';
import flagVN from '../assets/flags/vn.png';

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    if (window.innerWidth < 768) {
      setOpenSection(openSection === section ? null : section);
    }
  };

  const helpLinks = [
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Returns + Exchanges', path: '/delivery-return' },
    { name: 'Shipping', path: '/shipping-delivery' },
    { name: 'Terms & Conditions', path: '/terms-conditions' },
    { name: 'FAQ\'s', path: '/faq-1' },
    { name: 'Compare', path: '/compare' },
    { name: 'My Wishlist', path: '/wishlist' },
  ];

  const aboutLinks = [
    { name: 'Our Story', path: '/about-us' },
    { name: 'Visit Our Store', path: '/our-store' },
    { name: 'Contact Us', path: '/contact-1' },
    { name: 'Account', path: '/login' },
  ];

  const socialIcons = [
    { icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>, name: 'facebook' },
    { icon: <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>, name: 'x' },
    { icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>, name: 'instagram' },
    { icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91.04.15 1.53 1 2.94 2.41 3.65 1.25.59 2.65.75 3.96.9v3.83c-1.45-.04-2.85-.38-4.14-1.01-.26-.14-.52-.29-.76-.46v6.1c.06 2.37-1.14 4.67-3.23 5.86-2.02 1.13-4.52 1.09-6.49-.09-1.92-1.17-2.98-3.32-2.73-5.54.26-2.12 1.94-3.86 4.02-4.18.5-.07 1-.06 1.49.03v3.91c-1.39.23-2.58 1.48-2.61 2.89-.01 1.25.96 2.45 2.18 2.82 1.16.34 2.45-.07 3.14-1.04.57-.86.72-1.94.59-2.94V.02z"/></svg>, name: 'tiktok' },
    { icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/></svg>, name: 'pinterest' },
  ];

  return (
    <footer className="w-full bg-white pt-16 pb-8 border-t border-gray-100">
      <div className="max-w-[1320px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 lg:gap-12 pb-16 border-b border-gray-100">
          
          {/* Column 1: Info */}
          <div className="space-y-6">
            <Link to="/">
              <img src={logo} alt="Ecomus" className="h-6 w-auto" />
            </Link>
            <div className="space-y-4 text-[14px] text-gray-600 leading-relaxed">
              <p>Address: 1234 Fashion Street, Suite 567,<br />New York, NY 10001</p>
              <p>Email: <a href="mailto:info@fashionshop.com" className="hover:text-black transition-colors underline underline-offset-4 decoration-gray-300">info@fashionshop.com</a></p>
              <p>Phone: <a href="tel:2125551234" className="hover:text-black transition-colors underline underline-offset-4 decoration-gray-300">(212) 555-1234</a></p>
            </div>
            <Link to="/contact" className="inline-flex items-center gap-2 group text-[14px] font-medium border-b border-black pb-1">
              Get direction
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
            </Link>
            <div className="flex items-center gap-2 pt-2">
              {socialIcons.map((social) => (
                <a key={social.name} href="#" className="w-9 h-9 border border-gray-200 rounded-full flex items-center justify-center text-gray-700 hover:bg-black hover:text-white hover:border-black transition-all duration-300">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Help */}
          <div className="footer-col border-b md:border-b-0 border-gray-100 pb-4 md:pb-0">
            <h6 
              className="text-[16px] font-bold text-black py-2 md:py-0 mb-0 md:mb-6 flex justify-between items-center cursor-pointer md:cursor-default uppercase tracking-tight"
              onClick={() => toggleSection('help')}
            >
              Help
              <span className="md:hidden text-[20px] font-light">
                {openSection === 'help' ? '−' : '+'}
              </span>
            </h6>
            <ul className={`${openSection === 'help' ? 'block pt-4 pb-2' : 'hidden md:block'} space-y-4`}>
              {helpLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-[14px] text-gray-600 hover:text-black transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: About Us */}
          <div className="footer-col border-b md:border-b-0 border-gray-100 pb-4 md:pb-0">
            <h6 
              className="text-[16px] font-bold text-black py-2 md:py-0 mb-0 md:mb-6 flex justify-between items-center cursor-pointer md:cursor-default uppercase tracking-tight"
              onClick={() => toggleSection('about')}
            >
              About us
              <span className="md:hidden text-[20px] font-light">
                {openSection === 'about' ? '−' : '+'}
              </span>
            </h6>
            <ul className={`${openSection === 'about' ? 'block pt-4 pb-2' : 'hidden md:block'} space-y-4`}>
              {aboutLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-[14px] text-gray-600 hover:text-black transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="footer-col border-b md:border-b-0 border-gray-100 pb-4 md:pb-0">
            <h6 
              className="text-[16px] font-bold text-black py-2 md:py-0 mb-0 md:mb-6 flex justify-between items-center cursor-pointer md:cursor-default uppercase tracking-tight"
              onClick={() => toggleSection('newsletter')}
            >
              Sign Up for Email
              <span className="md:hidden text-[20px] font-light">
                {openSection === 'newsletter' ? '−' : '+'}
              </span>
            </h6>
            <div className={`${openSection === 'newsletter' ? 'block pt-4 pb-2' : 'hidden md:block'} space-y-6`}>
              <p className="text-[14px] text-gray-600 leading-relaxed">
                Sign up to get first dibs on new arrivals, sales, exclusive content, events and more!
              </p>
              <form className="relative mt-4">
                <div className="flex border border-gray-200 rounded-md overflow-hidden p-1 focus-within:border-black transition-colors">
                  <input 
                    type="email" 
                    placeholder="Enter your email...." 
                    className="w-full px-4 py-3 text-[14px] outline-none"
                  />
                  <button className="bg-black text-white px-6 py-3 text-[14px] font-medium rounded-md hover:bg-gray-800 transition-colors flex items-center gap-2">
                    Subscribe
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
                  </button>
                </div>
              </form>
              
              {/* Locale selectors */}
              <div className="flex gap-6 pt-4">
                <div className="flex items-center gap-2 cursor-pointer group">
                  <img src={flagUS} alt="English" className="w-5 h-3.5 border border-gray-200 object-cover" />
                  <span className="text-[14px] font-medium text-gray-700 group-hover:text-black">USD</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 group-hover:text-black"><path d="m6 9 6 6 6-6"/></svg>
                </div>
                <div className="flex items-center gap-2 cursor-pointer group">
                  <span className="text-[14px] font-medium text-gray-700 group-hover:text-black">English</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 group-hover:text-black"><path d="m6 9 6 6 6-6"/></svg>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 pb-10 md:pb-8 flex flex-wrap items-center justify-center md:justify-between gap-6 text-center md:text-left">
          <p className="text-[13px] text-gray-500 w-full md:w-auto">
            © 2025 Ecomus Store. All Rights Reserved
          </p>
          <div className="flex items-center justify-center gap-3 w-full md:w-auto">
            {/* Visa */}
            <div className="h-7 w-12 border border-gray-100 rounded flex items-center justify-center p-1 grayscale group hover:grayscale-0 transition-all">
                <svg viewBox="0 0 512 512" width="24" height="24"><path fill="#1A1F71" d="M115.1 127L93 286h44.4l22.1-159z"/><path fill="#F7B600" d="M433.8 127L380 286h43.3l53.8-159z"/><path fill="#1A1F71" d="M380 286h-44.4L270.7 127H315l32.5 120.4L380 286zM270.7 127L194.2 286h44.4l76.5-159h-44.4z"/></svg>
            </div>
            {/* PayPal */}
            <div className="h-7 w-12 border border-gray-100 rounded flex items-center justify-center p-1 grayscale group hover:grayscale-0 transition-all">
                <svg viewBox="0 0 512 512" width="24" height="24"><path fill="#003087" d="M428.1 113.1c0 74.4-60.3 134.7-134.7 134.7h-74.8v151.1H133V113.1c0-74.4 60.3-134.7 134.7-134.7h25.7c74.4 0 134.7 60.3 134.7 134.7z"/><path fill="#009cde" d="M428.1 113.1c0 74.4-60.3 134.7-134.7 134.7h-74.8v151.1H133V113.1c0-74.4 60.3-134.7 134.7-134.7h25.7c74.4 0 134.7 60.3 134.7 134.7z"/></svg>
            </div>
            {/* Mastercard */}
            <div className="h-7 w-12 border border-gray-100 rounded flex items-center justify-center p-1 grayscale group hover:grayscale-0 transition-all">
                <svg viewBox="0 0 512 512" width="24" height="24"><circle fill="#EB001B" cx="192" cy="256" r="160"/><circle fill="#F79E1B" cx="320" cy="256" r="160"/><path fill="#FF5F00" d="M256 127.4c29.1 0 56.4 10.4 77.9 27.7-21.5 17.3-34.9 43.6-34.9 72.9 0 29.3 13.4 55.6 34.9 72.9-21.5 17.3-48.8 27.7-77.9 27.7-29.1 0-56.4-10.4-77.9-27.7 21.5-17.3 34.9-43.6 34.9-72.9 0-29.3-13.4-55.6-34.9-72.9 21.5-17.3 48.8-27.7 77.9-27.7z"/></svg>
            </div>
            {/* Amex */}
            <div className="h-7 w-12 border border-gray-100 rounded flex items-center justify-center p-1 grayscale group hover:grayscale-0 transition-all">
                <svg viewBox="0 0 512 512" width="24" height="24"><rect fill="#0070CD" width="512" height="512" rx="64"/><path fill="#FFF" d="M115.1 160h44.4l22.1 192h-44.4L115.1 160zM433.8 160h-44.4l-32.5 120.4L324.4 160H280l76.5 192h44.4l32.9-192z"/></svg>
            </div>
            {/* Diners */}
             <div className="h-7 w-12 border border-gray-100 rounded flex items-center justify-center p-1 grayscale group hover:grayscale-0 transition-all">
                <svg viewBox="0 0 512 512" width="24" height="24"><circle fill="#0079C1" cx="256" cy="256" r="224"/><path fill="#FFF" d="M256 96c-88.4 0-160 71.6-160 160s71.6 160 160 160 160-71.6 160-160-71.6-160-160-160zm0 288c-70.7 0-128-57.3-128-128s57.3-128 128-128 128 57.3 128 128-57.3 128-128 128z"/></svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
