import { Building2, Calendar, MapPin } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const experiences = [
  {
    title: "Placement Coordinator",
    company: "Paavai Institutions",
    location: "Tamil Nadu, India",
    period: "09/2023 - Present",
    description: "A Team Management skills obtained the new Technologies.",
    achievements: [
      "Coordinator role enhances the Knowledgeable experiences."
    ]
  },
  {
    title: "FullStack Developer Intern",
    company: "Inspire AI",
    location: "Bangalore, India",
    period: "06/2025 - 09/2025",
    description: "A company focused on IT solutions, specializing in app development.",
    achievements: [
      "Participated in Android development and app development projects."
    ]
  },
  {
    title: "Python Developer Intern",
    company: "The Developers Arena",
    location: "Pune, India",
    period: "04/2025 - 10/2025",
    description: "A company focused on IT solutions, specializing in app development.",
    achievements: [
      "Participated in Android development and app development projects."
    ]
  },
  {
    title: "Chief Marketing Officer",
    company: "VCZ RECRUITMENT",
    location: "Remote",
    period: "04/2025 - 06/2025",
    description: "A Company focused on Sales and Marketing Technologies.",
    achievements: [
      "Training Period enhances the Knowledgeable experiences."
    ]
  },
  {
    title: "Android Developer Intern",
    company: "Corizo EduTech",
    location: "Bangalore, India",
    period: "04/2025 - 05/2025",
    description: "A company focused on IT solutions, specializing in app development.",
    achievements: [
      "Participated in Android development and app development projects."
    ]
  },
  {
    title: "Web Developer Intern",
    company: "InternPe",
    location: "Remote",
    period: "01/2025 - 03/2025",
    description: "A Company focused on IT Solutions, Specializing in Web Development.",
    achievements: [
      "Participated in Web Development and web development projects."
    ]
  },
  {
    title: "App Developer Intern",
    company: "CodTech IT Solutions",
    location: "Remote",
    period: "01/2025 - 01/2025",
    description: "A company focused on IT solutions, specializing in app development.",
    achievements: [
      "Participated in Android development and app development projects.",
      "Contributed to user-centric application design and development."
    ]
  },
  {
    title: "App Developer Intern",
    company: "Codec Technologies",
    location: "Remote",
    period: "01/2025 - 01/2025",
    description: "A tech company focusing on app development and technology solutions.",
    achievements: [
      "Engaged in app development and collaborated with the development team.",
      "Worked on UI/UX design aspects of mobile applications."
    ]
  },
  {
    title: "Android App Developer Intern",
    company: "NSIC Technical Services Centre",
    location: "Chennai, India",
    period: "07/2024 - 08/2024",
    description: "A company focused on IT solutions, specializing in app development.",
    achievements: [
      "Participated in Android development and app development projects."
    ]
  }
];

const Experience = () => {
  const { isDarkMode } = useTheme();
  
  return (
    <section id="experience" className={`py-20 transition-all duration-700 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-indigo-950 via-purple-900 to-slate-900' 
        : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className={`text-4xl font-bold mb-4 transition-colors duration-700 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>Experience</h2>
          
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
            My professional journey and work history
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className={`hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 transition-all duration-700 ${
            isDarkMode 
              ? 'bg-gradient-to-b from-cyan-400 to-blue-500' 
              : 'bg-gradient-to-b from-blue-400 to-indigo-500'
          }`}></div>
          
          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-full md:w-1/2 md:px-8 mb-6 md:mb-0">
                  <div className={`rounded-2xl shadow-2xl p-8 relative transition-all duration-300 hover:scale-105 hover:shadow-3xl group backdrop-blur-sm ${
                    isDarkMode 
                      ? 'bg-gradient-to-br from-indigo-800/80 to-purple-800/80 border border-slate-600/50 hover:border-cyan-400/30' 
                      : 'bg-gradient-to-br from-blue-100/80 to-purple-100/80 border border-blue-200/50 hover:border-cyan-400/30'
                  }`}>
                    <div className={`hidden md:block absolute top-10 
                      ${index % 2 === 0 ? 'left-0 transform -translate-x-full' : 'right-0 transform translate-x-full'} 
                      w-8 h-0.5 transition-all duration-700 ${
                        isDarkMode 
                          ? 'bg-gradient-to-r from-cyan-400 to-blue-500' 
                          : 'bg-gradient-to-r from-blue-400 to-indigo-500'
                      }`}></div>
                      
                    <div className={`hidden md:flex absolute top-8 
                      ${index % 2 === 0 ? 'left-0 transform -translate-x-[18px]' : 'right-0 transform translate-x-[18px]'} 
                      w-4 h-4 rounded-full border-4 shadow-lg transition-all duration-700 ${
                        isDarkMode 
                          ? 'bg-gradient-to-r from-cyan-400 to-blue-500 border-slate-900' 
                          : 'bg-gradient-to-r from-blue-400 to-indigo-500 border-blue-50'
                      }`}></div>
                      
                    <h3 className={`text-xl font-semibold mb-3 group-hover:text-cyan-400 transition-colors ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>{exp.title}</h3>
                    <div className={`flex items-center mb-4 ${
                      isDarkMode ? 'text-cyan-400' : 'text-blue-600'
                    }`}>
                      <Building2 size={16} className="mr-2" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className={`flex items-center text-sm px-3 py-1 rounded-full backdrop-blur-sm ${
                        isDarkMode 
                          ? 'text-slate-400 bg-slate-800/50' 
                          : 'text-gray-600 bg-white/50'
                      }`}>
                        <Calendar size={14} className="mr-2" />
                        <span>{exp.period}</span>
                      </div>
                      <div className={`flex items-center text-sm px-3 py-1 rounded-full backdrop-blur-sm ${
                        isDarkMode 
                          ? 'text-slate-400 bg-slate-800/50' 
                          : 'text-gray-600 bg-white/50'
                      }`}>
                        <MapPin size={14} className="mr-2" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    
                    <p className={`mb-6 leading-relaxed ${
                      isDarkMode ? 'text-slate-300' : 'text-gray-700'
                    }`}>{exp.description}</p>
                    
                    <div className="space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start">
                          <div className={`mt-2 min-w-2 h-2 w-2 rounded-full mr-4 transition-all duration-700 ${
                            isDarkMode 
                              ? 'bg-gradient-to-r from-cyan-400 to-blue-500' 
                              : 'bg-gradient-to-r from-blue-400 to-indigo-500'
                          }`}></div>
                          <p className={`leading-relaxed ${
                            isDarkMode ? 'text-slate-300' : 'text-gray-700'
                          }`}>{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="hidden md:block w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;