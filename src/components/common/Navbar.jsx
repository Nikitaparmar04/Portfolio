import { Link } from "react-router-dom";
import { useState } from "react";
import ParticleBackground from "../UI/ParticleBackground";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleNavClick = (e, href) => {
    // Check if it's a hash link (section navigation)
    if (href.startsWith('/#')) {
      e.preventDefault();
      const sectionId = href.replace('/#', '');
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setOpen(false);
    } else {
      setOpen(false);
    }
  };

  const navItems = [
    { name: 'ABOUT', href: '/#about' },
    { name: 'SKILLS', href: '/#skills' },
    { name: 'EDUCATION', href: '/#education' },
    { name: 'PROJECTS', href: '/#projects' },
    { name: 'BLOGS', href: '/#blogs' },
    { name: 'CONTACT', href: '/#contact' }
  ];

  return (
    <>
      <ParticleBackground />
      
      {/* Gradient Overlay */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.5), rgba(15, 23, 42, 0.8))',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />

      <nav className="bg-transparent relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-5">
            {/* Logo */}
            <div className="flex flex-shrink-0 items-center">
              <Link 
                to="/" 
                className="relative group"
                style={{ textDecoration: 'none' }}
              >
                {/* Signature style logo with code brackets */}
                <div className="flex items-center gap-2">
                  <span 
                    className="text-2xl text-slate-400"
                    style={{
                      fontFamily: "'Fira Code', 'Courier New', monospace",
                      fontWeight: 300
                    }}
                  >
                    &lt;
                  </span>
                  <span 
                    className="text-4xl text-white relative"
                    style={{
                      fontFamily: "'Great Vibes', cursive",
                      fontWeight: 400,
                      letterSpacing: '0.02em',
                      filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
                    }}
                  >
                    Nikita
                  </span>
                  <span 
                    className="text-2xl text-slate-400"
                    style={{
                      fontFamily: "'Fira Code', 'Courier New', monospace",
                      fontWeight: 300
                    }}
                  >
                    /&gt;
                  </span>
                </div>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setOpen((v) => !v)}
                aria-controls="navbar-default"
                aria-expanded={open}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none transition-colors duration-300"
              >
                <span className="sr-only">Open main menu</span>
                <div className="space-y-1.5">
                  <span 
                    className={`block w-6 h-0.5 bg-white transform transition-all duration-300 ${
                      open ? 'rotate-45 translate-y-2' : ''
                    }`} 
                  />
                  <span 
                    className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                      open ? 'opacity-0' : 'opacity-100'
                    }`} 
                  />
                  <span 
                    className={`block w-6 h-0.5 bg-white transform transition-all duration-300 ${
                      open ? '-rotate-45 -translate-y-2' : ''
                    }`} 
                  />
                </div>
              </button>
            </div>

            {/* Navigation Links */}
            <ul
              className={`${
                open ? 'block' : 'hidden'
              } md:flex md:items-center md:space-x-8 absolute md:relative top-full left-0 right-0 md:top-auto bg-slate-900/95 md:bg-transparent backdrop-blur-lg md:backdrop-blur-none py-4 md:py-0 px-4 md:px-0 mt-2 md:mt-0 rounded-lg md:rounded-none border border-slate-800 md:border-0`}
              id="navbar-default"
            >
              {navItems.map((item) => (
                <li key={item.name}>
                  <a 
                    className="block px-4 py-2.5 md:py-2 no-underline outline-none group relative cursor-pointer" 
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    <div 
                      className="text-sm font-semibold text-slate-300 transition-all duration-300 group-hover:text-white relative"
                      style={{
                        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                        fontWeight: 600,
                        letterSpacing: '0.05em'
                      }}
                    >
                      {item.name}
                      {/* Animated underline on hover */}
                      <span 
                        className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-cyan-400 transition-all duration-300 group-hover:w-full"
                      />
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Custom styles */}
        <style>{`
          @media (max-width: 768px) {
            #navbar-default {
              box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
            }
          }
        `}</style>
      </nav>
    </>
  );
}
