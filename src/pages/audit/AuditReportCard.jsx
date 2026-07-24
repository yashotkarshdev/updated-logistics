export default function AuditReportCard({ title, subtitle, image, reverse = false }) {
  return (
    <div className={`flex flex-col lg:flex-row gap-16 py-10 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
      <div className="w-full lg:w-1/2 flex gap-8">
        {/* The Signature Orange Sidebar from your old design */}
        <div className="w-1.5 bg-orange-500 rounded-full shrink-0 h-20 shadow-[0_0_15px_rgba(249,115,22,0.4)]"></div>
        <div className="space-y-4">
          <h2 className="text-4xl font-black text-slate-900 tracking-tight uppercase leading-[0.9]">
            {title}
          </h2>
          <p className="text-slate-500 font-bold text-sm tracking-widest uppercase italic">
            {subtitle}
          </p>
          {/* <button className="mt-4 px-6 py-2 border-2 border-slate-900 text-slate-900 font-black text-xs uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all">
            View Analytics
          </button> */}
        </div>
      </div>

      <div className="w-full lg:w-1/2 group">
        <div className="relative bg-white p-2 border border-slate-200 rounded-xl shadow-sm group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2">
          <img src={image} alt={title} className="w-full h-auto rounded-lg grayscale-[30%] group-hover:grayscale-0 transition-all" />
        </div>
      </div>
    </div>
  );
}