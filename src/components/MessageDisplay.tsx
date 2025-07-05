import { useState, useEffect } from 'react';
import { Mail, User, Calendar, Eye, EyeOff, Trash2, MessageSquare, Lock, Shield, AlertCircle, RefreshCw } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface Message {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
  isRead: boolean;
  ipAddress?: string;
  userAgent?: string;
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
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Admin password - you can change this
  const ADMIN_PASSWORD = 'manoj2025admin';

  // Load messages from localStorage on component mount
  useEffect(() => {
    loadMessages();

    // Listen for new messages
    const handleNewMessage = (event: CustomEvent) => {
      const newMessage = event.detail;
      setMessages(prev => {
        // Check if message already exists to prevent duplicates
        const exists = prev.some(msg => msg.id === newMessage.id);
        if (exists) return prev;
        
        const updated = [newMessage, ...prev];
        // Save to localStorage immediately
        saveMessagesToStorage(updated);
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

  const saveMessagesToStorage = (messagesToSave: Message[]) => {
    try {
      localStorage.setItem('portfolioMessages', JSON.stringify(messagesToSave));
      // Also save to a backup key for extra persistence
      localStorage.setItem('portfolioMessagesBackup', JSON.stringify(messagesToSave));
    } catch (error) {
      console.error('Error saving messages:', error);
    }
  };

  const loadMessages = () => {
    try {
      let savedMessages = localStorage.getItem('portfolioMessages');
      
      // If main storage is empty, try backup
      if (!savedMessages) {
        savedMessages = localStorage.getItem('portfolioMessagesBackup');
      }
      
      if (savedMessages) {
        const parsedMessages = JSON.parse(savedMessages);
        // Ensure messages is always an array and sort by timestamp (newest first)
        if (Array.isArray(parsedMessages)) {
          const sortedMessages = parsedMessages.sort((a, b) => 
            new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
          );
          setMessages(sortedMessages);
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
    if (messages.length > 0) {
      saveMessagesToStorage(messages);
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

  const handleRefreshMessages = async () => {
    setIsRefreshing(true);
    await new Promise(resolve => setTimeout(resolve, 1000)); // Show loading for better UX
    loadMessages();
    setIsRefreshing(false);
  };

  const markAsRead = (messageId: string) => {
    setMessages(prev => {
      const updated = prev.map(msg => 
        msg.id === messageId ? { ...msg, isRead: true } : msg
      );
      return updated;
    });
  };

  const markAllAsRead = () => {
    setMessages(prev => {
      const updated = prev.map(msg => ({ ...msg, isRead: true }));
      return updated;
    });
  };

  const deleteMessage = (messageId: string) => {
    if (confirm('Are you sure you want to permanently delete this message? This action cannot be undone.')) {
      setMessages(prev => {
        const updated = prev.filter(msg => msg.id !== messageId);
        return updated;
      });
      setSelectedMessage(null);
    }
  };

  const deleteAllMessages = () => {
    if (confirm('Are you sure you want to delete ALL messages? This action cannot be undone and will permanently remove all visitor messages.')) {
      setMessages([]);
      localStorage.removeItem('portfolioMessages');
      localStorage.removeItem('portfolioMessagesBackup');
      setSelectedMessage(null);
    }
  };

  const exportMessages = () => {
    const dataStr = JSON.stringify(messages, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `portfolio-messages-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const formatDate = (timestamp: string) => {
    try {
      return new Date(timestamp).toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
    } catch (error) {
      return 'Invalid date';
    }
  };

  const getRelativeTime = (timestamp: string) => {
    try {
      const now = new Date();
      const messageTime = new Date(timestamp);
      const diffInMinutes = Math.floor((now.getTime() - messageTime.getTime()) / (1000 * 60));
      
      if (diffInMinutes < 1) return 'Just now';
      if (diffInMinutes < 60) return `${diffInMinutes} minutes ago`;
      if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)} hours ago`;
      return `${Math.floor(diffInMinutes / 1440)} days ago`;
    } catch (error) {
      return 'Unknown time';
    }
  };

  const unreadCount = messages.filter(msg => !msg.isRead).length;
  const totalMessages = messages.length;

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
            }`}>Admin Access Portal</h2>
            
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
              Secure access to view all visitor messages and portfolio interactions
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
                }`}>Admin Authentication</h3>
                <p className={`text-sm ${
                  isDarkMode ? 'text-slate-400' : 'text-gray-600'
                }`}>
                  Enter password to access visitor messages and analytics
                </p>
              </div>

              {!showPasswordInput ? (
                <button
                  onClick={() => setShowPasswordInput(true)}
                  className="w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-medium"
                >
                  Access Admin Dashboard
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
                          Authenticating...
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
                  🔒 This portal provides access to all visitor messages, contact form submissions, and portfolio analytics. All data is securely stored and never automatically deleted.
                </p>
                <p className={`text-xs text-center mt-2 font-medium ${
                  isDarkMode ? 'text-cyan-400' : 'text-blue-600'
                }`}>
                  Messages are permanently stored until manually removed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Admin authenticated - show messages dashboard
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
            Complete overview of all visitor messages and portfolio interactions
          </p>
        </div>

        {/* Admin Controls */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${
            isDarkMode ? 'bg-green-600/20 text-green-400 border border-green-500/30' : 'bg-green-100 text-green-700 border border-green-300'
          }`}>
            <Shield size={16} />
            <span className="text-sm font-medium">Admin Mode Active</span>
          </div>
          
          <button
            onClick={handleRefreshMessages}
            disabled={isRefreshing}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 font-medium text-sm ${
              isDarkMode 
                ? 'bg-cyan-600/20 hover:bg-cyan-600/30 text-cyan-400 border border-cyan-500/30' 
                : 'bg-cyan-100 hover:bg-cyan-200 text-cyan-700 border border-cyan-300'
            }`}
          >
            <RefreshCw size={16} className={isRefreshing ? 'animate-spin' : ''} />
            {isRefreshing ? 'Refreshing...' : 'Refresh Messages'}
          </button>
          
          {totalMessages > 0 && (
            <>
              <button
                onClick={markAllAsRead}
                className={`px-4 py-2 rounded-xl transition-all duration-300 font-medium text-sm ${
                  isDarkMode 
                    ? 'bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 border border-blue-500/30' 
                    : 'bg-blue-100 hover:bg-blue-200 text-blue-700 border border-blue-300'
                }`}
              >
                Mark All Read
              </button>
              
              <button
                onClick={exportMessages}
                className={`px-4 py-2 rounded-xl transition-all duration-300 font-medium text-sm ${
                  isDarkMode 
                    ? 'bg-purple-600/20 hover:bg-purple-600/30 text-purple-400 border border-purple-500/30' 
                    : 'bg-purple-100 hover:bg-purple-200 text-purple-700 border border-purple-300'
                }`}
              >
                Export Data
              </button>
              
              <button
                onClick={deleteAllMessages}
                className="px-4 py-2 rounded-xl transition-all duration-300 font-medium text-sm bg-red-600/20 hover:bg-red-600/30 text-red-400 border border-red-500/30"
              >
                Delete All
              </button>
            </>
          )}
          
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

        {/* Messages Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
          <div className={`text-center p-6 rounded-xl backdrop-blur-sm ${
            isDarkMode 
              ? 'bg-slate-800/50 border border-slate-600/50' 
              : 'bg-white/50 border border-gray-200/50'
          }`}>
            <div className="text-3xl font-bold text-cyan-400 mb-2">{totalMessages}</div>
            <div className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>Total Messages</div>
          </div>
          
          <div className={`text-center p-6 rounded-xl backdrop-blur-sm ${
            isDarkMode 
              ? 'bg-slate-800/50 border border-slate-600/50' 
              : 'bg-white/50 border border-gray-200/50'
          }`}>
            <div className="text-3xl font-bold text-orange-400 mb-2">{unreadCount}</div>
            <div className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>Unread Messages</div>
          </div>
          
          <div className={`text-center p-6 rounded-xl backdrop-blur-sm ${
            isDarkMode 
              ? 'bg-slate-800/50 border border-slate-600/50' 
              : 'bg-white/50 border border-gray-200/50'
          }`}>
            <div className="text-3xl font-bold text-green-400 mb-2">{totalMessages - unreadCount}</div>
            <div className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>Read Messages</div>
          </div>
        </div>

        {/* Messages List */}
        <div className="max-w-6xl mx-auto">
          {totalMessages === 0 ? (
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
                No messages received yet
              </p>
              <p className={`text-sm mb-4 ${
                isDarkMode ? 'text-slate-500' : 'text-gray-500'
              }`}>
                Messages from the contact form will appear here automatically
              </p>
              <button
                onClick={handleRefreshMessages}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-xl transition-all duration-300 text-sm font-medium"
              >
                Check for New Messages
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
                  } ${!message.isRead ? 'ring-2 ring-cyan-400/30 shadow-lg' : ''}`}
                  onClick={() => {
                    setSelectedMessage(message);
                    if (!message.isRead) {
                      markAsRead(message.id);
                    }
                  }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-lg ${
                        !message.isRead 
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-500' 
                          : 'bg-gradient-to-r from-gray-500 to-gray-600'
                      }`}>
                        <User size={20} className="text-white" />
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
                        <p className={`text-xs mt-1 ${
                          isDarkMode ? 'text-slate-500' : 'text-gray-500'
                        }`}>
                          {getRelativeTime(message.timestamp)}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      {!message.isRead && (
                        <div className="flex items-center gap-2">
                          <span className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse"></span>
                          <span className="text-xs font-medium text-cyan-400">NEW</span>
                        </div>
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
                          deleteMessage(message.id);
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
                    {message.message.length > 200 
                      ? `${message.message.substring(0, 200)}...` 
                      : message.message
                    }
                  </p>
                  
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} className="text-cyan-400" />
                        <span className={`text-xs ${
                          isDarkMode ? 'text-slate-400' : 'text-gray-600'
                        }`}>
                          {formatDate(message.timestamp)}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail size={14} className="text-cyan-400" />
                        <span className={`text-xs ${
                          isDarkMode ? 'text-slate-400' : 'text-gray-600'
                        }`}>
                          ID: {message.id.slice(-8)}
                        </span>
                      </div>
                    </div>
                    <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                      message.isRead 
                        ? isDarkMode 
                          ? 'bg-slate-700/50 text-slate-400' 
                          : 'bg-gray-100/50 text-gray-600'
                        : 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 animate-pulse'
                    }`}>
                      {message.isRead ? 'Read' : 'Unread'}
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
            <div className={`relative max-w-4xl w-full max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden ${
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
                <div className="flex-1">
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
                  <p className={`text-xs mt-1 ${
                    isDarkMode ? 'text-slate-500' : 'text-gray-500'
                  }`}>
                    Message ID: {selectedMessage.id} • {formatDate(selectedMessage.timestamp)}
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
              <div className="p-6 overflow-auto max-h-[calc(90vh-200px)]">
                <div className={`p-6 rounded-xl leading-relaxed text-lg ${
                  isDarkMode 
                    ? 'bg-slate-800/50 text-slate-300 border border-slate-600/30' 
                    : 'bg-gray-50/50 text-gray-700 border border-gray-200/30'
                }`}>
                  {selectedMessage.message}
                </div>
                
                {/* Message Metadata */}
                <div className={`mt-6 p-4 rounded-xl ${
                  isDarkMode 
                    ? 'bg-slate-800/30 border border-slate-600/30' 
                    : 'bg-gray-50/30 border border-gray-200/30'
                }`}>
                  <h4 className={`text-sm font-semibold mb-3 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>Message Details</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className={isDarkMode ? 'text-slate-400' : 'text-gray-600'}>Sender:</span>
                      <span className={`ml-2 font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {selectedMessage.name}
                      </span>
                    </div>
                    <div>
                      <span className={isDarkMode ? 'text-slate-400' : 'text-gray-600'}>Email:</span>
                      <span className={`ml-2 font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {selectedMessage.email}
                      </span>
                    </div>
                    <div>
                      <span className={isDarkMode ? 'text-slate-400' : 'text-gray-600'}>Received:</span>
                      <span className={`ml-2 font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {formatDate(selectedMessage.timestamp)}
                      </span>
                    </div>
                    <div>
                      <span className={isDarkMode ? 'text-slate-400' : 'text-gray-600'}>Status:</span>
                      <span className={`ml-2 px-2 py-1 rounded-full text-xs font-medium ${
                        selectedMessage.isRead 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-cyan-500/20 text-cyan-400'
                      }`}>
                        {selectedMessage.isRead ? 'Read' : 'Unread'}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end gap-3 mt-6">
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(
                        `From: ${selectedMessage.name} (${selectedMessage.email})\nSubject: ${selectedMessage.subject}\nDate: ${formatDate(selectedMessage.timestamp)}\n\nMessage:\n${selectedMessage.message}`
                      );
                    }}
                    className={`px-6 py-3 rounded-xl transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl font-medium ${
                      isDarkMode 
                        ? 'bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 border border-blue-500/30' 
                        : 'bg-blue-100 hover:bg-blue-200 text-blue-700 border border-blue-300'
                    }`}
                  >
                    Copy Message
                  </button>
                  <button
                    onClick={() => deleteMessage(selectedMessage.id)}
                    className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-xl transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl font-medium"
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