const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mb-6"></div>
          <p className="text-slate-400 text-center max-w-2xl text-lg">
            Passionate about creating innovative mobile solutions that transform businesses
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <div className="space-y-6 text-slate-300 leading-relaxed">
              <p className="text-lg">
                I am a dedicated app developer with extensive expertise in mobile technologies. My passion lies in creating innovative, user-centric applications that solve complex real-world problems and deliver exceptional user experiences.
              </p>
              
              <p className="text-lg">
                Currently pursuing my Bachelor of Technology in Information Technology at Paavai Engineering College, I've strengthened my academic foundation with hands-on experience through multiple high-impact internships, working on cutting-edge Android development projects and sophisticated web applications.
              </p>
              
              <p className="text-lg">
                My mission is to contribute to dynamic development teams while continuously advancing my expertise in mobile application development. I am committed to seizing opportunities that challenge me to grow and create meaningful impact in the technology landscape.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="bg-slate-700/50 backdrop-blur-sm p-6 rounded-xl border border-slate-600/50 text-center transform hover:scale-105 transition-all duration-300">
                <span className="text-4xl font-bold text-amber-400 block">5+</span>
                <span className="text-slate-400 text-sm uppercase tracking-wide">Internships</span>
              </div>
              <div className="bg-slate-700/50 backdrop-blur-sm p-6 rounded-xl border border-slate-600/50 text-center transform hover:scale-105 transition-all duration-300">
                <span className="text-4xl font-bold text-amber-400 block">8+</span>
                <span className="text-slate-400 text-sm uppercase tracking-wide">Certifications</span>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="bg-slate-700/30 backdrop-blur-sm p-8 rounded-2xl border border-slate-600/30 shadow-2xl">
              <h3 className="text-2xl font-semibold mb-8 text-white">Core Competencies</h3>
              <div className="space-y-6">
                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-600/30 hover:border-amber-400/50 transition-all duration-300 group">
                  <h4 className="font-semibold text-amber-400 mb-2 group-hover:text-amber-300">Strategic Problem Solving</h4>
                  <p className="text-slate-400 text-sm">Advanced analytical thinking and creative solution development</p>
                </div>
                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-600/30 hover:border-amber-400/50 transition-all duration-300 group">
                  <h4 className="font-semibold text-amber-400 mb-2 group-hover:text-amber-300">Team Leadership</h4>
                  <p className="text-slate-400 text-sm">Exceptional communication and cross-functional collaboration</p>
                </div>
                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-600/30 hover:border-amber-400/50 transition-all duration-300 group">
                  <h4 className="font-semibold text-amber-400 mb-2 group-hover:text-amber-300">Rapid Adaptation</h4>
                  <p className="text-slate-400 text-sm">Quick mastery of emerging technologies and frameworks</p>
                </div>
                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-600/30 hover:border-amber-400/50 transition-all duration-300 group">
                  <h4 className="font-semibold text-amber-400 mb-2 group-hover:text-amber-300">Quality Excellence</h4>
                  <p className="text-slate-400 text-sm">Meticulous attention to detail and code quality standards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;