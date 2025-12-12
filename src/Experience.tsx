import { Briefcase, Calendar } from 'lucide-react';
import { useTheme } from './ThemeContext';

const Experience = () => {
  const { isDarkMode } = useTheme();

  return (
    <section id="experience" className={`py-20 transition-all duration-700 ${
      isDarkMode
        ? 'bg-gradient-to-br from-indigo-950 via-purple-900 to-slate-900'
        : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
    }`}>
      <div className="container mx-auto px-6">
        <h2 className={`text-4xl font-bold text-center mb-16 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Experience</h2>
        <div className="max-w-3xl mx-auto">
          <p className={`text-center ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>Professional experience coming soon</p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
