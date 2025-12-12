import { useTheme } from './ThemeContext';

const Footer = () => {
  const { isDarkMode } = useTheme();

  return (
    <footer className={`py-8 transition-all duration-700 ${
      isDarkMode
        ? 'bg-gradient-to-r from-indigo-950 via-purple-900 to-slate-900 border-t border-slate-700/50'
        : 'bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border-t border-gray-300/50'
    }`}>
      <div className="container mx-auto px-6 text-center">
        <p className={isDarkMode ? 'text-slate-400' : 'text-gray-600'}>
          © 2025 Manoj Kumar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
