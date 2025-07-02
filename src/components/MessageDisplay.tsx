import { useState, useEffect } from 'react';
import { Mail, User, Calendar, Eye, EyeOff, Trash2, MessageSquare, Lock, Shield, AlertCircle } from 'lucide-react';
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
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [passwordError, setPasswordError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Admin password - you can change this
  const ADMIN_PASSWORD = 'manoj2025admin';

  // Load messages from localStorage on component mount
  useEffect(() => {
    loadMessages();

    // Listen for new messages
    const handleNewMessage = (event: CustomEvent) => {
      const newMessage = event.detail;
      setMessages(prev => {
        const updated = [newMessage, ...prev];
        // Save to localStorage immediately
        localStorage.setItem('portfolioMessages', JSON.stringify(updated));
        return updated;
      });
    };

    // Listen for storage changes (in case messages are added from another tab)
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === 'portfolioMessages') {
        loadMessages();
      }
    };

    window.addEventListener('newMessage', handleNewMessage as EventListener);
    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      window.removeEventListener('newMessage', handleNewMessage as EventListener);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const loadMessages = () => {
    try {
      const savedMessages = localStorage.getItem('portfolioMessages');
      if (savedMessages) {
        const parsedMessages = JSON.parse(savedMessages);
        // Ensure messages is always an array
        if (Array.isArray(parsedMessages)) {
          setMessages(parsedMessages);
        } else {
          setMessages([]);
        }
      } else {
        setMessages([]);
      }
    } catch (error) {
      console.error('Error loading messages:', error);
      setMessages([]);
    }
  };

  // Save messages to localStorage whenever messages change
  useEffect(() => {
    try {
      localStorage.setItem('portfolioMessages', JSON.stringify(messages));
    } catch (error) {
      console.error('Error saving messages:', error);
    }
  }, [messages]);

  const handleAdminLogin = async () => {
    setIsLoading(true);
    setPasswordError('');
    
    // Simulate a small delay for better UX
    await new Promise(resolve => setTimeout(resolve, 500));
    
    if (adminPassword.trim() === ADMIN_PASSWORD) {
      setIsAdminAuthenticated(true);
      setShowPasswordInput(false);
      setAdminPassword('');
      setPasswordError('');
      // Reload messages after successful login
      loadMessages();
    } else {
      setPasswordError('Incorrect password. Please try again.');
      setAdminPassword('');
    }
    
    setIsLoading(false);
  };

  const handleAdminLogout = () => {
    setIsAdminAuthenticated(false);
    setSelectedMessage(null);
    setPasswordError('');
    setAdminPassword('');
    setShowPasswordInput(false);
  };

  const markAsRead = (messageId: string) => {
    setMessages(prev => {
      const updated = prev.map(msg => 
        msg.id === messageId ? { ...msg, isRead: true } : msg
      );
      return updated;
    });
  };

  const deleteMessage = (messageId: string) => {
    setMessages(prev => {
      const updated = prev.filter(msg => msg.id !== messageId);
      return updated;
    });
    setSelectedMessage(null);
  };

  const formatDate = (timestamp: string) => {
    try {
      return new Date(timestamp).toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch (error) {
      return 'Invalid date';
    }
  };

  const unreadCount = messages.filter(msg => !msg.isRead).length;

  // If not authenticated, show admin login
  if (!isAdminAuthenticated) {
    return (
      <section className={`py-20 transition-all duration-700 ${
        isDarkMode 
          ? 'bg-gradient-to-br from-indigo-950 via-purple-900 to-slate-900' 
          : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center mb-12">
            <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-6">
              <Shield size={32} className="text-white" />
            </div>
            <h2 className={`text-4xl font-bold mb-4 transition-colors duration-700 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Admin Access Required</h2>
            
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
              Enter the admin password to view visitor messages
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <div className={`p-8 rounded-2xl backdrop-blur-sm shadow-2xl ${
              isDarkMode 
                ? 'bg-slate-800/80 border border-slate-600/50' 
                : 'bg-white/80 border border-gray-200/50'
            }`}>
              <div className="text-center mb-6">
                <Lock size={24} className={`mx-auto mb-3 ${
                  isDarkMode ? 'text-cyan-400' : 'text-blue-600'
                }`} />
                <h3 className={`text-xl font-bold mb-2 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Admin Login</h3>
                <p className={`text-sm ${
                  isDarkMode ? 'text-slate-400' : 'text-gray-600'
                }`}>
                  Password required to access messages
                </p>
              </div>

              {!showPasswordInput ? (
                <button
                  onClick={() => setShowPasswordInput(true)}
                  className="w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-medium"
                >
                  Access Admin Panel
                </button>
              ) : (
                <div className="space-y-4">
                  <div>
                    <input
                      type="password"
                      value={adminPassword}
                      onChange={(e) => {
                        setAdminPassword(e.target.value);
                        setPasswordError('');
                      }}
                      placeholder="Enter admin password"
                      className={`w-full px-4 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300 ${
                        isDarkMode 
                          ? 'bg-slate-700/60 border border-slate-600/50 text-white placeholder-slate-400' 
                          : 'bg-gray-50/60 border border-gray-300/50 text-gray-900 placeholder-gray-500'
                      }`}
                      onKeyPress={(e) => e.key === 'Enter' && !isLoading && handleAdminLogin()}
                      autoFocus
                      disabled={isLoading}
                    />
                    {passwordError && (
                      <div className="flex items-center gap-2 mt-2 text-red-400 text-sm">
                        <AlertCircle size={16} />
                        <span>{passwordError}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex gap-3">
                    <button
                      onClick={handleAdminLogin}
                      disabled={isLoading || !adminPassword.trim()}
                      className="flex-1 px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 disabled:from-gray-500 disabled:to-gray-600 disabled:cursor-not-allowed text-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl font-medium flex items-center justify-center gap-2"
                    >
                      {isLoading ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                          Verifying...
                        </>
                      ) : (
                        'Login'
                      )}
                    </button>
                    <button
                      onClick={() => {
                        setShowPasswordInput(false);
                        setAdminPassword('');
                        setPasswordError('');
                      }}
                      disabled={isLoading}
                      className={`px-6 py-4 rounded-xl transition-all duration-300 font-medium ${
                        isDarkMode 
                          ? 'bg-slate-700/80 hover:bg-slate-600/80 text-white border border-slate-600' 
                          : 'bg-gray-200/80 hover:bg-gray-300/80 text-gray-900 border border-gray-300'
                      }`}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}

              <div className={`mt-6 p-4 rounded-xl ${
                isDarkMode 
                  ? 'bg-slate-700/30 border border-slate-600/30' 
                  : 'bg-gray-100/30 border border-gray-200/30'
              }`}>
                <p className={`text-xs text-center ${
                  isDarkMode ? 'text-slate-400' : 'text-gray-600'
                }`}>
                  🔒 This area contains private messages from website visitors and is only accessible to the site administrator.
                </p>
                <p className={`text-xs text-center mt-2 font-medium ${
                  isDarkMode ? 'text-cyan-400' : 'text-blue-600'
                }`}>
                  Default password: manoj2025admin
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Admin authenticated - show messages
  return (
    <section className={`py-20 transition-all duration-700 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-indigo-950 via-purple-900 to-slate-900' 
        : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full">
              <Shield size={24} className="text-white" />
            </div>
            <h2 className={`text-4xl font-bold transition-colors duration-700 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Admin Dashboard</h2>
          </div>
          
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
            Messages from website visitors
          </p>
        </div>

        {/* Admin Controls */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-4">
            <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${
              isDarkMode ? 'bg-green-600/20 text-green-400 border border-green-500/30' : 'bg-green-100 text-green-700 border border-green-300'
            }`}>
              <Shield size={16} />
              <span className="text-sm font-medium">Admin Mode Active</span>
            </div>
            <button
              onClick={() => loadMessages()}
              className={`px-4 py-2 rounded-xl transition-all duration-300 font-medium text-sm ${
                isDarkMode 
                  ? 'bg-cyan-600/20 hover:bg-cyan-600/30 text-cyan-400 border border-cyan-500/30' 
                  : 'bg-cyan-100 hover:bg-cyan-200 text-cyan-700 border border-cyan-300'
              }`}
            >
              Refresh Messages
            </button>
            <button
              onClick={handleAdminLogout}
              className={`px-6 py-3 rounded-xl transition-all duration-300 font-medium ${
                isDarkMode 
                  ? 'bg-slate-700/80 hover:bg-slate-600/80 text-white border border-slate-600' 
                  : 'bg-gray-200/80 hover:bg-gray-300/80 text-gray-900 border border-gray-300'
              }`}
            >
              Logout
            </button>
          </div>
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
              <span className="px-3 py-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-sm rounded-full animate-pulse">
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
              <p className={`text-lg mb-2 ${
                isDarkMode ? 'text-slate-400' : 'text-gray-600'
              }`}>
                No messages yet
              </p>
              <p className={`text-sm ${
                isDarkMode ? 'text-slate-500' : 'text-gray-500'
              }`}>
                Messages will appear here when visitors use the contact form
              </p>
              <button
                onClick={() => loadMessages()}
                className="mt-4 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-lg transition-all duration-300 text-sm"
              >
                Check for Messages
              </button>
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
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (confirm('Are you sure you want to delete this message?')) {
                            deleteMessage(message.id);
                          }
                        }}
                        className="p-2 text-red-400 hover:text-red-300 transition-colors hover:bg-red-500/10 rounded-lg"
                        title="Delete message"
                      >
                        <Trash2 size={16} />
                      </button>
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
                        : 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 font-medium'
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
                
                <div className="flex justify-end mt-6">
                  <button
                    onClick={() => {
                      if (confirm('Are you sure you want to delete this message?')) {
                        deleteMessage(selectedMessage.id);
                      }
                    }}
                    className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-xl transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
                  >
                    <Trash2 size={16} />
                    Delete Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MessageDisplay;