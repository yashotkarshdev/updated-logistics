import TeamCarousel from "./TeamCarousel";

export default function TeamSection({ category }) {
  // Safe check to prevent crashes if category data is missing
  const categoryName = category?.name || "Other";

  return (
    <div className="group transition-all duration-500">
      {/* Category Header with a Dynamic Orange Accent */}
      <div className="flex items-center gap-6 mb-8">
        <div className="relative">
          <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic">
            {categoryName}
          </h2>
          {/* Decorative Orange underline that grows on section hover */}
          <div className="absolute -bottom-1 left-0 h-1 w-12 bg-orange-500 rounded-full transition-all duration-500 group-hover:w-full" />
        </div>
        
        {/* Subtle Slate Divider Line */}
        <div className="h-[2px] flex-grow bg-slate-200 dark:bg-slate-800 rounded-full opacity-50" />
        
        {/* Logistics Badge / Safe Split applied here */}
        <span className="hidden md:block text-[10px] font-bold text-slate-400 dark:text-slate-500 tracking-[0.2em] uppercase">
          Department // {categoryName.split(' ')[0]}
        </span>
      </div>

      {/* The Carousel Container */}
      <div className="relative px-2 py-4 bg-slate-50/50 dark:bg-slate-900/20 rounded-3xl border border-transparent hover:border-slate-100 dark:hover:border-slate-800 transition-colors">
        {/* Ensure members array exists before passing */}
        <TeamCarousel members={category.members || []} />
      </div>
    </div>
  );
}