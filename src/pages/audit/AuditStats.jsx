export default function AuditStats() {
  const stats = [
    { label: "Overall Standing", value: "96.5%", color: "text-slate-900" },
    { label: "Compliance Status", value: "Fantastic", color: "text-orange-500" },
    { label: "Safety Compliance", value: "In-Compliance", color: "text-slate-900" },
    { label: "Quality Score", value: "Excellent", color: "text-slate-900" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-12 border-y border-slate-100">
      {stats.map((stat, i) => (
        <div key={i} className="text-center md:text-left">
          <p className="text-xs font-black text-slate-400 uppercase tracking-tighter mb-1">{stat.label}</p>
          <p className={`text-2xl font-black ${stat.color}`}>{stat.value}</p>
        </div>
      ))}
    </div>
  );
}