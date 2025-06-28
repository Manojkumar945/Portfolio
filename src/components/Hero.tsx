import { Github, Linkedin, Mail, Phone, MapPin, Download, ExternalLink, ArrowDown } from 'lucide-react';
import { useState, useEffect } from 'react';

const Hero = () => {
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
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-indigo-950 via-purple-900 to-slate-900 pt-20 overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%236366f1%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      {/* Enhanced Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 left-10 w-32 h-32 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-52 right-20 w-24 h-24 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-gradient-to-r from-indigo-400/20 to-purple-500/20 rounded-full blur-xl animate-pulse delay-2000"></div>
        <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-gradient-to-r from-emerald-400/15 to-teal-500/15 rounded-full blur-lg animate-pulse delay-3000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-20 h-20 bg-gradient-to-r from-rose-400/15 to-orange-500/15 rounded-full blur-lg animate-pulse delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 py-12">
        <div className="flex flex-col items-center text-center">
          {/* Greeting with enhanced animation */}
          <div className="mb-8 space-y-2">
            <p className="text-2xl md:text-3xl text-slate-300 mb-2 animate-fade-in">
              Hello, I'm
            </p>
            <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 mb-4 animate-fade-in-up">
              Manoj Kumar
            </h2>
          </div>
          
          {/* Dynamic Role with enhanced styling */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400">
                {displayText}
                <span className="animate-pulse text-cyan-400 ml-1">|</span>
              </span>
            </h1>
            
            {/* Company Badge with Profile Image */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
              {/* Company Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-sm border border-purple-400/30 rounded-full px-6 py-3">
                <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full"></div>
                <span className="text-slate-300 font-medium">
                  Founder of <span className="text-cyan-400 font-semibold">CyberTech Guard</span>
                </span>
              </div>
              
              {/* Profile Image positioned next to the badge */}
              <div className="relative group">
                {/* Enhanced background glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full blur-2xl opacity-30 scale-110 group-hover:opacity-40 transition-opacity duration-500"></div>
                
                {/* Profile image container */}
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-gradient-to-r from-cyan-400/50 to-purple-500/50 shadow-2xl group-hover:scale-105 transition-transform duration-500">
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/20 via-transparent to-purple-500/20"></div>
                  <img 
                    src="/WhatsApp Image 2025-05-26 at 7.29.40 AM.jpeg"
                    alt="Manoj Kumar - App Developer" 
                    className="w-full h-full object-cover relative z-10"
                  />
                  
                  {/* Floating badge on image */}
                  <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-1 px-3 rounded-lg shadow-lg text-xs font-medium">
                    App Developer
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Description */}
          <p className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-3xl">
            Creating innovative mobile applications with a focus on user experience and technical excellence. 
            Passionate about building solutions that make a difference in people's lives.
          </p>
          
          {/* Enhanced Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10 justify-center">
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
              className="group px-8 py-4 bg-slate-800/80 hover:bg-slate-700/80 text-white border border-slate-600 hover:border-cyan-400 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-3 font-medium backdrop-blur-sm relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Download size={18} />
              <span>Download Resume</span>
            </button>
          </div>
          
          {/* Enhanced Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 max-w-4xl">
            <div className="flex items-center gap-3 text-slate-300 bg-slate-800/50 hover:bg-slate-700/50 p-4 rounded-xl backdrop-blur-sm border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 group">
              <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg group-hover:scale-110 transition-transform">
                <Phone size={16} className="text-white" />
              </div>
              <span className="text-sm font-medium">+91 7806892181</span>
            </div>
            
            <div className="flex items-center gap-3 text-slate-300 bg-slate-800/50 hover:bg-slate-700/50 p-4 rounded-xl backdrop-blur-sm border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 group">
              <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg group-hover:scale-110 transition-transform">
                <Mail size={16} className="text-white" />
              </div>
              <span className="text-sm font-medium">manojk46234@gmail.com</span>
            </div>
            
            <div className="flex items-center gap-3 text-slate-300 bg-slate-800/50 hover:bg-slate-700/50 p-4 rounded-xl backdrop-blur-sm border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 group">
              <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg group-hover:scale-110 transition-transform">
                <MapPin size={16} className="text-white" />
              </div>
              <span className="text-sm font-medium">Trichy, Tamil Nadu</span>
            </div>
          </div>
          
          {/* Enhanced Social Links */}
          <div className="flex gap-4 justify-center mb-12">
            <a 
              href="https://linkedin.com/in/manoj-kumar-4a57a325b" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-4 bg-slate-800/80 hover:bg-blue-600 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 backdrop-blur-sm border border-slate-700/50 hover:border-blue-400/50 relative overflow-hidden"
              aria-label="LinkedIn Profile"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Linkedin size={24} className="text-slate-300 group-hover:text-white transition-colors relative z-10" />
            </a>
            <a 
              href="https://github.com/Manojkumar945" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-4 bg-slate-800/80 hover:bg-gray-700 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 backdrop-blur-sm border border-slate-700/50 hover:border-gray-400/50 relative overflow-hidden"
              aria-label="GitHub Profile"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Github size={24} className="text-slate-300 group-hover:text-white transition-colors relative z-10" />
            </a>
          </div>
          
          {/* Achievement Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-md mx-auto mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400 mb-1">7+</div>
              <div className="text-xs text-slate-400">Internships</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400 mb-1">9+</div>
              <div className="text-xs text-slate-400">Certifications</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400 mb-1">1</div>
              <div className="text-xs text-slate-400">Company</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={scrollToAbout}
          className="flex flex-col items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors duration-300 group"
          aria-label="Scroll to About section"
        >
          <span className="text-sm font-medium">Scroll Down</span>
          <div className="p-2 rounded-full border border-slate-600 group-hover:border-cyan-400 transition-colors duration-300">
            <ArrowDown size={16} className="animate-bounce" />
          </div>
        </button>
      </div>
      
      {/* Enhanced bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-indigo-900/80 to-transparent"></div>
    </section>
  );
};

export default Hero;