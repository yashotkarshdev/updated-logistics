import { Link } from "react-router-dom";

export default function TruckingService() {
  return (
    <section className="py-3 sm:py-6 lg:py-20 flex flex-col lg:flex-row gap-10 lg:gap-20 items-center relative px-4 sm:px-6 lg:px-0">
      
      {/* Background Text */}
      <div className="absolute top-0 left-0 text-[4rem] sm:text-[6rem] lg:text-[10rem] font-black text-slate-50 select-none -z-20 tracking-tighter opacity-40">
        FLEET
      </div>

      {/* LEFT */}
      <div className="w-full lg:w-1/2 flex gap-6 sm:gap-10">
        
        {/* Accent Line */}
        <div className="hidden sm:flex flex-col items-center gap-4">
          <div className="w-2 h-24 sm:h-32 bg-slate-900 rounded-full"></div>
          <div className="w-2 h-12 sm:h-16 bg-orange-500 rounded-full animate-bounce shadow-[0_0_20px_rgba(249,115,22,0.5)]"></div>
        </div>

        <div className="space-y-6 sm:space-y-8">
          
          {/* Heading */}
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-6 sm:w-8 h-[2px] bg-orange-500"></span>
              <span className="text-[9px] sm:text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] sm:tracking-[0.4em]">
                Speed & Precision
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter uppercase leading-tight">
              High-Velocity <br />
              <span className="text-orange-500 italic">
                Trucking
              </span>
            </h2>
          </div>

          {/* Description */}
          <p className="text-slate-600 font-medium text-sm sm:text-base lg:text-md leading-relaxed max-w-md">
            Our fleet isn't just about movement; it's about{" "}
            <span className="text-slate-900 font-extrabold underline decoration-orange-500 decoration-2 sm:decoration-4">
              precision
            </span>
            . With GPS-integrated FTL and LTL solutions, we eliminate transit gaps using proprietary route mapping.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 sm:gap-8 pt-2 sm:pt-4">
            
            <div className="group border-l-4 border-slate-100 hover:border-orange-500 pl-4 sm:pl-6 transition-all duration-300">
              <span className="block text-2xl lg:text-3xl font-black text-slate-900 group-hover:scale-110 transition-transform origin-left">
                100%
              </span>
              <span className="text-[9px] sm:text-[10px] font-black text-slate-400 uppercase tracking-widest">
                GPS Connectivity
              </span>
            </div>

            <div className="group border-l-4 border-slate-100 hover:border-slate-900 pl-4 sm:pl-6 transition-all duration-300">
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 group-hover:scale-110 transition-transform origin-left">
                FTL/LTL
              </span>
              <span className="text-[9px] sm:text-[10px] font-black text-slate-400 uppercase tracking-widest">
                Optimized Loads
              </span>
            </div>

          </div>

          {/* CTA */}
          <div className="pt-4 sm:pt-6">
            <Link
              to="/contact"
              className="group flex items-center justify-center sm:justify-start gap-3 sm:gap-4 bg-slate-900 text-white px-6 sm:px-8 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-black uppercase tracking-widest text-[10px] sm:text-xs hover:bg-orange-500 transition-all shadow-xl hover:shadow-orange-200"
            >
              Request Fleet Quote
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>

        </div>
      </div>

      {/* RIGHT */}
      <div className="w-full lg:w-1/2 relative group mt-6 lg:mt-0">
        
        {/* Background Cards */}
        <div className="absolute inset-0 bg-slate-900 rounded-[2rem] sm:rounded-[3rem] translate-x-4 translate-y-4 sm:translate-x-6 sm:translate-y-6 -z-10 group-hover:translate-x-6 group-hover:translate-y-6 sm:group-hover:translate-x-8 sm:group-hover:translate-y-8 transition-transform duration-700 opacity-10"></div>

        <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-24 sm:w-40 h-24 sm:h-40 bg-orange-500/5 rounded-full blur-[60px] sm:blur-[80px] group-hover:bg-orange-500/10 transition-all"></div>

        {/* Image */}
        <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[3rem] border-2 border-slate-900 shadow-2xl">
          
          <img
            src="./trucking-new.jpg"
            alt="Trucking"
            className="w-full h-[300px] sm:h-[400px] lg:h-[550px] object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[1.5s]"
          />

          {/* Badge */}
          <div className="absolute top-4 right-4 sm:top-8 sm:right-8 bg-slate-900/90 backdrop-blur-md p-3 sm:p-5 rounded-xl sm:rounded-2xl border border-slate-700 shadow-2xl flex flex-col items-center justify-center transform -rotate-3 group-hover:rotate-0 transition-all duration-500">
            <p className="text-[8px] sm:text-[10px] font-black text-orange-500 uppercase tracking-[0.2em] mb-1">
              Active Fleet
            </p>
            <p className="text-xl sm:text-3xl font-black text-white">
              250+
            </p>
            <div className="w-full h-1 bg-slate-800 mt-2 sm:mt-3 rounded-full overflow-hidden">
              <div className="w-2/3 h-full bg-orange-500"></div>
            </div>
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
      </div>
    </section>
  );
}