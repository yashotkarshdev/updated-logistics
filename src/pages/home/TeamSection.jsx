// import React from "react";

// const team = [
//   {
//     name: "Rahul Sharma",
//     role: "Fleet Manager",
//     img: "/home/emp.jpg",
//   },
//   {
//     name: "Amit Verma",
//     role: "Senior Driver",
//     img: "/home/emp.jpg",
//   },
//   {
//     name: "Neha Singh",
//     role: "Logistics Coordinator",
//     img: "/home/emp.jpg",
//   },
//   {
//     name: "Ravi Kumar",
//     role: "Operations Head",
//     img: "/home/emp.jpg",
//   },
// ];

// const TeamSection = () => {
//   return (
//     <section className="py-16 bg-white">
//       <div className="container mx-auto px-10 text-center">
        
//         {/* Heading */}
//         <p className="text-green-600 font-semibold mb-2">
//           Our Team
//         </p>

//         <h2 className="text-3xl md:text-4xl font-bold">
//           Meet the Experts Behind Our Logistics
//         </h2>

//         <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
//           Our experienced team ensures smooth operations, timely delivery,
//           and complete safety of your goods at every step.
//         </p>

//         {/* Team Grid */}
//         <div className="grid md:grid-cols-4 gap-8 mt-10">
//           {team.map((member, index) => (
            
//             <div
//               key={index}
//               className="group bg-orange-500 rounded-t-full overflow-hidden shadow-md hover:shadow-xl transition"
//             >
              
//               {/* Image */}
//               <div className="overflow-hidden rounded-full">
//                 <img
//                   src={member.img}
//                   alt={member.name}
//                   className="w-full h-86 object-cover group-hover:scale-105 transition duration-300"
//                 />
//               </div>

//               {/* Info */}
//               <div className="p-5 text-white">
//                 <h3 className="text-lg font-semibold">
//                   {member.name}
//                 </h3>

//                 <p className=" text-sm">
//                   {member.role}
//                 </p>
//               </div>

//             </div>

//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default TeamSection;

// import React from "react";
// import { FaLinkedinIn, FaTwitter, FaEnvelope } from "react-icons/fa";
// import { IoMdArrowForward } from "react-icons/io";
// import { Link } from "react-router-dom";

// const team = [
//   { name: "Rahul Sharma", role: "Fleet Manager", img: "./emp.jpg" },
//   { name: "Amit Verma", role: "Senior Driver", img: "./emp.jpg" },
//   { name: "Neha Singh", role: "Logistics Coordinator", img: "./emp.jpg" },
//   { name: "Ravi Kumar", role: "Operations Head", img: "./emp.jpg" },
// ];

// const TeamSection = () => {
//   return (
//     <section className="pt-24 bg-slate-50 overflow-hidden">
//       <div className="container mx-auto px-6 md:px-12">
        
//         {/* Header Section */}
//         <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
//           <div className="max-w-2xl">
//             <div className="flex items-center gap-3 mb-4">
//               <span className="w-12 h-[2px] bg-orange-500"></span>
//               <span className="text-orange-600 font-bold tracking-widest text-sm uppercase">Our Logistics Experts</span>
//             </div>
//             <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-none">
//               The Faces Behind <br /> 
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600 italic">
//                 Every Delivery
//               </span>
//             </h2>
//           </div>
//           <Link to="/contact" className="group flex items-center gap-3 bg-white border border-slate-200 px-6 py-4 rounded-full font-bold text-slate-800 hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-sm hover:shadow-orange-200">
//             Join Our Team <IoMdArrowForward className="group-hover:translate-x-1 transition-transform" />
//           </Link >
//         </div>

//         {/* Team Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {team.map((member, index) => (
//             <div key={index} className="group relative">
              
//               {/* Card Body */}
//               <div className="relative bg-white rounded-3xl p-4 transition-all duration-500 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] group-hover:shadow-[0_20px_40px_-15px_rgba(249,115,22,0.3)] group-hover:-translate-y-3">
                
//                 {/* Image Wrapper with Mask */}
//                 <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-6">
//                   <img
//                     src={member.img}
//                     alt={member.name}
//                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                   />
                  
//                   {/* Social Overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-orange-600/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
//                     <div className="flex justify-center gap-3 translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
//                       <a href="#" className="w-10 h-10 rounded-xl bg-white text-orange-600 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-colors shadow-lg">
//                         <FaLinkedinIn size={18} />
//                       </a>
//                       <a href="#" className="w-10 h-10 rounded-xl bg-white text-orange-600 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-colors shadow-lg">
//                         <FaTwitter size={18} />
//                       </a>
//                       <a href="#" className="w-10 h-10 rounded-xl bg-white text-orange-600 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-colors shadow-lg">
//                         <FaEnvelope size={18} />
//                       </a>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Member Info */}
//                 <div className="text-center pb-2">
//                   <h3 className="text-xl font-black text-slate-800 transition-colors group-hover:text-orange-600">
//                     {member.name}
//                   </h3>
//                   <div className="flex items-center justify-center gap-2 mt-1">
//                     <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
//                     <p className="text-sm font-medium text-slate-500 tracking-wide">
//                       {member.role}
//                     </p>
//                   </div>
//                 </div>

//                 {/* Decorative Element */}
//                 <div className="absolute top-0 right-0 w-16 h-16 bg-orange-50 rounded-tr-3xl rounded-bl-[100px] -z-10 group-hover:bg-orange-500 transition-colors duration-500"></div>
//               </div>

//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default TeamSection;

import React from "react";
import { FaLinkedinIn, FaTwitter, FaEnvelope } from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const teamData = {
  headOffice: [
    { name: "Arihant Jain", role: "Finance Officer", img: "arihant-jain.jpg",email:"arihant.aden@gmail.com" },
    { name: "Naman Sharma", role: "Senior Manager -HR and Operations", img: "./naman-sharma.jpg", email:"naman.sharma@adenlogistics.co.in", linkedin:"https://www.linkedin.com/in/naman-sharma-4124651b2?utm_source=share_via&utm_content=profile&utm_medium=member_android",twitter:"https://x.com/Sh12784617Naman" },
    { name: "Rajendra Rav", role: "SLP Manager", img: "/rajendra-rav.jpg", email:"slp.aden@adenlogistics.co.in" },
    { name: "Durga Prasad Gaur", role: "Senior Area Manager", img: "/durga-prasad.jpg", email:"durga9935@gmail.com" },
  ],
  branchTeam: [
    { name: "Suresh Raina", role: "Branch Manager", img: "./emp.jpg" },
    { name: "Priya Das", role: "Dispatch Officer", img: "./emp.jpg" },
    { name: "Vikram Rathore", role: "Inventory Lead", img: "./emp.jpg" },
    { name: "Anil Kapoor", role: "Support Staff", img: "./emp.jpg" },
  ]
};

const TeamCard = ({ member }) => (
  <div className="group relative mb-12 lg:mb-0">
    <div className="relative bg-white rounded-3xl p-4 transition-all duration-500 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] group-hover:shadow-[0_20px_40px_-15px_rgba(249,115,22,0.3)] group-hover:-translate-y-3">
      <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-6">
        <img
          src={member.img}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-orange-600/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
          <div className="flex justify-center gap-3 translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white text-orange-600 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-colors shadow-lg">
              <FaLinkedinIn size={18} />
            </a>
            <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white text-orange-600 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-colors shadow-lg">
              <FaTwitter size={18} />
            </a>
            <a href={`mailto:${member.email}`} className="w-10 h-10 rounded-xl bg-white text-orange-600 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-colors shadow-lg">
              <FaEnvelope size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center pb-2">
        <h3 className="text-xl font-black text-slate-800 transition-colors group-hover:text-orange-600">
          {member.name}
        </h3>
        <div className="flex items-center justify-center gap-2 mt-1">
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
          <p className="text-sm font-medium text-slate-500 tracking-wide">{member.role}</p>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-16 h-16 bg-orange-50 rounded-tr-3xl rounded-bl-[100px] -z-10 group-hover:bg-orange-500 transition-colors duration-500"></div>
    </div>
  </div>
);

// const TeamSection = () => {
//   const swiperSettings = {
//     modules: [Pagination, Autoplay],
//     spaceBetween: 20,
//     slidesPerView: 1.2,
//     pagination: { clickable: true },
//     autoplay: { delay: 3000 },
//     breakpoints: {
//       640: { slidesPerView: 2.2 },
//       1024: { slidesPerView: 4, spaceBetween: 30 } // Desktop settings
//     }
//   };

const TeamSection = () => {
  const swiperSettings = {
    modules: [Pagination, Autoplay],
    spaceBetween: 20,
    slidesPerView: 1.2,
    initialSlide: 0, // Ensure starting point
    centeredSlides: false,
    speed: 800, // Speed badha di smoother feel ke liye
    grabCursor: true,
    watchSlidesProgress: true, // Performance boost
    pagination: { 
      clickable: true,
      dynamicBullets: true // Mobile par clean dikhega
    },
    autoplay: { 
      delay: 4000,
      disableOnInteraction: false 
    },
    breakpoints: {
      640: { 
        slidesPerView: 2.2,
        spaceBetween: 20 
      },
      1024: { 
        slidesPerView: 4, 
        spaceBetween: 30 
      }
    }
  };

//   return (
//     <section className="py-12 bg-slate-50 overflow-hidden">
//       <div className="container mx-auto px-6 md:px-12">
        
//         {/* Header */}
//         <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
//           <div className="max-w-2xl">
//             <div className="flex items-center gap-3 mb-4">
//               <span className="w-12 h-[2px] bg-orange-500"></span>
//               <span className="text-orange-600 font-bold tracking-widest text-sm uppercase">Our Dedicated Team</span>
//             </div>
//             <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-none">
//               The Talent Behind <br /> 
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600 italic">
//                 Our Success
//               </span>
//             </h2>
//           </div>
//           <Link to="/team" className="group flex items-center gap-3 bg-white border border-slate-200 px-6 py-4 rounded-full font-bold text-slate-800 hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-sm">
//             Meet Other Team Members <IoMdArrowForward />
//           </Link>
//         </div>

//         {/* Category 1: Head Office */}
//         <div className="mb-20">
//           <h3 className="text-xl font-bold text-slate-800 mb-8 border-l-4 border-orange-500 pl-4 uppercase tracking-tighter">
//             Head Office Team
//           </h3>
//           <Swiper {...swiperSettings} className="team-swiper">
//             {teamData.headOffice.map((member, idx) => (
//               <SwiperSlide key={idx}>
//                 <TeamCard member={member} />
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>

//         {/* Category 2: Branch Team */}
//         {/* <div>
//           <h3 className="text-2xl font-bold text-slate-800 mb-8 border-l-4 border-orange-500 pl-4 uppercase tracking-tighter">
//             Branch Operations
//           </h3>
//           <Swiper {...swiperSettings} className="team-swiper">
//             {teamData.branchTeam.map((member, idx) => (
//               <SwiperSlide key={idx}>
//                 <TeamCard member={member} />
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div> */}

//       </div>

//       {/* Custom Styles for Swiper Bullets */}
//       <style dangerouslySetInnerHTML={{ __html: `
//         .team-swiper .swiper-pagination-bullet-active { background: #f97316 !important; }
//         .team-swiper { overflow: visible !important; }
//       `}} />
//     </section>
//   );
// };

return (
    <section className="py-10 md:py-20 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header Section (Same as your code) */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-12 h-[2px] bg-orange-500"></span>
              <span className="text-orange-600 font-bold tracking-widest text-sm uppercase">Our Dedicated Team</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-none">
              The Talent Behind <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600 italic">
                Our Success
              </span>
            </h2>
          </div>
          <Link to="/team" className="group flex items-center gap-3 bg-white border border-slate-200 px-6 py-4 rounded-full font-bold text-slate-800 hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-sm">
            Meet Other Team Members <IoMdArrowForward className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Category 1: Head Office */}
        <div className="lg:mb-5">
          <h3 className="text-xl font-bold text-slate-800 mb-8 border-l-4 border-orange-500 pl-4 uppercase tracking-tighter">
            Office Team
          </h3>
          
          {/* Wrapper with fixed min-height to prevent jumping */}
          <div className="min-h-[450px]"> 
            <Swiper {...swiperSettings} className="team-swiper">
              {teamData.headOffice.map((member, idx) => (
                <SwiperSlide key={idx} className="h-auto">
                  <TeamCard member={member} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      {/* Global Smoothness Styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        .team-swiper .swiper-pagination {
          bottom: 0 !important;
        }
        .team-swiper .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          transition: all 0.3s ease;
        }
        .team-swiper .swiper-pagination-bullet-active { 
          background: #f97316 !important; 
          width: 25px;
          border-radius: 5px;
        }
        /* Jhatka prevent karne ke liye slide transition lock */
        .swiper-wrapper {
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
        }
      `}} />
    </section>
  );
};

export default TeamSection;