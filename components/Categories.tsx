import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const categories = [
  { name: 'Cruises', img: 'https://picsum.photos/seed/boat/400/500' },
  { name: 'Hiking', img: 'https://picsum.photos/seed/hike/400/500' },
  { name: 'Airbirds', img: 'https://picsum.photos/seed/plane/400/500' },
  { name: 'Wildlife', img: 'https://picsum.photos/seed/wild/400/500' },
  { name: 'Walking', img: 'https://picsum.photos/seed/walk/400/500' },
];

const Categories: React.FC = () => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
        gsap.from(".cat-title", {
            scrollTrigger: {
                trigger: ".cat-title",
                start: "top 80%",
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2
        });

        gsap.from(".cat-card", {
            scrollTrigger: {
                trigger: ".cat-card-container",
                start: "top 80%",
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out"
        });
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={comp} className="pt-32 pb-20 bg-white text-center">
      <div className="container mx-auto px-4">
        <h3 className="cat-title font-script text-brand-500 text-3xl mb-2">Wonderful Place For You</h3>
        <h2 className="cat-title text-4xl lg:text-5xl font-bold text-slate-900 mb-12">Tour Categories</h2>

        <div className="cat-card-container flex flex-wrap justify-center gap-6">
          {categories.map((cat, idx) => (
            <div key={idx} className="cat-card group relative w-40 h-40 md:w-52 md:h-52 lg:w-48 lg:h-56 rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <img src={cat.img} alt={cat.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
              <div className="absolute bottom-6 left-0 right-0 text-center">
                <h4 className="text-white font-bold text-lg">{cat.name}</h4>
                <p className="text-white/80 text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity">Read More</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center gap-2 mt-12">
            <span className="w-3 h-3 bg-brand-500 rounded-full"></span>
            <span className="w-3 h-3 bg-gray-200 rounded-full"></span>
            <span className="w-3 h-3 bg-gray-200 rounded-full"></span>
            <span className="w-3 h-3 bg-gray-200 rounded-full"></span>
        </div>
      </div>
    </section>
  );
};

export default Categories;