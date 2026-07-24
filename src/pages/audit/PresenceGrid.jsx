export default function PresenceGrid() {
  const presenceData = [
    {
      state: "Rajasthan",
      hubs: "12+",
      fleet: "150+",
      cities: "25+",
      type: "map",
      mapEmbedUrl: "https://www.google.com/maps?q=Rajasthan&output=embed",
    },
    {
      state: "Uttar Pradesh",
      hubs: "18+",
      fleet: "200+",
      cities: "40+",
      type: "map",
      mapEmbedUrl: "https://www.google.com/maps?q=Uttar+Pradesh&output=embed",
    },
  ];

  return (
    <section className="py-10 border-t border-slate-100 bg-white">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <p className="text-orange-500 font-black tracking-[0.4em] text-[10px] uppercase italic">
              Expansive Logistics Network
            </p>
            <h2 className="text-5xl font-black text-slate-900 uppercase tracking-tighter">
              OUR BUSINESS <span className="text-orange-500">PRESENCE</span>
            </h2>
          </div>
          <div className="h-[1px] flex-grow bg-slate-100 hidden md:block mb-4 mx-10"></div>
          <p className="text-slate-400 font-bold italic text-sm">And Many More Regions...</p>
        </div>
      </div>

      {/* Interactive Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
        {presenceData.map((item, i) => (
          <div key={i} className="group relative">
            {/* Background Glow Effect */}
            <div className="absolute -inset-4 bg-slate-50 rounded-[3rem] opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10" />

            <div className="flex flex-col items-center">
              {/* Map Container with Stats Overlay */}
              <div className="relative mb-10 w-full flex justify-center">
                {/* Floating Stats - Glassmorphism Effect */}
                <div className="absolute top-0 left-0 z-10 space-y-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-4 transition-all duration-500 delay-100">
                  <div className="bg-white/80 backdrop-blur-md border border-slate-100 p-3 rounded-xl shadow-xl">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Active Hubs</p>
                    <p className="text-xl font-black text-slate-900">{item.hubs}</p>
                  </div>
                  <div className="bg-white/80 backdrop-blur-md border border-slate-100 p-3 rounded-xl shadow-xl translate-x-4">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Vehicle Fleet</p>
                    <p className="text-xl font-black text-slate-900">{item.fleet}</p>
                  </div>
                </div>

                {/* Map Image */}
                <div className="relative">
                  {item.type === "map" ? (
                    <iframe
                      src={item.mapEmbedUrl}
                      className="w-full max-w-sm h-[300px] rounded-xl border-0 group-hover:scale-110 group-hover:-rotate-2 transition-transform duration-700"
                      loading="lazy"
                    />
                  ) : (
                    <img
                      src={item.image}
                      alt={item.state}
                      className="w-full max-w-sm h-auto group-hover:scale-110 group-hover:-rotate-2 transition-transform duration-700"
                    />
                  )}
                  {/* Subtle Radar Animation on a Hub Location */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="flex h-6 w-6 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-6 w-6 bg-orange-500 border-4 border-white shadow-lg"></span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Title and Badge */}
              <div className="text-center space-y-3">
                <div className="inline-flex items-center gap-2 px-4 py-1 bg-slate-900 text-white rounded-full text-[10px] font-black tracking-widest uppercase">
                  Region <span className="text-orange-500">0{i + 1}</span>
                </div>
                <h3 className="text-3xl font-black text-slate-900 tracking-tighter uppercase italic group-hover:text-orange-500 transition-colors">
                  IN {item.state}
                </h3>
                <div className="h-1.5 w-12 bg-slate-200 group-hover:w-full group-hover:bg-orange-500 mx-auto rounded-full transition-all duration-500" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}