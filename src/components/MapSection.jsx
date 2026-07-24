import React from "react";

const MapSection = () => {
  // Google Maps Embed URL (Note: Real projects mein API key use karna better hota hai, 
  // par quick fix ke liye iframe best hai)
  const mapLocation = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113896.1130386221!2d75.71391515220302!3d26.86377983057866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adb4ad87f33%3A0xd6d6978184511993!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1715000000000!5m2!1sen!2sin";

  return (
    <section className="py-12 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase">
            Our <span className="text-orange-500 italic">Location</span>
          </h2>
        </div>

        {/* Map Container */}
        <div className="relative group">
          {/* Decorative Background Element */}
          <div className="absolute inset-0 bg-orange-500 rounded-[3rem] translate-x-4 translate-y-4 -z-10 opacity-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500"></div>

          <div className="relative w-full h-[500px] rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl">
            {/* The Actual Map */}
            <iframe
              src={mapLocation}
              className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Aden Station Location"
            ></iframe>

            {/* Info Floating Card */}
            <div className="absolute bottom-8 left-8 right-8 md:right-auto md:w-80 bg-slate-900 text-white p-8 rounded-[2rem] shadow-2xl backdrop-blur-md bg-opacity-90">
              <div className="space-y-4">
                <div>
                  <p className="text-[10px] font-black text-orange-500 uppercase tracking-widest mb-1">Central Hub</p>
                  <h3 className="text-xl font-black uppercase tracking-tight">Jaipur Station</h3>
                </div>
                
                <p className="text-slate-400 text-sm font-medium leading-relaxed">
                  Main Logistics Terminal, Industrial Area,<br /> 
                  Jaipur, Rajasthan 302001
                </p>

                <div className="pt-4 border-t border-slate-800 flex justify-between items-center">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest italic font-mono">26.9124° N, 75.7873° E</span>
                  <a 
                    href="https://goo.gl/maps/xyz" 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;