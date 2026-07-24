// import React from "react";

// const FleetSection = () => {
//   return (
//     <section className="py-16 bg-white">
//       <div className="container mx-auto px-10 grid md:grid-cols-2 gap-10 items-center">
        
//         {/* LEFT CONTENT */}
//         <div>

//           <h2 className="text-3xl md:text-4xl font-bold leading-tight">
//             End-to-End Fleet Solutions for Growing Businesses
//           </h2>

//           <p className="mt-4 text-gray-600">
//             We provide reliable and scalable transport solutions tailored to your needs.
//             From local deliveries to nationwide logistics, our fleet ensures safety,
//             efficiency, and timely service.
//           </p>

//           <button className="mt-6 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition">
//             Discover Our Services
//           </button>
//         </div>

//         {/* RIGHT IMAGES */}
//         <div className="relative">
          
//           {/* Top Image */}
//           <img
//             src="/home/truck.jpg"
//             alt="Truck"
//             className="w-3/4 rounded-xl shadow-lg"
//           />

//           {/* Bottom Image */}
//           <img
//             src="/home/ship.jpg"
//             alt="Ship"
//             className="w-1/2 rounded-xl shadow-lg absolute bottom-10 right-0 border-4 border-white"
//           />
//         </div>

//       </div>
//     </section>
//   );
// };

// export default FleetSection;

import React from "react";
import { FaArrowRight, FaShieldAlt, FaTruckLoading } from "react-icons/fa";
import { Link } from "react-router-dom";

const FleetSection = () => {
  return (
    <section className="py-10 md:py-16 mb-5 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <div className="relative z-0">
          <div className="flex items-center gap-2 mb-6">
            <span className="h-[2px] w-8 bg-orange-500"></span>
            <span className="text-orange-600 font-bold tracking-[0.2em] text-xs uppercase">
              Fleet Excellence
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-[1.1] mb-8">
            End-to-End <span className="text-orange-500">Fleet Solutions</span> for Growing Businesses
          </h2>

          <div className="space-y-6 mb-10">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-600">
                <FaTruckLoading size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-lg">Real-time Tracking</h4>
                <p className="text-slate-500 text-sm">Monitor your shipments 24/7 with our advanced GPS-enabled fleet systems.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-800">
                <FaShieldAlt size={22} />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-lg">Safety Guaranteed</h4>
                <p className="text-slate-500 text-sm">Every vehicle undergoes rigorous safety checks to ensure zero-damage delivery.</p>
              </div>
            </div>
          </div>

          <Link to="/services" className="w-64 group relative flex items-center gap-4 bg-slate-900 text-white px-8 py-5 rounded-2xl font-bold overflow-hidden transition-all hover:pr-12">
            <span className="relative z-10">Discover Our Services</span>
            <FaArrowRight className="transition-all group-hover:translate-x-2" />
            <div className="absolute inset-0 bg-orange-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </Link>
        </div>

        {/* RIGHT IMAGES (Modern Collage) */}
        <div className="relative">
          {/* Decorative Background Element */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-orange-50 rounded-full blur-3xl -z-10 opacity-60"></div>

          {/* Main Truck Image */}
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl transform hover:-rotate-1 transition-transform duration-700">
            <img
              src="/fleet-section.jpg"
              alt="Fleet Truck"
              className=" object-cover transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>

          {/* Floating Image */}
          <div className="absolute -bottom-10 -left-5 md:-left-20 w-1/2 rounded-[2rem] overflow-hidden shadow-2xl border-[8px] border-white group">
            <img
              src="./fleet-section2.jpg"
              alt="Logistics Warehouse"
              className="w-full aspect-square object-cover scale-110 group-hover:scale-120 transition-transform duration-500"
            />
          </div>

          {/* Experience Badge (The "Unique" Element) */}
          <div className="hidden md:absolute top-10 -right-4 md:-right-8 bg-white p-6 rounded-[2rem] shadow-xl border border-slate-100 animate-bounce-slow">
            <div className="text-center">
              <span className="block text-4xl font-black text-orange-500 leading-none">17+</span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Years of <br/> Trust</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FleetSection;
