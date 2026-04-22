import React, { createContext, useContext, useState, useCallback } from 'react';

const ToastContext = createContext();

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
};

export const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = useState([]);

    const showToast = useCallback((product, message) => {
        const id = Date.now();
        setToasts((prev) => [...prev, { id, product, message }]);

        // Auto-remove toast after 3.5 seconds
        setTimeout(() => {
            setToasts((prev) => prev.filter((t) => t.id !== id));
        }, 3500);
    }, []);

    const removeToast = useCallback((id) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    }, []);

    return (
        <ToastContext.Provider value={{ showToast, toasts, removeToast }}>
            {children}
            {/* Toast Container */}
            <div className="fixed top-24 right-6 z-[9999] flex flex-col gap-4 pointer-events-none">
                {toasts.map((toast) => (
                    <ToastItem key={toast.id} toast={toast} onRemove={removeToast} />
                ))}
            </div>
        </ToastContext.Provider>
    );
};

const ToastItem = ({ toast, onRemove }) => {
    return (
        <div className="pointer-events-auto bg-white border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.12)] rounded-lg p-3 flex items-center gap-4 min-w-[300px] animate-toast-slide-in relative overflow-hidden group">
            {/* Product Thumbnail */}
            <div className="w-14 h-14 bg-gray-50 rounded-md overflow-hidden flex-shrink-0">
                <img src={toast.product.img} alt={toast.product.title} className="w-full h-full object-cover" />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-0.5">
                <h4 className="text-[14px] font-bold text-black leading-tight">Added to Wishlist!</h4>
                <p className="text-[13px] text-gray-500 font-medium truncate max-w-[180px]">{toast.product.title}</p>
            </div>

            {/* Close Button */}
            <button 
                onClick={() => onRemove(toast.id)}
                className="ml-auto text-gray-400 hover:text-black p-1 transition-colors"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>

            {/* Progress Bar (Auto-hide indicator) */}
            <div className="absolute bottom-0 left-0 h-1 bg-black animate-toast-progress w-full"></div>
        </div>
    );
};
