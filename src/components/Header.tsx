import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Sun, Moon, Palette } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isHeaderLight, isDarkMode, toggleHeaderTheme, toggleGlobalTheme } = useTheme();

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? isHeaderLight 
            ? 'bg-white/95 backdrop-blur-md shadow-xl border-b border-gray-200/50' 
            : 'bg-indigo-950/95 backdrop-blur-md shadow-xl border-b border-slate-700/50'
          : isHeaderLight
            ? 'bg-white/20 backdrop-blur-sm'
            : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between py-4">
        {/* Logo/Name */}
        <div className="flex items-center">
          <h1 className={`text-xl md:text-2xl font-bold transition-colors duration-500 cursor-pointer ${
            isHeaderLight ? 'text-gray-900 hover:text-blue-600' : 'text-white hover:text-cyan-400'
          }`}>
            Manoj Kumar.S
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['about', 'experience', 'skills', 'projects', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className={`capitalize font-medium relative group transition-colors duration-500 ${
                isHeaderLight ? 'text-gray-600 hover:text-blue-600' : 'text-slate-300 hover:text-cyan-400'
              }`}
            >
              {item}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                isHeaderLight ? 'bg-blue-600' : 'bg-cyan-400'
              }`}></span>
            </button>
          ))}
          
          {/* Global Theme Toggle Button */}
          <button
            onClick={toggleGlobalTheme}
            className={`relative p-3 rounded-xl transition-all duration-500 transform hover:scale-110 group ${
              isDarkMode 
                ? 'bg-gradient-to-r from-slate-800/80 to-slate-700/80 hover:from-slate-700 hover:to-slate-600 text-yellow-400 shadow-lg hover:shadow-xl border border-slate-600/50' 
                : 'bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 text-indigo-600 shadow-lg hover:shadow-xl border border-blue-200'
            }`}
            aria-label="Toggle global theme"
            title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
          >
            <div className="relative w-6 h-6 overflow-hidden">
              <Sun 
                size={24} 
                className={`absolute inset-0 transition-all duration-500 transform ${
                  !isDarkMode ? 'rotate-0 scale-100 opacity-100' : 'rotate-90 scale-0 opacity-0'
                }`} 
              />
              <Moon 
                size={24} 
                className={`absolute inset-0 transition-all duration-500 transform ${
                  isDarkMode ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
                }`} 
              />
            </div>
            
            {/* Glow effect */}
            <div className={`absolute inset-0 rounded-xl transition-opacity duration-300 ${
              isDarkMode 
                ? 'bg-yellow-400/20 opacity-0 group-hover:opacity-100' 
                : 'bg-blue-400/20 opacity-0 group-hover:opacity-100'
            }`}></div>
            
            {/* Subtle pulse animation */}
            <div className={`absolute inset-0 rounded-xl animate-pulse ${
              isDarkMode 
                ? 'bg-yellow-400/10' 
                : 'bg-blue-400/10'
            }`}></div>
          </button>
          
          {/* Header Theme Toggle Button */}
          <button
            onClick={toggleHeaderTheme}
            className={`relative p-3 rounded-xl transition-all duration-500 transform hover:scale-110 group ${
              isHeaderLight 
                ? 'bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 text-indigo-600 shadow-lg hover:shadow-xl border border-blue-200' 
                : 'bg-gradient-to-r from-slate-800/80 to-slate-700/80 hover:from-slate-700 hover:to-slate-600 text-cyan-400 shadow-lg hover:shadow-xl border border-slate-600/50'
            }`}
            aria-label="Toggle header theme"
            title={`Switch header to ${isHeaderLight ? 'dark' : 'light'} mode`}
          >
            <Palette size={24} />
            
            {/* Glow effect */}
            <div className={`absolute inset-0 rounded-xl transition-opacity duration-300 ${
              isHeaderLight 
                ? 'bg-blue-400/20 opacity-0 group-hover:opacity-100' 
                : 'bg-cyan-400/20 opacity-0 group-hover:opacity-100'
            }`}></div>
          </button>
        </nav>

        {/* Mobile Menu Button and Theme Toggles */}
        <div className="md:hidden flex items-center gap-3">
          {/* Mobile Global Theme Toggle */}
          <button
            onClick={toggleGlobalTheme}
            className={`p-2 rounded-lg transition-all duration-500 ${
              isDarkMode 
                ? 'bg-slate-800/80 text-yellow-400 hover:bg-slate-700/80 border border-slate-600/50' 
                : 'bg-blue-50 text-indigo-600 hover:bg-blue-100 border border-blue-200'
            }`}
            aria-label="Toggle global theme"
            title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
          >
            <div className="relative w-5 h-5 overflow-hidden">
              <Sun 
                size={20} 
                className={`absolute inset-0 transition-all duration-500 transform ${
                  !isDarkMode ? 'rotate-0 scale-100 opacity-100' : 'rotate-90 scale-0 opacity-0'
                }`} 
              />
              <Moon 
                size={20} 
                className={`absolute inset-0 transition-all duration-500 transform ${
                  isDarkMode ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
                }`} 
              />
            </div>
          </button>
          
          {/* Mobile Header Theme Toggle */}
          <button
            onClick={toggleHeaderTheme}
            className={`p-2 rounded-lg transition-all duration-500 ${
              isHeaderLight 
                ? 'bg-blue-50 text-indigo-600 hover:bg-blue-100 border border-blue-200' 
                : 'bg-slate-800/80 text-cyan-400 hover:bg-slate-700/80 border border-slate-600/50'
            }`}
            aria-label="Toggle header theme"
            title={`Switch header to ${isHeaderLight ? 'dark' : 'light'} mode`}
          >
            <Palette size={20} />
          </button>
          
          {/* Mobile Menu Button */}
          <button 
            className={`transition-colors duration-500 ${
              isHeaderLight ? 'text-gray-900 hover:text-blue-600' : 'text-white hover:text-cyan-400'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className={`fixed inset-0 z-50 pt-20 transition-all duration-500 ${
          isHeaderLight ? 'bg-white/95 backdrop-blur-md' : 'bg-indigo-950/95 backdrop-blur-md'
        }`}>
          <nav className="container mx-auto px-6 flex flex-col space-y-6 py-6">
            {['about', 'experience', 'skills', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className={`flex items-center justify-between capitalize text-xl transition-colors duration-500 border-b pb-4 ${
                  isHeaderLight 
                    ? 'text-gray-600 hover:text-blue-600 border-gray-200' 
                    : 'text-slate-300 hover:text-cyan-400 border-slate-700'
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