// import React from "react";
// import { FaPlay } from "react-icons/fa"; // react-icons
// import { Link } from "react-router-dom";

// const AboutHero = () => {
//   return (
//     <section className="relative bg-white py-10 overflow-hidden">

//       {/* Background Large Stroke Text (Rich Look Element) */}
//       <div className="absolute top-20 left-0 w-full overflow-hidden pointer-events-none select-none opacity-[0.03]">
//         <h1 className="text-[20vw] font-black leading-none uppercase stroke-text">
//           Logistics
//         </h1>
//       </div>

//       <div className="container mx-auto px-6 md:px-12 relative z-10">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">

//           {/* Left Content */}
//           <div className="max-w-2xl">
//             <div className="flex items-center gap-3 mb-6">
//               <span className="w-12 h-[2px] bg-orange-500"></span>
//               <span className="text-orange-600 font-bold tracking-[0.3em] text-xs uppercase">
//                 Established 2017
//               </span>
//             </div>

//             <h1 className="text-5xl md:text-8xl font-black text-slate-900 leading-[0.9] mb-8">
//               Moving the <br />
//               <span className="text-orange-500">Heart of India</span> <br />
//               Forward.
//             </h1>

//             <p className="text-slate-500 text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
//               Kashmir se Kanyakumari tak, Aden Logistics sirf transport nahi karta—hum
//               Bharat ki tarakki ko raftar dete hain. Precision, trust, aur har delivery
//               ke piche ek "Bharatiya" jazbe ke saath, hum dooriyon ko nazdikiyon mein
//               badalte hain.
//             </p>

//             <div className="flex items-center gap-8">
//               <Link to="/blogs" className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold hover:bg-orange-500 transition-all duration-500 shadow-xl hover:shadow-orange-200">
//                 Our Stories
//               </Link>

//               <button className="flex items-center gap-4 group">
//                 <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-all duration-500">
//                   <FaPlay size={10} className="ml-1" />
//                 </div>
//                 <span className="text-sm font-bold text-slate-900 tracking-wider">Play Film</span>
//               </button>
//             </div>
//           </div>

//           {/* Right Image (Asymmetric & Rich) */}
//           <div className="relative">
//             {/* Decorative Orange Block */}
//             <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-orange-500/10 rounded-[4rem] -z-10 animate-pulse"></div>

//             <div className="relative rounded-[3rem] overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-700">
//               <img
//                 src="./about-hero-section-bg.png" // Demo Image: Modern Warehouse or Office
//                 alt="About Aden"
//                 className="w-full lg:h-[600px] object-cover"
//               />
//               {/* Image Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>

//               {/* Bottom Label on Image */}
//               <div className="absolute bottom-10 left-10 text-white">
//                 <p className="text-4xl font-black italic opacity-50">#AdenWay</p>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>

//       {/* Custom CSS for Stroke Text (Add this in your index.css or style tag) */}
//       <style dangerouslySetInnerHTML={{
//         __html: `
//         .stroke-text {
//           -webkit-text-stroke: 2px #000;
//           color: transparent;
//         }
//       `}} />
//     </section>
//   );
// };

// export default AboutHero;

import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";
import VideoModal from "../../components/VideoModal"; 

const AboutHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative bg-white py-12 md:py-12 overflow-hidden">
      
      {/* Background Large Stroke Text - Premium Feel */}
      <div className="absolute top-20 left-0 w-full overflow-hidden pointer-events-none select-none opacity-[0.03] z-0">
        <h1 className="text-[25vw] font-black leading-none uppercase stroke-text">
          Bharat
        </h1>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div className="max-w-2xl order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-[2px] bg-orange-500"></span>
              <span className="text-orange-600 font-bold tracking-[0.3em] text-xs uppercase">
                Established 2017 • Serving the Nation
              </span>
            </div>

            <h1 className="text-3xl md:text-6xl font-black text-slate-900 leading-[1.2] mb-8">
              Moving the <br />
              <span className="text-orange-500">Heart of India</span> <br />
              Forward.
            </h1>

            <p className="text-slate-500 text-md md:text-lg leading-relaxed mb-10 max-w-lg">
              Kashmir se Kanyakumari tak, Aden Logistics sirf transport nahi karta—hum
              Bharat ki tarakki ko raftar dete hain. Precision, trust, aur har delivery
              ke piche ek <span className="text-slate-900 font-semibold italic">"Bharatiya"</span> jazbe ke saath.
            </p>

            {/* <div className="flex flex-wrap items-center gap-8">
              <Link to="/blogs" className="group bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold hover:bg-orange-500 transition-all duration-500 shadow-2xl shadow-slate-200 hover:shadow-orange-200 flex items-center gap-2">
                Our Stories <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>

              <button 
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-orange-500 group-hover:border-orange-500 group-hover:text-white transition-all duration-500 shadow-sm">
                  <FaPlay size={12} className="ml-1" />
                </div>
                <span className="text-sm font-black text-slate-900 tracking-wider uppercase">Play Film</span>
              </button>
            </div> */}
          </div>

          {/* Right Image Section */}
          <div className="relative order-1 lg:order-2">
            {/* Decorative Elements */}
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-orange-500/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-slate-100 rounded-[4rem] -z-10 rotate-12"></div>

            <div className="relative rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] group">
              <img
                src="./about-hero-section.png" 
                alt="About Aden Logistics"
                className="w-full lg:h-[650px] object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>

              {/* Bottom Label on Image */}
              <div className="absolute bottom-30 left-10">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-[1px] bg-orange-400"></div>
                  <p className="text-orange-400 font-bold tracking-widest text-xs uppercase">Since 2017</p>
                </div>
                <p className="text-4xl font-black text-white italic tracking-tighter">#AdenWay</p>
              </div>

              {/* Floating Stat Card (Rich Detail) */}
              <div className="absolute bottom-10 right-10 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-xl hidden md:block">
                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1">Success Rate</p>
                <p className="text-3xl font-black text-slate-900">99.9%</p>
                <div className="w-full h-1 bg-slate-100 mt-2 rounded-full overflow-hidden">
                    <div className="w-[99%] h-full bg-orange-500"></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Video Modal Component */}
      <VideoModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        videoSrc="./logistics.mp4" 
      />

      <style dangerouslySetInnerHTML={{
        __html: `
        .stroke-text {
          -webkit-text-stroke: 1.5px #000;
          color: transparent;
        }
      `}} />
    </section>
  );
};

export default AboutHero;