import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { WishlistProvider } from './Context/WishlistContext.jsx'
import { ToastProvider } from './Context/ToastContext.jsx'
import { CartProvider } from './Context/CartContext.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ToastProvider>
        <WishlistProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </WishlistProvider>
      </ToastProvider>
    </BrowserRouter>
  </StrictMode>,
)
