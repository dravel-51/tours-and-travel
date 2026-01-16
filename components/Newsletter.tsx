import React, { useLayoutEffect, useRef } from 'react';
import { Send } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Newsletter: React.FC = () => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
        gsap.from(".newsletter-content > *", {
             scrollTrigger: {
                trigger: ".newsletter-content",
                start: "top 80%",
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2
        });
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={comp} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="newsletter-content flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="lg:w-1/2">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              Get Updated The Latest <br /> Newsletter
            </h2>
          </div>
          
          <div className="lg:w-1/2 w-full flex gap-2">
             <div className="relative flex-1">
                 <input 
                    type="email" 
                    placeholder="Enter Email" 
                    className="w-full h-14 pl-6 pr-4 rounded-full border border-gray-200 focus:outline-none focus:border-brand-500"
                 />
             </div>
             <button className="bg-slate-900 hover:bg-brand-500 text-white px-8 h-14 rounded-full font-bold flex items-center gap-2 transition-colors">
                 Subscribe Now <Send className="w-4 h-4" />
             </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;