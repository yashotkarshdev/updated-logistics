import React from "react";
import TruckingService from "./TruckingService";
import DoorToDoor from "./DoorToDoor";
import Warehousing from "./Warehousing";
import { Link } from "react-router-dom";

export default function ServiceMain() {
  
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-orange-500 selection:text-white">
      
      {/* HERO */}
      <div className="relative pt-12 lg:pt-16 pb-12 sm:pb-16 overflow-hidden">
        
        {/* Background Text */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 text-[20vw] sm:text-[15vw] font-black text-slate-50 select-none -z-10 leading-none tracking-tighter uppercase">
          Solutions
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            
            {/* Heading */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 sm:w-12 h-[2px] bg-orange-500"></div>
                <span className="text-[10px] sm:text-xs font-black text-slate-400 uppercase tracking-[0.3em] sm:tracking-[0.5em]">
                  Aden Global Logistics
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tighter">
                OUR <br />
                <span className="text-orange-500 italic">
                  SERVICES
                </span>
              </h1>
            </div>
            
            {/* Pills */}
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {["delivery", "trucking", "warehousing"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="px-4 sm:px-6 py-2 sm:py-3 bg-slate-50 border border-slate-200 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-widest hover:border-orange-500 hover:bg-orange-50 transition-all duration-300"
                >
                  {item === "delivery" ? "Door to Door" : item}
                </button>
              ))}
            </div>
          </div>

          <div className="h-1.5 sm:h-2 w-32 sm:w-48 bg-slate-900 mt-8 sm:mt-12 rounded-full"></div>
        </div>
      </div>

      {/* MAIN */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10 sm:space-y-16 pb-20 sm:pb-32">
        
        <div id="delivery" className="scroll-mt-24">
          <DoorToDoor />
        </div>

        <div id="trucking" className="scroll-mt-24">
          <TruckingService />
        </div>

        <div id="warehousing" className="scroll-mt-24">
          <Warehousing />
        </div>
        
        {/* FOOTER BAR */}
        <div className="relative group mt-10 sm:mt-16">
          
          {/* Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-slate-900 rounded-[2rem] sm:rounded-[2.5rem] blur opacity-10 group-hover:opacity-25 transition duration-1000"></div>
          
          <div className="relative bg-slate-900 border border-slate-800 rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-10 lg:p-20 overflow-hidden text-center">
            
            <div className="absolute top-0 right-0 w-40 sm:w-64 h-40 sm:h-64 bg-orange-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white uppercase tracking-tighter mb-8 sm:mb-12">
              THE <span className="text-orange-500 italic">ADEN</span> EDGE
            </h3>
            
            {/* GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {[
                { title: "Tech-Driven", desc: "Real-time AI monitoring" },
                { title: "Eco-Friendly", desc: "Solar-powered hubs" },
                { title: "24/7 Support", desc: "Round-the-clock ops" },
                { title: "Expertise", desc: "Years of industry trust" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="space-y-3 px-2 sm:px-4 md:border-r md:border-slate-800 last:border-0"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-500/10 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 border border-orange-500/20">
                    <div className="w-2 h-2 bg-orange-500 rotate-45 shadow-[0_0_10px_orange]"></div>
                  </div>

                  <p className="font-black text-white uppercase tracking-widest text-[10px] sm:text-[11px]">
                    {item.title}
                  </p>

                  <p className="text-slate-500 text-[9px] sm:text-[10px] font-bold uppercase leading-tight">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
            
            {/* CTA */}
            <div className="mt-10 sm:mt-16">
              <Link
                to="/contact"
                className="inline-block bg-white text-slate-950 px-6 sm:px-10 py-3 sm:py-4 rounded-full font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[10px] hover:bg-orange-500 hover:text-white transition-all duration-500 shadow-xl"
              >
                Consult Our Experts
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}