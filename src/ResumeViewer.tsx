import { X } from 'lucide-react';
import { useTheme } from './ThemeContext';

interface ResumeViewerProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeViewer: React.FC<ResumeViewerProps> = ({ isOpen, onClose }) => {
  const { isDarkMode } = useTheme();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className={`relative w-full max-w-4xl h-[90vh] rounded-2xl overflow-hidden ${
        isDarkMode
          ? 'bg-gradient-to-br from-indigo-800/90 to-purple-800/90'
          : 'bg-gradient-to-br from-blue-100/90 to-purple-100/90'
      }`}>
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 z-10 p-2 rounded-lg transition-all duration-300 ${
            isDarkMode
              ? 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50'
              : 'bg-white/50 text-gray-700 hover:bg-white/70'
          }`}
        >
          <X size={24} />
        </button>
        <iframe
          src="/My Resume.pdf"
          className="w-full h-full"
          title="Resume"
        />
      </div>
    </div>
  );
};

export default ResumeViewer;
