import React, { useState, useEffect } from 'react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [progressAngle, setProgressAngle] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Show/hide button based on scroll position
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Calculate progress angle (0 to 360 degrees)
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 360;
      setProgressAngle(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial calculation in case the page is already scrolled
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-20 right-4 md:bottom-8 md:right-8 z-[1000] flex items-center justify-center transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="Back to Top"
    >
      <span 
        className="border-progress group" 
        style={{ '--progress-angle': `${progressAngle}deg` }}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="black" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="relative z-10 transition-transform group-hover:-translate-y-1"
        >
          <path d="m18 15-6-6-6 6"/>
        </svg>
      </span>
    </button>
  );
};

export default BackToTop;
