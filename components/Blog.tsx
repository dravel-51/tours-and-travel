import React, { useLayoutEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const blogs = [
  {
    id: '1',
    image: 'https://picsum.photos/seed/roadtrip/400/300',
    date: 'July 05, 2024',
    readTime: '5 min read',
    title: '10 Reason why you should visit New Jersy',
  },
  {
    id: '2',
    image: 'https://picsum.photos/seed/bridge/400/300',
    date: 'July 05, 2024',
    readTime: '6 min read',
    title: 'The best time to visit japan & enjoy the cherry blossoms',
  },
  {
    id: '3',
    image: 'https://picsum.photos/seed/lake/400/300',
    date: 'July 05, 2024',
    readTime: '4 min read',
    title: 'The 7 amazing destinations for adventure seekers',
  },
];

const Blog: React.FC = () => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
        gsap.from(".blog-header > *", {
             scrollTrigger: {
                trigger: ".blog-header",
                start: "top 80%",
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2
        });

        gsap.from(".blog-card", {
             scrollTrigger: {
                trigger: ".blog-grid",
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
    <section ref={comp} className="py-24 bg-brand-50/50">
      <div className="container mx-auto px-4">
        <div className="blog-header flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
                 <h3 className="font-script text-slate-800 text-3xl mb-2">Blog and Article</h3>
                 <h2 className="text-4xl font-bold text-slate-900">News & Articles From Tourm</h2>
            </div>
            <button className="border border-slate-300 px-6 py-2 rounded-full text-sm font-semibold hover:bg-slate-800 hover:text-white transition-colors flex items-center gap-2 mt-4 md:mt-0">
                See More Articles <ArrowRight className="w-4 h-4" />
            </button>
        </div>

        <div className="blog-grid grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs.map(blog => (
                <div key={blog.id} className="blog-card group cursor-pointer">
                    <div className="rounded-3xl overflow-hidden mb-6 h-64 relative">
                        <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                        <span>{blog.date}</span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                        <span>{blog.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4 leading-snug group-hover:text-brand-500 transition-colors">
                        {blog.title}
                    </h3>
                    <button className={`px-6 py-2 rounded-full text-xs font-bold border flex items-center gap-2 transition-all ${blog.id === '3' ? 'bg-brand-500 text-white border-brand-500' : 'border-gray-200 text-slate-700 hover:bg-brand-500 hover:text-white hover:border-brand-500'}`}>
                        Read More <ArrowRight className="w-3 h-3" />
                    </button>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;