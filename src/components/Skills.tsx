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
  "Mobile Development": <FileCode size={24} />,
  "Data Analytics": <Database size={24} />,
  "UI/UX Design": <Layout size={24} />,
  "Creative Design": <PenTool size={24} />,
  "Certifications": <Trophy size={24} />
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-blue-600 mb-6"></div>
          <p className="text-gray-600 text-center max-w-2xl">
            My technical skills and professional certifications
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Technical Skills</h3>
            
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700">{skill.name}</span>
                    <span className="text-gray-600">{skill.proficiency}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-blue-600 h-2.5 rounded-full transition-all duration-700 ease-out"
                      style={{ width: `${skill.proficiency}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Skill Categories */}
            <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
              {Object.entries(skillIcons).map(([category, icon], index) => (
                <div key={index} className="flex flex-col items-center p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-blue-600 mb-2">
                    {icon}
                  </div>
                  <span className="text-gray-800 text-center font-medium">{category}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Certifications</h3>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-white p-4 rounded-md shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-gray-800">{cert.name}</h4>
                    <p className="text-gray-600 text-sm">{cert.issuer}</p>
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