import React from "react";
import { FaShippingFast, FaShieldAlt, FaLightbulb, FaHandshake } from "react-icons/fa";

// const values = [
//   {
//     id: 1,
//     title: "Unmatched Speed",
//     desc: "We don't just deliver; we outpace. Our logistics network is engineered for the fastest turnaround times in the industry.",
//     icon: <FaShippingFast />,
//     size: "md:col-span-2", // Bada box
//     bg: "bg-orange-500 text-white",
//   },
//   {
//     id: 2,
//     title: "Safety First",
//     desc: "Your goods are our priority. Zero-damage delivery guaranteed.",
//     icon: <FaShieldAlt />,
//     size: "md:col-span-1",
//     bg: "bg-slate-50 text-slate-900 border border-slate-100",
//   },
//   {
//     id: 3,
//     title: "Innovation",
//     desc: "AI-driven tracking and smart warehousing solutions.",
//     icon: <FaLightbulb />,
//     size: "md:col-span-1",
//     bg: "bg-white text-slate-900 border border-slate-100 shadow-sm",
//   },
//   {
//     id: 4,
//     title: "Deep Reliability",
//     desc: "Trusted by 500+ global enterprises. We are the backbone of your supply chain, ensuring consistency in every single mile.",
//     icon: <FaHandshake />,
//     size: "md:col-span-2", // Bada box
//     bg: "bg-slate-900 text-white",
//   },
// ];

const values = [
  {
    id: 1,
    title: "Bharat ki Connectivity",
    desc: "Kashmir se Kanyakumari tak, har gali aur har shehar ko jodna hamara maqsad hai.",
    icon: "🇮🇳",
    size: "md:col-span-2",
    bg: "bg-slate-900 text-white",
  },
  {
    id: 2,
    title: "Vishwas (Trust)",
    desc: "Saalon ka bharosa, har parcel ke saath hum rishtey deliver karte hain.",
    icon: "🤝",
    size: "md:col-span-1",
    bg: "bg-white text-black",
  },
  {
    id: 3,
    title: "Raftaar aur Suraksha",
    desc: "Indian roads ki samajh aur advanced tracking—taaki aapka maal sahi waqt par aur safe pahuche.",
    icon: "⚡",
    size: "md:col-span-1",
    bg: "bg-slate-50 text-slate-900 border border-slate-100",
  },
  {
    id: 4,
    title: "Digital India Enabled",
    desc: "Paperless documentation aur real-time analytics ke saath naye Bharat ki logistics.",
    icon: "📱",
    size: "md:col-span-2",
    bg: "bg-white text-slate-900 border border-slate-100 shadow-sm",
  },
];

const CoreValues = () => {
  return (
    // <section className="py-4 md:py-10 bg-white">
    //   <div className="container mx-auto px-6 md:px-12">
        
    //     {/* Section Header */}
    //     <div className="max-w-3xl mb-16">
    //       <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-6">
    //         Our Core <span className="text-orange-500">Philosophy</span>
    //       </h2>
    //       <p className="text-slate-500 text-lg">
    //         The principles that drive every shipment, every decision, and every partnership at Aden Logistics.
    //       </p>
    //     </div>

    //     {/* Bento Grid */}
    //     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]b
    //     4">
    //       {values.map((item) => (  
    //         <div
    //           key={item.id}
    //           className={`${item.size} ${item.bg} rounded-[2.5rem] p-10 flex flex-col justify-between group transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden relative`}
    //         >
              
    //           {/* Background Decorative Icon (Rich Look) */}
    //           <div className="absolute -bottom-6 -right-6 text-9xl opacity-5 group-hover:scale-110 transition-transform duration-700">
    //             {item.icon}
    //           </div>

    //           <div className="relative z-10">
    //             <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-lg 
    //               ${item.bg.includes('orange') ? 'bg-white/20 text-white' : 'bg-orange-500 text-white'}`}>
    //               {item.icon}
    //             </div>
    //             <h3 className="text-2xl font-bold mb-4 tracking-tight">{item.title}</h3>
    //             <p className={`text-sm leading-relaxed max-w-sm ${item.bg.includes('slate-900') || item.bg.includes('orange') ? 'text-white/70' : 'text-slate-500'}`}>
    //               {item.desc}
    //             </p>
    //           </div>

    //           {/* Minimalist Arrow (Rich Detail) */}
    //           <div className="relative z-10 self-end">
    //             <div className="w-10 h-10 rounded-full border border-current opacity-30 flex items-center justify-center group-hover:bg-current group-hover:text-inherit transition-all">
    //               <span className="text-xs">→</span>
    //             </div>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
    
<section className="sm:py-16 md:py-24 bg-white">
  <div className="container mx-auto px-6 md:px-12">
    
    {/* Section Header */}
    <div className="max-w-3xl mb-16">
      <div className="flex items-center gap-3 mb-4">
        <span className="w-12 h-[2px] bg-orange-500"></span>
        <span className="text-orange-600 font-bold tracking-widest text-sm uppercase">Hamare Siddhant</span>
      </div>
      <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
        Logistics Built on <span className="text-orange-500">Indian Values</span>
      </h2>
      <p className="text-slate-500 text-md md:text-lg max-w-2xl leading-relaxed">
        Aden Logistics sirf transport nahi hai, yeh Bharat ke har kone ko jodne ka ek sankalp hai. Precision, speed, aur apnepan ke saath.
      </p>
    </div>

    {/* Bento Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[320px]">
      {values.map((item) => (  
        <div
          key={item.id}
          className={`${item.size} ${item.bg} rounded-[2.5rem] p-10 flex flex-col justify-between group transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden relative`}
        >
          
          {/* Background Decorative Icon (Rich Look) */}
          <div className="absolute -bottom-6 -right-6 text-9xl opacity-10 group-hover:scale-110 transition-transform duration-700 pointer-events-none">
            {item.icon}
          </div>

          <div className="relative z-10">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg transition-transform group-hover:rotate-12 
              ${item.bg.includes('orange') || item.bg.includes('slate-900') ? 'bg-white/20 text-white' : 'bg-orange-500 text-white'}`}>
              {item.icon}
            </div>
            <h3 className="text-2xl md:text-3xl font-black mb-4 tracking-tight">{item.title}</h3>
            <p className={`text-base leading-relaxed max-w-sm ${item.bg.includes('slate-900') || item.bg.includes('orange') ? 'text-slate-400' : 'text-slate-500'}`}>
              {item.desc}
            </p>
          </div>

          {/* Minimalist Arrow (Rich Detail) */}
          {/* <div className="relative z-10 self-end">
            <div className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300
              ${item.bg.includes('orange') || item.bg.includes('slate-900') 
                ? 'border-white/30 group-hover:bg-white group-hover:text-orange-300' 
                : 'border-slate-200 group-hover:bg-slate-900 group-hover:text-white'}`}>
              <span className="text-xl font-light">→</span>
            </div> 
          </div>*/}
        </div>
      ))}
    </div>
  </div>
</section>
  );
};

export default CoreValues;
