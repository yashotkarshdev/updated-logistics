// import React, { useRef } from "react";
// import { motion, useScroll, useSpring } from "framer-motion";

// const timelineData = [
//   {
//     year: "2015",
//     title: "The Genesis",
//     description: "Aden Logistics was founded with a vision to revolutionize the supply chain with transparent and fast deliveries.",
//   },
//   {
//     year: "2018",
//     title: "Going Global",
//     description: "Expanded our operations across borders, partnering with international networks to bridge the gap globally.",
//   },
//   {
//     year: "2021",
//     title: "Tech Integration",
//     description: "Introduced AI-driven tracking and automated warehousing to make our supply chain work as hard as you do.",
//   },
//   {
//     year: "2024",
//     title: "The Future",
//     description: "Moving the future forward with fully sustainable fleets and a 100% headless digital commerce approach.",
//   },
// ];

// const AboutTimeline = () => {
//   const containerRef = useRef(null);

//   // Scroll logic for the middle line
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start center", "end center"],
//   });

//   // Adding a spring effect for smooth line filling
//   const scaleY = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//     restDelta: 0.001,
//   });

//   return (
//     <section className="py-24 bg-white overflow-hidden" ref={containerRef}>
//       <div className="container mx-auto px-6 md:px-12 text-center mb-20">
//         <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-[0.9] tracking-tighter uppercase">
//           Our <span className="text-orange-500">Journey</span>
//         </h2>
//         <p className="mt-4 text-slate-600 font-medium max-w-2xl mx-auto">
//           The milestones that shaped us into the logistics powerhouse we are today.
//         </p>
//       </div>

//       <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        
//         {/* The Empty Background Line */}
//         <div className="absolute left-1/2 top-0 bottom-0 w-1.5 bg-slate-100 -translate-x-1/2 rounded-full hidden md:block"></div>

//         {/* The Animated Filling Line (Orange) */}
//         <motion.div
//           style={{ scaleY }}
//           className="absolute left-1/2 top-0 bottom-0 w-1.5 bg-orange-500 -translate-x-1/2 origin-top rounded-full hidden md:block z-0"
//         />

//         <div className="flex flex-col gap-12 md:gap-24">
//           {timelineData.map((item, index) => {
//             const isEven = index % 2 === 0;

//             return (
//               <div 
//                 key={index} 
//                 className="relative flex flex-col md:flex-row items-center justify-between w-full"
//               >
                
//                 {/* Left Section */}
//                 <div className={`w-full md:w-[45%] mb-8 md:mb-0 ${isEven ? "md:text-right md:pr-10" : "md:text-left md:pl-10 md:order-2"}`}>
//                   {isEven ? (
//                     <motion.div
//                       initial={{ opacity: 0, x: -50 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       viewport={{ once: true, margin: "-100px" }}
//                       transition={{ duration: 0.6 }}
//                     >
//                       <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
//                       <p className="text-slate-600 leading-relaxed font-medium">{item.description}</p>
//                     </motion.div>
//                   ) : (
//                     <motion.h3 
//                       initial={{ opacity: 0, scale: 0.8 }}
//                       whileInView={{ opacity: 1, scale: 1 }}
//                       viewport={{ once: true }}
//                       transition={{ duration: 0.6 }}
//                       className="hidden md:block text-6xl lg:text-8xl font-black text-slate-100 tracking-tighter"
//                     >
//                       {item.year}
//                     </motion.h3>
//                   )}
//                 </div>

//                 {/* Center Pop-up Node */}
//                 <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center z-10 hidden md:flex">
//                   <motion.div
//                     initial={{ scale: 0, opacity: 0 }}
//                     whileInView={{ scale: 1, opacity: 1 }}
//                     viewport={{ once: false, margin: "-150px" }}
//                     transition={{ duration: 0.5, type: "spring", bounce: 0.6 }}
//                     className="w-8 h-8 bg-white border-[5px] border-orange-500 rounded-full shadow-[0_0_20px_rgba(249,115,22,0.4)]"
//                   />
//                 </div>

//                 {/* Right Section */}
//                 <div className={`w-full md:w-[45%] ${isEven ? "md:text-left md:pl-10" : "md:text-right md:pr-10 md:order-1"}`}>
//                   {isEven ? (
//                     <motion.h3 
//                       initial={{ opacity: 0, scale: 0.8 }}
//                       whileInView={{ opacity: 1, scale: 1 }}
//                       viewport={{ once: true }}
//                       transition={{ duration: 0.6 }}
//                       className="hidden md:block text-6xl lg:text-8xl font-black text-slate-100 tracking-tighter"
//                     >
//                       {item.year}
//                     </motion.h3>
//                   ) : (
//                     <motion.div
//                       initial={{ opacity: 0, x: 50 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       viewport={{ once: true, margin: "-100px" }}
//                       transition={{ duration: 0.6 }}
//                     >
//                       {/* Mobile year fallback */}
//                       <h3 className="md:hidden text-4xl font-black text-orange-500 mb-2">{item.year}</h3>
//                       <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
//                       <p className="text-slate-600 leading-relaxed font-medium">{item.description}</p>
//                     </motion.div>
//                   )}
//                 </div>

//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutTimeline;
// import React, { useRef } from "react";
// import { motion, useScroll, useSpring } from "framer-motion";

// const timelineData = [
//   {
//     year: "2015",
//     title: "The Genesis",
//     description: "Aden Logistics was founded with a vision to revolutionize the supply chain with transparent and fast deliveries.",
//   },
//   {
//     year: "2018",
//     title: "Going Global",
//     description: "Expanded our operations across borders, partnering with international networks to bridge the gap globally.",
//   },
//   {
//     year: "2021",
//     title: "Tech Integration",
//     description: "Introduced AI-driven tracking and automated warehousing to make our supply chain work as hard as you do.",
//   },
//   {
//     year: "2024",
//     title: "The Future",
//     description: "Moving the future forward with fully sustainable fleets and a 100% headless digital commerce approach.",
//   },
// ];

// const AboutTimeline = () => {
//   const containerRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start center", "end center"],
//   });

//   const scaleY = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//     restDelta: 0.001,
//   });

//   return (
//     <section className="py-16 md:py-24 bg-white overflow-hidden" ref={containerRef}>
//       <div className="container mx-auto px-6 md:px-12 text-center mb-16 md:mb-20">
//         <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-[0.9] tracking-tighter uppercase">
//           Our <span className="text-orange-500">Journey</span>
//         </h2>
//         <p className="mt-4 text-slate-600 font-medium max-w-2xl mx-auto">
//           The milestones that shaped us into the logistics powerhouse we are today.
//         </p>
//       </div>

//       <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        
//         {/* FIXED: Background Grey Line */}
//         <div 
//           className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-1 md:w-1.5 bg-slate-200 rounded-full"
//           style={{ transform: "translateX(-50%)" }}
//         ></div>

//         {/* FIXED: Animated Orange Line */}
//         <motion.div
//           style={{ scaleY, x: "-50%" }} // Framer motion takes 'x' instead of tailwind class
//           className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-1 md:w-1.5 bg-orange-500 origin-top rounded-full z-0"
//         />

//         <div className="flex flex-col gap-12 md:gap-24">
//           {timelineData.map((item, index) => {
//             const isEven = index % 2 === 0;

//             return (
//               <div 
//                 key={index} 
//                 className="relative flex items-center justify-between w-full"
//               >
                
//                 {/* FIXED: Pop-up Node alignment */}
//                 <div 
//                   className="absolute left-[28px] md:left-1/2 flex items-center justify-center z-10"
//                   style={{ transform: "translateX(-50%)" }}
//                 >
//                   <motion.div
//                     initial={{ scale: 0, opacity: 0 }}
//                     whileInView={{ scale: 1, opacity: 1 }}
//                     viewport={{ once: false, margin: "-100px" }}
//                     transition={{ duration: 0.5, type: "spring", bounce: 0.6 }}
//                     className="hidden md:block w-5 h-5 md:w-8 md:h-8 bg-white border-4 md:border-[5px] border-orange-500 rounded-full shadow-[0_0_15px_rgba(249,115,22,0.4)]"
//                   />
//                 </div>

//                 {/* Content Section */}
//                 <div className={`w-full pl-16 md:pl-0 md:w-[45%] ${isEven ? "md:text-right md:pr-10" : "md:text-left md:pl-10 md:order-2"}`}>
                  
//                   {/* MOBILE VIEW */}
//                   <motion.div 
//                     className="block md:hidden"
//                     initial={{ opacity: 0, x: 30 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     viewport={{ once: true, margin: "-50px" }}
//                     transition={{ duration: 0.5 }}
//                   >
//                     <h3 className="text-2xl font-black text-orange-500 leading-none mb-1">{item.year}</h3>
//                     <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
//                     <p className="text-slate-600 font-medium text-sm leading-relaxed">{item.description}</p>
//                   </motion.div>

//                   {/* DESKTOP VIEW */}
//                   <div className="hidden md:block">
//                     {isEven ? (
//                       <motion.div
//                         initial={{ opacity: 0, x: -50 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         viewport={{ once: true, margin: "-100px" }}
//                         transition={{ duration: 0.6 }}
//                       >
//                         <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
//                         <p className="text-slate-600 leading-relaxed font-medium">{item.description}</p>
//                       </motion.div>
//                     ) : (
//                       <motion.h3 
//                         initial={{ opacity: 0, scale: 0.8 }}
//                         whileInView={{ opacity: 1, scale: 1 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.6 }}
//                         className="text-6xl lg:text-8xl font-black text-slate-100 tracking-tighter"
//                       >
//                         {item.year}
//                       </motion.h3>
//                     )}
//                   </div>
//                 </div>

//                 {/* DESKTOP ONLY: Second Half */}
//                 <div className={`hidden md:block md:w-[45%] ${isEven ? "md:text-left md:pl-10" : "md:text-right md:pr-10 md:order-1"}`}>
//                   {isEven ? (
//                     <motion.h3 
//                       initial={{ opacity: 0, scale: 0.8 }}
//                       whileInView={{ opacity: 1, scale: 1 }}
//                       viewport={{ once: true }}
//                       transition={{ duration: 0.6 }}
//                       className="text-6xl lg:text-8xl font-black text-slate-100 tracking-tighter"
//                     >
//                       {item.year}
//                     </motion.h3>
//                   ) : (
//                     <motion.div
//                       initial={{ opacity: 0, x: 50 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       viewport={{ once: true, margin: "-100px" }}
//                       transition={{ duration: 0.6 }}
//                     >
//                       <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
//                       <p className="text-slate-600 leading-relaxed font-medium">{item.description}</p>
//                     </motion.div>
//                   )}
//                 </div>

//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutTimeline;

import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const timelineData = [
  {
    year: "2017",
    title: "The Genesis",
    description: "Aden Logistics was founded with a vision to revolutionize the supply chain with transparent and fast deliveries.",
  },
  {
    year: "2021",
    title: "Going Global",
    description: "Expanded our operations across borders, partnering with international networks to bridge the gap globally.",
  },
  {
    year: "2024",
    title: "Tech Integration",
    description: "Introduced AI-driven tracking and automated warehousing to make our supply chain work as hard as you do.",
  },
  {
    year: "2028",
    title: "The Future",
    description: "Moving the future forward with fully sustainable fleets and a 100% headless digital commerce approach.",
  },
];

const AboutTimeline = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Center screen trigger margin
  const centerTrigger = "0px 0px -50% 0px";

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12 text-center mb-16 md:mb-20">
        <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-[0.9] tracking-tighter uppercase">
          Our <span className="text-orange-500">Journey</span>
        </h2>
        <p className="mt-4 text-slate-600 font-medium max-w-2xl mx-auto">
          The milestones that shaped us into the logistics powerhouse we are today.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Background Grey Line */}
        <div 
          className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-1 md:w-1.5 bg-slate-200 rounded-full"
          style={{ transform: "translateX(-50%)" }}
        ></div>

        {/* Animated Orange Line */}
        <motion.div
          style={{ scaleY, x: "-50%" }}
          className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-1 md:w-1.5 bg-orange-500 origin-top rounded-full z-0"
        />

        <div className="flex flex-col gap-12 md:gap-24">
          {timelineData.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div 
                key={index} 
                className="relative flex items-center justify-between w-full"
              >
                
                {/* Pop-up Node alignment */}
                <div 
                  className="absolute left-[28px] md:left-1/2 flex items-center justify-center z-10"
                  style={{ transform: "translateX(-50%)" }}
                >
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: false, margin: centerTrigger }} // Triggers exactly at center
                    transition={{ duration: 0.5, type: "spring", bounce: 0.6 }}
                    className="w-5 h-5 md:w-8 md:h-8 bg-white border-4 md:border-[5px] border-orange-500 rounded-full shadow-[0_0_15px_rgba(249,115,22,0.4)]"
                  />
                </div>

                {/* Content Section */}
                <div className={`w-full pl-16 md:pl-0 md:w-[45%] ${isEven ? "md:text-right md:pr-10" : "md:text-left md:pl-10 md:order-2"}`}>
                  
                  {/* MOBILE VIEW */}
                  <motion.div 
                    className="block md:hidden"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: centerTrigger }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-2xl font-black text-orange-500 leading-none mb-1">{item.year}</h3>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                    <p className="text-slate-600 font-medium text-sm leading-relaxed">{item.description}</p>
                  </motion.div>

                  {/* DESKTOP VIEW */}
                  <div className="hidden md:block">
                    {isEven ? (
                      <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: centerTrigger }}
                        transition={{ duration: 0.6 }}
                      >
                        <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
                        <p className="text-slate-600 leading-relaxed font-medium">{item.description}</p>
                      </motion.div>
                    ) : (
                      // ODD ROW YEAR
                      <motion.h3 
                        initial={{ color: "#f1f5f9", scale: 0.8, opacity: 0 }} // slate-100
                        whileInView={{ color: "#f97316", scale: 1, opacity: 1 }} // orange-500
                        viewport={{ once: false, margin: centerTrigger }}
                        transition={{ duration: 0.6 }}
                        className="text-6xl lg:text-8xl font-black tracking-tighter"
                      >
                        {item.year}
                      </motion.h3>
                    )}
                  </div>
                </div>

                {/* DESKTOP ONLY: Second Half */}
                <div className={`hidden md:block md:w-[45%] ${isEven ? "md:text-left md:pl-10" : "md:text-right md:pr-10 md:order-1"}`}>
                  {isEven ? (
                    // EVEN ROW YEAR
                    <motion.h3 
                      initial={{ color: "#f1f5f9", scale: 0.8, opacity: 0 }} // slate-100
                      whileInView={{ color: "#f97316", scale: 1, opacity: 1 }} // orange-500
                      viewport={{ once: false, margin: centerTrigger }}
                      transition={{ duration: 0.6 }}
                      className="text-6xl lg:text-8xl font-black tracking-tighter"
                    >
                      {item.year}
                    </motion.h3>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: centerTrigger }}
                      transition={{ duration: 0.6 }}
                    >
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
                      <p className="text-slate-600 leading-relaxed font-medium">{item.description}</p>
                    </motion.div>
                  )}
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutTimeline;