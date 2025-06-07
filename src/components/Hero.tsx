import { Github, Linkedin, Mail, Phone, MapPin, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23334155' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-7/12">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-amber-400/10 text-amber-400 rounded-full text-sm font-medium border border-amber-400/20">
                Available for Opportunities
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                S.MANOJ KUMAR
              </span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-light mb-6 text-slate-300">
              App Developer
            </h2>
            
            <p className="text-lg md:text-xl text-slate-400 mb-8 leading-relaxed max-w-2xl">
              Crafting exceptional mobile experiences with cutting-edge technology and innovative design solutions that drive business growth.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-10">
              <a 
                href="#contact" 
                className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2 font-medium"
              >
                <Mail size={18} />
                Let's Connect
              </a>
              <a 
                href="/My App Developer role Resume.pdf (1).pdf" 
                download
                className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white border border-slate-600 hover:border-amber-400 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2 font-medium"
              >
                <Download size={18} />
                Download Resume
              </a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center gap-3 text-slate-300">
                <div className="p-2 bg-slate-800 rounded-lg">
                  <Phone size={18} className="text-amber-400" />
                </div>
                <span>+91 7806892181</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <div className="p-2 bg-slate-800 rounded-lg">
                  <Mail size={18} className="text-amber-400" />
                </div>
                <span>manojk46234@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <div className="p-2 bg-slate-800 rounded-lg">
                  <MapPin size={18} className="text-amber-400" />
                </div>
                <span>Trichy, Tamil Nadu</span>
              </div>
            </div>
            
            <div className="flex gap-4">
              <a 
                href="https://linkedin.com/in/manoj-kumar-4a57a325b" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 hover:bg-blue-600 rounded-lg transition-all duration-300 transform hover:-translate-y-1"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} className="text-white" />
              </a>
              <a 
                href="https://github.com/Manojkumar945" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 hover:bg-gray-700 rounded-lg transition-all duration-300 transform hover:-translate-y-1"
                aria-label="GitHub Profile"
              >
                <Github size={20} className="text-white" />
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-5/12 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full blur-2xl opacity-20 scale-110"></div>
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-amber-400/30 shadow-2xl">
                <img 
                  src="/WhatsApp Image 2025-05-26 at 7.29.40 AM.jpeg"
                  alt="Manoj Kumar" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-amber-500 to-orange-500 py-3 px-6 rounded-xl shadow-xl">
                <span className="text-white font-semibold">App Developer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-800 to-transparent"></div>
    </section>
  );
};

export default Hero;