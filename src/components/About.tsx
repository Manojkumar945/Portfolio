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
                I am an aspiring app developer with a solid understanding of mobile technologies. I am driven to create innovative and user-centric applications that solve real-world problems and provide exceptional user experiences.
              </p>
              
              <p className="leading-relaxed">
                Currently pursuing my Bachelor of Technology in Information Technology at Paavai Engineering College, I've complemented my academic journey with practical experience through multiple internships where I've worked on Android development projects and web applications.
              </p>
              
              <p className="leading-relaxed">
                My goal is to contribute to a dynamic development team and continuously enhance my skills in app development. I am eager to seize opportunities to grow and make a significant impact in the field of mobile application development.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-6 mt-10">
              <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-indigo-800/80 to-purple-800/80 rounded-xl w-40 border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300 group backdrop-blur-sm">
                <span className="text-4xl font-bold text-cyan-400 group-hover:scale-110 transition-transform">5+</span>
                <span className="text-slate-400 text-sm font-medium">Internships</span>
              </div>
              <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-indigo-800/80 to-purple-800/80 rounded-xl w-40 border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300 group backdrop-blur-sm">
                <span className="text-4xl font-bold text-cyan-400 group-hover:scale-110 transition-transform">8+</span>
                <span className="text-slate-400 text-sm font-medium">Certifications</span>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="bg-gradient-to-br from-indigo-800/80 to-purple-800/80 p-8 rounded-2xl shadow-2xl border border-slate-600/50 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-6 text-white">Key Strengths</h3>
              <div className="space-y-4">
                {[
                  { title: "Problem Solving", desc: "Strong analytical and creative problem-solving abilities" },
                  { title: "Team Collaboration", desc: "Excellent communication and team collaboration skills" },
                  { title: "Fast Learner", desc: "Quick to adapt and learn new technologies" },
                  { title: "Attention to Detail", desc: "Meticulous attention to detail in development" }
                ].map((strength, index) => (
                  <div key={index} className="bg-slate-800/60 p-5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-600/50 hover:border-cyan-400/30 group backdrop-blur-sm">
                    <h4 className="font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">{strength.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{strength.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;