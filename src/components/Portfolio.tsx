import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

// Project data
const projects = [
  {
    id: 1,
    title: "Fitness Tracker App",
    category: "Mobile App",
    image: "https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "A comprehensive fitness tracking application with workout plans, nutrition tracking, and progress visualization.",
    technologies: ["Java", "Android Studio", "Firebase"],
    links: {
      demo: "#",
      github: "#"
    }
  },
  {
    id: 2,
    title: "E-commerce Platform",
    category: "Web Development",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "A responsive e-commerce website with product catalog, shopping cart, and secure payment integration.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
    links: {
      demo: "#",
      github: "#"
    }
  }
];

// Categories for filtering
const categories = ["All", "Mobile App", "Web Development"];

const Portfolio = () => {
  const [filter, setFilter] = useState("All");
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Portfolio</h2>
          <div className="w-20 h-1 bg-blue-600 mb-6"></div>
          <p className="text-gray-600 text-center max-w-2xl">
            Showcasing my best projects and technical achievements
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full transition-colors ${
                filter === category 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    <p className="text-sm opacity-90">{project.category}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-5">
                <p className="text-gray-700 mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    {activeProject === project.id ? "View Less" : "View Details"}
                  </button>
                  
                  <div className="flex gap-3">
                    <a 
                      href={project.links.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-gray-900 transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <Github size={18} />
                    </a>
                    <a 
                      href={project.links.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-gray-900 transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
                
                {/* Expanded Details */}
                {activeProject === project.id && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <h4 className="font-medium text-gray-800 mb-2">Project Details</h4>
                    <p className="text-gray-700 mb-3">{project.description}</p>
                    
                    <div className="flex gap-3 mt-4">
                      <a 
                        href={project.links.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 transition-colors flex items-center gap-1"
                      >
                        <ExternalLink size={14} /> Live Demo
                      </a>
                      <a 
                        href={project.links.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-gray-800 text-white rounded-md text-sm hover:bg-gray-900 transition-colors flex items-center gap-1"
                      >
                        <Github size={14} /> Source Code
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;