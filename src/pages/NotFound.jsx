import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6 relative overflow-hidden">
      
      {/* Background Decorative "404" - Huge and Subtle */}
      <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none">
        <h1 className="text-[30vw] font-black text-slate-50 leading-none tracking-tighter">
          404
        </h1>
      </div>

      {/* Animated Orange Blob */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-orange-100/50 rounded-full blur-[120px] -z-10 animate-pulse"></div>

      <div className="max-w-2xl w-full text-center relative z-10 space-y-10">
        
        {/* Icon & Error Title */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-4">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-ping"></span>
            Signal Lost
          </div>
          <h2 className="text-7xl md:text-8xl font-black text-slate-900 tracking-tighter leading-none uppercase">
            Route <br /> <span className="text-orange-500 italic">Not Found</span>
          </h2>
          <p className="text-slate-500 font-medium text-lg md:text-xl max-w-md mx-auto leading-relaxed">
            Oops! It seems your shipment (or this page) has been diverted to an unknown terminal. Let's get you back on track.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          {/* Go Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="group flex items-center gap-3 px-8 py-4 bg-slate-100 text-slate-900 rounded-2xl font-black uppercase tracking-widest text-xs border-2 border-transparent hover:border-slate-900 transition-all active:scale-95 w-full sm:w-auto"
          >
            <svg className="w-5 h-5 group-hover:-translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Go Back
          </button>

          {/* Home Button */}
          <button
            onClick={() => navigate("/")}
            className="group flex items-center gap-3 px-10 py-4 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-orange-500 shadow-xl hover:shadow-orange-200 transition-all active:scale-95 w-full sm:w-auto"
          >
            Back to Base (Home)
            <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
            </svg>
          </button>
        </div>

        {/* Minimal Footer Info */}
        <div className="pt-10">
          <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.5em]">
            Aden Logistics Support Center • Error ID: 404_TERMINAL_MISSING
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;