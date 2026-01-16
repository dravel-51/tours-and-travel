import React, { useLayoutEffect, useRef } from 'react';
import { Star, Clock, ArrowRight } from 'lucide-react';
import { TourPackage } from '../types';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const tours: TourPackage[] = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1601581875309-fafbf2d3ed2a?q=80&w=1000&auto=format&fit=crop',
    location: 'Greece',
    title: 'Greece Tour Package',
    rating: 4.8,
    reviews: 12,
    price: 980.00,
    days: 7
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=1000&auto=format&fit=crop',
    location: 'Italy',
    title: 'Italy Tour Package',
    rating: 4.9,
    reviews: 18,
    price: 890.00,
    days: 5
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea904ac6605?q=80&w=1000&auto=format&fit=crop',
    location: 'Dubai',
    title: 'Dubai Tour Package',
    rating: 4.8,
    reviews: 15,
    price: 870.00,
    days: 7
  },
  {
    id: '4',
    image: 'https://images.unsplash.com/photo-1527668752968-14dc70a27c95?q=80&w=1000&auto=format&fit=crop',
    location: 'Switzerland',
    title: 'Switzerland',
    rating: 5.0,
    reviews: 24,
    price: 980.00,
    days: 7
  }
];

const PopularTours: React.FC = () => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
        gsap.from(".tours-header > *", {
             scrollTrigger: {
                trigger: ".tours-header",
                start: "top 80%",
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2
        });

        gsap.from(".tour-card", {
             scrollTrigger: {
                trigger: ".tours-grid",
                start: "top 75%",
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
    <section ref={comp} className="py-24 bg-brand-50/30">
      <div className="container mx-auto px-4">
        <div className="tours-header text-center mb-16">
          <h3 className="font-script text-brand-500 text-3xl mb-2">Best Place For You</h3>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">Most Popular Tour</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="tours-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tours.map(tour => (
            <div key={tour.id} className="tour-card bg-white rounded-[2rem] overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="relative h-64 overflow-hidden">
                <img src={tour.image} alt={tour.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-lg text-xs font-bold border border-white/30">
                     {tour.days} Days
                </div>
                {/* Center Hover Action */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white text-slate-900 px-6 py-2 rounded-full font-bold text-sm shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                        View Details
                    </button>
                </div>
              </div>
              
              <div className="p-6">
                <h4 className="font-bold text-xl mb-2 text-slate-900 group-hover:text-brand-500 transition-colors">{tour.title}</h4>
                <div className="flex items-center gap-2 mb-4 text-sm">
                  <div className="flex text-yellow-400 gap-0.5">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                  </div>
                  <span className="text-gray-400 font-semibold">({tour.rating} Rating)</span>
                </div>

                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-2xl font-bold text-slate-900">${tour.price.toFixed(2)}</span>
                  <span className="text-gray-400 text-xs font-semibold">/Person</span>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-gray-500 text-sm font-semibold">
                    <Clock className="w-4 h-4 text-brand-500" /> {tour.days} Days
                  </div>
                  <button className="flex items-center gap-2 text-slate-800 font-bold hover:text-brand-500 transition-colors text-sm group/btn">
                    Book Now <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularTours;