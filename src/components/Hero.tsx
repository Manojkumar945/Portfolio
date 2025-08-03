import React from 'react';
import { Download, MapPin, Mail, Phone, Github, Linkedin, Globe } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden transition-all duration-300 ease-in-out">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
      
      {/* Mobile View - Centered */}
      <div className="md:hidden flex items-center justify-center min-h-screen p-6">
        <div className="profile-hero-card bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 max-w-sm w-full text-center">
          {/* Profile Image */}
          <div className="relative mb-6">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-4xl font-bold text-gray-600">
                MK
              </div>
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
          
          {/* Profile Info */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">S. Manoj Kumar</h1>
            <p className="text-blue-600 font-medium mb-4">Information Technology</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Aspiring app developer with a solid understanding of mobile technologies
            </p>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-3 mb-6 text-sm">
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <Mail className="w-4 h-4" />
              <span>manojk46234@gmail.com</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <Phone className="w-4 h-4" />
              <span>+91-7806892181</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <MapPin className="w-4 h-4" />
              <span>Trichy, Tamil Nadu</span>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="space-y-3">
            <a
              href="/Manoj_Kumar_Resume.pdf"
              download="Manoj_Kumar_Resume.pdf"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
            
            <div className="flex gap-2 justify-center">
              <a href="https://github.com/Manojkumar945" className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                <Github className="w-5 h-5 text-gray-600" />
              </a>
              <a href="https://linkedin.com/in/manoj-kumar-4a57a325b" className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                <Linkedin className="w-5 h-5 text-gray-600" />
              </a>
              <a href="https://manojkumar-portfolio-164cdc.netlify.app/" className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                <Globe className="w-5 h-5 text-gray-600" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Desktop View - Right Corner */}
      <div className="hidden md:block">
        <div className="fixed top-8 right-8 z-50">
          <div className="profile-hero-card bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/30 w-80">
            {/* Profile Image */}
            <div className="relative mb-4">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
                <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold text-gray-600">
                  MK
                </div>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            
            {/* Profile Info */}
            <div className="mb-4">
              <h2 className="text-xl font-bold text-gray-800 mb-1">S. Manoj Kumar</h2>
              <p className="text-blue-600 font-medium text-sm mb-2">Information Technology</p>
              <p className="text-gray-600 text-xs leading-relaxed">
                Aspiring app developer with mobile tech expertise
              </p>
            </div>
            
            {/* Quick Contact */}
            <div className="space-y-2 mb-4 text-xs">
              <div className="flex items-center gap-2 text-gray-600">
                <Mail className="w-3 h-3" />
                <span>manojk46234@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Phone className="w-3 h-3" />
                <span>+91-7806892181</span>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="space-y-2">
              <a
                href="/Manoj_Kumar_Resume.pdf"
                download="Manoj_Kumar_Resume.pdf"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Download className="w-3 h-3" />
                Download Resume
              </a>
              
              <div className="flex gap-1 justify-center">
                <a href="https://github.com/Manojkumar945" className="p-2 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors">
                  <Github className="w-4 h-4 text-gray-600" />
                </a>
                <a href="https://linkedin.com/in/manoj-kumar-4a57a325b" className="p-2 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors">
                  <Linkedin className="w-4 h-4 text-gray-600" />
                </a>
                <a href="https://manojkumar-portfolio-164cdc.netlify.app/" className="p-2 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors">
                  <Globe className="w-4 h-4 text-gray-600" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Content Area */}
        <div className="main-content-section pt-20 pb-10 px-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              Welcome to My Portfolio
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Discover my journey in technology, projects, and professional experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;