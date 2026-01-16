import React, { useLayoutEffect, useRef } from 'react';
import { Star } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Testimonials: React.FC = () => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
        gsap.from(".testi-header > *", {
             scrollTrigger: {
                trigger: ".testi-header",
                start: "top 80%",
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2
        });

        gsap.from(".testi-card", {
             scrollTrigger: {
                trigger: ".testi-cards",
                start: "top 75%",
            },
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power2.out"
        });
        
        gsap.from(".brand-logo", {
             scrollTrigger: {
                trigger: ".brand-logos",
                start: "top 90%",
            },
            y: 20,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out"
        });
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={comp} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="testi-header text-center mb-20">
           <h3 className="font-script text-gray-400 text-3xl mb-2">Testimonial</h3>
           <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">What Client Say About Us</h2>
        </div>

        <div className="testi-cards flex flex-col lg:flex-row gap-8 items-center justify-center relative z-10">
          
          {/* Card 1 (Left) */}
          <div className="testi-card bg-brand-50/50 p-8 rounded-[2rem] w-full lg:w-1/3 opacity-50 scale-90 blur-[1px] select-none">
             <div className="flex justify-between items-start mb-6">
                <div className="flex gap-4">
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100" className="w-12 h-12 rounded-full object-cover" alt="User" />
                    <div>
                        <h4 className="font-bold text-slate-900">Maria Doe</h4>
                        <p className="text-xs text-gray-500">Traveller</p>
                    </div>
                </div>
                <div className="flex text-yellow-400 gap-0.5">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                </div>
             </div>
             <p className="text-sm text-gray-600 italic">"A home that perfectly blends sustainability with luxury until I discovered Ecoland Residence."</p>
          </div>

          {/* Card 2 (Center Active) */}
          <div className="testi-card bg-white p-10 rounded-[2.5rem] w-full lg:w-[40%] shadow-2xl relative border border-gray-50 z-20 transform lg:-translate-y-6">
             <div className="flex justify-between items-start mb-8">
                <div className="flex gap-4">
                    <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100" className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md" alt="User" />
                    <div className="mt-2">
                        <h4 className="font-bold text-slate-900 text-xl">Andrew Simon</h4>
                        <p className="text-sm text-gray-500 font-semibold">Traveller</p>
                    </div>
                </div>
                <div className="flex text-yellow-400 gap-1">
                     {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
             </div>
             <p className="text-gray-600 italic leading-relaxed text-lg mb-6">"A home that perfectly blends sustainability with luxury until I discovered Ecoland Residence. From the moment I stepped into this community, I knew it was where I wanted to live. The commitment to eco-friendly living"</p>
             
             {/* Quote Circle */}
             <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-brand-500 rounded-full flex items-center justify-center text-white text-4xl font-serif border-4 border-white shadow-lg">
                 ”
             </div>
          </div>

           {/* Card 3 (Right) */}
           <div className="testi-card bg-brand-50/50 p-8 rounded-[2rem] w-full lg:w-1/3 opacity-50 scale-90 blur-[1px] select-none">
             <div className="flex justify-between items-start mb-6">
                <div className="flex gap-4">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100" className="w-12 h-12 rounded-full object-cover" alt="User" />
                    <div>
                        <h4 className="font-bold text-slate-900">Michel Smith</h4>
                        <p className="text-xs text-gray-500">Traveller</p>
                    </div>
                </div>
                <div className="flex text-yellow-400 gap-0.5">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                </div>
             </div>
             <p className="text-sm text-gray-600 italic">"A home that perfectly blends sustainability with luxury until I discovered Ecoland Residence."</p>
          </div>
        </div>

        {/* Pagination Dots */}
         <div className="flex justify-center gap-3 mt-20">
            <button className="w-3 h-3 bg-brand-500 rounded-full transition-all hover:scale-125"></button>
            <button className="w-3 h-3 bg-gray-200 rounded-full hover:bg-brand-500 transition-all"></button>
            <button className="w-3 h-3 bg-gray-200 rounded-full hover:bg-brand-500 transition-all"></button>
            <button className="w-3 h-3 bg-gray-200 rounded-full hover:bg-brand-500 transition-all"></button>
        </div>

        {/* Brand Logos */}
        <div className="brand-logos mt-24 pt-10 border-t border-gray-100 flex flex-wrap justify-between items-center opacity-30 grayscale hover:grayscale-0 transition-all duration-700 gap-8 px-8">
            <div className="brand-logo h-16 w-32 bg-contain bg-no-repeat bg-center" style={{backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png)'}}></div>
            <div className="brand-logo h-16 w-32 bg-contain bg-no-repeat bg-center" style={{backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png)'}}></div>
            <div className="brand-logo h-16 w-32 bg-contain bg-no-repeat bg-center" style={{backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png)'}}></div>
            <div className="brand-logo h-16 w-32 bg-contain bg-no-repeat bg-center" style={{backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Tesla_logo.png/1200px-Tesla_logo.png)'}}></div>
            <div className="brand-logo h-16 w-32 bg-contain bg-no-repeat bg-center" style={{backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg)'}}></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;