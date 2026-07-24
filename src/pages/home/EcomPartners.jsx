import React from "react";

const EcomPartners = () => {
  const partners = [
    {
      name: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      tagline: "Global Standard Delivery"
    },
    {
      name: "Flipkart",
      logo: "/flipkart1.png",
      tagline: "Pan-India Reach"
    },
    {
      name: "Meesho",
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/80/Meesho_Logo_Full.png",
      tagline: "Connecting Bharat"
    }
  ];

  return (
    <section className="py-12 bg-slate-50 border-y border-slate-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* Text Content */}
          <div className="max-w-md text-center lg:text-left">
            <h4 className="text-orange-600 font-bold uppercase tracking-widest text-xs mb-3">
              E-commerce Backbone
            </h4>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-4">
              Bharat ke Sabse Bade <br />
              <span className="text-orange-500">Marketplaces Ka Bharosa</span>
            </h2>
            <p className="text-slate-500 text-sm md:text-base">
              Amazon ho, Flipkart ho ya Meesho—hum sunishchit karte hain ki har parcel sahi waqt par aur surakshit pahuche.
            </p>
          </div>

          {/* Logos Grid */}
          <div className="flex-1 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {partners.map((brand, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center justify-center group hover:border-orange-200 hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-500"
                >
                  <div className="h-12 flex items-center justify-center mb-4">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      // className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                      className="max-h-full max-w-full object-contain transition-all duration-500"
                    />
                  </div>
                  <div className="h-1 w-0 group-hover:w-12 bg-orange-500 transition-all duration-500 rounded-full"></div>
                  <p className="mt-3 text-[10px] uppercase tracking-widest font-bold text-slate-400 group-hover:text-slate-900">
                    {brand.tagline}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EcomPartners;