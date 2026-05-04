import { useState, useEffect } from 'react';
import { X, Download, Loader } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface ResumeViewerProps {
  isOpen: boolean;
  onClose: () => void;
  resumeUrl: string;
  resumeName: string;
}

const ResumeViewer = ({ isOpen, onClose, resumeUrl, resumeName }: ResumeViewerProps) => {
  const { isDarkMode } = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setIsLoading(true);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  const handleDownload = () => {
    try {
      const link = document.createElement('a');
      link.href = resumeUrl;
      link.download = resumeName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading resume:', error);
      window.open(resumeUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-all duration-300"
      onClick={handleBackdropClick}
      aria-modal="true"
      role="dialog"
      aria-labelledby="resume-viewer-title"
    >
      <div
        className={`relative w-full h-full max-w-5xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 ${
          isDarkMode ? 'bg-slate-900' : 'bg-white'
        }`}
      >
        {/* Header */}
        <div
          className={`flex items-center justify-between px-6 py-4 border-b transition-colors duration-300 ${
            isDarkMode
              ? 'bg-slate-800/80 border-slate-700/50'
              : 'bg-gray-50 border-gray-200/50'
          }`}
        >
          <h2
            id="resume-viewer-title"
            className={`text-lg font-semibold transition-colors duration-300 ${
              isDarkMode ? 'text-slate-100' : 'text-gray-900'
            }`}
          >
            Resume
          </h2>
          <div className="flex items-center gap-3">
            <button
              onClick={handleDownload}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 font-medium group ${
                isDarkMode
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : 'bg-blue-500 hover:bg-blue-600 text-white'
              }`}
              title="Download resume"
              aria-label="Download resume PDF"
            >
              <Download size={18} className="group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline">Download</span>
            </button>
            <button
              onClick={onClose}
              className={`p-2 rounded-lg transition-all duration-300 ${
                isDarkMode
                  ? 'hover:bg-slate-700/50 text-slate-400 hover:text-slate-100'
                  : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
              }`}
              title="Close resume viewer"
              aria-label="Close resume viewer"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div
            className={`absolute inset-0 flex items-center justify-center z-40 rounded-b-2xl ${
              isDarkMode
                ? 'bg-slate-900/50'
                : 'bg-white/50'
            }`}
          >
            <div className="flex flex-col items-center gap-3">
              <Loader
                size={32}
                className={`animate-spin ${
                  isDarkMode ? 'text-cyan-400' : 'text-blue-500'
                }`}
              />
              <p
                className={`text-sm font-medium ${
                  isDarkMode ? 'text-slate-300' : 'text-gray-600'
                }`}
              >
                Loading resume...
              </p>
            </div>
          </div>
        )}

        {/* PDF Viewer */}
        <div className="flex-1 overflow-hidden">
          <iframe
            src={`${resumeUrl}#toolbar=1&navpanes=0&scrollbar=1`}
            title="Resume PDF"
            className="w-full h-full border-none"
            onLoad={() => setIsLoading(false)}
            onError={() => setIsLoading(false)}
          />
          <noscript>
            <object
              data={resumeUrl}
              type="application/pdf"
              className="w-full h-full"
            >
              <p
                className={`p-6 text-center ${
                  isDarkMode ? 'text-slate-300' : 'text-gray-600'
                }`}
              >
                Unable to display PDF.
                <a
                  href={resumeUrl}
                  download={resumeName}
                  className={`ml-2 underline transition-colors ${
                    isDarkMode
                      ? 'text-cyan-400 hover:text-cyan-300'
                      : 'text-blue-500 hover:text-blue-600'
                  }`}
                >
                  Download instead
                </a>
              </p>
            </object>
          </noscript>
        </div>

        {/* Footer */}
        <div
          className={`px-6 py-3 border-t text-center text-sm transition-colors duration-300 ${
            isDarkMode
              ? 'bg-slate-800/80 border-slate-700/50 text-slate-400'
              : 'bg-gray-50 border-gray-200/50 text-gray-600'
          }`}
        >
          Press ESC to close | Use your browser's print function to save
        </div>
      </div>
    </div>
  );
};

export default ResumeViewer;
