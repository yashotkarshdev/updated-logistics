import React from "react";
import { FaArrowRight, FaGlobe } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutCTA = () => {
  return (
    <section className="relative py-10 bg-orange-500 overflow-hidden group">
      
      {/* Background Decorative Circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        
        {/* Animated Icon */}
        <div className="flex justify-center mb-10">
          <div className="w-15 h-15 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white animate-spin-slow border border-white/30">
            <FaGlobe size={32} />
          </div>
        </div>

        {/* Big Bold Headline */}
        <h2 className="text-4xl md:text-6xl font-black text-white leading-[0.9] mb-12 tracking-tighter uppercase">
          Ready to Move <br /> 
          <span className="text-slate-900 group-hover:text-white transition-colors duration-700">The Future?</span>
        </h2>

        <p className="text-white/80 text-md md:text-lg max-w-2xl mx-auto mb-16 font-medium">
          Let’s architect a supply chain that works as hard as you do. 
          Partner with Aden Logistics today and bridge the gap.
        </p>

        {/* Premium Magnetic-style Button */}
        <div className="flex justify-center">
          <Link to={"/contact"} className="group/btn relative bg-slate-900 text-white px-10 py-8 rounded-[2.5rem] text-lg font-black overflow-hidden transition-all hover:px-20 hover:bg-white hover:text-orange-500 shadow-2xl active:scale-95">
            <span className="relative z-10 flex items-center gap-4">
              Start Your Journey <FaArrowRight className="group-hover/btn:translate-x-3 transition-transform duration-500" />
            </span>
            
            {/* Hover Background Slide Effect */}
            <div className="absolute inset-0 bg-white translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
          </Link>
        </div>
      </div>

      {/* Side Label (Vertical) */}
      <div className="absolute right-10 top-100 -translate-y-1/2 hidden xl:block">
        <p className="text-[10px] font-bold text-black/40 tracking-[1em] uppercase rotate-90 origin-right">
          Aden Logistics Solutions
        </p>
      </div>

      {/* Animation Styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}} />
    </section>
  );
};

export default AboutCTA;
