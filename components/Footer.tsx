import React from 'react';
import { Globe, Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-16 pb-6 text-slate-600 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div>
            <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-brand-500 rounded-full flex items-center justify-center text-white font-bold">
                    <Globe className="w-5 h-5" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-slate-900 leading-none">Tourm</h3>
                    <p className="text-[0.5rem] uppercase tracking-wider text-slate-400">Explore World</p>
                </div>
            </div>
            <p className="text-sm mb-6 leading-relaxed">
              Rapidiously mycardinate cross-platform intellectual capital model. Appropriately create interactive infrastructures.
            </p>
            <div className="flex gap-4 text-brand-500">
                <a href="#" className="hover:text-brand-700">f</a>
                <a href="#" className="hover:text-brand-700">t</a>
                <a href="#" className="hover:text-brand-700">in</a>
                <a href="#" className="hover:text-brand-700">y</a>
            </div>
          </div>

          {/* Useful Link */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Useful Link</h4>
            <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-brand-500">Home</a></li>
                <li><a href="#" className="hover:text-brand-500">About Us</a></li>
                <li><a href="#" className="hover:text-brand-500">Our Services</a></li>
                <li><a href="#" className="hover:text-brand-500">Terms of Service</a></li>
                <li><a href="#" className="hover:text-brand-500">Tour Booking Now</a></li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Get In Touch</h4>
            <ul className="space-y-4 text-sm">
                <li className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-brand-500" />
                    <span>+99 876 543 210</span>
                </li>
                 <li className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-brand-500" />
                    <span>support24@real.com</span>
                </li>
                 <li className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-brand-500 mt-1" />
                    <span>789 Inner Lane, Holy park, <br/> California, USA</span>
                </li>
            </ul>
          </div>

          {/* Instagram Post */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Instagram Post</h4>
            <div className="grid grid-cols-3 gap-2">
                {[1, 2, 3, 4, 5, 6].map(i => (
                    <div key={i} className="aspect-square rounded-lg overflow-hidden">
                        <img src={`https://picsum.photos/seed/insta${i}/100/100`} alt="insta" className="w-full h-full object-cover hover:scale-110 transition-transform" />
                    </div>
                ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
            <p>Copyright © 2024 Tourm. All rights reserved.</p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
                <span>We Accept</span>
                <div className="flex gap-2">
                    <div className="w-8 h-5 bg-gray-200 rounded"></div>
                    <div className="w-8 h-5 bg-gray-200 rounded"></div>
                    <div className="w-8 h-5 bg-gray-200 rounded"></div>
                </div>
            </div>
            
            {/* Scroll Top */}
            <button 
                onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                className="fixed bottom-8 right-8 w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-brand-500 hover:text-white hover:border-brand-500 transition-colors bg-white shadow-lg"
            >
                <ArrowUp className="w-5 h-5" />
            </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;