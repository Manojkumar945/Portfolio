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
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* About Me Content - Left Side */}
          <div>
            <div className="prose prose-lg text-slate-300 space-y-6">
              <p className="leading-relaxed text-lg">
                I am <span className="text-cyan-400 font-semibold">Manoj Kumar S</span>, a passionate App Developer and <span className="text-purple-400 font-semibold">Founder of CyberTech Guard</span>. Currently pursuing my Bachelor of Technology in Information Technology at Paavai Engineering College, I combine technical expertise with entrepreneurial vision.
              </p>
              
              <p className="leading-relaxed text-lg">
                My journey includes working with renowned companies like <span className="text-purple-400">VCZ Recruitment (Switzerland)</span>, <span className="text-purple-400">Corizo EduTech</span>, and <span className="text-purple-400">InternPe</span>. I serve as a <span className="text-cyan-400 font-semibold">Placement Coordinator</span> at Paavai Institutions and am a <span className="text-purple-400">Campus Ambassador</span> for EXIMIUS - IIM Bangalore.
              </p>
              
              <p className="leading-relaxed text-lg">
                With <span className="text-cyan-400 font-semibold">9+ professional certifications</span> and expertise spanning Mobile App Development, Data Analytics, Cloud Computing, and AI/ML Technologies, I'm committed to creating applications that provide meaningful user experiences and solve real-world problems.
              </p>
            </div>
            
            {/* Achievement Stats */}
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
                <span className="text-slate-400 text-sm font-medium">Company</span>
              </div>
            </div>
          </div>
          
          {/* Key Strengths - Right Side */}
          <div>
            <div className="bg-gradient-to-br from-indigo-800/80 to-purple-800/80 p-8 rounded-2xl shadow-2xl border border-slate-600/50 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-6 text-white">Key Strengths</h3>
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