import React, { useLayoutEffect, useRef } from 'react';
import { Play } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Gallery: React.FC = () => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
        gsap.from(".gallery-header > *", {
             scrollTrigger: {
                trigger: ".gallery-header",
                start: "top 80%",
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2
        });

        gsap.from(".gallery-col", {
             scrollTrigger: {
                trigger: ".gallery-grid",
                start: "top 70%",
            },
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power2.out"
        });
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={comp} className="py-24 bg-white">
      <div className="container mx-auto px-4 text-center">
        <div className="gallery-header">
            <h3 className="font-script text-brand-500 text-3xl mb-2">Make Your Tour More Pleasure</h3>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-12">Recent Gallery</h2>
        </div>

        <div className="gallery-grid grid grid-cols-2 md:grid-cols-4 gap-6 h-auto md:h-[600px]">
           {/* Column 1 */}
           <div className="gallery-col flex flex-col gap-6 md:mt-12">
             <div className="h-40 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="gallery" />
             </div>
             <div className="flex-1 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow min-h-[200px]">
                <img src="https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="gallery" />
             </div>
           </div>

           {/* Column 2 */}
           <div className="gallery-col flex flex-col gap-6">
             <div className="flex-1 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow min-h-[200px]">
                <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="gallery" />
             </div>
             <div className="h-40 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <img src="https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="gallery" />
             </div>
           </div>

           {/* Column 3 */}
           <div className="gallery-col flex flex-col gap-6 md:mt-8">
             <div className="h-48 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <img src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="gallery" />
             </div>
             <div className="flex-1 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow min-h-[200px]">
                <img src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="gallery" />
             </div>
           </div>

            {/* Column 4 */}
           <div className="gallery-col flex flex-col gap-6 md:mt-20">
             <div className="h-32 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <img src="https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="gallery" />
             </div>
              <div className="flex-1 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow relative min-h-[200px] group cursor-pointer">
                 {/* Video Overlay simulation */}
                <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="gallery" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 text-white fill-white ml-1" />
                    </div>
                </div>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;