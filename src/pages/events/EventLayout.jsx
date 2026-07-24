// import React from "react";
// import { useNavigate } from "react-router-dom";

// const EventLayout = ({ event }) => {
//   const navigate = useNavigate();

//   if (!event) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
//         <h2 className="text-2xl font-black text-slate-900 uppercase">Route Not Found</h2>
//         <button onClick={() => navigate("/events")} className="px-6 py-2 bg-orange-500 text-white font-bold rounded-lg">Go Back</button>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-white">
//       <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
//         {/* LEFT: Info Panel (Col 5) */}
//         <div className="lg:col-span-5 space-y-8">
//           <button 
//             onClick={() => navigate(-1)}
//             className="flex items-center gap-2 text-slate-400 hover:text-orange-500 font-black text-[10px] uppercase tracking-[0.3em] transition-colors"
//           >
//             ← Back to Archive
//           </button>

//           <div className="space-y-4">
//             <div className="inline-block px-3 py-1 bg-orange-500/10 border border-orange-500/20 text-orange-500 text-[10px] font-black uppercase tracking-widest rounded-md">
//                Station Report
//             </div>
//             <h1 className="text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">
//               {event.title}
//             </h1>
//             <p className="text-slate-500 font-medium text-lg leading-relaxed">
//               {event.description}
//             </p>
//           </div>

//           {/* Logistics Style Data Grid */}
//           <div className="grid grid-cols-2 gap-4">
//             {[
//               { label: 'Deployment Date', val: event.date },
//               { label: 'Main Location', val: event.location },
//               { label: 'Access Level', val: event.entry },
//               { label: 'Status', val: 'Verified' }
//             ].map((item, i) => (
//               <div key={i} className="p-4 bg-slate-50 border-l-4 border-slate-900 rounded-r-xl">
//                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{item.label}</p>
//                 <p className="text-slate-900 font-bold">{item.val}</p>
//               </div>
//             ))}
//           </div>
          
//           <div className="p-6 bg-orange-500 text-white rounded-[2rem] shadow-xl shadow-orange-200">
//              <p className="text-[10px] font-black uppercase tracking-widest opacity-80 mb-2 text-center">Need Hard Copy?</p>
//              <a href={event.pdf} download className="block text-center font-black uppercase tracking-tighter text-xl hover:scale-105 transition-transform cursor-pointer">
//                DOWNLOAD PDF REPORT
//              </a>
//           </div>
//         </div>

//         {/* RIGHT: PDF Viewer (Col 7) */}
//         <div className="lg:col-span-7">
//           <div className="relative group">
//             {/* Decorative Offset */}
//             <div className="absolute inset-0 bg-slate-900 rounded-[2rem] translate-x-3 translate-y-3 -z-10 opacity-10"></div>
            
//             {/* PDF Frame */}
//             <div className="w-full h-[600px] lg:h-[850px] bg-slate-900 border-4 border-slate-900 rounded-[2rem] overflow-hidden shadow-2xl sticky top-10">
//               <div className="bg-slate-900 px-6 py-3 flex justify-between items-center border-b border-slate-800">
//                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Secure Document Viewer</span>
//                  <div className="flex gap-2">
//                     <div className="w-2 h-2 rounded-full bg-red-500"></div>
//                     <div className="w-2 h-2 rounded-full bg-orange-500"></div>
//                     <div className="w-2 h-2 rounded-full bg-green-500"></div>
//                  </div>
//               </div>
//               <iframe
//                 src={`${event.pdf}#toolbar=0`}
//                 title={event.title}
//                 className="w-full h-full bg-white"
//               ></iframe>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventLayout;

// import React from "react";
// import { useNavigate } from "react-router-dom";

// const EventLayout = ({ event }) => {
//   const navigate = useNavigate();

//   if (!event) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
//         <h2 className="text-2xl font-black text-slate-900 uppercase">Route Not Found</h2>
//         <button onClick={() => navigate("/events")} className="px-6 py-2 bg-orange-500 text-white font-bold rounded-lg">Go Back</button>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-white">
//       <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
//         {/* LEFT: Info Panel (Col 5) */}
//         <div className="lg:col-span-5 space-y-8">
//           <button 
//             onClick={() => navigate(-1)}
//             className="flex items-center gap-2 text-slate-400 hover:text-orange-500 font-black text-[10px] uppercase tracking-[0.3em] transition-colors"
//           >
//             ← Back to Archive
//           </button>

//           <div className="space-y-4">
//             <div className="inline-block px-3 py-1 bg-orange-500/10 border border-orange-500/20 text-orange-500 text-[10px] font-black uppercase tracking-widest rounded-md">
//                Station Report
//             </div>
//             <h1 className="text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">
//               {event.title}
//             </h1>
//             <p className="text-slate-500 font-medium text-lg leading-relaxed">
//               {event.description}
//             </p>
//           </div>

//           {/* Logistics Style Data Grid */}
//           <div className="grid grid-cols-2 gap-4">
//             {[
//               { label: 'Deployment Date', val: event.date },
//               { label: 'Main Location', val: event.location },
//               { label: 'Access Level', val: event.entry },
//               { label: 'Status', val: 'Verified' }
//             ].map((item, i) => (
//               <div key={i} className="p-4 bg-slate-50 border-l-4 border-slate-900 rounded-r-xl">
//                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{item.label}</p>
//                 <p className="text-slate-900 font-bold">{item.val}</p>
//               </div>
//             ))}
//           </div>
          
//           <div className="p-6 bg-orange-500 text-white rounded-[2rem] shadow-xl shadow-orange-200">
//              <p className="text-[10px] font-black uppercase tracking-widest opacity-80 mb-2 text-center">Need Hard Copy?</p>
//              <a href={event.pdf} download className="block text-center font-black uppercase tracking-tighter text-xl hover:scale-105 transition-transform cursor-pointer">
//                DOWNLOAD PDF REPORT
//              </a>
//           </div>
//         </div>

//         {/* RIGHT: PDF Viewer (Col 7) */}
//         <div className="lg:col-span-7">
//           <div className="relative group">
//             {/* Decorative Offset */}
//             <div className="absolute inset-0 bg-slate-900 rounded-[2rem] translate-x-3 translate-y-3 -z-10 opacity-10"></div>
            
//             {/* PDF Frame */}
//             <div className="w-full h-[600px] lg:h[700]:] bg-slate-900 border-4 border-slate-900 rounded-[2rem] overflow-hidden shadow-2xl sticky top-10">
//               <div className="bg-slate-900 px-6 py-3 flex justify-between items-center border-b border-slate-800">
//                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Secure Document Viewer</span>
//                  <div className="flex gap-2">
//                     <div className="w-2 h-2 rounded-full bg-red-500"></div>
//                     <div className="w-2 h-2 rounded-full bg-orange-500"></div>
//                     <div className="w-2 h-2 rounded-full bg-green-500"></div>
//                  </div>
//               </div>
//               <iframe
//                 src={`${event.pdf}#toolbar=0`}
//                 title={event.title}
//                 className="w-full h-full bg-white"
//               ></iframe>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventLayout;

import React from "react";
import { useNavigate } from "react-router-dom";

const EventLayout = ({ event }) => {
  const navigate = useNavigate();

  if (!event) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
        <h2 className="text-2xl font-black text-slate-900 uppercase">
          Route Not Found
        </h2>

        <button
          onClick={() => navigate("/events")}
          className="px-6 py-2 bg-orange-500 text-white font-bold rounded-lg"
        >
          Go Back
        </button>
      </div>
    );
  }

  const mediaUrl = event.media || event.pdf || "";

  const isVideo = /\.(mp4|webm|mov|avi|mkv)$/i.test(mediaUrl);
  const isPdf = /\.pdf$/i.test(mediaUrl);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* LEFT PANEL */}
        <div className="lg:col-span-5 space-y-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-slate-400 hover:text-orange-500 font-black text-[10px] uppercase tracking-[0.3em] transition-colors"
          >
            ← Back to Archive
          </button>

          <div className="space-y-4">
            <div className="inline-block px-3 py-1 bg-orange-500/10 border border-orange-500/20 text-orange-500 text-[10px] font-black uppercase tracking-widest rounded-md">
              Station Report
            </div>

            <h1 className="text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">
              {event.title}
            </h1>

            <p className="text-slate-500 font-medium text-lg leading-relaxed">
              {event.description}
            </p>
          </div>

          {/* INFO GRID */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Deployment Date", val: event.date || "---" },
              { label: "Main Location", val: event.location || "---" },
              { label: "Access Level", val: event.entry || "Free" },
              { label: "Status", val: "Verified" },
            ].map((item, i) => (
              <div
                key={i}
                className="p-4 bg-slate-50 border-l-4 border-slate-900 rounded-r-xl"
              >
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">
                  {item.label}
                </p>

                <p className="text-slate-900 font-bold">{item.val}</p>
              </div>
            ))}
          </div>

          {/* DOWNLOAD BUTTON */}
          {mediaUrl && (
            <div className="p-6 bg-orange-500 text-white rounded-[2rem] shadow-xl shadow-orange-200">
              <p className="text-[10px] font-black uppercase tracking-widest opacity-80 mb-2 text-center">
                {isPdf ? "Need Hard Copy?" : "Media File"}
              </p>

              <a
                href={mediaUrl}
                download
                className="block text-center font-black uppercase tracking-tighter text-xl hover:scale-105 transition-transform cursor-pointer"
              >
                {isPdf
                  ? "DOWNLOAD PDF REPORT"
                  : isVideo
                  ? "DOWNLOAD VIDEO"
                  : "DOWNLOAD FILE"}
              </a>
            </div>
          )}
        </div>

        {/* RIGHT PANEL */}
        <div className="lg:col-span-7">
          <div className="relative">
            <div className="absolute inset-0 bg-slate-900 rounded-[2rem] translate-x-3 translate-y-3 -z-10 opacity-10"></div>

            <div className="w-full h-[500px] bg-slate-900 border-4 border-slate-900 rounded-[2rem] overflow-hidden shadow-2xl sticky top-10">
              {/* HEADER */}
              <div className="bg-slate-900 px-6 py-3 flex justify-between items-center border-b border-slate-800">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">
                  {isPdf
                    ? "Secure Document Viewer"
                    : isVideo
                    ? "Secure Video Viewer"
                    : "Secure Media Viewer"}
                </span>

                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
              </div>

              {/* CONTENT */}
              <div className="w-full h-[calc(100%-52px)]">
                {isPdf ? (
                  <iframe
                    src={`${mediaUrl}#toolbar=0`}
                    title={event.title}
                    className="w-full h-full bg-white"
                  />
                ) : isVideo ? (
                  <video
                    controls
                    preload="metadata"
                    className="w-full h-full bg-black object-contain"
                  >
                    <source src={mediaUrl} />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white text-lg font-bold">
                    Unsupported File Type
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventLayout;