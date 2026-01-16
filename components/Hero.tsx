import React, { useLayoutEffect, useRef } from 'react';
import { Search, MapPin, ChevronDown, Calendar, Flag } from 'lucide-react';
import gsap from 'gsap';

const Hero: React.FC = () => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      tl.from(".hero-text-1", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      })
      .from(".hero-text-2", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      }, "-=0.8")
      .from(".hero-btn", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)"
      }, "-=0.6")
      .from(".hero-search", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power4.out"
      }, "-=0.5");

    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={comp} className="relative h-[85vh] lg:h-[95vh] w-full">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2039&auto=format&fit=crop")', 
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-center lg:items-start pt-20 text-center lg:text-left text-white pb-32">
        <h2 className="hero-text-1 font-script text-3xl lg:text-5xl mb-4 text-white drop-shadow-md">Get unforgettable pleasure with us</h2>
        <h1 className="hero-text-2 text-5xl lg:text-8xl font-bold leading-tight mb-8 drop-shadow-lg">
          Natural Wonder <br /> Of The World
        </h1>
        
        <div className="flex gap-4">
          <button className="hero-btn bg-brand-500 hover:bg-brand-600 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg shadow-brand-500/30">
            Explore Tours →
          </button>
          <button className="hero-btn border border-white hover:bg-white hover:text-slate-900 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg">
            Our Services →
          </button>
        </div>
      </div>

      {/* Floating Search Bar */}
      <div className="hero-search absolute bottom-10 left-0 right-0 container mx-auto px-4 z-20">
        <div className="bg-white rounded-[2rem] shadow-2xl p-4 lg:py-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-4 items-center max-w-5xl mx-auto">
          
          <div className="flex flex-col border-b md:border-b-0 md:border-r border-gray-100 px-4 py-1 relative">
            <label className="text-[10px] uppercase font-bold text-gray-400 mb-1 flex items-center gap-2 tracking-wider">
               Destination
            </label>
            <div className="flex items-center gap-2">
                <Search className="w-4 h-4 text-brand-500" />
                <input 
                type="text" 
                placeholder="Search Location" 
                className="outline-none text-slate-800 font-bold placeholder-slate-300 text-sm w-full"
                />
            </div>
          </div>

          <div className="flex flex-col border-b md:border-b-0 md:border-r border-gray-100 px-4 py-1">
            <label className="text-[10px] uppercase font-bold text-gray-400 mb-1 flex items-center gap-2 tracking-wider">
               Type
            </label>
            <div className="flex justify-between items-center cursor-pointer group">
                <span className="font-bold text-slate-800 text-sm flex items-center gap-2">
                    <Flag className="w-4 h-4 text-brand-500" /> Adventure
                </span>
                <ChevronDown className="text-brand-500 w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </div>
          </div>

          <div className="flex flex-col border-b md:border-b-0 border-gray-100 px-4 py-1">
            <label className="text-[10px] uppercase font-bold text-gray-400 mb-1 flex items-center gap-2 tracking-wider">
               Duration
            </label>
             <div className="flex justify-between items-center cursor-pointer group">
                <span className="font-bold text-slate-800 text-sm flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-brand-500" /> 7 Days
                </span>
                <ChevronDown className="text-brand-500 w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </div>
          </div>

          <div className="px-2">
            <button className="w-full bg-brand-500 hover:bg-brand-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-brand-500/30 transform hover:scale-[1.02]">
              <Search className="w-5 h-5" /> Search
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;