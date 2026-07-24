// export default function Warehousing() {
//   return (
//     <section className="py-3 sm:py-6 lg:py-24 bg-slate-950 rounded-[2rem] sm:rounded-[3rem] lg:rounded-[3.5rem] px-4 sm:px-6 lg:px-24 text-white my-10 lg:my-16 relative overflow-hidden group">
      
//       {/* Background Tech Pattern */}
//       <div
//         className="absolute inset-0 opacity-20 pointer-events-none"
//         style={{
//           backgroundImage:
//             "linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)",
//           backgroundSize: "30px 30px sm:40px 40px",
//         }}
//       />

//       {/* Glow */}
//       <div className="absolute -top-16 -right-16 sm:-top-24 sm:-right-24 w-72 sm:w-96 h-72 sm:h-96 bg-orange-500/10 rounded-full blur-[100px] sm:blur-[120px]" />

//       <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center relative z-10">
        
//         {/* LEFT */}
//         <div className="w-full lg:w-1/2 space-y-8 lg:space-y-10">
          
//           <div className="space-y-4">
//             <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full">
//               <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
//               <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-orange-400">
//                 Next-Gen Storage
//               </span>
//             </div>

//             <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter uppercase leading-tight">
//               Smart{" "}
//               <span className="text-orange-500 italic">Inventory</span>
//               <br className="hidden sm:block" /> Hubs
//             </h2>

//             <p className="text-slate-400 text-sm sm:text-base lg:text-md leading-relaxed max-w-md">
//               Beyond four walls: Our facilities are{" "}
//               <span className="text-white font-bold">
//                 AI-driven ecosystems
//               </span>
//               . Real-time WMS integration ensures your stock is always moving and always secure.
//             </p>
//           </div>

//           {/* FEATURES */}
//           <div className="flex flex-wrap gap-2 sm:gap-3">
//             {["CCTV 24/7", "WiFi Enabled", "Solar Powered", "WMS Integrated"].map(
//               (tech, i) => (
//                 <span
//                   key={i}
//                   className="px-3 sm:px-5 py-2 bg-slate-900 border border-slate-800 rounded-lg sm:rounded-xl text-slate-300 font-black text-[9px] sm:text-[10px] uppercase tracking-widest group-hover:border-orange-500/50 transition-all duration-500"
//                 >
//                   {tech}
//                 </span>
//               )
//             )}
//           </div>

//           {/* STATS */}
//           <div className="p-4 sm:p-6 bg-slate-900/50 border-l-4 border-orange-500 rounded-r-xl sm:rounded-r-2xl space-y-2 max-w-xs sm:max-w-sm">
//             <p className="text-[10px] sm:text-xs font-black uppercase text-slate-500 italic">
//               Storage Optimization
//             </p>
//             <div className="flex justify-between items-end">
//               <span className="text-2xl lg:text-3xl font-black">94%</span>
//               <span className="text-[9px] sm:text-[10px] font-bold text-orange-400 uppercase pb-1">
//                 Space Efficiency
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT */}
//         <div className="w-full lg:w-1/2">
//           <div className="grid grid-cols-1  gap-4 sm:gap-6">
            
//             {/* IMAGE TILE */}
//             <div className="relative  bg-slate-800 rounded-2xl sm:rounded-[2rem] border border-slate-700 overflow-hidden shadow-2xl group/card">
              
//               <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10 opacity-60"></div>

//               {/* Scan line */}
//               <div className="absolute top-0 left-0 w-full h-1 bg-orange-500/50 shadow-[0_0_15px_orange] z-20 animate-[scan_3s_linear_infinite]"></div>

//               <img
//                 src="./warehousing-new.png"
//                 className="w-full h-full object-cover grayscale group-hover/card:grayscale-0 group-hover/card:scale-110 transition-all duration-700"
//                 alt="Warehouse"
//               />

//               <div className="absolute bottom-3 left-4 sm:bottom-4 sm:left-6 z-20">
//                 <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-orange-500">
//                   Facility 01
//                 </p>
//                 <p className="font-bold text-xs sm:text-sm">JAIPUR HUB</p>
//               </div>
//             </div>

//             {/* INFO TILE */}
//             {/* <div className="h-56 sm:h-64 md:h-72 bg-orange-500 rounded-2xl sm:rounded-[2rem] flex flex-col items-center justify-center p-6 sm:p-8 text-center relative overflow-hidden shadow-[0_20px_50px_-10px_rgba(249,115,22,0.3)]">
              
//               <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-24 sm:w-32 h-24 sm:h-32 bg-white/20 rounded-full"></div>

//               <svg
//                 className="w-10 h-10 sm:w-12 sm:h-12 text-slate-900 mb-3 sm:mb-4"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2.5"
//                   d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
//                 ></path>
//               </svg>

//               <p className="text-slate-950 font-black text-lg sm:text-2xl uppercase italic leading-tight">
//                 Secured & <br /> Scalable
//               </p>

//               <p className="text-slate-900/60 text-[9px] sm:text-[10px] font-bold uppercase mt-3 sm:mt-4 tracking-widest">
//                 Global Standards
//               </p>
//             </div> */}

//           </div>
//         </div>
//       </div>

//       {/* Animation */}
//       <style
//         dangerouslySetInnerHTML={{
//           __html: `
//           @keyframes scan {
//             0% { top: 0%; opacity: 0; }
//             10% { opacity: 1; }
//             90% { opacity: 1; }
//             100% { top: 100%; opacity: 0; }
//           }
//         `,
//         }}
//       />
//     </section>
//   );
// }

export default function Warehousing() {
  return (
    <section className="py-3 sm:py-6 lg:py-24 bg-slate-950 rounded-[2rem] sm:rounded-[3rem] lg:rounded-[3.5rem] px-4 sm:px-6 lg:px-24 text-white my-10 lg:my-16 relative overflow-hidden group">
      
      {/* Background Tech Pattern */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* Glow */}
      <div className="absolute -top-16 -right-16 sm:-top-24 sm:-right-24 w-72 sm:w-96 h-72 sm:h-96 bg-orange-500/10 rounded-full blur-[100px] sm:blur-[120px]" />

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center relative z-10">
        
        {/* LEFT SECTION*/}
        <div className="w-full lg:w-1/2">
          <div className="grid grid-cols-1 gap-4 sm:gap-6">
            
            {/* IMAGE TILE */}
            <div className="relative bg-slate-800 rounded-2xl sm:rounded-[2rem] border border-slate-700 overflow-hidden shadow-2xl group/card">
              
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10 opacity-60 pointer-events-none"></div>

              {/* 1. Base Image: Grayscale Background */}
              <img
                src="./warehousing-new.png"
                className="w-full h-full object-cover grayscale opacity-40 transition-transform duration-700 group-hover/card:scale-105"
                alt="Warehouse Black and White"
              />

              {/* 2. Revealed Colored Image */}
              <div className="absolute inset-0 z-20 animate-[reveal_3s_linear_infinite] opacity-0 pointer-events-none">
                <img
                  src="./warehousing-new.png"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                  alt="Warehouse Colored"
                />
              </div>

              {/* 3. The Scanner Line with Blur Trail */}
              <div 
                className="absolute left-0 w-full z-30 animate-[scan_3s_linear_infinite] flex flex-col justify-end pointer-events-none opacity-0"
                style={{ height: '80px', marginTop: '-80px' }}
              >
                <div className="w-full h-full bg-gradient-to-b from-transparent to-orange-500/20 backdrop-blur-[2px]"></div>
                <div className="w-full h-[2px] bg-orange-400 shadow-[0_5px_20px_5px_rgba(249,115,22,0.8)]"></div>
              </div>

              {/* Text overlays */}
              <div className="absolute bottom-3 left-4 sm:bottom-4 sm:left-6 z-40 pointer-events-none">
                <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-orange-500">
                  Facility 01
                </p>
                <p className="font-bold text-xs sm:text-sm">JAIPUR HUB</p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="w-full lg:w-1/2 space-y-10">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
              <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-orange-400">
                Next-Gen Storage
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter uppercase leading-tight">
              Smart{" "}
              <span className="text-orange-500 italic">Inventory</span>
              <br className="hidden sm:block" /> Hubs
            </h2>

            <p className="text-slate-400 text-sm sm:text-base lg:text-md leading-relaxed max-w-md">
              Beyond four walls: Our facilities are{" "}
              <span className="text-white font-bold">
                AI-driven ecosystems
              </span>
              . Real-time WMS integration ensures your stock is always moving and always secure.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 sm:gap-3">
            {["CCTV 24/7", "WiFi Enabled", "Solar Powered", "WMS Integrated"].map(
              (tech, i) => (
                <span
                  key={i}
                  className="px-3 sm:px-5 py-2 bg-slate-900 border border-slate-800 rounded-lg sm:rounded-xl text-slate-300 font-black text-[9px] sm:text-[10px] uppercase tracking-widest group-hover:border-orange-500/50 transition-all duration-500"
                >
                  {tech}
                </span>
              )
            )}
          </div>

          <div className="p-4 sm:p-6 bg-slate-900/50 border-l-4 border-orange-500 rounded-r-xl sm:rounded-r-2xl space-y-2 max-w-xs sm:max-w-sm">
            <p className="text-[10px] sm:text-xs font-black uppercase text-slate-500 italic">
              Storage Optimization
            </p>
            <div className="flex justify-between items-end">
              <span className="text-2xl lg:text-3xl font-black">94%</span>
              <span className="text-[9px] sm:text-[10px] font-bold text-orange-400 uppercase pb-1">
                Space Efficiency
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Synchronized Animations */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes scan {
            0% { top: 0%; opacity: 0; }
            10% { top: 10%; opacity: 1; }
            90% { top: 90%; opacity: 1; }
            100% { top: 100%; opacity: 0; }
          }
          @keyframes reveal {
            0% { clip-path: inset(0 0 100% 0); opacity: 0; }
            10% { clip-path: inset(0 0 90% 0); opacity: 1; }
            90% { clip-path: inset(0 0 10% 0); opacity: 1; }
            100% { clip-path: inset(0 0 0% 0); opacity: 0; }
          }
        `,
        }}
      />
    </section>
  );
}