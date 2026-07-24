// import React from "react";
// import { Link } from "react-router-dom";
// import { events } from "./events";

// const EventsMain = () => {
//   return (
//     <div className="min-h-screen bg-white py-24 px-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Header Section */}
//         <div className="mb-16">
//           <div className="flex items-center gap-3 mb-4">
//             <div className="w-12 h-[2px] bg-orange-500"></div>
//             <span className="text-xs font-black text-slate-400 uppercase tracking-[0.5em]">Aden Network Updates</span>
//           </div>
//           <h1 className="text-6xl font-black text-slate-900 tracking-tighter uppercase">
//             Station <span className="text-orange-500 italic">Events</span>
//           </h1>
//         </div>

//         {/* Events Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {events.map((event) => (
//             <Link
//               key={event.id}
//               to={`/event/${event.id}`}
//               className="group relative bg-slate-50 border-2 border-slate-100 p-8 rounded-[2rem] transition-all duration-500 hover:border-orange-500 hover:bg-white hover:shadow-2xl hover:-translate-y-2"
//             >
//               <div className="space-y-4">
//                 <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors">
//                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                   </svg>
//                 </div>
//                 <h3 className="text-2xl font-black text-slate-900 tracking-tight leading-tight uppercase">
//                   {event.title}
//                 </h3>
//                 <p className="text-slate-500 font-medium line-clamp-2 text-sm">
//                   {event.description}
//                 </p>
//                 <div className="pt-4 flex justify-between items-center border-t border-slate-200">
//                   <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{event.date}</span>
//                   <span className="text-orange-500 font-black text-xs uppercase tracking-tighter group-hover:translate-x-2 transition-transform inline-flex items-center gap-1">
//                     View Report →
//                   </span>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventsMain;

import React from "react";
import { Link } from "react-router-dom";
import { events } from "./events";

const EventsMain = () => {
  return (
    <div className="min-h-screen bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-orange-500"></div>
            <span className="text-xs font-black text-slate-400 uppercase tracking-[0.5em]">Aden Network Updates</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter uppercase">
            Station <span className="text-orange-500 italic">Events</span>
          </h1>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <Link
              key={event.id}
              to={`/event/${event.id}`}
              className="group relative bg-slate-50 border-2 border-slate-100 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:border-orange-500 hover:bg-white hover:shadow-2xl hover:-translate-y-2"
            >
              {/* IMAGE SECTION */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay for icon */}
                {/* <div className="absolute top-6 right-6">
                   <div className="w-12 h-12 bg-slate-900/80 backdrop-blur-md rounded-xl flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div> */}
              </div>

              {/* DETAILS SECTION */}
              <div className="p-8 space-y-4">
                <h3 className="text-2xl font-black text-slate-900 tracking-tight leading-tight uppercase">
                  {event.title}
                </h3>
                <p className="text-slate-500 font-medium line-clamp-2 text-sm">
                  {event.description}
                </p>
                <div className="pt-4 flex justify-between items-center border-t border-slate-200">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{event.date}</span>
                  <span className="text-orange-500 font-black text-xs uppercase tracking-tighter group-hover:translate-x-2 transition-transform inline-flex items-center gap-1">
                    View Report →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsMain;