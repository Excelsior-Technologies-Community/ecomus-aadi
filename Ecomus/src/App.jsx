import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Marquee from './Components/Marquee';
import Categories from './Components/Categories';
import BestSeller from './Components/BestSeller';
import Testimonials from './Components/Testimonials';
import Brands from './Components/Brands';
import ShopGram from './Components/ShopGram';
import ServiceFeatures from './Components/ServiceFeatures';
import Footer from './Components/Footer';
import ShopTheLook from './Components/ShopTheLook';
import BackToTop from './Components/BackToTop';
import MobileBottomNav from './Components/MobileBottomNav';
import ShopDrawer from './Pages/ShopDrawer';
import MobileMenuDrawer from './Pages/MobileMenuDrawer';

export default function App() {
  return (
    <div className="min-h-screen bg-white pb-[64px] md:pb-0">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Marquee />
            <Categories />
            <ShopTheLook />
            <BestSeller />
            <Testimonials />
            <Brands />
            <ShopGram />
            <ServiceFeatures />
          </>
        } />
        {/* Placeholder routes for other pages */}
        <Route path="/shop" element={<div className="pt-20 text-center">Shop Page Coming Soon</div>} />
        <Route path="/products" element={<div className="pt-20 text-center">Products Page Coming Soon</div>} />
        <Route path="/pages" element={<div className="pt-20 text-center">Pages Coming Soon</div>} />
        <Route path="/blog" element={<div className="pt-20 text-center">Blog Page Coming Soon</div>} />
        <Route path="/wishlist" element={<div className="pt-20 text-center">Wishlist Page Coming Soon</div>} />
        <Route path="/buy-now" element={<div className="pt-20 text-center">Buy Now Page Coming Soon</div>} />
      </Routes>
      <Footer />
      <MobileBottomNav />
      <ShopDrawer />
      <MobileMenuDrawer />
      <BackToTop />
    </div>
  );
}