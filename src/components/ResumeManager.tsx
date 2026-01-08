import { useState } from 'react';
import { X, CheckCircle } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface ResumeManagerProps {
  isOpen: boolean;
  onClose: () => void;
  onResumeChange: (resumeUrl: string, displayName: string) => void;
}

const ResumeManager = ({ isOpen, onClose, onResumeChange }: ResumeManagerProps) => {
  const { isDarkMode } = useTheme();
  const [selectedResume, setSelectedResume] = useState('');

  const availableResumes = [
    { url: 'https://Resume Final.pdf', name: 'Resume Final' },
  ];

  const handleSelectResume = (resume: typeof availableResumes[0]) => {
    setSelectedResume(resume.url);
    onResumeChange(resume.url, resume.name);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={`relative w-full max-w-md rounded-2xl shadow-2xl flex flex-col overflow-hidden ${
          isDarkMode ? 'bg-slate-900' : 'bg-white'
        }`}
      >
        {/* Header */}
        <div
          className={`flex items-center justify-between px-6 py-4 border-b ${
            isDarkMode
              ? 'bg-slate-800/80 border-slate-700/50'
              : 'bg-gray-50 border-gray-200/50'
          }`}
        >
          <h2
            className={`text-lg font-semibold ${
              isDarkMode ? 'text-slate-100' : 'text-gray-900'
            }`}
          >
            Select Resume
          </h2>
          <button
            onClick={onClose}
            className={`p-2 rounded-lg transition-all ${
              isDarkMode
                ? 'hover:bg-slate-700/50 text-slate-400 hover:text-slate-100'
                : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
            }`}
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-3">
          {availableResumes.map((resume) => (
            <button
              key={resume.url}
              onClick={() => handleSelectResume(resume)}
              className={`w-full p-4 rounded-lg border-2 transition-all text-left flex items-center justify-between ${
                isDarkMode
                  ? 'border-slate-700 bg-slate-800/50 hover:bg-slate-800 hover:border-cyan-500'
                  : 'border-gray-200 bg-gray-50 hover:bg-gray-100 hover:border-blue-500'
              }`}
            >
              <div>
                <p
                  className={`font-medium ${
                    isDarkMode ? 'text-slate-100' : 'text-gray-900'
                  }`}
                >
                  {resume.name}
                </p>
              </div>
              <CheckCircle
                size={20}
                className={`transition-all ${
                  selectedResume === resume.url
                    ? isDarkMode
                      ? 'text-cyan-400'
                      : 'text-blue-500'
                    : 'text-transparent'
                }`}
              />
            </button>
          ))}
        </div>

        {/* Footer */}
        <div
          className={`px-6 py-3 border-t text-center text-sm ${
            isDarkMode
              ? 'bg-slate-800/80 border-slate-700/50 text-slate-400'
              : 'bg-gray-50 border-gray-200/50 text-gray-600'
          }`}
        >
          Click a resume to view it
        </div>
      </div>
    </div>
  );
};

export default ResumeManager;
