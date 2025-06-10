const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-indigo-900/80 via-purple-900/60 to-slate-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-white">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mb-6"></div>
          <p className="text-slate-400 text-center max-w-2xl text-lg">
            Passionate about creating innovative mobile solutions that transform ideas into reality
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <div className="prose prose-lg text-slate-300 space-y-6">
              <p className="leading-relaxed">
                I am <span className="text-cyan-400 font-semibold">Manoj Kumar S</span>, a passionate and dedicated App Developer with a strong foundation in Mobile technologies and a vision to create innovative Applications that solve real-world problems. As the <span className="text-purple-400 font-semibold">Founder of CyberTech Guard</span>, I combine technical expertise with Entrepreneurial spirit to deliver exceptional digital solutions.
              </p>
              
              <p className="leading-relaxed">
                Currently pursuing my <span className="text-cyan-400 font-semibold">Bachelor of Technology in Information Technology</span> at Paavai Engineering College, I have actively sought practical experience through multiple internships and professional roles. My journey includes working with renowned companies like <span className="text-purple-400">VCZ Recruitment (Switzerland)</span>, <span className="text-purple-400">Corizo EduTech</span>, and <span className="text-purple-400">InternPe</span>, where I've honed my skills in Android Development, Web Technologies, and Project management.
              </p>
              
              <p className="leading-relaxed">
                Beyond technical development, I serve as a <span className="text-cyan-400 font-semibold">Placement Coordinator</span> at Paavai Institutions and have been recognized as a <span className="text-purple-400">Campus Ambassador</span> for EXIMIUS - IIM Bangalore. My diverse experience spans from Mobile App Development to Data Analytics, Cloud Computing, and AI/ML Technologies, backed by <span className="text-cyan-400 font-semibold">8+ professional Certifications</span> from prestigious institutions.
              </p>
              
              <p className="leading-relaxed">
                My mission is to bridge the gap between innovative technology and user-centric design, creating Applications that not only function flawlessly but also provide meaningful experiences. I am committed to continuous learning, staying updated with emerging technologies, and contributing to the global tech community through impactful solutions.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-6 mt-10">
              <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-indigo-800/80 to-purple-800/80 rounded-xl w-40 border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300 group backdrop-blur-sm">
                <span className="text-4xl font-bold text-cyan-400 group-hover:scale-110 transition-transform">7+</span>
                <span className="text-slate-400 text-sm font-medium">Internships</span>
              </div>
              <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-indigo-800/80 to-purple-800/80 rounded-xl w-40 border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300 group backdrop-blur-sm">
                <span className="text-4xl font-bold text-cyan-400 group-hover:scale-110 transition-transform">9+</span>
                <span className="text-slate-400 text-sm font-medium">Certifications</span>
              </div>
              <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-indigo-800/80 to-purple-800/80 rounded-xl w-40 border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300 group backdrop-blur-sm">
                <span className="text-4xl font-bold text-cyan-400 group-hover:scale-110 transition-transform">1</span>
                <span className="text-slate-400 text-sm font-medium">Company Founded</span>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="bg-gradient-to-br from-indigo-800/80 to-purple-800/80 p-8 rounded-2xl shadow-2xl border border-slate-600/50 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-6 text-white">Core Competencies</h3>
              <div className="space-y-4">
                {[
                  { 
                    title: "Mobile App Development", 
                    desc: "Expert in Android Studio with hands-on experience in creating user-centric mobile applications",
                    icon: "📱"
                  },
                  { 
                    title: "Leadership & Management", 
                    desc: "Proven leadership as Founder of CyberTech Guard and Placement Coordinator role",
                    icon: "👥"
                  },
                  { 
                    title: "Data Analytics & AI", 
                    desc: "Certified in Python data analytics, cloud computing, and Google AI-ML technologies",
                    icon: "📊"
                  },
                  { 
                    title: "International Exposure", 
                    desc: "Global perspective through Switzerland internship and Malaysia university program",
                    icon: "🌍"
                  },
                  { 
                    title: "Technical Innovation", 
                    desc: "Continuous learning mindset with expertise in emerging technologies and frameworks",
                    icon: "⚡"
                  },
                  { 
                    title: "Problem-Solving Excellence", 
                    desc: "Strong analytical abilities with focus on creating solutions that make real impact",
                    icon: "🎯"
                  }
                ].map((competency, index) => (
                  <div key={index} className="bg-slate-800/60 p-5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-600/50 hover:border-cyan-400/30 group backdrop-blur-sm">
                    <div className="flex items-start gap-4">
                      <span className="text-2xl">{competency.icon}</span>
                      <div>
                        <h4 className="font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">{competency.title}</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">{competency.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Vision Statement */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-cyan-400/20 backdrop-blur-sm">
            <h3 className="text-2xl font-semibold mb-4 text-white">My Vision</h3>
            <p className="text-slate-300 text-lg leading-relaxed max-w-4xl mx-auto">
              "To revolutionize the Mobile App Development landscape by creating innovative, user-centric Applications that seamlessly blend cutting-edge Technology with intuitive design. Through CyberTech Guard and my professional journey, I aim to contribute to a digital future where Technology serves humanity's greatest needs and aspirations."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;