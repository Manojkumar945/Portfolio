import { Code2 } from 'lucide-react';
import { useTheme } from './ThemeContext';

const Skills = () => {
  const { isDarkMode } = useTheme();

  const skills = [
    'Android Development', 'Java', 'Kotlin', 'React', 'TypeScript',
    'Python', 'JavaScript', 'HTML/CSS', 'Firebase', 'REST APIs'
  ];

  return (
    <section id="skills" className={`py-20 transition-all duration-700 ${
      isDarkMode
        ? 'bg-gradient-to-br from-indigo-950 via-purple-900 to-slate-900'
        : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
    }`}>
      <div className="container mx-auto px-6">
        <h2 className={`text-4xl font-bold text-center mb-16 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Skills</h2>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {skills.map((skill, index) => (
              <div key={index} className={`px-6 py-3 rounded-full backdrop-blur-sm ${
                isDarkMode
                  ? 'bg-gradient-to-r from-indigo-800/80 to-purple-800/80 border border-slate-600/50 text-slate-300'
                  : 'bg-gradient-to-r from-blue-100/80 to-purple-100/80 border border-blue-200/50 text-gray-700'
              }`}>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
