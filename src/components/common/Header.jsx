import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, Phone, Mail } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Our Team', path: '/team' },
  { name: 'Events', path: '/events' },
  // { name: 'Compliances', path: '/compliances' },
  { name: 'Services', path: '/services' },
  // { name: 'Blogs', path: '/blogs' },
  { name: 'Contact', path: '/contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isEmailOpen, setIsEmailOpen] = useState(false); // Email Dropdown state
  const location = useLocation();

  // Close email dropdown when clicking outside
  const emailRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (emailRef.current && !emailRef.current.contains(event.target)) {
        setIsEmailOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  return (
    <>
      <header 
        className={`w-full sticky top-0 z-[100] transition-all duration-500 
          ${isScrolled 
            ? 'bg-white/80 backdrop-blur-md py-2 shadow-md' 
            : 'bg-white py-4 shadow-sm' 
          }`}
      >
        <div className='max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8'>
          
          {/* Logo */}
          <Link to="/" className='z-[110]'>
            <img src="/logo.png" alt="Logo" className='h-10 md:h-16 w-auto object-contain'/>
          </Link>
          
          {/* Desktop Nav & Quick Contact */}
          <div className='hidden lg:flex items-center space-x-12'>
            <nav>
              <ul className='flex items-center space-x-10'>
                {NAV_LINKS.map((link) => (
                  <li key={link.path}>
                    <Link 
                      to={link.path} 
                      className={`text-[12px] font-bold uppercase tracking-[0.2em] transition-all duration-300 relative group inline-block
                        hover:text-gray-950 hover:scale-110 active:scale-95
                        ${location.pathname === link.path ? 'text-gray-950' : 'text-gray-600'}`}
                    >
                      {link.name}
                      <span className={`absolute -bottom-1 left-0 h-[1.5px] bg-gray-950 transition-all duration-300 
                        ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`}>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Quick Contact Icons (Desktop) */}
            <div className="flex items-center gap-6 border-l pl-8 border-gray-200">
              {/* Phone */}
              <a href="tel:+916376925384" className="text-gray-600 hover:text-orange-400 transition-colors duration-300">
                <Phone size={20} strokeWidth={2} />
              </a>

              {/* Email Dropdown */}
              <div className="relative" ref={emailRef}>
                <button onClick={() => setIsEmailOpen(!isEmailOpen)} className="text-gray-600 hover:text-orange-400 transition-colors duration-300 flex items-center">
                  <Mail size={21} strokeWidth={2} />
                </button>
                <div className={`absolute right-0 mt-4 w-64 bg-black border border-gray-700 rounded-xl shadow-xl overflow-hidden transition-all duration-300 z-[120]
                  ${isEmailOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 translate-y-2 invisible"}`}>
                  {/* <a href="mailto:info@adenlogistics.co.in" className="block px-4 py-3 border-b border-gray-800 hover:bg-orange-400 hover:text-black text-white text-xs transition-colors">info@adenlogistics.co.in</a> */}
                  <a href="mailto:naman.sharma@adenlogistics.co.in" className="block px-4 py-3 border-b border-gray-800 hover:bg-orange-400 hover:text-black text-white text-xs transition-colors">naman.sharma@adenlogistics.co.in</a>
                  <a href="mailto:hr.aden@adenlogistics.co.in" className="block px-4 py-3 hover:bg-orange-400 hover:text-black text-white text-xs transition-colors">hr.aden@adenlogistics.co.in</a>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className='flex lg:hidden items-center z-[110]'>
            <button className='p-1 text-gray-800' onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div className={`fixed inset-0 z-[90] lg:hidden transition-all duration-500 ${isMenuOpen ? 'visible' : 'invisible'}`}>
        <div className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setIsMenuOpen(false)} />
        <nav className={`absolute top-0 right-0 w-[80%] max-w-[320px] h-full bg-white shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.32,0,0.07,1)] ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className='flex flex-col h-full pt-24 px-8 pb-10'>
            <p className='text-[10px] font-bold text-gray-400 tracking-[0.3em] uppercase mb-8'>Navigation</p>
            <ul className='space-y-6 flex-1'>
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} onClick={() => setIsMenuOpen(false)} className={`flex items-center justify-between text-xl font-medium ${location.pathname === link.path ? 'text-gray-950' : 'text-gray-800'}`}>
                    {link.name}
                    <ChevronRight size={18} className='opacity-30' />
                  </Link>
                </li>
              ))}
            </ul>

            {/* Quick Contact Icons (Mobile) */}
            <div className='pt-8 border-t border-gray-100 flex gap-6'>
              <a href="tel:+917014980454" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
                <Phone size={18} />
              </a>
              <div className="relative">
                <button onClick={() => setIsEmailOpen(!isEmailOpen)} className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
                  <Mail size={18} />
                </button>
                {/* Mobile Email List */}
                {isEmailOpen && (
                  <div className="absolute bottom-12 right-0 w-56 bg-black rounded-lg p-2 shadow-xl">
                    {/* <a href="mailto:info@adenlogistics.co.in" className="block p-2 text-[10px] text-white border-b border-gray-800">info@adenlogistics.co.in</a> */}
                    <a href="mailto:naman.sharma@adenlogistics.co.in" className="block p-2 text-[10px] text-white border-b border-gray-800">naman.sharma@adenlogistics.co.in</a>
                    <a href="mailto:hr.aden@adenlogistics.co.in" className="block p-2 text-[10px] text-white">hr.aden@adenlogistics.co.in</a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
