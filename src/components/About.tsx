import { useTheme } from '../contexts/ThemeContext';

const About = () => {
  const { isDarkMode } = useTheme();
  
  return (
    <section id="about" className={`py-20 transition-all duration-700 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-indigo-950 via-purple-900 to-slate-900' 
        : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className={`text-4xl font-bold mb-4 transition-colors duration-700 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>About Me</h2>
          
          {/* Decorative Line */}
          <div className="flex items-center gap-4 mb-6">
            <div className={`h-px w-16 transition-all duration-700 ${
              isDarkMode 
                ? 'bg-gradient-to-r from-transparent to-cyan-400' 
                : 'bg-gradient-to-r from-transparent to-blue-600'
            }`}></div>
            <div className={`w-3 h-3 rounded-full transition-all duration-700 ${
              isDarkMode 
                ? 'bg-gradient-to-r from-cyan-400 to-blue-500' 
                : 'bg-gradient-to-r from-blue-600 to-indigo-600'
            }`}></div>
            <div className={`h-px w-16 transition-all duration-700 ${
              isDarkMode 
                ? 'bg-gradient-to-l from-transparent to-cyan-400' 
                : 'bg-gradient-to-l from-transparent to-blue-600'
            }`}></div>
          </div>
          
          <p className={`text-center max-w-2xl text-lg transition-colors duration-700 ${
            isDarkMode ? 'text-slate-400' : 'text-gray-600'
          }`}>
            Passionate about creating innovative mobile solutions that transform ideas into reality
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* About Me Content - Left Side */}
          <div>
            <div className={`prose prose-lg space-y-6 transition-colors duration-700 ${
              isDarkMode ? 'text-slate-300' : 'text-gray-700'
            }`}>
              <p className="leading-relaxed text-lg">
                I am <span className={`font-semibold ${isDarkMode ? 'text-cyan-400' : 'text-blue-600'}`}>Manoj Kumar S</span>, a passionate App Developer and <span className={`font-semibold ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`}>Founder of CyberTech Guard</span>. Currently pursuing my Bachelor of Technology in Information Technology at Paavai Engineering College, I combine technical expertise with entrepreneurial vision.
              </p>
             
              <p className="leading-relaxed text-lg">
                I served as a <span className={`font-semibold ${isDarkMode ? 'text-cyan-400' : 'text-blue-600'}`}>Placement Coordinator</span> at Paavai Institutions and am a <span className={`font-semibold ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`}>Developer</span> of my final year Project. I aim to work in a dynamic organization where I can enhance my technical expertise, collaborate effectively with teams and create meaningful impact through technology.
              </p>
              
              <p className="leading-relaxed text-lg">
                My career objective is to grow as a skilled software professional by continuously learning new technologies and contributing to the development of innovative, user-centric solutions.
              </p>
            </div>
            
            {/* Achievement Stats */}
            <div className="flex flex-wrap gap-6 mt-10">
              <div className={`flex flex-col items-center justify-center p-6 rounded-xl w-40 transition-all duration-300 group backdrop-blur-sm ${
                isDarkMode 
                  ? 'bg-gradient-to-br from-indigo-800/80 to-purple-800/80 border border-slate-600/50 hover:border-cyan-400/50' 
                  : 'bg-gradient-to-br from-blue-100/80 to-purple-100/80 border border-blue-200/50 hover:border-cyan-400/50'
              }`}>
                <span className={`text-4xl font-bold group-hover:scale-110 transition-transform ${
                  isDarkMode ? 'text-cyan-400' : 'text-blue-600'
                }`}>7+</span>
                <span className={`text-sm font-medium ${
                  isDarkMode ? 'text-slate-400' : 'text-gray-600'
                }`}>Internships</span>
              </div>
              <div className={`flex flex-col items-center justify-center p-6 rounded-xl w-40 transition-all duration-300 group backdrop-blur-sm ${
                isDarkMode 
                  ? 'bg-gradient-to-br from-indigo-800/80 to-purple-800/80 border border-slate-600/50 hover:border-cyan-400/50' 
                  : 'bg-gradient-to-br from-blue-100/80 to-purple-100/80 border border-blue-200/50 hover:border-cyan-400/50'
              }`}>
                <span className={`text-4xl font-bold group-hover:scale-110 transition-transform ${
                  isDarkMode ? 'text-cyan-400' : 'text-blue-600'
                }`}>14+</span>
                <span className={`text-sm font-medium ${
                  isDarkMode ? 'text-slate-400' : 'text-gray-600'
                }`}>Certifications</span>
              </div>
            </div>
          </div>

          {/* Professional Photo - Right Side */}
          <div className="flex justify-center items-center">
            <div className="relative group">
              <div className={`absolute -inset-4 rounded-2xl blur-xl transition-all duration-700 ${
                isDarkMode
                  ? 'bg-gradient-to-r from-cyan-400/30 via-blue-500/30 to-purple-500/30'
                  : 'bg-gradient-to-r from-blue-400/40 via-indigo-500/40 to-purple-500/40'
              }`}></div>
              <div className={`relative rounded-2xl overflow-hidden border-4 transition-all duration-700 shadow-2xl ${
                isDarkMode
                  ? 'border-cyan-400/50 shadow-cyan-400/20'
                  : 'border-blue-400/50 shadow-blue-400/20'
              }`}>
                <img
                  src="/img_5168.jpg"
                  alt="Manoj Kumar - Professional Portrait"
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className={`absolute inset-0 transition-opacity duration-700 ${
                  isDarkMode
                    ? 'bg-gradient-to-t from-indigo-900/20 to-transparent'
                    : 'bg-gradient-to-t from-blue-900/10 to-transparent'
                }`}></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Vision Statement */}
        <div className="mt-16 text-center">
          <div className={`rounded-2xl p-8 backdrop-blur-sm transition-all duration-700 ${
            isDarkMode 
              ? 'bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-400/20' 
              : 'bg-gradient-to-r from-blue-100/50 to-purple-100/50 border border-blue-300/30'
          }`}>
            <h3 className={`text-2xl font-semibold mb-4 transition-colors duration-700 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>My Vision</h3>
            <p className={`text-lg leading-relaxed max-w-4xl mx-auto transition-colors duration-700 ${
              isDarkMode ? 'text-slate-300' : 'text-gray-700'
            }`}>
              "I aspire to contribute to organizations that value innovation, teamwork and continuous learning, where I can apply my knowledge to build scalable and impactful digital products. Through consistent effort and hands-on experience, I envision growing into a responsible technologist who delivers high-quality solutions aligned with business and user needs."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;