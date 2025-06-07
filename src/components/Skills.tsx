import { Code, FileCode, Database, Layout, PenTool, Trophy } from 'lucide-react';

// Technical skills with proficiency levels
const technicalSkills = [
  { name: "HTML/CSS", proficiency: 85 },
  { name: "Java", proficiency: 75 },
  { name: "Python", proficiency: 80 },
  { name: "Android Studio", proficiency: 85 },
  { name: "Microsoft Excel", proficiency: 90 },
  { name: "UI/UX Design", proficiency: 75 }
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
const skillCategories = [
  { name: "Web Development", icon: <Code size={24} />, color: "from-blue-500 to-cyan-500" },
  { name: "Mobile Development", icon: <FileCode size={24} />, color: "from-green-500 to-emerald-500" },
  { name: "Data Analytics", icon: <Database size={24} />, color: "from-purple-500 to-violet-500" },
  { name: "UI/UX Design", icon: <Layout size={24} />, color: "from-pink-500 to-rose-500" },
  { name: "Creative Design", icon: <PenTool size={24} />, color: "from-orange-500 to-red-500" },
  { name: "Certifications", icon: <Trophy size={24} />, color: "from-amber-500 to-yellow-500" }
];

const Skills = () => {
  return (
    <section id="skills\" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mb-6"></div>
          <p className="text-slate-400 text-center max-w-2xl text-lg">
            Technical proficiency and professional certifications that drive innovation
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-white">Technical Proficiency</h3>
            
            <div className="space-y-8">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between mb-3">
                    <span className="font-semibold text-slate-300 group-hover:text-amber-400 transition-colors">{skill.name}</span>
                    <span className="text-amber-400 font-bold">{skill.proficiency}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-amber-400 to-orange-500 h-3 rounded-full transition-all duration-1000 ease-out shadow-lg"
                      style={{ width: `${skill.proficiency}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Skill Categories */}
            <div className="mt-12">
              <h4 className="text-xl font-semibold mb-6 text-white">Expertise Areas</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {skillCategories.map((category, index) => (
                  <div key={index} className="group bg-slate-700/30 backdrop-blur-sm p-6 rounded-xl border border-slate-600/30 hover:border-amber-400/50 transition-all duration-300 transform hover:scale-105">
                    <div className={`text-transparent bg-clip-text bg-gradient-to-r ${category.color} mb-3 group-hover:scale-110 transition-transform duration-300`}>
                      {category.icon}
                    </div>
                    <span className="text-slate-300 text-sm font-medium group-hover:text-white transition-colors">{category.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-white">Professional Certifications</h3>
            
            <div className="bg-slate-700/20 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/30">
              <div className="space-y-4 max-h-96 overflow-y-auto custom-scrollbar">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-600/30 hover:border-amber-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10 group">
                    <h4 className="font-semibold text-white mb-2 group-hover:text-amber-400 transition-colors">{cert.name}</h4>
                    <p className="text-slate-400 text-sm flex items-center">
                      <Trophy size={14} className="mr-2 text-amber-400" />
                      {cert.issuer}
                    </p>
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