import { Github, Linkedin, Mail, Phone, MapPin, Download, ExternalLink, ArrowDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Hero = () => {
  const { isDarkMode } = useTheme();
  
  const roles = [
    "App Developer",
    "UI & UX Designer", 
    "Web Developer",
    "Mobile Developer",
    "Frontend Developer"
  ];
  
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    
    if (isTyping) {
      if (charIndex < currentRole.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (charIndex > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setIsTyping(true);
        }, 500);
        return () => clearTimeout(timeout);
      }
    }
  }, [currentRoleIndex, charIndex, isTyping, roles]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeDownload = () => {
    // Create a temporary link element for download
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Manoj_Kumar_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className={`relative min-h-screen flex items-center pt-16 overflow-hidden transition-all duration-700 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-indigo-950 via-purple-900 to-slate-900' 
        : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
    }`}>
      {/* Enhanced Background Pattern */}
      <div className={`absolute inset-0 opacity-50 transition-opacity duration-700 ${
        isDarkMode 
          ? "bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%236366f1%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"
          : "bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%233b82f6%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"
      }`}></div>
      
      {/* Enhanced Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-32 left-10 w-32 h-32 rounded-full blur-xl animate-pulse transition-all duration-700 ${
          isDarkMode 
            ? 'bg-gradient-to-r from-cyan-400/20 to-blue-500/20' 
            : 'bg-gradient-to-r from-blue-400/30 to-indigo-500/30'
        }`}></div>
        <div className={`absolute top-52 right-20 w-24 h-24 rounded-full blur-xl animate-pulse delay-1000 transition-all duration-700 ${
          isDarkMode 
            ? 'bg-gradient-to-r from-purple-400/20 to-pink-500/20' 
            : 'bg-gradient-to-r from-purple-400/30 to-pink-500/30'
        }`}></div>
        <div className={`absolute bottom-40 left-1/4 w-40 h-40 rounded-full blur-xl animate-pulse delay-2000 transition-all duration-700 ${
          isDarkMode 
            ? 'bg-gradient-to-r from-indigo-400/20 to-purple-500/20' 
            : 'bg-gradient-to-r from-indigo-400/30 to-purple-500/30'
        }`}></div>
        <div className={`absolute top-1/3 right-1/3 w-16 h-16 rounded-full blur-lg animate-pulse delay-3000 transition-all duration-700 ${
          isDarkMode 
            ? 'bg-gradient-to-r from-emerald-400/15 to-teal-500/15' 
            : 'bg-gradient-to-r from-emerald-400/25 to-teal-500/25'
        }`}></div>
        <div className={`absolute bottom-1/3 left-1/3 w-20 h-20 rounded-full blur-lg animate-pulse delay-4000 transition-all duration-700 ${
          isDarkMode 
            ? 'bg-gradient-to-r from-rose-400/15 to-orange-500/15' 
            : 'bg-gradient-to-r from-rose-400/25 to-orange-500/25'
        }`}></div>
      </div>
      
      {/* Profile Photo - Positioned on Right */}
      <div className="absolute top-24 right-4 md:right-8 lg:right-12 xl:right-16 z-20">
        <div className="relative">
          {/* Profile Container */}
          <div className={`relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 rounded-full overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl border-2 ${
            isDarkMode 
              ? 'border-cyan-400/50' 
              : 'border-blue-400/50'
          }`}>
            {/* Profile Image */}
            <img 
              src="/My image.jpeg"
              alt="Manoj Kumar - App Developer" 
              className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Main Content - Positioned Higher and to Left */}
        <div className="flex flex-col items-start text-left max-w-3xl pt-8">
          {/* Greeting - Moved Up */}
          <div className="mb-4 space-y-1">
            <p className={`text-2xl md:text-3xl mb-1 animate-fade-in transition-colors duration-700 ${
              isDarkMode ? 'text-slate-300' : 'text-gray-600'
            }`}>
              Hi, I'm
            </p>
            <h2 className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-2 animate-fade-in-up leading-tight transition-all duration-700 ${
              isDarkMode 
                ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400' 
                : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600'
            }`} style={{ 
              fontFamily: '"Inter", "Segoe UI", system-ui, -apple-system, BlinkMacSystemFont, "Roboto", "Helvetica Neue", Arial, sans-serif',
              letterSpacing: '0.01em',
              textRendering: 'optimizeLegibility',
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale',
              fontFeatureSettings: '"kern" 1, "liga" 1, "calt" 1',
              fontVariantLigatures: 'common-ligatures contextual',
              wordSpacing: '0.02em'
            }}>
              Manojjjjj Kumar
            </h2>
          </div>
          
          {/* Dynamic Role - Moved Up */}
          <div className="mb-6">
            <h1 className={`text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 transition-colors duration-700 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              <span className={`text-transparent bg-clip-text transition-all duration-700 ${
                isDarkMode 
                  ? 'bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400' 
                  : 'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600'
              }`}>
                {displayText}
                <span className={`animate-pulse ml-1 ${isDarkMode ? 'text-cyan-400' : 'text-blue-600'}`}>|</span>
              </span>
            </h1>
            
            {/* Company Badge - Moved Up */}
            <div className="flex justify-start mb-6">
              <div className={`inline-flex items-center gap-2 backdrop-blur-sm rounded-full px-6 py-3 transition-all duration-700 ${
                isDarkMode 
                  ? 'bg-gradient-to-r from-purple-600/20 to-indigo-600/20 border border-purple-400/30' 
                  : 'bg-gradient-to-r from-purple-100/80 to-indigo-100/80 border border-purple-300/50'
              }`}>
                <div className={`w-2 h-2 rounded-full transition-all duration-700 ${
                  isDarkMode 
                    ? 'bg-gradient-to-r from-purple-400 to-indigo-400' 
                    : 'bg-gradient-to-r from-purple-500 to-indigo-500'
                }`}></div>
                <span className={`font-medium transition-colors duration-700 ${
                  isDarkMode ? 'text-slate-300' : 'text-gray-700'
                }`}>
                  Founder of <span className={`font-semibold ${isDarkMode ? 'text-cyan-400' : 'text-blue-600'}`}>CyberTech Guard</span>
                </span>
              </div>
            </div>
          </div>
          
          {/* Description - Moved Up */}
          <p className={`text-lg md:text-xl mb-8 leading-relaxed max-w-2xl transition-colors duration-700 ${
            isDarkMode ? 'text-slate-400' : 'text-gray-600'
          }`}>
            Creating innovative mobile applications with a focus on user experience and technical excellence. 
            Passionate about building solutions that make a difference in people's lives.
          </p>
          
          {/* Action Buttons - Moved Up */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-start">
            <a 
              href="#contact" 
              className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-3 font-medium relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Mail size={18} />
              <span>Contact Me</span>
            </a>
            
            <a 
              href="https://linktr.ee/Manoj_18" 
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-3 font-medium relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <ExternalLink size={18} />
              <span>My Website</span>
            </a>
            
            <button 
              onClick={handleResumeDownload}
              className={`group px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-3 font-medium backdrop-blur-sm relative overflow-hidden ${
                isDarkMode 
                  ? 'bg-slate-800/80 hover:bg-slate-700/80 text-white border border-slate-600 hover:border-cyan-400' 
                  : 'bg-white/80 hover:bg-white/90 text-gray-900 border border-gray-300 hover:border-blue-400'
              }`}
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                isDarkMode 
                  ? 'bg-gradient-to-r from-cyan-400/10 to-transparent' 
                  : 'bg-gradient-to-r from-blue-400/10 to-transparent'
              }`}></div>
              <Download size={18} />
              <span>Download Resume</span>
            </button>
          </div>
          
          {/* Contact Info Cards - Moved Up */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-4xl">
            <div className={`flex items-center gap-3 p-4 rounded-xl backdrop-blur-sm transition-all duration-300 group ${
              isDarkMode 
                ? 'text-slate-300 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 hover:border-cyan-400/50' 
                : 'text-gray-700 bg-white/50 hover:bg-white/70 border border-gray-200/50 hover:border-blue-400/50'
            }`}>
              <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg group-hover:scale-110 transition-transform">
                <Phone size={16} className="text-white" />
              </div>
              <span className="text-sm font-medium">+91 7806892181</span>
            </div>
            
            <div className={`flex items-center gap-3 p-4 rounded-xl backdrop-blur-sm transition-all duration-300 group ${
              isDarkMode 
                ? 'text-slate-300 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 hover:border-cyan-400/50' 
                : 'text-gray-700 bg-white/50 hover:bg-white/70 border border-gray-200/50 hover:border-blue-400/50'
            }`}>
              <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg group-hover:scale-110 transition-transform">
                <Mail size={16} className="text-white" />
              </div>
              <span className="text-sm font-medium">manojk46234@gmail.com</span>
            </div>
            
            <div className={`flex items-center gap-3 p-4 rounded-xl backdrop-blur-sm transition-all duration-300 group ${
              isDarkMode 
                ? 'text-slate-300 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 hover:border-cyan-400/50' 
                : 'text-gray-700 bg-white/50 hover:bg-white/70 border border-gray-200/50 hover:border-blue-400/50'
            }`}>
              <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg group-hover:scale-110 transition-transform">
                <MapPin size={16} className="text-white" />
              </div>
              <span className="text-sm font-medium">Trichy, Tamil Nadu</span>
            </div>
          </div>
          
          {/* Social Links - Moved Up */}
          <div className="flex gap-4 justify-start mb-10">
            <a 
              href="https://linkedin.com/in/manoj-kumar-4a57a325b" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`group p-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 backdrop-blur-sm relative overflow-hidden ${
                isDarkMode 
                  ? 'bg-slate-800/80 hover:bg-blue-600 border border-slate-700/50 hover:border-blue-400/50' 
                  : 'bg-white/80 hover:bg-blue-600 border border-gray-200/50 hover:border-blue-400/50'
              }`}
              aria-label="LinkedIn Profile"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Linkedin size={24} className={`transition-colors relative z-10 ${
                isDarkMode 
                  ? 'text-slate-300 group-hover:text-white' 
                  : 'text-gray-700 group-hover:text-white'
              }`} />
            </a>
            <a 
              href="https://github.com/Manojkumar945" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`group p-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 backdrop-blur-sm relative overflow-hidden ${
                isDarkMode 
                  ? 'bg-slate-800/80 hover:bg-gray-700 border border-slate-700/50 hover:border-gray-400/50' 
                  : 'bg-white/80 hover:bg-gray-700 border border-gray-200/50 hover:border-gray-400/50'
              }`}
              aria-label="GitHub Profile"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Github size={24} className={`transition-colors relative z-10 ${
                isDarkMode 
                  ? 'text-slate-300 group-hover:text-white' 
                  : 'text-gray-700 group-hover:text-white'
              }`} />
            </a>
          </div>
        </div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={scrollToAbout}
          className={`flex flex-col items-center gap-2 transition-colors duration-300 group ${
            isDarkMode 
              ? 'text-slate-400 hover:text-cyan-400' 
              : 'text-gray-500 hover:text-blue-600'
          }`}
          aria-label="Scroll to About section"
        >
          <span className="text-sm font-medium">Scroll Down</span>
          <div className={`p-2 rounded-full border transition-colors duration-300 ${
            isDarkMode 
              ? 'border-slate-600 group-hover:border-cyan-400' 
              : 'border-gray-400 group-hover:border-blue-600'
          }`}>
            <ArrowDown size={16} className="animate-bounce" />
          </div>
        </button>
      </div>
      
      {/* Enhanced bottom gradient */}
      <div className={`absolute bottom-0 left-0 right-0 h-32 transition-all duration-700 ${
        isDarkMode 
          ? 'bg-gradient-to-t from-indigo-900/80 to-transparent' 
          : 'bg-gradient-to-t from-blue-100/80 to-transparent'
      }`}></div>
    </section>
  );
};

export default Hero;