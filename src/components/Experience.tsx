import { Building2, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: "Placement Coordinator",
    Company: "Paavai Institutions",
    location: "Tamil Nadu, India",
    period: "09/2023 - Present",
    description: "Leading the Students as Placement support for a Skills development.",
    achievements: [
      "Developed the comprehensive experiences to enhance learning for the knowledge and expertise."
    ]
  },
  {
    title: "Chief Marketing Officer",
    company: "VCZ RECRUITMENT",
    location: "Zug, Switzerland",
    period: "04/2025 - 05/2025",
    description: "Leading strategic marketing initiatives for a cutting-edge recruitment technology company.",
    achievements: [
      "Spearheading comprehensive training programs to enhance organizational knowledge and expertise."
    ]
  },
  {
    title: "Mobile Development Intern",
    company: "Corizo EduTech",
    location: "Bangalore, India",
    period: "04/2025 - 05/2025",
    description: "Specialized in innovative IT solutions with focus on advanced mobile application development.",
    achievements: [
      "Contributed to enterprise-level Android development projects and mobile app architecture."
    ]
  },
  {
    title: "Web Development Intern",
    company: "InternPe",
    location: "Jaipur, India",
    period: "01/2025 - 03/2025",
    description: "Focused on comprehensive IT solutions specializing in modern web development technologies.",
    achievements: [
      "Developed responsive web applications using cutting-edge frameworks and technologies."
    ]
  },
  {
    title: "Android Development Intern",
    company: "CodTech IT Solutions",
    location: "Hyderabad, India",
    period: "01/2025 - 01/2025",
    description: "Specialized in mobile application development with emphasis on user experience design.",
    achievements: [
      "Engineered Android applications with focus on performance optimization.",
      "Collaborated on user-centric application design and development methodologies."
    ]
  },
  {
    title: "Mobile App Development Intern",
    company: "Codec Technologies",
    location: "Mumbai, India",
    period: "01/2025 - 01/2025",
    description: "Technology innovation company focusing on next-generation mobile solutions.",
    achievements: [
      "Participated in full-stack mobile development and agile development practices.",
      "Contributed to UI/UX design optimization for enhanced user engagement."
    ]
  },
  {
    title: "Technical Development Intern",
    company: "NSIC Technical Services Centre",
    location: "Chennai, India",
    period: "07/2024 - 08/2024",
    description: "Government technical services organization specializing in industrial IT solutions.",
    achievements: [
      "Developed Android applications for industrial automation and process optimization."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Professional Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mb-6"></div>
          <p className="text-slate-400 text-center max-w-2xl text-lg">
            My journey through innovative technology companies and impactful projects
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-amber-400 via-orange-500 to-amber-400 opacity-30"></div>
          
          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`flex flex-col lg:flex-row ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="w-full lg:w-1/2 lg:px-8 mb-6 lg:mb-0">
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-2xl p-8 relative transition-all duration-300 hover:scale-105 hover:shadow-amber-500/10 border border-slate-700/50 hover:border-amber-400/30">
                    <div className="hidden lg:block absolute top-12 
                      ${index % 2 === 0 ? 'left-0 transform -translate-x-full' : 'right-0 transform translate-x-full'} 
                      w-8 h-1 bg-gradient-to-r from-amber-400 to-orange-500"></div>
                      
                    <div className="hidden lg:flex absolute top-10 
                      ${index % 2 === 0 ? 'left-0 transform -translate-x-[21px]' : 'right-0 transform translate-x-[21px]'} 
                      w-6 h-6 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 border-4 border-slate-900 shadow-lg"></div>
                      
                    <h3 className="text-2xl font-bold mb-3 text-white">{exp.title}</h3>
                    <div className="flex items-center text-amber-400 mb-6">
                      <Building2 size={18} className="mr-3" />
                      <span className="font-semibold text-lg">{exp.company}</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-6 mb-6">
                      <div className="flex items-center text-slate-400">
                        <Calendar size={16} className="mr-2 text-amber-400" />
                        <span className="font-medium">{exp.period}</span>
                      </div>
                      <div className="flex items-center text-slate-400">
                        <MapPin size={16} className="mr-2 text-amber-400" />
                        <span className="font-medium">{exp.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-slate-300 mb-6 leading-relaxed">{exp.description}</p>
                    
                    <div className="space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start">
                          <div className="mt-2 min-w-4 h-4 w-4 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mr-4 flex-shrink-0"></div>
                          <p className="text-slate-300 leading-relaxed">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="hidden lg:block w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;