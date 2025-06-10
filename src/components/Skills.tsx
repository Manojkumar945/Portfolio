import { Code, FileCode, Database, Layout, PenTool, Trophy, Star, Award, CheckCircle, Zap } from 'lucide-react';

// Technical skills with proficiency levels and categories
const technicalSkills = [
  { name: "HTML", proficiency: 60, category: "Frontend", icon: "🌐", color: "from-orange-400 to-red-500" },
  { name: "Java", proficiency: 50, category: "Backend", icon: "☕", color: "from-blue-400 to-indigo-500" },
  { name: "Python", proficiency: 70, category: "Programming", icon: "🐍", color: "from-green-400 to-blue-500" },
  { name: "Android Studio", proficiency: 70, category: "Mobile", icon: "📱", color: "from-green-400 to-teal-500" },
  { name: "Microsoft Excel", proficiency: 75, category: "Analytics", icon: "📊", color: "from-emerald-400 to-cyan-500" },
  { name: "Logo Design", proficiency: 65, category: "Design", icon: "🎨", color: "from-purple-400 to-pink-500" }
];

// Certifications with enhanced details
const certifications = [
  { 
    name: "Data Analytics with Python", 
    issuer: "NPTEL Online Certifications",
    type: "Technical",
    year: "2024",
    icon: "📊",
    color: "from-blue-500 to-cyan-500"
  },
  { 
    name: "Raspberry Pi Technical Trainer", 
    issuer: "Paavai Engineering College",
    type: "Hardware",
    year: "2024",
    icon: "🔧",
    color: "from-green-500 to-teal-500"
  },
  { 
    name: "Introduction to Microsoft Excel", 
    issuer: "Coursera Project Network",
    type: "Analytics",
    year: "2024",
    icon: "📈",
    color: "from-emerald-500 to-green-500"
  },
  { 
    name: "Mobile App Development", 
    issuer: "Infosys Springboard",
    type: "Development",
    year: "2024",
    icon: "📱",
    color: "from-purple-500 to-indigo-500"
  },
  { 
    name: "Global Immersion Program", 
    issuer: "UMPSA University Malaysia",
    type: "Academic",
    year: "2024",
    icon: "🌍",
    color: "from-orange-500 to-red-500"
  },
  { 
    name: "Cloud Computing", 
    issuer: "NPTEL Online Certifications",
    type: "Cloud",
    year: "2024",
    icon: "☁️",
    color: "from-sky-500 to-blue-500"
  },
  { 
    name: "Google AI-ML", 
    issuer: "AICTE Eduskills Foundation",
    type: "AI/ML",
    year: "2024",
    icon: "🤖",
    color: "from-violet-500 to-purple-500"
  },
  { 
    name: "Google Android Developer", 
    issuer: "AICTE Eduskills Foundation",
    type: "Mobile",
    year: "2024",
    icon: "🚀",
    color: "from-green-500 to-emerald-500"
  },
  { 
    name: "Campus Ambassador Program", 
    issuer: "EXIMIUS - IIM Bangalore",
    type: "Leadership",
    year: "2024",
    icon: "👑",
    color: "from-yellow-500 to-orange-500"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-indigo-900/80 via-purple-900/60 to-slate-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mb-6"></div>
          <p className="text-slate-400 text-center max-w-2xl text-lg">
            My technical skills and professional certifications
          </p>
        </div>
        
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16">
          {/* Technical Skills - Card-based Design */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl shadow-lg">
                <Zap size={24} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white">Technical Skills</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="group relative overflow-hidden">
                  <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm border border-slate-600/50 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                    {/* Skill Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <div>
                          <h4 className="font-bold text-white text-lg group-hover:text-cyan-400 transition-colors">
                            {skill.name}
                          </h4>
                          <span className="text-xs text-slate-400 bg-slate-700/50 px-2 py-1 rounded-full">
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
                          className="text-slate-700"
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
                                : 'bg-slate-600'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-slate-400">
                        {skill.proficiency >= 70 ? 'Expert' : skill.proficiency >= 50 ? 'Intermediate' : 'Beginner'}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications - Timeline Design */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl shadow-lg">
                <Award size={24} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white">Certifications</h3>
            </div>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 via-cyan-400 to-blue-500"></div>
              
              <div className="space-y-6 max-h-[600px] overflow-y-auto custom-scrollbar pr-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="relative flex items-start gap-6 group">
                    {/* Timeline Dot */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${cert.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-lg">{cert.icon}</span>
                      </div>
                    </div>
                    
                    {/* Certification Card */}
                    <div className="flex-1 bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm border border-slate-600/50 rounded-xl p-6 hover:border-purple-400/50 transition-all duration-300 hover:shadow-xl group-hover:transform group-hover:-translate-y-1">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h4 className="font-bold text-white text-lg mb-2 group-hover:text-purple-400 transition-colors">
                            {cert.name}
                          </h4>
                          <p className="text-slate-400 text-sm mb-2">{cert.issuer}</p>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <span className={`text-xs px-3 py-1 rounded-full bg-gradient-to-r ${cert.color} text-white font-medium`}>
                            {cert.type}
                          </span>
                          <span className="text-xs text-slate-500">{cert.year}</span>
                        </div>
                      </div>
                      
                      {/* Verification Badge */}
                      <div className="flex items-center gap-2 text-green-400">
                        <CheckCircle size={16} />
                        <span className="text-xs font-medium">Verified Certificate</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Certification Summary */}
            <div className="mt-8 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-2xl p-6 border border-purple-400/20">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Total Certifications</h4>
                  <p className="text-slate-400">Continuously expanding knowledge</p>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-bold text-purple-400">{certifications.length}+</div>
                  <div className="text-sm text-slate-400">Verified</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;