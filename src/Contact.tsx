import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { useTheme } from './ThemeContext';

const Contact = () => {
  const { isDarkMode } = useTheme();

  return (
    <section id="contact" className={`py-20 transition-all duration-700 ${
      isDarkMode
        ? 'bg-gradient-to-br from-indigo-950 via-purple-900 to-slate-900'
        : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
    }`}>
      <div className="container mx-auto px-6">
        <h2 className={`text-4xl font-bold text-center mb-16 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Get In Touch</h2>

        <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            { icon: Mail, label: 'Email', value: 'contact@example.com' },
            { icon: Phone, label: 'Phone', value: '+91 XXXXXXXXXX' },
            { icon: MapPin, label: 'Location', value: 'Tamil Nadu, India' }
          ].map((contact, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 p-3 w-fit mx-auto bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl">
                <contact.icon size={24} className="text-white" />
              </div>
              <h3 className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{contact.label}</h3>
              <p className={isDarkMode ? 'text-slate-400' : 'text-gray-600'}>{contact.value}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-6">
          <a href="#" className={`p-4 rounded-xl transition-all duration-300 ${
            isDarkMode
              ? 'bg-slate-800/50 border border-slate-600/50 text-slate-300 hover:text-cyan-400'
              : 'bg-white/50 border border-gray-300/50 text-gray-700 hover:text-blue-600'
          }`}>
            <Github size={28} />
          </a>
          <a href="#" className={`p-4 rounded-xl transition-all duration-300 ${
            isDarkMode
              ? 'bg-slate-800/50 border border-slate-600/50 text-slate-300 hover:text-cyan-400'
              : 'bg-white/50 border border-gray-300/50 text-gray-700 hover:text-blue-600'
          }`}>
            <Linkedin size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
