import { useTheme } from '../contexts/ThemeContext';

const About = () => {
  const { isDarkMode } = useTheme();
  
  return (
    <section id="about" className={`py-20 transition-all duration-700 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'
        : 'bg-gradient-to-br from-gray-50 via-white to-gray-50'
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
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start lg:auto-rows-max">
          {/* About Me Content - Left Side (Mobile: order-2, Desktop: order-1) */}
          <div className="lg:order-1 order-2">
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

          {/* Professional Photo - Right Side with ID Card / Lanyard Style (Mobile: order-1, Desktop: order-2) */}
          <div className="flex justify-center items-start pt-8 lg:order-2 order-1 lg:pt-8 pt-0">
            <style>{`
              @keyframes card-sway {
                0%, 100% { transform: rotate(-1.5deg); }
                50% { transform: rotate(1.5deg); }
              }
              @keyframes lanyard-sway {
                0%, 100% { transform: skewX(-1.5deg); }
                50% { transform: skewX(1.5deg); }
              }
              .card-hang {
                animation: card-sway 4s ease-in-out infinite;
                transform-origin: top center;
              }
              .lanyard-line {
                animation: lanyard-sway 4s ease-in-out infinite;
                transform-origin: top center;
              }
            `}</style>

            <div className="flex flex-col items-center">
              {/* Lanyard string */}
              <div className="lanyard-line flex flex-col items-center">
                <div className={`w-0.5 h-16 transition-colors duration-700 ${
                  isDarkMode ? 'bg-gray-400' : 'bg-gray-600'
                }`}></div>

                {/* Clip / Hook */}
                <div className="relative flex flex-col items-center">
                  {/* Clip ring */}
                  <div className={`w-5 h-5 rounded-full border-4 transition-colors duration-700 ${
                    isDarkMode ? 'border-gray-400 bg-transparent' : 'border-gray-700 bg-transparent'
                  }`}></div>
                  {/* Clip body */}
                  <div className={`w-4 h-6 rounded-b-full border-4 border-t-0 mt-0.5 transition-colors duration-700 ${
                    isDarkMode ? 'border-gray-400' : 'border-gray-700'
                  }`}></div>
                  {/* Clip pin */}
                  <div className={`w-1.5 h-4 rounded-full -mt-1 transition-colors duration-700 ${
                    isDarkMode ? 'bg-gray-400' : 'bg-gray-700'
                  }`}></div>
                </div>
              </div>

              {/* ID Card */}
              <div className="card-hang group">
                <div className={`relative w-56 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 group-hover:shadow-cyan-400/30 ${
                  isDarkMode
                    ? 'bg-slate-800 border border-slate-600/60 group-hover:border-cyan-400/50'
                    : 'bg-white border border-gray-200 group-hover:border-cyan-400/60'
                }`}
                  style={{ boxShadow: isDarkMode
                    ? '0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(6,182,212,0.1)'
                    : '0 20px 60px rgba(0,0,0,0.15), 0 0 0 1px rgba(6,182,212,0.15)'
                  }}
                >
                  {/* Card top hole for lanyard */}
                  <div className="flex justify-center pt-3 pb-1">
                    <div className={`w-6 h-3 rounded-full border-2 transition-colors duration-700 ${
                      isDarkMode ? 'border-slate-500 bg-slate-900' : 'border-gray-300 bg-gray-100'
                    }`}></div>
                  </div>

                  {/* Photo area */}
                  <div className="px-4 pb-2">
                    <div className="relative overflow-hidden rounded-xl h-64 w-full">
                      <img
                        src="/IMG_5167.JPG"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className={`absolute inset-0 transition-opacity duration-700 ${
                        isDarkMode
                          ? 'bg-gradient-to-t from-slate-900/20 to-transparent'
                          : 'bg-gradient-to-t from-white/10 to-transparent'
                      }`}></div>
                    </div>
                  </div>

                  {/* Card info strip */}
                  <div className={`mx-4 mb-4 rounded-xl px-3 py-3 text-center transition-all duration-700 ${
                    isDarkMode
                      ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/20'
                      : 'bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200/50'
                  }`}>
                    <p className={`text-sm font-bold tracking-wide transition-colors duration-700 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>Manoj Kumar S</p>
                    <p className={`text-xs mt-0.5 font-medium transition-colors duration-700 ${
                      isDarkMode ? 'text-cyan-400' : 'text-blue-600'
                    }`}>B. Tech - IT</p>
                  </div>
                </div>
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