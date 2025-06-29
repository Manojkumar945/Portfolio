import { ChevronUp, Heart, MapPin } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Footer = () => {
  const { isDarkMode } = useTheme();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className={`text-slate-300 transition-all duration-700 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-indigo-950 via-purple-900 to-slate-900 border-t border-slate-700/50' 
        : 'bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 border-t border-gray-300/50 text-gray-700'
    }`}>
      {/* Back to top button */}
      <div className="flex justify-center">
        <button 
          onClick={scrollToTop}
          className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white p-4 rounded-full transform -translate-y-1/2 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
          aria-label="Back to top"
        >
          <ChevronUp size={24} />
        </button>
      </div>
      
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className={`text-xl font-bold mb-4 transition-colors duration-700 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Manoj Kumar.S</h3>
            <p className={`mb-6 leading-relaxed transition-colors duration-700 ${
              isDarkMode ? 'text-slate-400' : 'text-gray-600'
            }`}>
              App developer specializing in creating innovative and user-friendly mobile applications that make a difference.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com/in/manoj-kumar-4a57a325b" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`p-2 rounded-lg backdrop-blur-sm transition-colors ${
                  isDarkMode 
                    ? 'text-slate-400 hover:text-cyan-400 hover:bg-slate-800/50' 
                    : 'text-gray-600 hover:text-blue-600 hover:bg-white/50'
                }`}
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="https://github.com/Manojkumar945" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`p-2 rounded-lg backdrop-blur-sm transition-colors ${
                  isDarkMode 
                    ? 'text-slate-400 hover:text-cyan-400 hover:bg-slate-800/50' 
                    : 'text-gray-600 hover:text-blue-600 hover:bg-white/50'
                }`}
                aria-label="GitHub"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className={`text-xl font-bold mb-4 transition-colors duration-700 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Experience', 'Skills', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className={`hover:text-cyan-400 transition-colors hover:pl-2 duration-300 ${
                      isDarkMode ? 'text-slate-400' : 'text-gray-600'
                    }`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className={`text-xl font-bold mb-4 transition-colors duration-700 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="mr-3 text-cyan-400 text-lg">📱</span>
                <span className={isDarkMode ? 'text-slate-400' : 'text-gray-600'}>+91 7806892181</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-cyan-400 text-lg">✉️</span>
                <a href="mailto:manojk46234@gmail.com" className={`hover:text-cyan-400 transition-colors ${
                  isDarkMode ? 'text-slate-400' : 'text-gray-600'
                }`}>
                  manojk46234@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 text-cyan-400 mt-1" />
                <span className={isDarkMode ? 'text-slate-400' : 'text-gray-600'}>Trichy, Tamil Nadu, India</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className={`mt-12 pt-8 border-t text-center transition-all duration-700 ${
          isDarkMode ? 'border-slate-700/50' : 'border-gray-300/50'
        }`}>
          <p className={`flex items-center justify-center gap-2 transition-colors duration-700 ${
            isDarkMode ? 'text-slate-400' : 'text-gray-600'
          }`}>
            &copy; {new Date().getFullYear()} Manoj Kumar. All Rights reserved<Heart size={16} className="text-red-500" /> 
          </p>
          <p className={`text-sm mt-2 transition-colors duration-700 ${
            isDarkMode ? 'text-slate-500' : 'text-gray-500'
          }`}>
            App Developer | Mobile Technologies Specialist
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;