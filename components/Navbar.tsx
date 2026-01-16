import React, { useState, useEffect } from 'react';
import { Phone, Mail, Clock, ChevronDown, User, Globe, Search } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md top-0' : 'bg-transparent top-0'}`}>
      {/* Top Bar */}
      <div className={`hidden lg:flex justify-between items-center py-2 px-8 text-xs border-b border-white/20 text-white ${scrolled ? 'bg-brand-900' : 'bg-transparent'}`}>
        <div className="flex gap-6">
          <span className="flex items-center gap-1"><i className="w-3 h-3 text-brand-400" /> 45 New Eskaton Road, Austria</span>
          <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-brand-400" /> Sun to Friday: 8:00 am - 7:00 pm</span>
        </div>
        <div className="flex gap-4">
          <span className="flex items-center gap-1 cursor-pointer">USD <ChevronDown className="w-3 h-3" /></span>
          <span className="cursor-pointer">FAQ</span>
          <span className="cursor-pointer">Support</span>
          <span className="flex items-center gap-1 cursor-pointer">Sign In / Register <User className="w-3 h-3" /></span>
        </div>
      </div>

      {/* Main Nav */}
      <div className={`container mx-auto px-4 lg:px-8 py-4 flex justify-between items-center ${scrolled ? 'text-slate-800' : 'text-white'}`}>
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
            <Globe className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold leading-none">Tourm</h1>
            <p className="text-[0.6rem] uppercase tracking-wider opacity-80">Explore World</p>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-8 font-semibold text-sm">
          <a href="#" className="hover:text-brand-500 transition-colors">Home <ChevronDown className="inline w-3 h-3" /></a>
          <a href="#" className="hover:text-brand-500 transition-colors">About Us</a>
          <a href="#" className="hover:text-brand-500 transition-colors">Destination <ChevronDown className="inline w-3 h-3" /></a>
          <a href="#" className="hover:text-brand-500 transition-colors">Our Services <ChevronDown className="inline w-3 h-3" /></a>
          <a href="#" className="hover:text-brand-500 transition-colors">Activities <ChevronDown className="inline w-3 h-3" /></a>
          <a href="#" className="hover:text-brand-500 transition-colors">Pages <ChevronDown className="inline w-3 h-3" /></a>
          <a href="#" className="hover:text-brand-500 transition-colors">Blog <ChevronDown className="inline w-3 h-3" /></a>
          <a href="#" className="hover:text-brand-500 transition-colors">Contact Us</a>
        </nav>

        <button className="hidden lg:block bg-slate-800 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-brand-500 transition-colors">
          Book Now →
        </button>

        {/* Mobile Menu Button (simplified) */}
        <button className="lg:hidden text-2xl">☰</button>
      </div>
    </header>
  );
};

export default Navbar;