export default function AuditHeader() {
  return (
    <header className="max-w-7xl mx-auto px-6 py-10">
      <div className="flex items-center gap-3 mb-6">
        <span className="w-12 h-[2px] bg-orange-500"></span>
        <span className="text-xs font-black tracking-[0.3em] text-slate-400 uppercase">Operational Transparency</span>
      </div>
      <h1 className="text-6xl font-black text-slate-900 tracking-tighter mb-6">
        OUR <span className="text-orange-500 italic">Compliance</span> REPORTS
      </h1>
      <p className="max-w-3xl text-lg text-slate-500 font-medium leading-relaxed">
        We maintain a <span className="text-slate-900 font-bold">100% compliance track record</span>. Our compliance programs cover critical aspects including SLS scorecards, operational efficiency, and financial accuracy.
      </p>
    </header>
  );
}