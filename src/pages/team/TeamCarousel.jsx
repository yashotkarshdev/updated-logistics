import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

export default function TeamCarousel({ members }) {
  // Prevent crash if members is not provided or not an array
  if (!members || !Array.isArray(members)) return null;

  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={30}
      slidesPerView={3}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      grabCursor={true}
      loop={members.length >= 3} // Only loop if there are enough slides
      breakpoints={{
        320: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className="pb-12"
    >
      {members.map((member) => (
        // Changed key from member.id to member._id to match MongoDB
        <SwiperSlide key={member._id}>
          {/* Main Card */}
          <div className="group relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-orange-500/50">
            
            {/* Top Orange Accent Line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-t-2xl origin-left" />

            {/* Profile Image */}
            <div className="relative w-28 h-28 lg:w-40 lg:h-40 mx-auto mb-6">
              <div className="absolute inset-0 bg-orange-500 rounded-full blur-md opacity-0 group-hover:opacity-20 transition-opacity" />
              <img
                src={member.image}
                alt={member.name}
                className="relative w-full h-full object-cover rounded-full border-4 border-slate-50 dark:border-slate-800 group-hover:border-orange-100 dark:group-hover:border-slate-700 transition-colors bg-slate-100"
              />
            </div>

            {/* Info Section */}
            <div className="text-center">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-orange-500 transition-colors">
                {member.name}
              </h3>
              <div className="flex items-center justify-center gap-2">
                <span className="h-[1px] w-4 bg-orange-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  {/* Changed from member.role to member.position to match your API */}
                  {member.position}
                </p>
                <span className="h-[1px] w-4 bg-orange-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>

            {/* Subtle Background Icon */}
            <div className="absolute bottom-4 right-4 opacity-[0.03] dark:opacity-[0.07] group-hover:opacity-10 transition-opacity pointer-events-none">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4z" />
              </svg>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}