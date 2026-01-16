import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const stats = [
  { value: '12', label: 'Years Experience' },
  { value: '97%', label: 'Retention Rate' },
  { value: '8K', label: 'Tour Completed' },
  { value: '19K', label: 'Happy Travellers' },
];

const Stats: React.FC = () => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
        gsap.from(".stat-circle", {
             scrollTrigger: {
                trigger: ".stats-container",
                start: "top 80%",
            },
            scale: 0.5,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "back.out(1.7)"
        });
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={comp} className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="stats-container flex flex-wrap justify-center gap-10 lg:gap-24">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-circle relative w-48 h-48 lg:w-52 lg:h-52 rounded-full border border-gray-100 flex flex-col items-center justify-center text-center bg-white shadow-lg hover:shadow-xl hover:border-brand-200 transition-all duration-300 group cursor-default">
               {/* Inner Ring */}
               <div className="absolute inset-2 border-2 border-dashed border-gray-100 rounded-full group-hover:border-brand-300 group-hover:rotate-45 transition-all duration-700"></div>
               
               <span className="text-4xl lg:text-5xl font-extrabold text-slate-900 z-10 group-hover:scale-110 transition-transform duration-300">{stat.value}</span>
               <span className="text-gray-500 font-bold text-sm mt-2 z-10">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
      
       {/* Decorative Palm Trees */}
       <div className="hidden lg:block absolute -left-10 bottom-0 text-green-100/50 pointer-events-none">
           <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor" className="transform -rotate-12 scale-150">
             <path d="M12 2L2 22h20L12 2zm0 3l7 14H5l7-14z" /> {/* Simplified shape replacement */}
           </svg>
        </div>
    </section>
  );
};

export default Stats;