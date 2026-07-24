import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn,
  FaPhoneAlt, FaEnvelope, FaChevronDown, FaMapMarkerAlt
} from 'react-icons/fa';

const FOOTER_DATA = [
  {
    title: "Services",
    links: [
      { name: "Road Transport", path: "/services" },
      { name: "Door To Door Delivery", path: "/services" },
      { name: "Warehousing", path: "/services" }
    ]
  },
  {
    title: "About",
    links: [
      { name: "Our Story", path: "/about" },
      // { name: "Blogs & News", path: "/blogs" },
      // { name: "Career", path: "/career" }
    ]
  },
  {
    title: "Support",
    links: [
      { name: "Contact Us", path: "/contact" },
      { name: "Privacy Policy", path: "/privacy" },
      { name: "Terms of Service", path: "/terms" }
    ]
  }
];

const SOCIAL_LINKS = [
  { Icon: FaFacebookF, href: "https://www.facebook.com/profile.php?id=61574231849333" },
  { Icon: FaInstagram, href: "https://www.instagram.com/aden.logistics/https://www.instagram.com/aden.logistics/" },
  // { Icon: FaYoutube, href: "#" },
  { Icon: FaLinkedinIn, href: "https://www.linkedin.com/company/aden-logistics/posts/?feedView=all" },
];

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (idx) => {
    setOpenSection(openSection === idx ? null : idx);
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Top Section: Brand Story & Indian Presence */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20">
          <div className="max-w-md space-y-6">
            <h2 className="text-3xl font-black text-white tracking-tighter uppercase">
              Aden <span className="text-orange-500">Logistics</span>
            </h2>
            <p className="text-slate-400 text-base leading-relaxed">
              Moving your business forward with precision. We are your dedicated
              partner for Indian supply chain solutions and local distribution.
            </p>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map(({ Icon, href }, i) => (
                <a key={i} href={href} className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-lg">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Highlights (Replacing Newsletter) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 border-l border-slate-800 pl-0 lg:pl-12">
            <div>
              <p className="text-3xl font-black text-white">9+</p>
              <p className="text-[10px] font-bold text-orange-500 uppercase tracking-widest mt-1">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl font-black text-white">150+</p>
              <p className="text-[10px] font-bold text-orange-500 uppercase tracking-widest mt-1">Cities</p>
            </div>
            <div className="hidden sm:block">
              <p className="text-3xl font-black text-white">99.9%</p>
              <p className="text-[10px] font-bold text-orange-500 uppercase tracking-widest mt-1">Secure Delivery</p>
            </div>
          </div>
        </div>

        {/* Middle Section: Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 md:gap-12 border-t border-slate-800 pt-16">

          {/* Contact Details */}
          <div className="border-b border-slate-800 md:border-none">
            <div className="flex justify-between items-center py-5 md:py-0 md:mb-8 cursor-pointer md:cursor-default" onClick={() => toggleSection('contact')}>
              <h3 className="text-white font-bold tracking-widest text-xs uppercase">Get In Touch</h3>
              <FaChevronDown className={`md:hidden transition-transform ${openSection === 'contact' ? 'rotate-180' : ''}`} size={12} />
            </div>
            <div className={`${openSection === 'contact' ? 'block pb-6' : 'hidden'} md:block space-y-5 text-[13px]`}>
              <div className="flex items-start gap-4 group">
                <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors flex-shrink-0">
                  <FaMapMarkerAlt size={14} />
                </div>
                <p className="text-slate-400 group-hover:text-white transition-colors">
                  4th floor,Giriraj tawar, iskon road, muhana mandi road,Mansarovar, Jaipur 302020
                </p>
              </div>

              <a href="tel:+917014980454" className="flex items-center gap-4 group">
                <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors flex-shrink-0">
                  <FaPhoneAlt size={14} />
                </div>
                <p className="text-slate-400 group-hover:text-white transition-colors">+91 70149 80454</p>
              </a>

              <a href="mailto:hr.aden@adenlogistics.co.in" className="flex items-center gap-4 group">
                <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors flex-shrink-0">
                  <FaEnvelope size={14} />
                </div>
                <p className="text-slate-400 group-hover:text-white transition-colors">hr.aden@adenlogistics.co.in</p>
              </a>
            </div>
          </div>

          {FOOTER_DATA.map((section, idx) => (
            <div key={idx} className="border-b border-slate-800 md:border-none">
              <div className="flex justify-between items-center py-5 md:py-0 md:mb-8 cursor-pointer md:cursor-default" onClick={() => toggleSection(idx)}>
                <h3 className="text-white font-bold tracking-widest text-xs uppercase">{section.title}</h3>
                <FaChevronDown className={`md:hidden transition-transform ${openSection === idx ? 'rotate-180' : ''}`} size={12} />
              </div>
              <div className={`${openSection === idx ? 'block pb-6' : 'hidden'} md:block`}>
                <ul className="space-y-4 text-[13px]">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link to={link.path} className="text-slate-500 hover:text-orange-500 transition-all flex items-center gap-2 group">
                        <span className="w-0 h-[2px] bg-orange-500 transition-all group-hover:w-3"></span>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Area */}
        <div className="mt-20 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-slate-500 tracking-[0.2em] uppercase">
            © {new Date().getFullYear()} Aden Logistics. All rights reserved.
          </p>
          <div className="flex gap-8 text-[10px] text-slate-500 tracking-[0.2em] uppercase">
            <Link to="/privacy" className="hover:text-orange-500 transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-orange-500 transition-colors">Terms</Link>
            {/* <Link to="/sitemap" className="hover:text-orange-500 transition-colors">Sitemap</Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
