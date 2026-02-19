import { Code, FileCode, Database, Layout, PenTool, Trophy, Star, Award, CheckCircle, Zap, X, ExternalLink, Medal } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

// Technical skills with proficiency levels and categories
const technicalSkills = [
  { name: "HTML", proficiency: 70, category: "Frontend", icon: "/icons8-html5-48.png", color: "from-orange-400 to-red-500" },
  { name: "Java", proficiency: 75, category: "Programming", icon: "/icons8-java-94.png", color: "from-blue-400 to-indigo-500" },
  { name: "Python", proficiency: 75, category: "Backend", icon: "/icons8-python-48 copy.png", color: "from-green-400 to-blue-500" },
  { name: "Android Studio", proficiency: 60, category: "Mobile App", icon: "/icons8-android-studio-48.png", color: "from-green-400 to-teal-500" },
  { name: "Microsoft Excel", proficiency: 75, category: "Analytics", icon: "/icons8-ms-excel-48.png", color: "from-emerald-400 to-cyan-500" },
  { name: "Figma", proficiency: 65, category: "Design", icon: "/icons8-figma-48.png", color: "from-purple-400 to-pink-500" }
];

// Certifications with enhanced details and certificate images - NO ICONS OR DOTS
const certifications = [
  { 
    name: "National Conference (NCRTAD-25)", 
    issuer: "Bannari Amman Institute of Technology",
    type: "Recent Trends",
    year: "2025",
    color: "from-purple-500 to-indigo-500",
    image: "/conference_certificate.png",
    description: "Presented a research paper titled “Brainwave Monitoring and Stress Alert System with AI Smart Therapy” at a National-level AI and Data Science Conference."
  },
  {
    name: "Data Analytics with Python",
    issuer: "NPTEL Online Certifications",
    type: "Technical",
    year: "2025",
    color: "from-blue-500 to-cyan-500",
    image: "/data_analytics_with_python.png",
    description: "Comprehensive course covering Python programming for data analysis, statistics, and visualization techniques with 54% consolidated score."
  },
  { 
    name: "Raspberry Pi Technical Trainer", 
    issuer: "Paavai Engineering College",
    type: "Hardware",
    year: "2025",
    color: "from-green-500 to-teal-500",
    image: "/certificates/raspberry_pi_trainer_certification.png",
    description: "Technical trainer certification for latest tools including Chatbot, Raspberry Pi, and Arduino technologies for first-year students."
  },
  { 
    name: "30 days Masterclass in FullStack Web Development", 
    issuer: "Pantech AI",
    type: "Development",
    year: "2025",
    color: "from-pink-500 to-pink-500",
    image: "/manoj_kumar.s.png",
    description: "Successfully completed an intensive full stack web development masterclass covering front-end and back-end technologies."
  },
  { 
    name: "AI Tools & ChatGPT Workshop", 
    issuer: "be10x",
    type: "AI Tools",
    year: "2025",
    color: "from-red-500 to-red-500",
    image: "/ai_tools_workshop_certificate.jpg",
    description: "Completed an AI tools and ChatGPT workshop focused on rapid presentation creation, data analysis, and coding productivity."
  },
  { 
    name: "Introduction to Microsoft Excel", 
    issuer: "Coursera Project Network",
    type: "Analytics",
    year: "2024",
    color: "from-emerald-500 to-green-500",
    image: "/certificates/ms_excel_course_certificate.pdf.png",
    description: "Project-based learning covering Excel fundamentals, data analysis, and spreadsheet management through Coursera."
  },
  { 
    name: "Mobile App Development", 
    issuer: "Infosys Springboard",
    type: "Development",
    year: "2024",
    color: "from-purple-500 to-indigo-500",
    image: "/certificates/infosys_certificate.png",
    description: "Introduction to Android development covering mobile app design, development, and deployment through Infosys Springboard."
  },
  { 
    name: "Global Immersion Program", 
    issuer: "UMPSA University Malaysia",
    type: "Academic",
    year: "2024",
    color: "from-orange-500 to-red-500",
    image: "/certificates/umpsa_certificate.png",
    description: "Two-week global immersion program at Universiti Malaysia Pahang focusing on cultural exchange and international learning from November 14-27, 2024."
  },
  { 
    name: "Cloud Computing", 
    issuer: "NPTEL Online Certifications",
    type: "Cloud",
    year: "2024",
    color: "from-sky-500 to-blue-500",
    image: "/certificates/cloud_computing_(1).pdf.png",
    description: "Comprehensive course covering cloud computing concepts, services, and deployment models with 55% consolidated score from IIT Kharagpur."
  },
  { 
    name: "Google AI-ML Virtual Internship", 
    issuer: "AICTE Eduskills Foundation",
    type: "AI/ML",
    year: "2024",
    color: "from-violet-500 to-purple-500",
    image: "/certificates/google_ai-ml_certificate.pdf.png",
    description: "10-week AI-ML Virtual Internship supported by Google for Developers, covering artificial intelligence and machine learning fundamentals."
  },
  { 
    name: "Google Android Developer Virtual Internship", 
    issuer: "AICTE Eduskills Foundation",
    type: "Mobile",
    year: "2024",
    color: "from-green-500 to-emerald-500",
    image: "/certificates/google_android_developer_certificate.pdf.png",
    description: "10-week Android Developer Virtual Internship supported by Google for Developers, covering mobile app development best practices."
  },
  { 
    name: "Technical Workshop", 
    issuer: "Way2me",
    type: "Blockchain",
    year: "2024",
    color: "from-red-500 to-orange-500",
    image: "/blockchain_and_cloud_computing_workshop_certificate.jpg",
    description: "Actively participated in a three-day workshop on Blockchain and Cloud Computing, gaining practical insights into emerging technologies."
  },
  { 
    name: "Campus Ambassador Program", 
    issuer: "EXIMIUS - IIM Bangalore",
    type: "Leadership",
    year: "2024",
    color: "from-yellow-500 to-orange-500",
    image: "/eximius_campus_ambassador.jpeg",
    description: "Campus Ambassador for EXIMIUS 2024 at IIM Bangalore, contributing to making the event a success in June and July 2024."
  },
  {
    name: "PINNACLE-24 National Level Technical Symposium",
    issuer: "Coimbatore Institute of Technology",
    type: "Paper Presentation",
    year: "2024",
    color: "from-lime-500 to-lime-500",
    image: "/Symposium_Certificate.png",
    description: "Participated in a national-level technical symposium organized by the ECE Association and IETE Students' Forum."
  },
];

const awards = [
  {
    title: "Techfinix-25 Project Expo Winner",
    organization: "Paavai Engineering College",
    project: "Brainwave Monitoring & Stress Alert System",
    prize: "12.5k Rupees",
    year: "2025",
    color: "from-cyan-500 to-blue-500",
    icon: "🏆"
  }
];

const Skills = () => {
  const { isDarkMode } = useTheme();
  const [selectedCertificate, setSelectedCertificate] = useState<typeof certifications[0] | null>(null);

  const openCertificate = (cert: typeof certifications[0]) => {
    if (cert.image) {
      setSelectedCertificate(cert);
    }
  };

  const closeCertificate = () => {
    setSelectedCertificate(null);
  };

  return (
    <section id="skills" className={`relative py-20 transition-all duration-700 overflow-hidden ${
      isDarkMode
        ? 'bg-gradient-to-br from-indigo-950 via-purple-900 to-slate-900'
        : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
    }`}>
      {/* Animated Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-20 left-10 w-32 h-32 rounded-full blur-3xl animate-pulse transition-all duration-700 ${
          isDarkMode
            ? 'bg-gradient-to-r from-cyan-400/20 to-blue-500/20'
            : 'bg-gradient-to-r from-blue-400/30 to-indigo-500/30'
        }`} style={{ animation: 'float 6s ease-in-out infinite' }}></div>

        <div className={`absolute top-1/3 right-20 w-40 h-40 rounded-full blur-3xl animate-pulse transition-all duration-700 ${
          isDarkMode
            ? 'bg-gradient-to-r from-purple-400/20 to-pink-500/20'
            : 'bg-gradient-to-r from-purple-400/30 to-pink-500/30'
        }`} style={{ animation: 'float 8s ease-in-out infinite 1s' }}></div>

        <div className={`absolute bottom-32 left-1/4 w-36 h-36 rounded-full blur-3xl animate-pulse transition-all duration-700 ${
          isDarkMode
            ? 'bg-gradient-to-r from-indigo-400/20 to-purple-500/20'
            : 'bg-gradient-to-r from-indigo-400/30 to-purple-500/30'
        }`} style={{ animation: 'float 7s ease-in-out infinite 2s' }}></div>

        <div className={`absolute bottom-1/4 right-1/3 w-28 h-28 rounded-full blur-2xl animate-pulse transition-all duration-700 ${
          isDarkMode
            ? 'bg-gradient-to-r from-emerald-400/15 to-teal-500/15'
            : 'bg-gradient-to-r from-emerald-400/25 to-teal-500/25'
        }`} style={{ animation: 'float 5s ease-in-out infinite 3s' }}></div>

        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) translateX(0px); }
            25% { transform: translateY(-20px) translateX(10px); }
            50% { transform: translateY(-40px) translateX(-10px); }
            75% { transform: translateY(-20px) translateX(10px); }
          }
        `}</style>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 transition-colors duration-700 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>Skills & Certifications</h2>
          
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
            My technical skills and professional certifications with interactive certificate showcasing
          </p>
        </div>
        
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16">
          {/* Technical Skills - Card-based Design */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl shadow-lg">
                <Zap size={24} className="text-white" />
              </div>
              <h3 className={`text-3xl font-bold transition-colors duration-700 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Technical Skills</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="group relative overflow-hidden">
                  <div className={`p-6 rounded-2xl backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                    isDarkMode 
                      ? 'bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-slate-600/50 hover:border-cyan-400/50' 
                      : 'bg-gradient-to-br from-white/90 to-blue-50/90 border border-blue-200/50 hover:border-cyan-400/50'
                  }`}>
                    {/* Skill Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        {typeof skill.icon === 'string' && skill.icon.startsWith('/') ? (
                          <img 
                            src={skill.icon} 
                            alt={skill.name} 
                            className="w-8 h-8 object-contain"
                          />
                        ) : (
                          <span className="text-2xl">{skill.icon}</span>
                        )}
                        <div>
                          <h4 className={`font-bold text-lg group-hover:text-cyan-400 transition-colors ${
                            isDarkMode ? 'text-white' : 'text-gray-900'
                          }`}>
                            {skill.name}
                          </h4>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            isDarkMode 
                              ? 'text-slate-400 bg-slate-700/50' 
                              : 'text-gray-600 bg-gray-100/50'
                          }`}>
                            {skill.category}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-cyan-400">{skill.proficiency}%</div>
                      </div>
                    </div>
                    
                    {/* Circular Progress */}
                    <div className="relative w-20 h-20 mx-auto mb-4">
                      <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                        <path
                          className={isDarkMode ? 'text-slate-700' : 'text-gray-300'}
                          stroke="currentColor"
                          strokeWidth="3"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <path
                          className={`bg-gradient-to-r ${skill.color}`}
                          stroke="url(#gradient)"
                          strokeWidth="3"
                          strokeLinecap="round"
                          fill="none"
                          strokeDasharray={`${skill.proficiency}, 100`}
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#06b6d4" />
                            <stop offset="100%" stopColor="#3b82f6" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Star size={16} className="text-cyan-400" />
                      </div>
                    </div>
                    
                    {/* Proficiency Level */}
                    <div className="text-center">
                      <div className="flex justify-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full ${
                              i < Math.floor(skill.proficiency / 20) 
                                ? 'bg-gradient-to-r from-cyan-400 to-blue-500' 
                                : isDarkMode ? 'bg-slate-600' : 'bg-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className={`text-xs ${
                        isDarkMode ? 'text-slate-400' : 'text-gray-600'
                      }`}>
                        {skill.proficiency >= 70 ? 'Expert' : skill.proficiency >= 50 ? 'Intermediate' : 'Beginner'}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications - Simple List Design WITHOUT Timeline or Dots */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl shadow-lg">
                <Award size={24} className="text-white" />
              </div>
              <h3 className={`text-3xl font-bold transition-colors duration-700 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Professional Certifications</h3>
            </div>
            
            <div className="space-y-6 max-h-[700px] overflow-y-auto custom-scrollbar pr-4">
              {certifications.map((cert, index) => (
                <div key={index} className="group">
                  {/* Certification Card - No timeline dots */}
                  <div 
                    className={`p-6 rounded-xl backdrop-blur-sm transition-all duration-300 hover:shadow-xl group-hover:transform group-hover:-translate-y-1 ${
                      isDarkMode 
                        ? 'bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-slate-600/50 hover:border-purple-400/50' 
                        : 'bg-gradient-to-br from-white/90 to-blue-50/90 border border-blue-200/50 hover:border-purple-400/50'
                    } ${cert.image ? 'cursor-pointer hover:bg-slate-700/50' : ''}`}
                    onClick={() => cert.image && openCertificate(cert)}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className={`font-bold text-lg group-hover:text-purple-400 transition-colors ${
                            isDarkMode ? 'text-white' : 'text-gray-900'
                          }`}>
                            {cert.name}
                          </h4>
                          {cert.image && (
                            <ExternalLink size={16} className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                          )}
                        </div>
                        <p className={`text-sm mb-2 ${
                          isDarkMode ? 'text-slate-400' : 'text-gray-600'
                        }`}>{cert.issuer}</p>
                        <p className={`text-xs leading-relaxed ${
                          isDarkMode ? 'text-slate-300' : 'text-gray-700'
                        }`}>{cert.description}</p>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <span className={`text-xs px-3 py-1 rounded-full text-white font-medium bg-gradient-to-r ${cert.color}`}>
                          {cert.type}
                        </span>
                        <span className={`text-xs ${
                          isDarkMode ? 'text-slate-500' : 'text-gray-500'
                        }`}>{cert.year}</span>
                      </div>
                    </div>
                    
                    {/* Verification Badge */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-green-400">
                        <CheckCircle size={16} />
                        <span className="text-xs font-medium">Verified Certificate</span>
                      </div>
                      {cert.image && (
                        <span className="text-xs text-cyan-400 font-medium flex items-center gap-1">
                          <span>Click to view certificate</span>
                          <ExternalLink size={12} />
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Certification Summary */}
            <div className={`mt-8 rounded-2xl p-6 transition-all duration-700 ${
              isDarkMode 
                ? 'bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-400/20' 
                : 'bg-gradient-to-r from-purple-100/50 to-cyan-100/50 border border-purple-300/30'
            }`}>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className={`text-xl font-bold mb-2 transition-colors duration-700 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>Total Certifications</h4>
                  <p className={`transition-colors duration-700 ${
                    isDarkMode ? 'text-slate-400' : 'text-gray-600'
                  }`}>All certificates are clickable and viewable</p>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-bold text-purple-400">{certifications.length}</div>
                  <div className={`text-sm ${
                    isDarkMode ? 'text-slate-400' : 'text-gray-600'
                  }`}>Certificates</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Awards & Achievements Section */}
        <div className="mt-20 border-t pt-20 border-opacity-20" style={{borderColor: isDarkMode ? 'rgba(100, 116, 139, 0.3)' : 'rgba(59, 130, 246, 0.3)'}}>
          <div className="flex flex-col items-center mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl shadow-lg">
                <Trophy size={28} className="text-white" />
              </div>
              <h2 className={`text-4xl font-bold transition-colors duration-700 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Awards & Achievements</h2>
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
              Recognition and awards for innovative projects and contributions
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {awards.map((award, index) => (
                <div key={index} className="group">
                  <div className={`p-8 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:shadow-2xl group-hover:transform group-hover:-translate-y-2 ${
                    isDarkMode
                      ? 'bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-slate-600/50 hover:border-cyan-400/50'
                      : 'bg-gradient-to-br from-white/90 to-blue-50/90 border border-blue-200/50 hover:border-blue-400/50'
                  }`}>
                    <div className="flex items-start gap-6">
                      {/* Icon */}
                      <div className={`text-5xl flex-shrink-0 p-4 rounded-xl bg-gradient-to-r ${award.color} bg-opacity-20`}>
                        {award.icon}
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className={`text-2xl font-bold group-hover:text-cyan-400 transition-colors mb-1 ${
                              isDarkMode ? 'text-white' : 'text-gray-900'
                            }`}>
                              {award.title}
                            </h3>
                            <p className={`text-sm font-semibold mb-2 ${
                              isDarkMode ? 'text-slate-400' : 'text-gray-600'
                            }`}>
                              {award.organization}
                            </p>
                          </div>
                          <span className={`text-xs px-4 py-2 rounded-full text-white font-semibold bg-gradient-to-r ${award.color} flex-shrink-0`}>
                            {award.year}
                          </span>
                        </div>

                        {/* Project Details */}
                        <div className="space-y-3 mb-4">
                          <div>
                            <p className={`text-xs font-medium uppercase tracking-wide mb-1 ${
                              isDarkMode ? 'text-slate-500' : 'text-gray-500'
                            }`}>Project</p>
                            <p className={`text-lg font-semibold ${
                              isDarkMode ? 'text-white-400' : 'text-white-600'
                            }`}>
                              {award.project}
                            </p>
                          </div>
                          <div>
                            <p className={`text-xs font-medium uppercase tracking-wide mb-1 ${
                              isDarkMode ? 'text-slate-500' : 'text-gray-500'
                            }`}>Cash Prize</p>
                            <p className={`text-xl font-bold ${
                              isDarkMode ? 'text-yellow-400' : 'text-orange-600'
                            }`}>
                              ₹ {award.prize}
                            </p>
                          </div>
                        </div>

                        {/* Award Badge */}
                        <div className="flex items-center gap-2 text-green-400">
                          <Medal size={18} />
                          <span className="text-sm font-medium">Official Award Winner</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className={`relative max-w-5xl max-h-[95vh] w-full rounded-2xl shadow-2xl overflow-hidden ${
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
                }`}>{selectedCertificate.name}</h3>
                <p className={`text-sm ${
                  isDarkMode ? 'text-slate-400' : 'text-gray-600'
                }`}>{selectedCertificate.issuer} • {selectedCertificate.year}</p>
              </div>
              <button
                onClick={closeCertificate}
                className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                  isDarkMode 
                    ? 'bg-slate-700/50 hover:bg-slate-600/50 text-slate-300 hover:text-white' 
                    : 'bg-gray-100/50 hover:bg-gray-200/50 text-gray-600 hover:text-gray-900'
                }`}
                aria-label="Close certificate"
              >
                <X size={24} />
              </button>
            </div>
            
            {/* Modal Content */}
            <div className="p-6 overflow-auto max-h-[calc(95vh-120px)]">
              <div className="flex flex-col items-center">
                <div className="w-full max-w-4xl">
                  <img
                    src={selectedCertificate.image!}
                    alt={`${selectedCertificate.name} Certificate`}
                    className={`w-full h-auto rounded-lg shadow-lg ${
                      isDarkMode ? 'border border-slate-600/30' : 'border border-gray-200/30'
                    }`}
                    style={{ maxHeight: '75vh', objectFit: 'contain' }}
                  />
                </div>
                
                {/* Certificate Details */}
                <div className="mt-6 w-full max-w-2xl">
                  <div className={`rounded-xl p-6 ${
                    isDarkMode 
                      ? 'bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-600/30' 
                      : 'bg-gradient-to-br from-gray-50/50 to-blue-50/50 border border-gray-200/30'
                  }`}>
                    <h4 className={`text-lg font-semibold mb-3 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>Certificate Details</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className={isDarkMode ? 'text-slate-400' : 'text-gray-600'}>Course:</span>
                        <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{selectedCertificate.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className={isDarkMode ? 'text-slate-400' : 'text-gray-600'}>Issuer:</span>
                        <span className={isDarkMode ? 'text-white' : 'text-gray-900'}>{selectedCertificate.issuer}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className={isDarkMode ? 'text-slate-400' : 'text-gray-600'}>Type:</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${selectedCertificate.color}`}>
                          {selectedCertificate.type}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className={isDarkMode ? 'text-slate-400' : 'text-gray-600'}>Year:</span>
                        <span className={isDarkMode ? 'text-white' : 'text-gray-900'}>{selectedCertificate.year}</span>
                      </div>
                      <div className={`pt-3 border-t ${
                        isDarkMode ? 'border-slate-600/30' : 'border-gray-200/30'
                      }`}>
                        <p className={`text-sm leading-relaxed ${
                          isDarkMode ? 'text-slate-300' : 'text-gray-700'
                        }`}>{selectedCertificate.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Skills;