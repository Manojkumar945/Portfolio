import { Github, Linkedin, Mail, Phone, MapPin, ChevronRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="w-full md:w-7/12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                S.MANOJ KUMAR
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800">
              App Developer
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Creating innovative mobile applications with a focus on user experience and technical excellence
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors shadow-md hover:shadow-lg flex items-center gap-2"
              >
                <Mail size={18} />
                Contact Me
              </a>
              <a 
                href="#portfolio" 
                className="px-6 py-3 bg-white hover:bg-gray-100 text-blue-600 border border-blue-600 rounded-lg transition-colors shadow-sm hover:shadow-md flex items-center gap-2"
              >
                <ChevronRight size={18} />
                View My Work
              </a>
              <a 
                href="/My App Developer role Resume.pdf (1).pdf" 
                download
                className="px-6 py-3 bg-white hover:bg-gray-100 text-blue-600 border border-blue-600 rounded-lg transition-colors shadow-sm hover:shadow-md flex items-center gap-2"
              >
                <Download size={18} />
                Download Resume
              </a>
            </div>
            
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-gray-700">
                <Phone size={18} className="text-blue-600" />
                <span>+91 7806892181</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Mail size={18} className="text-blue-600" />
                <span>manojk46234@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <MapPin size={18} className="text-blue-600" />
                <span>Trichy, Tamil Nadu, India</span>
              </div>
            </div>
            
            <div className="flex gap-4 mt-6">
              <a 
                href="https://linkedin.com/in/manoj-kumar-4a57a325b" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} className="text-blue-600" />
              </a>
              <a 
                href="https://github.com/Manojkumar945" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                aria-label="GitHub Profile"
              >
                <Github size={20} className="text-gray-800" />
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-5/12 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img 
                  src="/WhatsApp Image 2025-05-26 at 7.29.40 AM.jpeg"
                  alt="Manoj Kumar" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white py-2 px-4 rounded-lg shadow-md">
                <span className="text-blue-600 font-semibold">App Developer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </section>
  );
};

export default Hero;