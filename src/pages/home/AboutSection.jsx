
import React from "react";
import { FaArrowRight } from "react-icons/fa"; // Imported and used
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function AboutSection() {
  return (
    <section className="bg-white pt-12 md:py-14 px-6 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE SIDE */}
        <div className="relative group">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-50 rounded-full blur-3xl -z-10 opacity-70"></div>
          
          <div className="relative z-0 rounded-[2.5rem] overflow-hidden shadow-2xl">
            <img
              src="./about-section-old.png"
              alt="Aden Logistics Operations"
              className="w-full lg:h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
          </div>
        </div>

        {/* RIGHT CONTENT SIDE */}
        <div className="lg:pl-10">
          <div className="inline-flex items-center gap-3 mt-6 ">
            <span className="w-10 h-[2px] bg-orange-500"></span>
            <span className="text-orange-600 font-bold text-sm uppercase tracking-[0.3em]">
              About Aden Logistics
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-[1.3] mb-4">
            Powering Reliable <span className="text-orange-500 underline decoration-slate-200 underline-offset-8">Logistics</span> That Businesses Trust
          </h2>

          <p className="text-slate-500 text-md leading-relaxed mb-4 ">
            At Aden Logistics, we don’t just move goods — we move businesses
            forward with precision, reliability, and operational excellence through our 
            global-standard supply chain network.
          </p>

          {/* INTERACTIVE FEATURES GRID */}
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {[
              "Real-time tracking",
              "eCommerce Ready",
              "9+ Years Proven",
              "Scalable Network",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 group/item">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 transition-colors group-hover/item:bg-orange-500 group-hover/item:text-white">
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                </div>
                <p className="text-slate-700 font-bold text-sm tracking-tight">{item}</p>
              </div>
            ))}
          </div>

          {/* PREMIUM CALL TO ACTION */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Link to="/services" className="w-full sm:w-auto bg-slate-900 hover:bg-orange-600 text-white px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all duration-300 shadow-xl hover:shadow-orange-200">
              Explore Our Services
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                 <FaArrowRight className="text-[10px]" /> {/* Fixed icon */}
              </div>
            </Link>
            
            {/* <div className="flex items-center">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((_, i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?img=${i + 1}`} alt="client" />
                  </div>
                ))}
              </div>
              <div className="pl-5">
                <p className="text-xs font-bold text-slate-900">Trusted by</p>
                <p className="text-[10px] text-slate-500">500+ Global Clients</p>
              </div>
            </div> */}
          </div>
        </div>

      </div>
    </section>
  );
}
