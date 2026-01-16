import React, { useLayoutEffect, useRef } from 'react';
import { Award, UserCheck, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const PlanTrip: React.FC = () => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
        // Collage Animation
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".plan-collage",
                start: "top 70%",
            }
        });
        tl.from(".collage-main", { x: -100, opacity: 0, duration: 1 })
          .from(".collage-top", { scale: 0, opacity: 0, duration: 0.6, ease: "back.out(1.7)" }, "-=0.5")
          .from(".collage-bottom", { scale: 0, opacity: 0, duration: 0.6, ease: "back.out(1.7)" }, "-=0.4")
          .from(".collage-spin", { opacity: 0, duration: 1 }, "-=0.5");

        // Text Animation
        gsap.from(".plan-content > *", {
            scrollTrigger: {
                trigger: ".plan-content",
                start: "top 75%",
            },
            x: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15
        });

    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={comp} className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Collage */}
          <div className="plan-collage relative h-[600px] w-full hidden lg:block">
            {/* Big Left Pill */}
            <div className="collage-main absolute left-4 top-10 w-[280px] h-[480px] rounded-[140px] overflow-hidden border-8 border-white shadow-2xl z-10">
              <img src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Hiker" />
            </div>
            
            {/* Top Right Circle */}
             <div className="collage-top absolute right-12 top-0 w-40 h-40 rounded-full overflow-hidden border-8 border-white shadow-2xl z-0">
              <img src="https://images.unsplash.com/photo-1440778303588-43aa9d76f9d4?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Kayak" />
            </div>

            {/* Bottom Right Circle */}
             <div className="collage-bottom absolute right-4 bottom-20 w-52 h-52 rounded-full overflow-hidden border-8 border-white shadow-2xl z-20">
              <img src="https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Friends" />
            </div>
            
            {/* Decorative dashed line (simulated) */}
            <div className="collage-spin absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border-2 border-dashed border-gray-200 rounded-full -z-10 animate-spin-slow"></div>
          </div>

          {/* Right Content */}
          <div className="plan-content relative pl-0 lg:pl-10">
             <h3 className="font-script text-brand-500 text-3xl mb-2">Let's Go Together</h3>
             <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">Plan Your Trip <br /> With Us</h2>
             <p className="text-gray-500 mb-12 leading-relaxed text-lg">
               There are many variations of passages of available but the majority have suffered alteration in some form, by injected hum randomised words which don't look even slightly.
             </p>

             <div className="flex gap-6 mb-8">
               <div className="w-16 h-16 rounded-full bg-brand-500 flex items-center justify-center text-white shrink-0 shadow-lg shadow-brand-500/30">
                 <Award className="w-8 h-8" />
               </div>
               <div>
                 <h4 className="text-xl font-bold text-slate-900 mb-2">Exclusive Trip</h4>
                 <p className="text-gray-500 text-sm leading-relaxed">There are many variations of passages of available but the majority.</p>
               </div>
             </div>

             <div className="flex gap-6 mb-12">
               <div className="w-16 h-16 rounded-full bg-brand-500 flex items-center justify-center text-white shrink-0 shadow-lg shadow-brand-500/30">
                 <UserCheck className="w-8 h-8" />
               </div>
               <div>
                 <h4 className="text-xl font-bold text-slate-900 mb-2">Professional Guide</h4>
                 <p className="text-gray-500 text-sm leading-relaxed">There are many variations of passages of available but the majority.</p>
               </div>
             </div>

             <button className="bg-slate-900 text-white px-10 py-4 rounded-full font-bold hover:bg-brand-500 transition-colors flex items-center gap-3 shadow-xl">
               Learn More <ArrowRight className="w-5 h-5" />
             </button>

             {/* The traveler illustration */}
             <div className="hidden xl:block absolute -right-20 bottom-0 w-64 h-80 z-0 pointer-events-none">
                 <img src="https://img.freepik.com/free-photo/full-shot-man-carrying-baggage_23-2149967663.jpg?t=st=1723480000~exp=1723483600~hmac=abcdef&w=800" className="w-full h-full object-cover mix-blend-multiply opacity-80" alt="Traveler" style={{maskImage: 'linear-gradient(black, transparent)'}} /> 
                 {/* Fallback visual for the traveler illustration in the design */}
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PlanTrip;