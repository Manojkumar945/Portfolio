import { Code, FileCode, Database, Layout, PenTool, Trophy } from 'lucide-react';

// Technical skills with proficiency levels
const technicalSkills = [
  { name: "HTML", proficiency: 60 },
  { name: "Java", proficiency: 50 },
  { name: "Python", proficiency: 70 },
  { name: "Android Studio", proficiency: 70 },
  { name: "Microsoft Excel", proficiency: 75 },
  { name: "Logo Design", proficiency: 65 }
];

// Certifications
const certifications = [
  { name: "Data Analytics with Python", issuer: "NPTEL Online Certifications" },
  { name: "Raspberry Pi Technical Trainer", issuer: "Paavai Engineering College" },
  { name: "Introduction to Microsoft Excel", issuer: "Coursera Project Network" },
  { name: "Mobile App Development", issuer: "Infosys Springboard" },
  { name: "Global Immersion Program", issuer: "UMPSA University Malaysia" },
  { name: "Cloud Computing", issuer: "NPTEL Online Certifications" },
  { name: "Google AI-ML", issuer: "AICTE Eduskills Foundation" },
  { name: "Google Android Developer", issuer: "AICTE Eduskills Foundation" },
  { name: "Campus Ambassador Program", issuer: "EXIMIUS - IIM Bangalore" }
];

// Skill category icons
const skillIcons = {
  "Web Development": <Code size={24} />,
  "Application Development": <FileCode size={24} />,
  "MS Excel": <Database size={24} />,
  "UI/UX Design": <Layout size={24} />,
  "Creative Design": <PenTool size={24} />,
  "Certifications": <Trophy size={24} />
};

const Skills = () => {
  return (
    <section id="skills\" className="py-20 bg-gradient-to-br from-indigo-900/80 via-purple-900/60 to-slate-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-white">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mb-6"></div>
          <p className="text-slate-400 text-center max-w-2xl text-lg">
            My technical skills and professional certifications
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-white">Technical Skills</h3>
            
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between mb-3">
                    <span className="font-medium text-slate-300 group-hover:text-cyan-400 transition-colors">{skill.name}</span>
                    <span className="text-cyan-400 font-semibold">{skill.proficiency}%</span>
                  </div>
                  <div className="w-full bg-slate-700/50 rounded-full h-3 overflow-hidden backdrop-blur-sm">
                    <div 
                      className="bg-gradient-to-r from-cyan-400 to-blue-500 h-3 rounded-full transition-all duration-1000 ease-out shadow-lg"
                      style={{ width: `${skill.proficiency}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Skill Categories */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
              {Object.entries(skillIcons).map(([category, icon], index) => (
                <div key={index} className="flex flex-col items-center p-6 bg-gradient-to-br from-indigo-800/80 to-purple-800/80 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-600/50 hover:border-cyan-400/30 group backdrop-blur-sm">
                  <div className="text-cyan-400 mb-3 group-hover:scale-110 transition-transform">
                    {icon}
                  </div>
                  <span className="text-slate-300 text-center font-medium text-sm group-hover:text-white transition-colors">{category}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-white">Certifications</h3>
            
            <div className="bg-gradient-to-br from-indigo-800/80 to-purple-800/80 rounded-2xl p-8 border border-slate-600/50 backdrop-blur-sm">
              <div className="space-y-4 max-h-96 overflow-y-auto custom-scrollbar">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-slate-800/60 p-5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-600/50 hover:border-cyan-400/30 group backdrop-blur-sm">
                    <h4 className="font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">{cert.name}</h4>
                    <p className="text-slate-400 text-sm">{cert.issuer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;