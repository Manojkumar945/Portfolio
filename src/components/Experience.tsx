import { Building2, Calendar, MapPin } from 'lucide-react';

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
    title: "Chief Marketing Officer",
    company: "VCZ RECRUITMENT",
    location: "Zug, Switzerland",
    period: "04/2025 - 06/2025",
    description: "A Company focused on Sales and Marketing Technologies.",
    achievements: [
      "Training Period enhances the Knowledgeable experiences."
    ]
  },
  {
    title: "Intern",
    company: "Corizo EduTech",
    location: "Bangalore, India",
    period: "04/2025 - 05/2025",
    description: "A company focused on IT solutions, specializing in app development.",
    achievements: [
      "Participated in Android development and app development projects."
    ]
  },
  {
    title: "Intern",
    company: "InternPe",
    location: "Jaipur, India",
    period: "01/2025 - 03/2025",
    description: "A Company focused on IT Solutions, Specializing in Web Development.",
    achievements: [
      "Participated in Web Development and web development projects."
    ]
  },
  {
    title: "Intern",
    company: "CodTech IT Solutions",
    location: "Hyderabad, India",
    period: "01/2025 - 01/2025",
    description: "A company focused on IT solutions, specializing in app development.",
    achievements: [
      "Participated in Android development and app development projects.",
      "Contributed to user-centric application design and development."
    ]
  },
  {
    title: "Intern",
    company: "Codec Technologies",
    location: "Mumbai, India",
    period: "01/2025 - 01/2025",
    description: "A tech company focusing on app development and technology solutions.",
    achievements: [
      "Engaged in app development and collaborated with the development team.",
      "Worked on UI/UX design aspects of mobile applications."
    ]
  },
  {
    title: "Intern",
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
  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-white">Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mb-6"></div>
          <p className="text-slate-400 text-center max-w-2xl text-lg">
            My professional journey and work history
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-400 to-blue-500"></div>
          
          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-full md:w-1/2 md:px-8 mb-6 md:mb-0">
                  <div className="bg-gradient-to-br from-indigo-800/80 to-purple-800/80 rounded-2xl shadow-2xl p-8 relative transition-all duration-300 hover:scale-105 hover:shadow-3xl border border-slate-600/50 hover:border-cyan-400/30 group backdrop-blur-sm">
                    <div className={`hidden md:block absolute top-10 
                      ${index % 2 === 0 ? 'left-0 transform -translate-x-full' : 'right-0 transform translate-x-full'} 
                      w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500`}></div>
                      
                    <div className={`hidden md:flex absolute top-8 
                      ${index % 2 === 0 ? 'left-0 transform -translate-x-[18px]' : 'right-0 transform translate-x-[18px]'} 
                      w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 border-4 border-slate-900 shadow-lg`}></div>
                      
                    <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-cyan-400 transition-colors">{exp.title}</h3>
                    <div className="flex items-center text-cyan-400 mb-4">
                      <Building2 size={16} className="mr-2" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center text-slate-400 text-sm bg-slate-800/50 px-3 py-1 rounded-full backdrop-blur-sm">
                        <Calendar size={14} className="mr-2" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center text-slate-400 text-sm bg-slate-800/50 px-3 py-1 rounded-full backdrop-blur-sm">
                        <MapPin size={14} className="mr-2" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-slate-300 mb-6 leading-relaxed">{exp.description}</p>
                    
                    <div className="space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start">
                          <div className="mt-2 min-w-2 h-2 w-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mr-4"></div>
                          <p className="text-slate-300 leading-relaxed">{achievement}</p>
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