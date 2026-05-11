import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'WORK', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-28 flex flex-col justify-center">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="inline-block" onClick={() => setIsOpen(false)}>
            <div className="border-[1.5px] border-black p-2 pr-4 tracking-widest text-sm font-medium">
              <span className="block leading-none">PIPPA MORRAY</span>
              <span className="block text-[10px] sm:text-xs font-normal mt-1 leading-none text-gray-700">DESIGN WORKSHOP</span>
            </div>
          </Link>

          {/* Hamburger Icon */}
          <button 
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <span className={`block w-6 h-[2px] bg-black transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-[8px]' : ''}`}></span>
            <span className={`block w-6 h-[2px] bg-black transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-[2px] bg-black transition-transform duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-[8px]' : ''}`}></span>
          </button>

          {/* Nav - Desktop */}
          <nav className="hidden md:flex items-center space-x-10">
            {links.map((link) => {
              const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-[11px] tracking-[0.2em] font-medium transition-colors duration-300 ${
                    isActive ? 'text-black' : 'text-gray-400 hover:text-black'
                  }`}
                >
                  {link.name}
                </Link>
              )
            })}
          </nav>
        </div>
      </div>

      {/* Nav - Mobile Dropdown */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-sm transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
        <nav className="flex flex-col py-4 px-6 space-y-4">
          {links.map((link) => {
            const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-[12px] tracking-[0.2em] font-medium py-2 transition-colors duration-300 ${
                  isActive ? 'text-black' : 'text-gray-400 hover:text-black'
                }`}
              >
                {link.name}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  );
}
