import React, { useState, useEffect } from 'react';
import logo from '../assets/logo/logo.svg';

const Login = ({ isOpen, onClose }) => {
  const [view, setView] = useState('login'); // 'login' or 'register'

  // Reset to login view when modal closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => setView('login'), 300);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-[3px] transition-opacity duration-300"
        style={{ cursor: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Ccircle cx='16' cy='16' r='14' fill='white'/%3E%3Cline x1='11' y1='11' x2='21' y2='21' stroke='black' stroke-width='2' stroke-linecap='round'/%3E%3Cline x1='21' y1='11' x2='11' y2='21' stroke='black' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E\") 16 16, pointer" }}
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="relative w-full max-w-[480px] flex items-start justify-center animate-in fade-in zoom-in duration-300">
        
        {/* Modal Content */}
        <div className="relative bg-white w-full rounded-[4px] shadow-2xl p-8 md:p-12 transition-all duration-300">
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute right-5 top-5 text-gray-400 hover:text-black transition-colors"
            aria-label="Close modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>

          {view === 'login' ? (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
              {/* Header */}
              <div className="mb-6 text-left">
                <h2 className="text-[22px] font-medium text-gray-900 leading-tight">Log in</h2>
              </div>

              {/* Form */}
              <form className="space-y-[18px]" onSubmit={(e) => e.preventDefault()}>
                {/* Email Field */}
                <div>
                  <input 
                    type="email" 
                    id="email"
                    className="w-full h-[50px] px-4 border border-gray-200 rounded-[2px] text-[15px] focus:outline-none focus:border-black transition-colors placeholder:text-gray-500"
                    placeholder="Email *"
                    required
                  />
                </div>

                {/* Password Field */}
                <div>
                  <input 
                    type="password" 
                    id="password"
                    className="w-full h-[50px] px-4 border border-gray-200 rounded-[2px] text-[15px] focus:outline-none focus:border-black transition-colors placeholder:text-gray-500"
                    placeholder="Password *"
                    required
                  />
                </div>

                {/* Forgot Password */}
                <div className="text-left mt-2 mb-4">
                  <a href="#" className="text-[14px] font-medium text-gray-600 hover:text-black underline underline-offset-4 decoration-gray-400 hover:decoration-black transition-colors">
                    Forgot your password?
                  </a>
                </div>

                {/* Actions */}
                <div className="space-y-6 pt-1">
                  <button 
                    type="submit"
                    className="w-full h-[50px] bg-black text-white rounded-[2px] font-semibold text-[15px] hover:bg-[#222] transition-all duration-300 flex items-center justify-center shadow-sm active:scale-[0.98]"
                  >
                    Log in
                  </button>
                  
                  <div className="text-left pt-3">
                    <button 
                      type="button"
                      onClick={() => setView('register')}
                      className="inline-flex items-center gap-1.5 text-[15px] font-bold text-black group underline underline-offset-[5px] decoration-black/60 hover:decoration-black"
                    >
                      New customer? Create your account
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          ) : (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
              {/* Header */}
              <div className="mb-10 text-left">
                <h2 className="text-[28px] font-medium text-gray-900 leading-tight">Register</h2>
              </div>

              {/* Form */}
              <form className="space-y-[18px]" onSubmit={(e) => e.preventDefault()}>
                {/* First Name Field */}
                <div className="relative">
                  <input 
                    type="text" 
                    id="firstName"
                    className="peer w-full h-[55px] px-[15px] pt-4 border border-gray-200 rounded-[3px] text-[15px] focus:outline-none focus:border-black transition-colors placeholder-transparent"
                    placeholder="First name"
                  />
                  <label 
                    htmlFor="firstName"
                    className="absolute left-[15px] top-[16px] text-[15px] text-gray-500 transition-all pointer-events-none 
                               peer-placeholder-shown:text-[15px] peer-placeholder-shown:top-[16px] 
                               peer-focus:top-[6px] peer-focus:text-[11px] peer-focus:text-gray-400
                               peer-[:not(:placeholder-shown)]:top-[6px] peer-[:not(:placeholder-shown)]:text-[11px]"
                  >
                    First name
                  </label>
                </div>

                {/* Last Name Field */}
                <div className="relative">
                  <input 
                    type="text" 
                    id="lastName"
                    className="peer w-full h-[55px] px-[15px] pt-4 border border-gray-200 rounded-[3px] text-[15px] focus:outline-none focus:border-black transition-colors placeholder-transparent"
                    placeholder="Last name"
                  />
                  <label 
                    htmlFor="lastName"
                    className="absolute left-[15px] top-[16px] text-[15px] text-gray-500 transition-all pointer-events-none 
                               peer-placeholder-shown:text-[15px] peer-placeholder-shown:top-[16px] 
                               peer-focus:top-[6px] peer-focus:text-[11px] peer-focus:text-gray-400
                               peer-[:not(:placeholder-shown)]:top-[6px] peer-[:not(:placeholder-shown)]:text-[11px]"
                  >
                    Last name
                  </label>
                </div>

                {/* Email Field */}
                <div className="relative">
                  <input 
                    type="email" 
                    id="reg-email"
                    className="peer w-full h-[55px] px-[15px] pt-4 border border-gray-200 rounded-[3px] text-[15px] focus:outline-none focus:border-black transition-colors placeholder-transparent"
                    placeholder="Email *"
                    required
                  />
                  <label 
                    htmlFor="reg-email"
                    className="absolute left-[15px] top-[16px] text-[15px] text-gray-500 transition-all pointer-events-none 
                               peer-placeholder-shown:text-[15px] peer-placeholder-shown:top-[16px] 
                               peer-focus:top-[6px] peer-focus:text-[11px] peer-focus:text-gray-400
                               peer-[:not(:placeholder-shown)]:top-[6px] peer-[:not(:placeholder-shown)]:text-[11px]"
                  >
                    Email *
                  </label>
                </div>

                {/* Password Field */}
                <div className="relative">
                  <input 
                    type="password" 
                    id="reg-password"
                    className="peer w-full h-[55px] px-[15px] pt-4 border border-gray-200 rounded-[3px] text-[15px] focus:outline-none focus:border-black transition-colors placeholder-transparent"
                    placeholder="Password *"
                    required
                  />
                  <label 
                    htmlFor="reg-password"
                    className="absolute left-[15px] top-[16px] text-[15px] text-gray-500 transition-all pointer-events-none 
                               peer-placeholder-shown:text-[15px] peer-placeholder-shown:top-[16px] 
                               peer-focus:top-[6px] peer-focus:text-[11px] peer-focus:text-gray-400
                               peer-[:not(:placeholder-shown)]:top-[6px] peer-[:not(:placeholder-shown)]:text-[11px]"
                  >
                    Password *
                  </label>
                </div>

                {/* Actions */}
                <div className="space-y-6 pt-2">
                  <button 
                    type="submit"
                    className="w-full h-[50px] bg-black text-white rounded-[3px] font-semibold text-[14px] hover:bg-[#222] transition-all duration-300 flex items-center justify-center uppercase tracking-widest shadow-sm active:scale-[0.98]"
                  >
                    Register
                  </button>
                  
                  <div className="text-right pt-2">
                    <button 
                      type="button"
                      onClick={() => setView('login')}
                      className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-gray-800 hover:text-black transition-colors group underline underline-offset-[5px] decoration-gray-300 hover:decoration-black"
                    >
                      Already have an account? Log in here
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;


