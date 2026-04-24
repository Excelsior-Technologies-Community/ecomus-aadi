import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });
    const [isCartOpen, setIsCartOpen] = useState(false);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product, variantOptions = {}) => {
        const { color = null, size = null, quantity = 1 } = variantOptions;
        const cartKey = `${product.id}-${color || ''}-${size || ''}`;

        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.cartKey === cartKey);
            if (existingItem) {
                return prevItems.map(item =>
                    item.cartKey === cartKey ? { ...item, quantity: item.quantity + quantity } : item
                );
            }
            return [...prevItems, { ...product, ...variantOptions, cartKey, quantity }];
        });
        setIsCartOpen(true);
    };

    const removeFromCart = (cartKey) => {
        setCartItems(prevItems => prevItems.filter(item => item.cartKey !== cartKey));
    };

    const updateQuantity = (cartKey, quantity) => {
        if (quantity < 1) return;
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.cartKey === cartKey ? { ...item, quantity } : item
            )
        );
    };

    const cartTotal = cartItems.reduce((total, item) => {
        const price = parseFloat(item.price.replace('$', ''));
        return total + price * item.quantity;
    }, 0);

    return (
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            removeFromCart,
            updateQuantity,
            cartTotal,
            isCartOpen,
            setIsCartOpen
        }}>
            {children}
        </CartContext.Provider>
    );
};
