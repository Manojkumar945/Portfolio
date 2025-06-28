import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

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
        scrolled 
          ? isDark 
            ? 'bg-indigo-950/95 backdrop-blur-md shadow-xl border-b border-slate-700/50' 
            : 'bg-white/95 backdrop-blur-md shadow-xl border-b border-gray-200/50'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between py-4">
        {/* Logo/Name */}
        <div className="flex items-center">
          <h1 className={`text-xl md:text-2xl font-bold transition-colors duration-300 cursor-pointer ${
            isDark ? 'text-white hover:text-cyan-400' : 'text-gray-900 hover:text-blue-600'
          }`}>
            Manoj Kumar.S
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['about', 'experience', 'skills', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className={`capitalize font-medium relative group transition-colors duration-300 ${
                isDark ? 'text-slate-300 hover:text-cyan-400' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              {item}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                isDark ? 'bg-cyan-400' : 'bg-blue-600'
              }`}></span>
            </button>
          ))}
          
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className={`relative p-3 rounded-xl transition-all duration-500 transform hover:scale-110 ${
              isDark 
                ? 'bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600 text-yellow-400 shadow-lg hover:shadow-xl' 
                : 'bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 text-indigo-600 shadow-lg hover:shadow-xl border border-blue-200'
            }`}
            aria-label="Toggle theme"
          >
            <div className="relative w-6 h-6 overflow-hidden">
              <Sun 
                size={24} 
                className={`absolute inset-0 transition-all duration-500 transform ${
                  isDark ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
                }`} 
              />
              <Moon 
                size={24} 
                className={`absolute inset-0 transition-all duration-500 transform ${
                  isDark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
                }`} 
              />
            </div>
            
            {/* Glow effect */}
            <div className={`absolute inset-0 rounded-xl transition-opacity duration-300 ${
              isDark 
                ? 'bg-yellow-400/20 opacity-0 group-hover:opacity-100' 
                : 'bg-blue-400/20 opacity-0 group-hover:opacity-100'
            }`}></div>
          </button>
        </nav>

        {/* Mobile Menu Button and Theme Toggle */}
        <div className="md:hidden flex items-center gap-3">
          {/* Mobile Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition-all duration-300 ${
              isDark 
                ? 'bg-slate-800/80 text-yellow-400 hover:bg-slate-700/80' 
                : 'bg-blue-50 text-indigo-600 hover:bg-blue-100 border border-blue-200'
            }`}
            aria-label="Toggle theme"
          >
            <div className="relative w-5 h-5 overflow-hidden">
              <Sun 
                size={20} 
                className={`absolute inset-0 transition-all duration-300 transform ${
                  isDark ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
                }`} 
              />
              <Moon 
                size={20} 
                className={`absolute inset-0 transition-all duration-300 transform ${
                  isDark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
                }`} 
              />
            </div>
          </button>
          
          {/* Mobile Menu Button */}
          <button 
            className={`transition-colors duration-300 ${
              isDark ? 'text-white hover:text-cyan-400' : 'text-gray-900 hover:text-blue-600'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className={`fixed inset-0 z-50 pt-20 transition-colors duration-300 ${
          isDark ? 'bg-indigo-950' : 'bg-white'
        }`}>
          <nav className="container mx-auto px-6 flex flex-col space-y-6 py-6">
            {['about', 'experience', 'skills', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className={`flex items-center justify-between capitalize text-xl transition-colors border-b pb-4 ${
                  isDark 
                    ? 'text-slate-300 hover:text-cyan-400 border-slate-700' 
                    : 'text-gray-600 hover:text-blue-600 border-gray-200'
                }`}
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