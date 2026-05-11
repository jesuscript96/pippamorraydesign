import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

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
          <Link to="/" className="inline-block">
            <div className="border-[1.5px] border-black p-2 pr-4 tracking-widest text-sm font-medium">
              <span className="block leading-none">PIPPA MORRAY</span>
              <span className="block text-[10px] sm:text-xs font-normal mt-1 leading-none text-gray-700">DESIGN WORKSHOP</span>
            </div>
          </Link>

          {/* Nav */}
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
    </header>
  );
}
