import { Lightbulb, Users, Award, Target } from 'lucide-react';
import { useTheme } from './ThemeContext';

const About = () => {
  const { isDarkMode } = useTheme();

  const features = [
    { icon: Lightbulb, title: 'Problem Solver', description: 'Creative solutions' },
    { icon: Users, title: 'Team Player', description: 'Collaborative approach' },
    { icon: Award, title: 'Quality Focused', description: 'High-quality code' },
    { icon: Target, title: 'Goal Oriented', description: 'Results driven' }
  ];

  return (
    <section id="about" className={`py-20 transition-all duration-700 ${
      isDarkMode
        ? 'bg-gradient-to-br from-indigo-950 via-purple-900 to-slate-900'
        : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
    }`}>
      <div className="container mx-auto px-6">
        <h2 className={`text-4xl font-bold text-center mb-16 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>About Me</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className={`rounded-2xl p-8 backdrop-blur-sm ${
            isDarkMode
              ? 'bg-gradient-to-br from-indigo-800/80 to-purple-800/80 border border-slate-600/50'
              : 'bg-gradient-to-br from-blue-100/80 to-purple-100/80 border border-blue-200/50'
          }`}>
            <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Passionate App Developer</h3>
            <p className={`mb-4 leading-relaxed text-lg ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>
              I'm a dedicated app developer with a passion for creating innovative and user-friendly mobile applications.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className={`p-6 rounded-2xl backdrop-blur-sm ${
                isDarkMode
                  ? 'bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-slate-600/50'
                  : 'bg-gradient-to-br from-white/90 to-blue-50/90 border border-blue-200/50'
              }`}>
                <div className="mb-4 p-3 w-fit bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl">
                  <feature.icon size={24} className="text-white" />
                </div>
                <h4 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{feature.title}</h4>
                <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
