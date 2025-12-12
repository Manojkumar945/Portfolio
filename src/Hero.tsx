import { ArrowDown, Smartphone, Code2, Zap } from 'lucide-react';
import { useTheme } from './ThemeContext';

const Hero = () => {
  const { isDarkMode } = useTheme();

  return (
    <section id="home" className={`min-h-screen flex items-center justify-center pt-20 transition-all duration-700 ${
      isDarkMode
        ? 'bg-gradient-to-br from-indigo-950 via-purple-900 to-slate-900'
        : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
    }`}>
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <span className={`inline-block text-sm font-semibold px-4 py-2 rounded-full mb-4 ${
                isDarkMode
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                  : 'bg-gradient-to-r from-blue-400 to-indigo-400 text-white'
              }`}>
                Welcome to my portfolio
              </span>
              <h1 className={`text-5xl lg:text-7xl font-bold leading-tight ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Hi, I'm <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Manoj Kumar</span>
              </h1>
              <p className={`text-xl lg:text-2xl ${
                isDarkMode ? 'text-slate-300' : 'text-gray-700'
              }`}>
                App Developer specializing in creating innovative and user-friendly mobile applications
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg backdrop-blur-sm ${
                  isDarkMode
                    ? 'bg-slate-800/50 border border-slate-600/50 text-slate-300 hover:bg-slate-700/50'
                    : 'bg-white/50 border border-gray-300/50 text-gray-700 hover:bg-white/70'
                }`}
              >
                Get In Touch
              </a>
            </div>

            <div className="flex gap-8 pt-8">
              {[
                { icon: Smartphone, label: 'Mobile Dev', count: '3+' },
                { icon: Code2, label: 'Languages', count: '5+' },
                { icon: Zap, label: 'Projects', count: '20+' }
              ].map((stat, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">
                    <stat.icon size={20} className="text-white" />
                  </div>
                  <div>
                    <div className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{stat.count}</div>
                    <div className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-20">
          <a href="#about" className={`p-3 rounded-full animate-bounce ${
            isDarkMode
              ? 'bg-slate-800/50 text-cyan-400 hover:bg-slate-700/50'
              : 'bg-white/50 text-blue-600 hover:bg-white/70'
          }`}>
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
