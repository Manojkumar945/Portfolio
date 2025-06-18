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
          ? 'bg-indigo-950/95 dark:bg-indigo-950/95 light:bg-white/95 backdrop-blur-md shadow-xl border-b border-slate-700/50 dark:border-slate-700/50 light:border-slate-200/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between py-4">
        {/* Logo/Name */}
        <div className="flex items-center">
          <h1 className="text-xl md:text-2xl font-bold text-white dark:text-white light:text-slate-900 hover:text-cyan-400 dark:hover:text-cyan-400 light:hover:text-blue-600 transition-colors duration-300 cursor-pointer">
            Manoj Kumar.S
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['about', 'experience', 'skills', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="capitalize text-slate-300 dark:text-slate-300 light:text-slate-600 hover:text-cyan-400 dark:hover:text-cyan-400 light:hover:text-blue-600 transition-colors duration-300 font-medium relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 dark:bg-cyan-400 light:bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
          
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-slate-800/50 dark:bg-slate-800/50 light:bg-slate-200/50 hover:bg-slate-700/50 dark:hover:bg-slate-700/50 light:hover:bg-slate-300/50 text-slate-300 dark:text-slate-300 light:text-slate-600 hover:text-cyan-400 dark:hover:text-cyan-400 light:hover:text-blue-600 transition-all duration-300 backdrop-blur-sm border border-slate-600/30 dark:border-slate-600/30 light:border-slate-300/30"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        {/* Mobile Menu Button and Theme Toggle */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-slate-800/50 dark:bg-slate-800/50 light:bg-slate-200/50 hover:bg-slate-700/50 dark:hover:bg-slate-700/50 light:hover:bg-slate-300/50 text-slate-300 dark:text-slate-300 light:text-slate-600 hover:text-cyan-400 dark:hover:text-cyan-400 light:hover:text-blue-600 transition-all duration-300 backdrop-blur-sm border border-slate-600/30 dark:border-slate-600/30 light:border-slate-300/30"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          <button 
            className="text-white dark:text-white light:text-slate-900 hover:text-cyan-400 dark:hover:text-cyan-400 light:hover:text-blue-600 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-indigo-950 dark:bg-indigo-950 light:bg-white pt-20">
          <nav className="container mx-auto px-6 flex flex-col space-y-6 py-6">
            {['about', 'experience', 'skills', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="flex items-center justify-between capitalize text-xl text-slate-300 dark:text-slate-300 light:text-slate-600 hover:text-cyan-400 dark:hover:text-cyan-400 light:hover:text-blue-600 transition-colors border-b border-slate-700 dark:border-slate-700 light:border-slate-200 pb-4"
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