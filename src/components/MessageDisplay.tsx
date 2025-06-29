import { useState, useEffect } from 'react';
import { Mail, User, Calendar, Eye, EyeOff, Trash2, MessageSquare } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface Message {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
  isRead: boolean;
}

const MessageDisplay = () => {
  const { isDarkMode } = useTheme();
  const [messages, setMessages] = useState<Message[]>([]);
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);

  // Load messages from localStorage on component mount
  useEffect(() => {
    const savedMessages = localStorage.getItem('portfolioMessages');
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, []);

  // Save messages to localStorage whenever messages change
  useEffect(() => {
    localStorage.setItem('portfolioMessages', JSON.stringify(messages));
  }, [messages]);

  const handleAdminLogin = () => {
    // Simple password check - in production, use proper authentication
    if (adminPassword === 'admin123') {
      setIsAdminMode(true);
      setShowPasswordInput(false);
      setAdminPassword('');
    } else {
      alert('Incorrect password');
    }
  };

  const markAsRead = (messageId: string) => {
    setMessages(prev => 
      prev.map(msg => 
        msg.id === messageId ? { ...msg, isRead: true } : msg
      )
    );
  };

  const deleteMessage = (messageId: string) => {
    setMessages(prev => prev.filter(msg => msg.id !== messageId));
    setSelectedMessage(null);
  };

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleString();
  };

  const unreadCount = messages.filter(msg => !msg.isRead).length;

  return (
    <section className={`py-20 transition-all duration-700 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-indigo-950 via-purple-900 to-slate-900' 
        : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className={`text-4xl font-bold mb-4 transition-colors duration-700 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>Messages</h2>
          <p className={`text-center max-w-2xl text-lg transition-colors duration-700 ${
            isDarkMode ? 'text-slate-400' : 'text-gray-600'
          }`}>
            Recent messages from visitors
          </p>
        </div>

        {/* Admin Toggle */}
        <div className="flex justify-center mb-8">
          {!isAdminMode ? (
            <div className="flex items-center gap-4">
              {!showPasswordInput ? (
                <button
                  onClick={() => setShowPasswordInput(true)}
                  className={`px-6 py-3 rounded-xl transition-all duration-300 ${
                    isDarkMode 
                      ? 'bg-slate-800/80 hover:bg-slate-700/80 text-white border border-slate-600' 
                      : 'bg-white/80 hover:bg-white/90 text-gray-900 border border-gray-300'
                  }`}
                >
                  Admin Access
                </button>
              ) : (
                <div className="flex items-center gap-3">
                  <input
                    type="password"
                    value={adminPassword}
                    onChange={(e) => setAdminPassword(e.target.value)}
                    placeholder="Enter admin password"
                    className={`px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
                      isDarkMode 
                        ? 'bg-slate-800/60 border border-slate-600/50 text-white placeholder-slate-400' 
                        : 'bg-white/60 border border-gray-300/50 text-gray-900 placeholder-gray-500'
                    }`}
                    onKeyPress={(e) => e.key === 'Enter' && handleAdminLogin()}
                  />
                  <button
                    onClick={handleAdminLogin}
                    className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-xl transition-all duration-300"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => {
                      setShowPasswordInput(false);
                      setAdminPassword('');
                    }}
                    className={`px-4 py-3 rounded-xl transition-all duration-300 ${
                      isDarkMode 
                        ? 'bg-slate-700/80 hover:bg-slate-600/80 text-white' 
                        : 'bg-gray-200/80 hover:bg-gray-300/80 text-gray-900'
                    }`}
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <span className={`px-4 py-2 rounded-full text-sm ${
                isDarkMode ? 'bg-green-600/20 text-green-400' : 'bg-green-100 text-green-700'
              }`}>
                Admin Mode Active
              </span>
              <button
                onClick={() => setIsAdminMode(false)}
                className={`px-6 py-3 rounded-xl transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-slate-700/80 hover:bg-slate-600/80 text-white' 
                    : 'bg-gray-200/80 hover:bg-gray-300/80 text-gray-900'
                }`}
              >
                Exit Admin
              </button>
            </div>
          )}
        </div>

        {/* Messages Count */}
        <div className="text-center mb-8">
          <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-xl backdrop-blur-sm ${
            isDarkMode 
              ? 'bg-slate-800/50 border border-slate-600/50' 
              : 'bg-white/50 border border-gray-200/50'
          }`}>
            <MessageSquare size={20} className="text-cyan-400" />
            <span className={isDarkMode ? 'text-white' : 'text-gray-900'}>
              Total Messages: {messages.length}
            </span>
            {unreadCount > 0 && (
              <span className="px-3 py-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-sm rounded-full">
                {unreadCount} unread
              </span>
            )}
          </div>
        </div>

        {/* Messages List */}
        <div className="max-w-4xl mx-auto">
          {messages.length === 0 ? (
            <div className={`text-center py-12 rounded-2xl backdrop-blur-sm ${
              isDarkMode 
                ? 'bg-slate-800/50 border border-slate-600/50' 
                : 'bg-white/50 border border-gray-200/50'
            }`}>
              <MessageSquare size={48} className={`mx-auto mb-4 ${
                isDarkMode ? 'text-slate-400' : 'text-gray-400'
              }`} />
              <p className={`text-lg ${
                isDarkMode ? 'text-slate-400' : 'text-gray-600'
              }`}>
                No messages yet. Be the first to send a message!
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`p-6 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:shadow-xl cursor-pointer ${
                    isDarkMode 
                      ? 'bg-slate-800/80 border border-slate-600/50 hover:border-cyan-400/50' 
                      : 'bg-white/80 border border-gray-200/50 hover:border-cyan-400/50'
                  } ${!message.isRead ? 'ring-2 ring-cyan-400/30' : ''}`}
                  onClick={() => {
                    setSelectedMessage(message);
                    if (!message.isRead) {
                      markAsRead(message.id);
                    }
                  }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">
                        <User size={16} className="text-white" />
                      </div>
                      <div>
                        <h3 className={`font-bold text-lg ${
                          isDarkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                          {message.name}
                        </h3>
                        <p className={`text-sm ${
                          isDarkMode ? 'text-slate-400' : 'text-gray-600'
                        }`}>
                          {message.email}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      {!message.isRead && (
                        <span className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse"></span>
                      )}
                      <div className="text-right">
                        <p className={`text-xs ${
                          isDarkMode ? 'text-slate-500' : 'text-gray-500'
                        }`}>
                          {formatDate(message.timestamp)}
                        </p>
                      </div>
                      {isAdminMode && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            deleteMessage(message.id);
                          }}
                          className="p-2 text-red-400 hover:text-red-300 transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      )}
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <h4 className={`font-semibold mb-2 ${
                      isDarkMode ? 'text-cyan-400' : 'text-blue-600'
                    }`}>
                      Subject: {message.subject}
                    </h4>
                  </div>
                  
                  <p className={`leading-relaxed ${
                    isDarkMode ? 'text-slate-300' : 'text-gray-700'
                  }`}>
                    {message.message.length > 150 
                      ? `${message.message.substring(0, 150)}...` 
                      : message.message
                    }
                  </p>
                  
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} className="text-cyan-400" />
                      <span className={`text-xs ${
                        isDarkMode ? 'text-slate-400' : 'text-gray-600'
                      }`}>
                        {formatDate(message.timestamp)}
                      </span>
                    </div>
                    <span className={`text-xs px-3 py-1 rounded-full ${
                      message.isRead 
                        ? isDarkMode 
                          ? 'bg-slate-700/50 text-slate-400' 
                          : 'bg-gray-100/50 text-gray-600'
                        : 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400'
                    }`}>
                      {message.isRead ? 'Read' : 'New'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Message Detail Modal */}
        {selectedMessage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className={`relative max-w-2xl w-full rounded-2xl shadow-2xl overflow-hidden ${
              isDarkMode 
                ? 'bg-slate-900 border border-slate-600/50' 
                : 'bg-white border border-gray-200/50'
            }`}>
              {/* Modal Header */}
              <div className={`flex items-center justify-between p-6 border-b ${
                isDarkMode 
                  ? 'border-slate-700/50 bg-gradient-to-r from-slate-800 to-slate-900' 
                  : 'border-gray-200/50 bg-gradient-to-r from-gray-50 to-blue-50'
              }`}>
                <div>
                  <h3 className={`text-xl font-bold mb-1 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {selectedMessage.subject}
                  </h3>
                  <p className={`text-sm ${
                    isDarkMode ? 'text-slate-400' : 'text-gray-600'
                  }`}>
                    From: {selectedMessage.name} ({selectedMessage.email})
                  </p>
                </div>
                <button
                  onClick={() => setSelectedMessage(null)}
                  className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                    isDarkMode 
                      ? 'bg-slate-700/50 hover:bg-slate-600/50 text-slate-300 hover:text-white' 
                      : 'bg-gray-100/50 hover:bg-gray-200/50 text-gray-600 hover:text-gray-900'
                  }`}
                >
                  ×
                </button>
              </div>
              
              {/* Modal Content */}
              <div className="p-6">
                <div className="mb-4">
                  <span className={`text-xs px-3 py-1 rounded-full ${
                    isDarkMode ? 'bg-slate-700/50 text-slate-400' : 'bg-gray-100/50 text-gray-600'
                  }`}>
                    {formatDate(selectedMessage.timestamp)}
                  </span>
                </div>
                <div className={`p-4 rounded-xl leading-relaxed ${
                  isDarkMode 
                    ? 'bg-slate-800/50 text-slate-300' 
                    : 'bg-gray-50/50 text-gray-700'
                }`}>
                  {selectedMessage.message}
                </div>
                
                {isAdminMode && (
                  <div className="flex justify-end mt-6">
                    <button
                      onClick={() => deleteMessage(selectedMessage.id)}
                      className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-xl transition-all duration-300 flex items-center gap-2"
                    >
                      <Trash2 size={16} />
                      Delete Message
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MessageDisplay;