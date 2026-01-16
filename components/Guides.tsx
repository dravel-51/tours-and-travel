import React, { useLayoutEffect, useRef } from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const guides = [
  { name: 'Jacob Jones', role: 'Tourist Guide', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop' },
  { name: 'Jane Cooper', role: 'Tourist Guide', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop', active: true },
  { name: 'Guy Hawkins', role: 'Tourist Guide', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop' },
  { name: 'Jenny Wilson', role: 'Tourist Guide', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop' },
];

const Guides: React.FC = () => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
        gsap.from(".guides-header > *", {
             scrollTrigger: {
                trigger: ".guides-header",
                start: "top 80%",
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2
        });

        gsap.from(".guide-card", {
             scrollTrigger: {
                trigger: ".guides-grid",
                start: "top 70%",
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out"
        });
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={comp} className="py-24 bg-brand-50/50">
      <div className="container mx-auto px-4 text-center">
        <div className="guides-header">
            <h3 className="font-script text-brand-500 text-3xl mb-2">Meet with Guide</h3>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-20">Tour Guide</h2>
        </div>

        <div className="guides-grid flex flex-wrap justify-center gap-8">
          {guides.map((guide, idx) => (
            <div key={idx} className="guide-card relative group w-64 pt-12">
              {/* Image Circle - Positioned absolutely to overlap */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-44 h-44 rounded-full overflow-hidden border-4 border-white shadow-xl z-20 group-hover:scale-105 transition-transform duration-300">
                <img src={guide.img} alt={guide.name} className="w-full h-full object-cover" />
              </div>
              
              {/* Card Body */}
              <div className={`pt-36 pb-8 px-4 rounded-[2rem] shadow-lg transition-all duration-300 relative z-10 ${guide.active ? 'bg-white shadow-xl border-b-4 border-brand-500' : 'bg-white hover:shadow-xl'}`}>
                <h4 className="font-bold text-xl text-slate-900 mb-1">{guide.name}</h4>
                <p className="text-sm mb-6 text-gray-500 font-semibold">{guide.role}</p>
                
                <div className={`flex justify-center gap-3 transition-opacity duration-300 ${guide.active ? 'opacity-100' : 'opacity-60 group-hover:opacity-100'}`}>
                  <span className="w-8 h-8 flex items-center justify-center rounded-full bg-brand-50 text-brand-500 hover:bg-brand-500 hover:text-white transition-colors cursor-pointer">
                    <Facebook className="w-4 h-4" />
                  </span>
                  <span className="w-8 h-8 flex items-center justify-center rounded-full bg-brand-50 text-brand-500 hover:bg-brand-500 hover:text-white transition-colors cursor-pointer">
                    <Twitter className="w-4 h-4" />
                  </span>
                  <span className="w-8 h-8 flex items-center justify-center rounded-full bg-brand-50 text-brand-500 hover:bg-brand-500 hover:text-white transition-colors cursor-pointer">
                    <Instagram className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
         <div className="flex justify-center gap-3 mt-16">
            <button className="w-3 h-3 bg-brand-500 rounded-full transition-all hover:scale-125"></button>
            <button className="w-3 h-3 bg-transparent border border-gray-400 rounded-full hover:bg-brand-500 hover:border-brand-500 transition-all"></button>
            <button className="w-3 h-3 bg-transparent border border-gray-400 rounded-full hover:bg-brand-500 hover:border-brand-500 transition-all"></button>
            <button className="w-3 h-3 bg-transparent border border-gray-400 rounded-full hover:bg-brand-500 hover:border-brand-500 transition-all"></button>
        </div>
      </div>
    </section>
  );
};

export default Guides;