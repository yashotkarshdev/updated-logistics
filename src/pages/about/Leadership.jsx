import React from "react";
import { FaEnvelope, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const team = [
  {
    name: "Nitin Jain",
    role: "CEO",
    img: "./ceo.avif",
    email:"nitin.jain@adenlogistics.co.in",
    linkedin:"",
  },
  {
    name: "Samkit Jain",
    role: "CEO",
    img: "./owner.avif",
    email:"samkitjn.aden@gmail.com",
    linkedin:"https://www.linkedin.com/in/samkit-jain-a7b608402?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    twitter:"https://x.com/Samkitjn94",
  },
];

const Leadership = () => {
  return (
    <section className="py-10 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 leading-none mb-6">
              The <span className="text-orange-500 italic font-light leading-tight">Visionaries.</span>
            </h2>
            <p className="text-slate-500 text-lg border-l-4 border-orange-500 pl-6">
              A collective of industry veterans dedicated to redefining how the world moves.
            </p>
          </div>
          <div className="hidden lg:block text-right">
            <p className="text-[10px] font-bold tracking-[0.5em] uppercase text-slate-300 rotate-90 origin-right translate-y-12">
              Leadership 2026
            </p>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-[800px] mx-auto">
          {team.map((member, index) => (
            <div key={index} className="group relative">
              
              {/* Image Container */}
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Social Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <div className="flex gap-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <a href="#" className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center hover:bg-white hover:text-orange-500 transition-colors">
                      <FaLinkedinIn size={16} />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-orange-500 transition-colors">
                      <FaTwitter size={16} />
                    </a>
                    <a href={`mailto:${member.email}`} className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-orange-500 transition-colors">
                      <FaEnvelope size={16} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Name & Role */}
              <div className="mt-8 text-center md:text-left relative">
                <h3 className="text-2xl font-black text-slate-900 group-hover:text-orange-500 transition-colors">
                  {member.name}
                </h3>
                <p className="text-slate-400 font-bold tracking-widest text-xs uppercase mt-2">
                  {member.role}
                </p>
                
                {/* Decorative Number (Minimalist Detail) */}
                <span className="absolute -top-4 -left-4 text-6xl font-black text-slate-100 -z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                  0{index + 1}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Leadership;
