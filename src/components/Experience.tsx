import { Building2, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: "Chief Marketing Officer",
    company: "VCZ RECRUITMENT",
    location: "Zug, Switzerland",
    period: "04/2025 - Present",
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
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Experience</h2>
          <div className="w-20 h-1 bg-blue-600 mb-6"></div>
          <p className="text-gray-600 text-center max-w-2xl">
            My professional journey and work history
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
          
          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-full md:w-1/2 md:px-8 mb-6 md:mb-0">
                  <div className="bg-white rounded-lg shadow-md p-6 relative transition-transform hover:scale-105 hover:shadow-lg">
                    <div className="hidden md:block absolute top-8 
                      ${index % 2 === 0 ? 'left-0 transform -translate-x-full' : 'right-0 transform translate-x-full'} 
                      w-8 h-0.5 bg-gray-200"></div>
                      
                    <div className="hidden md:flex absolute top-6 
                      ${index % 2 === 0 ? 'left-0 transform -translate-x-[18px]' : 'right-0 transform translate-x-[18px]'} 
                      w-4 h-4 rounded-full bg-blue-600 border-4 border-white"></div>
                      
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">{exp.title}</h3>
                    <div className="flex items-center text-blue-600 mb-4">
                      <Building2 size={16} className="mr-2" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center text-gray-600 text-sm">
                        <Calendar size={14} className="mr-1" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center text-gray-600 text-sm">
                        <MapPin size={14} className="mr-1" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4">{exp.description}</p>
                    
                    <div>
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start mb-2">
                          <div className="mt-1 min-w-3 h-3 w-3 bg-blue-600 rounded-full mr-3"></div>
                          <p className="text-gray-700">{achievement}</p>
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