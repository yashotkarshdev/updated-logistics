

// import React, { useState } from "react";
// import { FaArrowRight, FaPlay, FaGlobeAmericas } from "react-icons/fa"; // react-icons
// import { Link } from "react-router-dom";
// import VideoModal from "../../components/VideoModal";

// const Hero = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   return (
//     <section className="relative w-full h-[90vh] min-h-[600px] pt-10 lg:pt-2 overflow-hidden">

//       {/* Background Container */}
//       <div className="absolute inset-0 z-0 overflow-hidden">
//         <img
//           src="/home1.jpg"
//           alt="Logistics Background"
//           className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out"
//         />

//         {/* Modern Gradient Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-transparent"></div>
//       </div>

//       {/* Content Container */}
//       <div className="relative z-10 container mx-auto h-full px-6 md:px-12 flex flex-col justify-center lg:pb-12">

//         <div className="max-w-3xl">
//           {/* Animated Badge */}
//           {/* <div className="hidden lg:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-orange-400 text-xs font-bold uppercase tracking-[0.2em] mb-8 animate-fade-in-down">
//             <FaGlobeAmericas className="animate-spin-slow" />
//             Indian Logistics Network
//           </div> */}

//           <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-white leading-[1.1] mb-6 drop-shadow-2xl">
//             Delivery <span className="text-orange-500">trust,</span> <br />
//             every <span className="italic font-light">mile.</span>
//           </h1>

//           <p className="max-w-xl text-md md:text-lg text-slate-200 leading-relaxed mb-10 opacity-90">
//             We provide fast, secure, and reliable logistics solutions that connect businesses and customers seamlessly across every destination.
//           </p>

//           {/* Action Buttons */}
//           <div className="flex flex-col sm:flex-row items-center gap-6 mb-10">
//             {/* <Link to={"/contact"} className="group relative w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all duration-300 shadow-xl shadow-orange-500/20">
//               Book Transport Now
//               <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
//             </Link> */}

//             {/* <button onClick={()=> setIsModalOpen(true)} className="flex items-center gap-4 text-white font-bold group">
//               <div className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-orange-500 group-hover:border-orange-500 transition-all duration-500">
//                 <FaPlay className="ml-1 text-sm" />
//               </div>
//               <span className="tracking-wide">Watch Process</span>
//             </button> */}
//             {/* Modal Integration */}
//             <VideoModal
//               isOpen={isModalOpen}
//               onClose={() => setIsModalOpen(false)}
//               videoSrc="./logistics.mp4"
//               className="z-999"
//             />
//           </div>
//         </div>

//         {/* Floating Stats Bar (Bottom Left) */}
//         <div className="absolute bottom-12 left-6 md:left-12 hidden lg:flex items-center gap-12 p-8 rounded-[2rem] bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
//           <div>
//             <p className="text-3xl font-black text-white">99.9%</p>
//             <p className="text-[10px] font-bold text-orange-500 uppercase tracking-widest">On-Time Delivery</p>
//           </div>
//           <div className="h-10 w-[1px] bg-white/20"></div>
//           <div>
//             <p className="text-3xl font-black text-white">1500+</p>
//             <p className="text-[10px] font-bold text-orange-500 uppercase tracking-widest">Active Fleet</p>
//           </div>
//           <div className="h-10 w-[1px] bg-white/20"></div>
//           <div>
//             <p className="text-3xl font-black text-white">150+</p>
//             <p className="text-[10px] font-bold text-orange-500 uppercase tracking-widest"> Cities</p>
//           </div>
//         </div>

//       </div>

//       {/* Decorative Side Element */}
//       <div className="absolute top-0 right-0 h-full w-2/3 bg-gradient-to-l from-orange-500/10 to-transparent pointer-events-none"></div>
//     </section>
//   );
// };

// export default Hero;








import React, { useState } from "react";
import { FaArrowRight, FaPlay, FaGlobeAmericas } from "react-icons/fa"; // react-icons
import { Link } from "react-router-dom";
import VideoModal from "../../components/VideoModal";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className="relative w-full h-[90vh] min-h-[600px] pt-10 lg:pt-2 overflow-hidden">

      {/* Background Container */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/home1.jpg"
          alt="Logistics Background"
          className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out"
        />

        {/* Modern Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto h-full px-6 md:px-12 flex flex-col justify-center lg:pb-12">

        <div className="max-w-3xl">
          {/* Animated Badge */}
          {/* <div className="hidden lg:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-orange-400 text-xs font-bold uppercase tracking-[0.2em] mb-8 animate-fade-in-down">
            <FaGlobeAmericas className="animate-spin-slow" />
            Indian Logistics Network
          </div> */}

          

         

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-6 mb-10">
            {/* <Link to={"/contact"} className="group relative w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all duration-300 shadow-xl shadow-orange-500/20">
              Book Transport Now
              <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link> */}

            {/* <button onClick={()=> setIsModalOpen(true)} className="flex items-center gap-4 text-white font-bold group">
              <div className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-orange-500 group-hover:border-orange-500 transition-all duration-500">
                <FaPlay className="ml-1 text-sm" />
              </div>
              <span className="tracking-wide">Watch Process</span>
            </button> */}
            {/* Modal Integration */}
            <VideoModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              videoSrc="./logistics.mp4"
              className="z-999"
            />
          </div>
        </div>

        {/* Floating Stats Bar (Bottom Left) */}
        <div className="absolute bottom-12 left-6 md:left-12 hidden lg:flex items-center gap-12 p-8 rounded-[2rem] bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
          <div>
            <p className="text-3xl font-black text-white">99.9%</p>
            <p className="text-[10px] font-bold text-orange-500 uppercase tracking-widest">On-Time Delivery</p>
          </div>
          <div className="h-10 w-[1px] bg-white/20"></div>
          <div>
            <p className="text-3xl font-black text-white">1500+</p>
            <p className="text-[10px] font-bold text-orange-500 uppercase tracking-widest">Active Fleet</p>
          </div>
          <div className="h-10 w-[1px] bg-white/20"></div>
          <div>
            <p className="text-3xl font-black text-white">150+</p>
            <p className="text-[10px] font-bold text-orange-500 uppercase tracking-widest"> Cities</p>
          </div>
        </div>

      </div>

      {/* Decorative Side Element */}
      <div className="absolute top-0 right-0 h-full w-2/3 bg-gradient-to-l from-orange-500/10 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Hero;
