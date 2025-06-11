import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-indigo-950/95 backdrop-blur-md shadow-xl border-b border-slate-700/50' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between py-4">
        {/* Logo/Name */}
        <div className="flex items-center">
          <h1 className="text-xl md:text-2xl font-bold text-white hover:text-cyan-400 transition-colors duration-300 cursor-pointer">
            Manoj Kumar.S
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['about', 'experience', 'skills', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="capitalize text-slate-300 hover:text-cyan-400 transition-colors duration-300 font-medium relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white hover:text-cyan-400 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-indigo-950 pt-20">
          <nav className="container mx-auto px-6 flex flex-col space-y-6 py-6">
            {['about', 'experience', 'skills', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="flex items-center justify-between capitalize text-xl text-slate-300 hover:text-cyan-400 transition-colors border-b border-slate-700 pb-4"
              >
                {item}
                <ChevronRight size={20} />
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;