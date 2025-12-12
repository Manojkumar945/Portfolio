import { useTheme } from './ThemeContext';

const ResumeManager = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`p-4 rounded-lg ${
      isDarkMode
        ? 'bg-gradient-to-r from-indigo-800/80 to-purple-800/80 border border-slate-600/50'
        : 'bg-gradient-to-r from-blue-100/80 to-purple-100/80 border border-blue-200/50'
    }`}>
      <p className={isDarkMode ? 'text-slate-300' : 'text-gray-700'}>Resume Manager</p>
    </div>
  );
};

export default ResumeManager;
