import { useState } from 'react';
import { ExternalLink, Github, Filter, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import type { Project } from '../types/types';

const projects: Project[] = [
  {
    id: 1,
    title: "Brainwave Monitoring & Stress Alert System with AI Smart Therapy",
    category: "Healthcare",
    image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "A comprehensive cybersecurity mobile application providing real-time threat detection, secure browsing, and device protection. Built with Android Studio and integrated with modern security APIs.",
    technologies: ["Visual Studio", "AI", "Firebase", "IoT", "Cloud"],
    links: {
      demo: "https://linktr.ee/Manoj_18",
      github: "https://github.com/Manojkumar945"
    }
  },
  {
    id: 2,
    title: "Personal Portfolio",
    category: "AI",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "A full-featured e-commerce mobile application with user authentication, product catalog, shopping cart, and secure payment integration. Focused on smooth user experience and modern design patterns.",
    technologies: ["AI", "HTML", "CSS", "JavaScript", "React Native", "JSON", "Git"],
    links: {
      demo: "https://linktr.ee/Manoj_18",
      github: "https://github.com/Manojkumar945"
    }
  },
  {
    id: 3,
    title: "Travel Route Planner",
    category: "Front End",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Real-time weather application with location-based forecasts, interactive maps, and detailed weather metrics. Features beautiful UI/UX with smooth animations and transitions.",
    technologies: ["Visual Studio", "HTML", "CSS", "JavaScript", "Route Analysis"],
    links: {
      demo: "https://linktr.ee/Manoj_18",
      github: "https://github.com/Manojkumar945"
    }
  }
];

const categories = ["All", "Healthcare", "AI", "Front End"];

const Projects = () => {
  const { isDarkMode } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className={`py-20 transition-all duration-700 ${
      isDarkMode
        ? 'bg-gradient-to-br from-indigo-950 via-purple-900 to-slate-900'
        : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className={`text-4xl font-bold mb-4 transition-colors duration-700 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>Projects</h2>

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
            A showcase of my recent work and development projects
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className={`flex items-center gap-2 px-4 py-2 rounded-xl ${
            isDarkMode ? 'text-cyan-400' : 'text-blue-600'
          }`}>
            <Filter size={20} />
            <span className="font-medium">Filter:</span>
          </div>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                  : isDarkMode
                    ? 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-600/50'
                    : 'bg-white/50 text-gray-700 hover:bg-white/80 border border-gray-200/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className={`group rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer backdrop-blur-sm ${
                isDarkMode
                  ? 'bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-600/50 hover:border-cyan-400/50'
                  : 'bg-gradient-to-br from-white/80 to-blue-50/80 border border-blue-200/50 hover:border-cyan-400/50'
              }`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 transition-opacity duration-300 ${
                  isDarkMode
                    ? 'bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent'
                    : 'bg-gradient-to-t from-blue-900/30 via-blue-900/20 to-transparent'
                }`}></div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${
                    isDarkMode
                      ? 'bg-cyan-500/80 backdrop-blur-sm'
                      : 'bg-blue-600/80 backdrop-blur-sm'
                  }`}>
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {project.title}
                </h3>
                <p className={`mb-4 line-clamp-3 leading-relaxed ${
                  isDarkMode ? 'text-slate-400' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                        isDarkMode
                          ? 'bg-slate-700/50 text-slate-300'
                          : 'bg-gray-100/50 text-gray-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      isDarkMode ? 'text-cyan-400' : 'text-blue-600'
                    }`}>
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-lg transition-all duration-300 font-medium"
                  >
                    <ExternalLink size={16} />
                    <span>View</span>
                  </a>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 font-medium backdrop-blur-sm ${
                      isDarkMode
                        ? 'bg-slate-700/50 hover:bg-slate-600/50 text-slate-300 border border-slate-600/50'
                        : 'bg-white/50 hover:bg-white/80 text-gray-700 border border-gray-200/50'
                    }`}
                  >
                    <Github size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className={`text-xl ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
              No projects found in this category.
            </p>
          </div>
        )}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm transition-all duration-300"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl transition-all duration-300 ${
              isDarkMode ? 'bg-slate-900' : 'bg-white'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className={`absolute top-4 right-4 z-10 p-2 rounded-full transition-all duration-300 ${
                isDarkMode
                  ? 'bg-slate-800/80 hover:bg-slate-700/80 text-slate-300 hover:text-white'
                  : 'bg-white/80 hover:bg-white text-gray-600 hover:text-gray-900'
              }`}
            >
              <X size={24} />
            </button>

            {/* Modal Content */}
            <div className="relative">
              {/* Project Image */}
              <div className="relative h-64 md:h-96 overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 ${
                  isDarkMode
                    ? 'bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent'
                    : 'bg-gradient-to-t from-white via-white/50 to-transparent'
                }`}></div>
              </div>

              {/* Project Details */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className={`text-3xl font-bold mb-2 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {selectedProject.title}
                    </h2>
                    <span className={`inline-block px-4 py-1 rounded-full text-sm font-medium text-white ${
                      isDarkMode
                        ? 'bg-cyan-500/80'
                        : 'bg-blue-600/80'
                    }`}>
                      {selectedProject.category}
                    </span>
                  </div>
                </div>

                <p className={`text-lg leading-relaxed mb-6 ${
                  isDarkMode ? 'text-slate-300' : 'text-gray-700'
                }`}>
                  {selectedProject.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h3 className={`text-xl font-semibold mb-3 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                          isDarkMode
                            ? 'bg-slate-800 text-slate-300 border border-slate-700'
                            : 'bg-gray-100 text-gray-700 border border-gray-200'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={selectedProject.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-xl transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
                  >
                    <ExternalLink size={20} />
                    <span>View Live Demo</span>
                  </a>
                  <a
                    href={selectedProject.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 font-medium shadow-lg hover:shadow-xl backdrop-blur-sm ${
                      isDarkMode
                        ? 'bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-600'
                        : 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-200'
                    }`}
                  >
                    <Github size={20} />
                    <span>View on GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
