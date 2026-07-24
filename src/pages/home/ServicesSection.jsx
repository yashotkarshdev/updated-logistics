// import React from "react";

// const services = [
//   {
//     title: "Road Transport",
//     desc: "Fast and reliable delivery across cities with our modern fleet.",
//     img: "/home/truck.jpg",
//   },
//   {
//     title: "Air Freight",
//     desc: "Quick and secure air shipping for urgent deliveries.",
//     img: "/home/flight.jpg",
//   },
//   {
//     title: "Ocean Freight",
//     desc: "Cost-effective sea transport for bulk shipments worldwide.",
//     img: "/home/ship.jpg",
//   },
// ];

// const ServicesSection = () => {
//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="container mx-auto px-10 text-center">
        
//         {/* Heading */}
//         <p className="text-green-600 font-semibold mb-2">
//           Our Services
//         </p>

//         <h2 className="text-3xl md:text-4xl font-bold">
//           Popular Logistics Services
//         </h2>

//         {/* Cards */}
//         <div className="grid md:grid-cols-3 gap-8 mt-10">
//           {services.map((service, index) => (
            
//             <div
//               key={index}
//               className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
//             >
              
//               {/* Image */}
//               <div className="relative">
//                 <img
//                   src={service.img}
//                   alt={service.title}
//                   className="w-full h-48 object-cover"
//                 />

//                 {/* Floating Icon */}
//                 <div className="absolute bottom-[-20px] left-4 bg-green-600 text-white w-10 h-10 flex items-center justify-center rounded-full shadow-lg">
//                   🚚
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="p-6 pt-10 text-left">
//                 <h3 className="text-xl font-semibold">
//                   {service.title}
//                 </h3>

//                 <p className="text-gray-600 mt-2">
//                   {service.desc}
//                 </p>

//                 <button className="mt-4 text-green-600 font-semibold hover:underline">
//                   Learn More →
//                 </button>
//               </div>

//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default ServicesSection;

import React from "react";
import { FaTruck, FaPlane, FaShip, FaArrowRight, FaWarehouse, FaBiking, FaDoorOpen } from "react-icons/fa";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Door To Door Delivery",
    desc: "End-to-end delivery service that picks up from your location and delivers directly to your customer's doorstep with care and efficiency.",
    img: "/d2d-delivery.jpg",
    icon: <FaDoorOpen />,
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Road Transport",
    desc: "Fast and reliable delivery across cities with our modern fleet and real-time tracking.",
    img: "/truck-new.png",
    icon: <FaTruck />,
    color: "from-orange-500 to-orange-600",
  },
  {
    title: "Warehouse Solutions",
    desc: "State-of-the-art warehousing with inventory management and fulfillment services to streamline your supply chain.",
    img: "/warehouse-new.png",
    icon: <FaWarehouse />,
    color: "from-emerald-500 to-emerald-600",
  },
];

const ServicesSection = () => {
  return (
    <section className="md:py-12 bg-[#f8fafc]">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header with Badge */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping"></span>
            Our Expertise
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
            Premium Logistics <br /> 
            <span className="text-orange-500 underline decoration-slate-200 underline-offset-8">Solutions for Business</span>
          </h2>
          <p className="text-slate-500 text-md">
            We provide end-to-end supply chain solutions tailored to your specific industry needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white md:p-4 transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100"
            >
              {/* Image Container with Overlay */}
              <div className="relative  md:w-full overflow-hidden mb-8">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
                
                {/* Floating Icon Badge */}
                {/* <div className={`absolute bottom-6 left-6 w-14 h-14 bg-gradient-to-br ${service.color} text-white rounded-2xl flex items-center justify-center text-2xl shadow-xl transform -rotate-6 group-hover:rotate-0 transition-transform duration-500`}>
                  {service.icon}
                </div> */}

                {/* Step Number (01, 02, 03) */}
                <div className="absolute bottom-4 right-6 text-white/30 text-5xl font-black italic">
                  0{index + 1}
                </div>
              </div>

              {/* Content */}
              <div className="px-4 pb-6">
                <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-orange-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-500 leading-relaxed mb-6">
                  {service.desc}
                </p>

                {/* Animated Button */}
                <Link to="/services" className="flex items-center gap-2 font-bold text-slate-900 group/btn">
                  <span className="relative">
                    Explore Service
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover/btn:w-full"></span>
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover/btn:bg-orange-500 group-hover/btn:text-white transition-all">
                    <FaArrowRight size={12} />
                  </div>
                </Link>
              </div>

              {/* Decorative Corner Shape */}
              <div className="absolute -z-10 top-0 right-0 w-32 h-32 bg-orange-50/50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
