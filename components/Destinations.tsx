import React, { useState, useRef, useLayoutEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const tabs = ['Maldives', 'Greece', 'London', 'Switzerland', 'Sydney'];

const Destinations: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Maldives');
  const comp = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".dest-header", {
        scrollTrigger: {
            trigger: ".dest-header",
            start: "top 80%",
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2
      });

      gsap.from(".dest-tab", {
        scrollTrigger: {
            trigger: ".dest-header",
            start: "top 80%",
        },
        x: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.05,
        delay: 0.2
      });

      gsap.from(".dest-carousel", {
         scrollTrigger: {
            trigger: ".dest-carousel",
            start: "top 75%",
        },
        scale: 0.9,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
      });

    }, comp);
    return () => ctx.revert();
  }, []);


  return (
    <section ref={comp} className="py-24 bg-brand-50/50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-12">
          <div className="text-center lg:text-left w-full lg:w-auto mb-8 lg:mb-0">
            <h3 className="dest-header font-script text-brand-500 text-3xl mb-2">Top Destination</h3>
            <h2 className="dest-header text-4xl lg:text-5xl font-bold text-slate-900">Top Destination</h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {tabs.map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`dest-tab px-8 py-3 rounded-full text-sm font-bold transition-all ${
                  activeTab === tab 
                  ? 'bg-brand-500 text-white shadow-xl shadow-brand-500/30' 
                  : 'bg-white text-slate-500 hover:bg-gray-100'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Carousel Visual */}
        <div className="dest-carousel relative mt-20 flex justify-center items-center h-[500px]">
            {/* Left Card (Hidden/Faded) */}
            <div className="absolute left-0 lg:left-[10%] opacity-40 scale-75 z-0 blur-[1px] hidden md:block transition-all duration-500">
                <div className="w-[300px] h-[400px] rounded-[2rem] overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover" alt="prev" />
                </div>
            </div>

            {/* Main Active Card */}
            <div className="relative w-[340px] h-[460px] lg:w-[380px] lg:h-[520px] rounded-[2.5rem] overflow-hidden shadow-2xl z-20 group transition-all duration-500">
                <img src="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1965&auto=format&fit=crop" className="w-full h-full object-cover" alt="Maldives" />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Floating Drag Indicator */}
                <div className="absolute top-1/2 -right-6 lg:-right-8 translate-x-0 w-16 h-16 rounded-full border border-white/30 backdrop-blur-md flex items-center justify-center text-white text-[10px] font-bold tracking-widest rotate-90 z-30 shadow-lg">
                    DRAG &gt;
                </div>

                {/* Content */}
                <div className="absolute bottom-10 left-8 z-30">
                    <h3 className="text-4xl font-bold text-white mb-1">Maldives</h3>
                    <p className="text-white/80 font-semibold">25 Listing</p>
                </div>
                
                {/* Action Button */}
                <div className="absolute bottom-10 right-8 z-30">
                     <button className="w-12 h-12 rounded-full bg-brand-500 hover:bg-brand-400 flex items-center justify-center text-white transition-colors shadow-lg shadow-brand-500/50">
                        <ArrowRight className="w-5 h-5" />
                     </button>
                </div>
            </div>

            {/* Right Card (Hidden/Faded) */}
            <div className="absolute right-0 lg:right-[10%] opacity-40 scale-75 z-0 blur-[1px] hidden md:block transition-all duration-500">
                <div className="w-[300px] h-[400px] rounded-[2rem] overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=1368&auto=format&fit=crop" className="w-full h-full object-cover" alt="next" />
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Destinations;