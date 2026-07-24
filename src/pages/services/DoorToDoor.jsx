import { Link } from "react-router-dom";

export default function DoorToDoor() {
  const steps = [
    { title: "Pickup", desc: "First Mile Collection" },
    { title: "Transit", desc: "Secure Hub Processing" },
    { title: "Delivery", desc: "Final Doorstep Drop" },
  ];

  return (
    <section className="py-3 lg:py-6 flex flex-col lg:flex-row-reverse gap-10 lg:gap-20 items-center overflow-hidden px-4 sm:px-6 lg:px-0">
      
      {/* RIGHT CONTENT */}
      <div className="w-full lg:w-1/2 flex gap-4 sm:gap-8">
        
        {/* Progress Line */}
        <div className="relative flex flex-col items-center">
          <div className="w-1 h-full bg-slate-100 rounded-full relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full bg-orange-500 h-1/2 animate-pulse shadow-[0_0_10px_rgba(249,115,22,0.6)]"></div>
          </div>

          {/* Dots */}
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`absolute w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 sm:border-4 border-white shadow-md z-10
              ${
                i === 0
                  ? "top-0 bg-orange-500"
                  : i === 1
                  ? "top-1/2 bg-slate-900"
                  : "bottom-0 bg-slate-400"
              }`}
            />
          ))}
        </div>

        <div className="space-y-6 sm:space-y-8">
          
          {/* Heading */}
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter uppercase leading-tight">
              Seamless <br />
              <span className="text-orange-500 italic">
                Last-Mile
              </span>
            </h2>

            <p className="text-slate-500 font-bold tracking-[0.15em] sm:tracking-[0.2em] text-[9px] sm:text-[10px] uppercase">
              End-to-End Connectivity Solutions
            </p>
          </div>

          {/* Description */}
          <p className="text-slate-600 font-medium text-sm sm:text-base lg:text-md leading-relaxed max-w-md">
            From the first mile to the final doorstep, we simplify the complex.
            Our network ensures{" "}
            <span className="text-slate-900 font-bold">
              secure handling
            </span>{" "}
            and zero-damage delivery for every single package.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {[
              {
                label: "Live Tracking",
                icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z",
              },
              {
                label: "Secure Handling",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="flex items-center gap-2 sm:gap-3 p-3 bg-slate-50 rounded-lg sm:rounded-xl border border-slate-100 hover:border-orange-200 transition-colors"
              >
                <div className="bg-white p-2 rounded-md sm:rounded-lg shadow-sm">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d={feature.icon}
                    />
                  </svg>
                </div>
                <span className="text-[10px] sm:text-xs font-black text-slate-900 uppercase tracking-widest">
                  {feature.label}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link
            to="/contact"
            className="inline-block text-center px-6 sm:px-8 py-3 sm:py-4 bg-slate-900 text-white rounded-xl sm:rounded-2xl font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[10px] sm:text-xs hover:bg-orange-500 transition-all active:scale-95"
          >
            Book Doorstep Delivery
          </Link>
        </div>
      </div>

      {/* LEFT IMAGE */}
      <div className="w-full lg:w-1/2 relative group mt-6 lg:mt-0">
        
        {/* Decorations */}
        <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-20 sm:w-24 h-20 sm:h-24 bg-orange-500/10 rounded-full blur-2xl sm:blur-3xl"></div>
        <div className="absolute -bottom-8 -right-8 sm:-bottom-10 sm:-right-10 w-24 sm:w-32 h-24 sm:h-32 bg-slate-900/5 rounded-full blur-2xl sm:blur-3xl"></div>

        {/* Image */}
        <div className="relative z-10 overflow-hidden rounded-[1.5rem] sm:rounded-[2.5rem] border-2 border-slate-900 shadow-xl sm:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)]">
          <img
            src="./door-to-door-new.png"
            alt="Door to Door"
            className="w-full h-[280px] sm:h-[380px] lg:h-[500px] object-cover group-hover:scale-105 transition-transform duration-1000"
          />

          {/* Badge */}
          <div className="hidden md:absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6">
            <div className="bg-white/80 backdrop-blur-md p-3 sm:p-6 rounded-xl sm:rounded-2xl border border-white shadow-xl flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between items-center">
              
              <div className="flex gap-3 sm:gap-4 items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-900 rounded-lg sm:rounded-xl flex items-center justify-center text-orange-500">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>

                <div>
                  <p className="text-[9px] sm:text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">
                    Standard Delivery
                  </p>
                  <p className="text-lg sm:text-xl font-black text-slate-900">
                    24 - 48 HOURS
                  </p>
                </div>
              </div>

              <div className="hidden sm:block h-10 w-[1px] bg-slate-200 mx-4"></div>

              <div className="text-center sm:text-right">
                <p className="text-[9px] sm:text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">
                  Safety Rate
                </p>
                <p className="text-lg sm:text-xl font-black text-orange-500">
                  99.9%
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}