import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Download, ExternalLink } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Hero = () => {
  const { isDark } = useTheme();
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = ['App Developer', 'UI & UX Designer', 'Web Developer'];

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 500 : 2000;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        // Pause before deleting
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && displayText === '') {
        // Move to next role
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      } else if (isDeleting) {
        // Delete character
        setDisplayText(currentRole.substring(0, displayText.length - 1));
      } else {
        // Add character
        setDisplayText(currentRole.substring(0, displayText.length + 1));
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex, roles]);

  return (
    <section className={`relative min-h-screen flex items-center ${
      isDark 
        ? 'bg-gradient-to-br from-indigo-950 via-purple-900 to-slate-900' 
        : 'bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100'
    } pt-20 transition-colors duration-300`}>
      {/* Background Pattern */}
      <div className={`absolute inset-0 ${
        isDark 
          ? "bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%236366f1%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"
          : "bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%233b82f6%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"
      } opacity-50`}></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-32 left-10 w-32 h-32 ${
          isDark 
            ? 'bg-gradient-to-r from-cyan-400/20 to-blue-500/20' 
            : 'bg-gradient-to-r from-blue-400/20 to-indigo-500/20'
        } rounded-full blur-xl animate-pulse`}></div>
        <div className={`absolute top-52 right-20 w-24 h-24 ${
          isDark 
            ? 'bg-gradient-to-r from-purple-400/20 to-pink-500/20' 
            : 'bg-gradient-to-r from-indigo-400/20 to-purple-500/20'
        } rounded-full blur-xl animate-pulse delay-1000`}></div>
        <div className={`absolute bottom-40 left-1/4 w-40 h-40 ${
          isDark 
            ? 'bg-gradient-to-r from-indigo-400/20 to-purple-500/20' 
            : 'bg-gradient-to-r from-cyan-400/20 to-blue-500/20'
        } rounded-full blur-xl animate-pulse delay-2000`}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-7/12">
            <div className="mb-8">
              <p className={`text-2xl md:text-3xl ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              } mb-2`}>Hi,</p>
              <p className={`text-2xl md:text-3xl ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}>I'm <span className={`text-transparent bg-clip-text ${
                isDark 
                  ? 'bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400' 
                  : 'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600'
              } font-semibold`}>Manoj Kumar</span></p>
            </div>
            
            <h1 className={`text-4xl md:text-5xl font-bold mb-8 ${
              isDark ? 'text-white' : 'text-slate-900'
            } leading-tight min-h-[1.2em]`}>
              <span className={`text-transparent bg-clip-text ${
                isDark 
                  ? 'bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400' 
                  : 'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600'
              }`}>
                {displayText}
                <span className={`${
                  isDark ? 'text-cyan-400' : 'text-blue-600'
                } animate-pulse`}>|</span>
              </span>
            </h1>
            
            <h2 className={`text-2xl md:text-3xl font-semibold mb-6 ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}>
              Founder of <span className={`${
                isDark ? 'text-cyan-400' : 'text-blue-600'
              }`}>CyberTech Guard</span>
            </h2>
            
            <p className={`text-lg md:text-xl ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            } mb-8 leading-relaxed max-w-2xl`}>
              Creating innovative mobile applications with a focus on user experience and technical excellence. 
              Passionate about building solutions that make a difference.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <a 
                href="#contact" 
                className={`px-8 py-4 ${
                  isDark 
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600' 
                    : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700'
                } text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2 font-medium`}
              >
                <Mail size={18} />
                Contact Me
              </a>
              <a 
                href="https://linktr.ee/Manoj_18" 
                target="_blank"
                rel="noopener noreferrer"
                className={`px-8 py-4 ${
                  isDark 
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600' 
                    : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700'
                } text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2 font-medium`}
              >
                <ExternalLink size={18} />
                See My Website
              </a>
              <a 
                href="/My App Developer role Resume.pdf"
                download
                className={`px-8 py-4 ${
                  isDark 
                    ? 'bg-slate-800/80 hover:bg-slate-700/80 border-slate-600 hover:border-cyan-400' 
                    : 'bg-white/80 hover:bg-slate-50/80 border-slate-300 hover:border-blue-600'
                } ${
                  isDark ? 'text-white' : 'text-slate-900'
                } border rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2 font-medium backdrop-blur-sm`}
              >
                <Download size={18} />
                Download Resume
              </a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className={`flex items-center gap-3 ${
                isDark ? 'text-slate-300 bg-slate-800/50 border-slate-700/50' : 'text-slate-600 bg-white/50 border-slate-300/50'
              } p-3 rounded-lg backdrop-blur-sm border`}>
                <Phone size={18} className={`${isDark ? 'text-cyan-400' : 'text-blue-600'}`} />
                <span className="text-sm">+91 7806892181</span>
              </div>
              
              <div className={`flex items-center gap-3 ${
                isDark ? 'text-slate-300 bg-slate-800/50 border-slate-700/50' : 'text-slate-600 bg-white/50 border-slate-300/50'
              } p-3 rounded-lg backdrop-blur-sm border`}>
                <Mail size={18} className={`${isDark ? 'text-cyan-400' : 'text-blue-600'}`} />
                <span className="text-sm">manojk46234@gmail.com</span>
              </div>
              
              <div className={`flex items-center gap-3 ${
                isDark ? 'text-slate-300 bg-slate-800/50 border-slate-700/50' : 'text-slate-600 bg-white/50 border-slate-300/50'
              } p-3 rounded-lg backdrop-blur-sm border`}>
                <MapPin size={18} className={`${isDark ? 'text-cyan-400' : 'text-blue-600'}`} />
                <span className="text-sm">Trichy, Tamil Nadu, India</span>
              </div>
            </div>
            
            <div className="flex gap-4">
              <a 
                href="https://linkedin.com/in/manoj-kumar-4a57a325b" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`p-3 ${
                  isDark 
                    ? 'bg-slate-800/80 hover:bg-blue-600 border-slate-700/50' 
                    : 'bg-white/80 hover:bg-blue-600 border-slate-300/50'
                } rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group backdrop-blur-sm border`}
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} className={`${
                  isDark ? 'text-slate-300 group-hover:text-white' : 'text-slate-600 group-hover:text-white'
                }`} />
              </a>
              <a 
                href="https://github.com/Manojkumar945" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`p-3 ${
                  isDark 
                    ? 'bg-slate-800/80 hover:bg-gray-700 border-slate-700/50' 
                    : 'bg-white/80 hover:bg-gray-700 border-slate-300/50'
                } rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group backdrop-blur-sm border`}
                aria-label="GitHub Profile"
              >
                <Github size={20} className={`${
                  isDark ? 'text-slate-300 group-hover:text-white' : 'text-slate-600 group-hover:text-white'
                }`} />
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-5/12 flex justify-center">
            <div className="relative">
              <div className={`absolute inset-0 ${
                isDark 
                  ? 'bg-gradient-to-r from-cyan-400 to-purple-500' 
                  : 'bg-gradient-to-r from-blue-400 to-indigo-500'
              } rounded-full blur-2xl opacity-20 scale-110`}></div>
              <div className={`relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 ${
                isDark ? 'border-cyan-400/30' : 'border-blue-400/30'
              } shadow-2xl`}>
                <img 
                  src="/WhatsApp Image 2025-05-26 at 7.29.40 AM.jpeg"
                  alt="Manoj Kumar" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className={`absolute -bottom-4 -right-4 ${
                isDark 
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500' 
                  : 'bg-gradient-to-r from-blue-600 to-indigo-600'
              } text-white py-2 px-4 rounded-lg shadow-lg font-medium`}>
                {roles[currentRoleIndex]}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className={`absolute bottom-0 left-0 right-0 h-20 ${
        isDark 
          ? 'bg-gradient-to-t from-indigo-900/80 to-transparent' 
          : 'bg-gradient-to-t from-slate-100/80 to-transparent'
      }`}></div>
    </section>
  );
};

export default Hero;

export default Hero