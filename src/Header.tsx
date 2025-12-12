import { Menu, X, Sun, Moon } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from './ThemeContext';

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className={`fixed w-full top-0 z-50 backdrop-blur-md transition-all duration-700 ${
      isDarkMode
        ? 'bg-gradient-to-r from-indigo-950/80 via-purple-900/80 to-slate-900/80 border-b border-slate-700/50'
        : 'bg-gradient-to-r from-blue-50/80 via-indigo-50/80 to-purple-50/80 border-b border-gray-300/50'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            MK
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  isDarkMode
                    ? 'text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-white/50'
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-300 ${
                isDarkMode
                  ? 'text-yellow-400 bg-slate-800/50 hover:bg-slate-700/50'
                  : 'text-gray-700 bg-white/50 hover:bg-white/70'
              }`}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              className="md:hidden p-2 rounded-lg transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X size={24} className={isDarkMode ? 'text-slate-300' : 'text-gray-700'} />
              ) : (
                <Menu size={24} className={isDarkMode ? 'text-slate-300' : 'text-gray-700'} />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className={`md:hidden mt-4 space-y-2 pb-4 border-t ${
            isDarkMode ? 'border-slate-700/50' : 'border-gray-300/50'
          }`}>
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`block px-4 py-2 rounded-lg transition-all duration-300 ${
                  isDarkMode
                    ? 'text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-white/50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
