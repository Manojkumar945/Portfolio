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
      
      {/* Profile Photo - Positioned in Right Corner */}
      <div className="absolute top-24 right-6 md:right-12 lg:right-16 z-20">
        <div className="relative group">
          {/* Massive Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/40 via-blue-500/30 to-purple-600/40 rounded-full blur-3xl scale-150 opacity-70 group-hover:opacity-90 transition-all duration-700 animate-profile-glow"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/30 via-pink-500/20 to-cyan-400/30 rounded-full blur-2xl scale-125 opacity-50 group-hover:opacity-70 transition-all duration-500 animate-pulse delay-1000"></div>
          
          {/* Rotating Ring Effects */}
          <div className="absolute inset-0 rounded-full border-2 border-gradient-to-r from-cyan-400/60 via-transparent to-purple-500/60 scale-110 animate-rotate-ring"></div>
          <div className="absolute inset-0 rounded-full border border-gradient-to-l from-blue-400/40 via-transparent to-pink-400/40 scale-125 animate-reverse-rotate-ring"></div>
          
          {/* Main Profile Container */}
          <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden shadow-2xl group-hover:scale-105 transition-all duration-700 border-4 border-gradient-to-r from-cyan-400/70 via-blue-500/70 to-purple-500/70">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent via-transparent to-purple-500/10 z-10"></div>
            
            {/* Animated Particles */}
            <div className="absolute inset-0 z-20">
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-particle-float opacity-75"></div>
              <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-particle-float opacity-60" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full animate-particle-float opacity-50" style={{ animationDelay: '2s' }}></div>
              <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-pink-400 rounded-full animate-particle-float opacity-70" style={{ animationDelay: '3s' }}></div>
            </div>
            
            {/* Profile Image */}
            <img 
              src="/ed0708ed-9a52-48b4-8ee0-c332d7d1f006-removebg-preview.png"
              alt="Manoj Kumar - App Developer" 
              className="w-full h-full object-cover object-center relative z-30 group-hover:scale-110 transition-transform duration-700"
            />
            
            {/* Floating Professional Badge */}
            <div className="absolute -bottom-3 -right-3 z-40 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white py-2 px-4 rounded-xl shadow-2xl text-xs font-bold border-2 border-white/20 backdrop-blur-sm group-hover:scale-110 transition-all duration-300 animate-badge-pulse">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                <span></span>
              </div>
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -top-3 -left-3 z-40 bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-1.5 px-3 rounded-lg shadow-xl text-xs font-semibold border border-white/20 backdrop-blur-sm group-hover:scale-110 transition-all duration-300 animate-badge-pulse" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-1">
                <span></span>
                <span></span>
              </div>
            </div>
            
            {/* Tech Stack Floating Elements */}
            <div className="absolute -top-6 right-1/4 z-30 bg-slate-800/90 text-cyan-400 py-1 px-2 rounded-md shadow-lg text-xs font-medium border border-cyan-400/30 backdrop-blur-sm animate-float-tech">
            </div>
            <div className="absolute top-1/2 -left-6 z-30 bg-slate-800/90 text-purple-400 py-1 px-2 rounded-md shadow-lg text-xs font-medium border border-purple-400/30 backdrop-blur-sm animate-float-tech" style={{ animationDelay: '1s' }}>
              Python
            </div>
            <div className="absolute bottom-1/4 -right-6 z-30 bg-slate-800/90 text-blue-400 py-1 px-2 rounded-md shadow-lg text-xs font-medium border border-blue-400/30 backdrop-blur-sm animate-float-tech" style={{ animationDelay: '2s' }}>
              React
            </div>
          </div>
          
          {/* Outer Glow Ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/15 via-blue-500/15 to-purple-500/15 scale-150 blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 py-12">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Greeting with enhanced animation */}
          <div className="mb-8 space-y-2">
            <p className="text-2xl md:text-3xl text-slate-300 mb-2 animate-fade-in">
              Hello, I'm
            </p>
            <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 mb-4 animate-fade-in-up leading-tight">
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
            
            {/* Company Badge */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-sm border border-purple-400/30 rounded-full px-6 py-3">
                <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full"></div>
                <span className="text-slate-300 font-medium">
                  Founder of <span className="text-cyan-400 font-semibold">CyberTech Guard</span>
                </span>
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