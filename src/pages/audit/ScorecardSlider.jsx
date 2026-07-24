export default function ScorecardSlider() {
  return (
    <section className="py-10">
      <div className="bg-slate-950 rounded-[2rem] p-8 md:p-12 shadow-2xl overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-[100px] -z-0"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="text-white">
            <h2 className="text-4xl font-black uppercase tracking-tighter">Station <span className="text-orange-500 italic">Score Cards</span></h2>
            <p className="text-slate-400 font-medium">Real-time performance across 50+ hubs.</p>
          </div>
          {/* <div className="flex gap-4">
             <div className="w-10 h-10 border border-slate-700 flex items-center justify-center text-white hover:bg-orange-500 cursor-pointer transition-all">←</div>
             <div className="w-10 h-10 border border-slate-700 flex items-center justify-center text-white hover:bg-orange-500 cursor-pointer transition-all">→</div>
          </div> */}
        </div>

        <div className="rounded-xl border border-slate-800 overflow-hidden bg-slate-900 shadow-inner">
           <img src="./scorecard-table.png" className="w-full h-auto opacity-90 hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </section>
  );
}