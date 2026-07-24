export default function AuditMetrics() {
  const metrics = [
    { label: "Compliance", val: "100%", desc: "Regulatory Adherence" },
    { label: "Safety", val: "98.2%", desc: "On-Road Safety Score" },
    { label: "Accuracy", val: "99.9%", desc: "Financial Precision" }
  ];

  return (
    <section className="py-10 border-y border-slate-100 my-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {metrics.map((m, i) => (
          <div key={i} className="text-center md:text-center group">
            <h3 className="text-5xl font-black text-slate-900 group-hover:text-orange-500 transition-colors">{m.val}</h3>
            <p className="font-bold text-slate-400 uppercase tracking-widest text-xs mt-2">{m.label}</p>
            <p className="text-slate-400 text-xs italic">{m.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}