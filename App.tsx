import React, { useLayoutEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Destinations from './components/Destinations';
import PlanTrip from './components/PlanTrip';
import PopularTours from './components/PopularTours';
import Gallery from './components/Gallery';
import Stats from './components/Stats';
import Guides from './components/Guides';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const App: React.FC = () => {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  return (
    <div className="font-sans text-slate-800 bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Categories />
      <Destinations />
      <PlanTrip />
      <PopularTours />
      <Gallery />
      <Stats />
      <Guides />
      <Testimonials />
      <Blog />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default App;