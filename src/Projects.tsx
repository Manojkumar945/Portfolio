import { Code2, Calendar, ExternalLink, Github } from 'lucide-react';
import { useTheme } from './ThemeContext';

const projects = [
  {
    title: "Brainwave Monitoring and Stress Alert System with AI Smart Therapy",
    subtitle: "Final Year Project",
    description: "To Predict the Stress Level, Automated Therapy and Caretaker Alert System.",
    startDate: "August 21, 2025",
    endDate: "Present",
    technologies: ["AI/ML", "Python", "IoT", "Real-time Monitoring"],
    link: "#"
  },
  {
    title: "Personal Portfolio Website",
    description: "Built a responsive site to showcase my experiences and skills.",
    startDate: "July 23, 2025",
    endDate: "September 10, 2025",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    link: "#"
  },
  {
    title: "Travel Route Planner Website",
    description: "Built a responsive site to expose the Travel Routes and its expenses.",
    startDate: "June 25, 2025",
    endDate: "July 14, 2025",
    technologies: ["React", "Maps API", "Node.js", "MongoDB"],
    link: "#"
  }
];

const Projects = () => {
  const { isDarkMode } = useTheme();

  return (
    <section id="projects" className={`py-20 transition-all duration-700 ${
      isDarkMode
        ? 'bg-gradient-to-br from-indigo-950 via-purple-900 to-slate-900'
        : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
    }`}>
      <div className="container mx-auto px-6">
        <h2 className={`text-4xl font-bold text-center mb-16 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Projects</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className={`group p-8 rounded-2xl backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:scale-105 ${
              isDarkMode
                ? 'bg-gradient-to-br from-indigo-800/80 to-purple-800/80 border border-slate-600/50 hover:border-cyan-400/50'
                : 'bg-gradient-to-br from-blue-100/80 to-purple-100/80 border border-blue-200/50 hover:border-cyan-400/50'
            }`}>
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  {project.subtitle && (
                    <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 ${
                      isDarkMode
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                        : 'bg-gradient-to-r from-blue-400 to-indigo-400 text-white'
                    }`}>
                      {project.subtitle}
                    </span>
                  )}
                  <h3 className={`text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {project.title}
                  </h3>
                </div>
                <div className="ml-4 p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl">
                  <Code2 size={24} className="text-white" />
                </div>
              </div>

              <p className={`mb-6 text-lg leading-relaxed ${
                isDarkMode ? 'text-slate-300' : 'text-gray-700'
              }`}>
                {project.description}
              </p>

              <div className={`flex items-center gap-2 mb-6 text-sm ${
                isDarkMode ? 'text-slate-400' : 'text-gray-600'
              }`}>
                <Calendar size={16} />
                <span>{project.startDate} - {project.endDate}</span>
              </div>

              <div className="mb-8">
                <div className={`text-sm font-semibold mb-3 ${
                  isDarkMode ? 'text-slate-300' : 'text-gray-700'
                }`}>Technologies:</div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className={`text-xs px-3 py-1 rounded-full backdrop-blur-sm ${
                      isDarkMode
                        ? 'bg-slate-800/50 border border-slate-600/50 text-slate-300'
                        : 'bg-white/50 border border-gray-300/50 text-gray-700'
                    }`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href={project.link}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-lg transition-all duration-300 shadow-lg font-medium"
                >
                  <Github size={18} />
                  View Code
                </a>
                <a
                  href={project.link}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 shadow-lg font-medium backdrop-blur-sm ${
                    isDarkMode
                      ? 'bg-slate-800/50 border border-slate-600/50 text-slate-300 hover:bg-slate-700/50'
                      : 'bg-white/50 border border-gray-300/50 text-gray-700 hover:bg-white/70'
                  }`}
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
