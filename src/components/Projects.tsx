import { useState } from 'react';
import { ExternalLink, Github, Filter, X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import type { Project } from '../types/types';

const projects: Project[] = [
  {
    id: 1,
    title: "Brainwave Monitoring & Stress Alert System with AI Smart Therapy",
    category: "Healthcare",
    image: "/Gemini_Generated_Image_clwlteclwlteclwl.png",
    images: [
      "/EEG_Board_Setup.jpg",
      "/EEG_Headband.jpg",
      "/Pro1.png",
      "/Pro2.png",
      "/Pro3.png",
      "/Pro4.png",
      "/Pro5.png",
      "/Pro6.png",
      "/Pro7.png"
    ],
    description: "The Brainwave Monitoring & Stress Alert System with AI Smart Therapy is an intelligent healthcare solution designed to detect and manage stress in real time. The system uses an EEG-based brainwave sensor to continuously monitor neural signals and analyze them using artificial intelligence algorithms. Based on the detected brainwave patterns, the user's mental state is classified into normal, stress, or anxiety levels.",
    technologies: ["HTML", "CSS", "JavaScript", "Visual Studio", "Firebase", "AI", "IoT", "Cloud"],
    links: {
      demo: "https://www.linkedin.com/posts/manoj-kumar-s-4a57a325b_ai-iot-eeg-activity-7415068410612727808-9o0O?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEACxP0B6cQCl5LaoYEHYyLK3VyNtqBZu-o",
      github: "https://github.com/Manojkumar945/Stress-Detector"
    }
  },
  {
    id: 2,
    title: "Personal Portfolio",
    category: "AI",
    image: "/Portfolio_Thumbnail.png",
    images: [
      "/Port1.png",
      "/Port2.png",
      "/Port3.png",
      "/Port4.png",
      "/Port5.png",
      "/Port6.png",
      "/Port7.png",
      "/Port8.png",
      "/Port9.png",
      "/Port10.png",
      "/Port11.png",
      "/Poer12.png",
      "/Port13.png",
      "/Port14.png",
      "/Port15.png"
    ],
    description: "A portfolio website shows your best work all in one place. It helps teachers, jobs, or schools learn more about you. A personal academic website can help you get noticed and trusted online.",
    technologies: ["HTML", "CSS", "JavaScript", "React Native", "JSON", "Visual Studio"],
    links: {
      demo: "https://manojkumar-portfolio-164cdc.netlify.app",
      github: "https://github.com/Manojkumar945/Portfolio"
    }
  },
  {
    id: 3,
    title: "Travel Route Planner",
    category: "Front End",
    image: "https://images.pexels.com/photos/13062236/pexels-photo-13062236.jpeg",
    images: [
      "/TRP1.png",
      "/TRP2.png",
      "/TRP3.png",
      "/TRP4.png",
      "/TRP5.png"
    ],
    description: "A journey planner, trip planner, or route planner is a specialized search engine used to find an optimal means of travelling between two or more given locations, sometimes using more than one transport mode. Searches may be optimized on different criteria, for example fastest, shortest, fewest changes, cheapest.",
    technologies: ["Visual Studio", "HTML", "CSS", "JavaScript", "Google Maps API"],
    links: {
      demo: "https://www.linkedin.com/posts/manoj-kumar-s-4a57a325b_better-planning-makes-better-journeys-activity-7350575570084130816-UDIw?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEACxP0B6cQCl5LaoYEHYyLK3VyNtqBZu-o",
      github: "https://github.com/Manojkumar945"
    }
  }
];

const categories = ["All", "Healthcare", "AI", "Front End"];

const getGalleryImages = (project: Project): string[] => {
  const seen = new Set<string>();
  seen.add(project.image);
  return (project.images ?? []).filter((img) => {
    if (seen.has(img)) return false;
    seen.add(img);
    return true;
  });
};

const Projects = () => {
  const { isDarkMode } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const galleryImages = selectedProject ? getGalleryImages(selectedProject) : [];

  const handlePrevGallery = () => {
    setCurrentGalleryIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const handleNextGallery = () => {
    setCurrentGalleryIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const handleProjectSelect = (project: Project) => {
    setSelectedProject(project);
    setCurrentGalleryIndex(0);
  };

  return (
    <section id="projects" className={`py-12 sm:py-20 transition-all duration-700 ${
      isDarkMode
        ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'
        : 'bg-gradient-to-br from-gray-50 via-white to-gray-50'
    }`}>
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-8 sm:mb-12">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 transition-colors duration-700 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>Projects</h2>

          <div className="flex items-center gap-4 mb-6">
            <div className={`h-px w-16 transition-all duration-700 ${
              isDarkMode ? 'bg-gradient-to-r from-transparent to-cyan-400' : 'bg-gradient-to-r from-transparent to-blue-600'
            }`}></div>
            <div className={`w-3 h-3 rounded-full transition-all duration-700 ${
              isDarkMode ? 'bg-gradient-to-r from-cyan-400 to-blue-500' : 'bg-gradient-to-r from-blue-600 to-cyan-500'
            }`}></div>
            <div className={`h-px w-16 transition-all duration-700 ${
              isDarkMode ? 'bg-gradient-to-l from-transparent to-cyan-400' : 'bg-gradient-to-l from-transparent to-blue-600'
            }`}></div>
          </div>

          <p className={`text-center max-w-2xl text-base sm:text-lg transition-colors duration-700 px-4 ${
            isDarkMode ? 'text-slate-400' : 'text-gray-600'
          }`}>
            A showcase of my recent work and development projects
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
          <div className={`flex items-center gap-2 px-3 py-2 rounded-xl ${isDarkMode ? 'text-cyan-400' : 'text-blue-600'}`}>
            <Filter size={18} />
            <span className="font-medium text-sm sm:text-base">Filter:</span>
          </div>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 sm:px-6 py-2 rounded-xl font-medium text-sm sm:text-base transition-all duration-300 transform hover:scale-105 ${
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleProjectSelect(project)}
              className={`group rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:scale-[1.02] sm:hover:scale-105 hover:shadow-2xl cursor-pointer backdrop-blur-sm ${
                isDarkMode
                  ? 'bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-600/50 hover:border-cyan-400/50'
                  : 'bg-gradient-to-br from-white/80 to-blue-50/80 border border-blue-200/50 hover:border-cyan-400/50'
              }`}
            >
              {/* Card Image */}
              <div className="relative overflow-hidden h-40 sm:h-48">
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
                <div className="absolute top-3 right-3">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium text-white ${
                    isDarkMode ? 'bg-cyan-500/80 backdrop-blur-sm' : 'bg-blue-600/80 backdrop-blur-sm'
                  }`}>
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <h3 className={`text-base sm:text-xl font-bold mb-2 sm:mb-3 group-hover:text-cyan-400 transition-colors leading-snug ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {project.title}
                </h3>
                <p className={`mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3 leading-relaxed text-sm sm:text-base ${
                  isDarkMode ? 'text-slate-400' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span key={index} className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-medium ${
                      isDarkMode ? 'bg-slate-700/50 text-slate-300' : 'bg-gray-100/50 text-gray-700'
                    }`}>
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-medium ${
                      isDarkMode ? 'text-cyan-400' : 'text-blue-600'
                    }`}>
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex gap-2 sm:gap-3">
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-lg transition-all duration-300 font-medium text-sm sm:text-base"
                  >
                    <ExternalLink size={14} className="sm:hidden" />
                    <ExternalLink size={16} className="hidden sm:block" />
                    <span>View</span>
                  </a>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className={`flex items-center justify-center gap-2 px-3 sm:px-4 py-2 rounded-lg transition-all duration-300 font-medium backdrop-blur-sm ${
                      isDarkMode
                        ? 'bg-slate-700/50 hover:bg-slate-600/50 text-slate-300 border border-slate-600/50'
                        : 'bg-white/50 hover:bg-white/80 text-gray-700 border border-gray-200/50'
                    }`}
                  >
                    <Github size={14} className="sm:hidden" />
                    <Github size={16} className="hidden sm:block" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className={`text-lg sm:text-xl ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
              No projects found in this category.
            </p>
          </div>
        )}
      </div>

      {/* PROJECT MODAL */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4"
          style={{ backgroundColor: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(6px)' }}
          onClick={() => setSelectedProject(null)}
        >
          <div
            className={`relative w-full sm:max-w-4xl rounded-t-3xl sm:rounded-2xl shadow-2xl overflow-hidden ${
              isDarkMode ? 'bg-slate-900' : 'bg-white'
            }`}
            style={{ maxHeight: '92vh' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className={`absolute top-3 right-3 z-20 p-2 rounded-full transition-all duration-300 shadow-lg ${
                isDarkMode
                  ? 'bg-slate-800/90 hover:bg-slate-700 text-slate-300 hover:text-white'
                  : 'bg-white/90 hover:bg-white text-gray-600 hover:text-gray-900'
              }`}
            >
              <X size={20} />
            </button>

            {/* Mobile drag indicator */}
            <div className="flex justify-center pt-3 pb-1 sm:hidden">
              <div className={`w-10 h-1 rounded-full ${isDarkMode ? 'bg-slate-600' : 'bg-gray-300'}`}></div>
            </div>

            {/* Scrollable content */}
            <div className="overflow-y-auto" style={{ maxHeight: '92vh' }}>
              {/* Cover image — responsive height */}
              <div
                className="relative overflow-hidden cursor-zoom-in"
                style={{ height: 'clamp(180px, 35vw, 320px)' }}
                onClick={() => setLightboxImage(selectedProject.image)}
              >
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${
                  isDarkMode ? 'from-slate-900/60 to-transparent' : 'from-black/30 to-transparent'
                }`} />
              </div>

              {/* Details */}
              <div className="p-4 sm:p-8">
                <div className="mb-4">
                  <h2 className={`text-xl sm:text-3xl font-bold mb-2 leading-snug ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {selectedProject.title}
                  </h2>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs sm:text-sm font-medium text-white ${
                    isDarkMode ? 'bg-cyan-500/80' : 'bg-blue-600/80'
                  }`}>
                    {selectedProject.category}
                  </span>
                </div>

                <p className={`text-sm sm:text-lg leading-relaxed mb-5 sm:mb-6 ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>
                  {selectedProject.description}
                </p>

                {/* Technologies */}
                <div className="mb-5 sm:mb-6">
                  <h3 className={`text-base sm:text-xl font-semibold mb-2 sm:mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className={`px-3 py-1 rounded-lg text-xs sm:text-sm font-medium ${
                        isDarkMode
                          ? 'bg-slate-800 text-slate-300 border border-slate-700'
                          : 'bg-gray-100 text-gray-700 border border-gray-200'
                      }`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Gallery */}
                {galleryImages.length > 0 && (
                  <div className="mb-5 sm:mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <ImageIcon size={18} className={isDarkMode ? 'text-cyan-400' : 'text-blue-600'} />
                      <h3 className={`text-base sm:text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        Project Gallery
                      </h3>
                    </div>

                    {/* Gallery viewer — responsive height */}
                    <div
                      className="relative rounded-xl overflow-hidden mb-3 cursor-zoom-in"
                      style={{ height: 'clamp(160px, 45vw, 300px)' }}
                      onClick={() => setLightboxImage(galleryImages[currentGalleryIndex])}
                    >
                      <img
                        src={galleryImages[currentGalleryIndex]}
                        alt={`Project image ${currentGalleryIndex + 1}`}
                        className="w-full h-full object-contain bg-black/20 transition-opacity duration-300"
                      />
                      {galleryImages.length > 1 && (
                        <>
                          <button
                            onClick={(e) => { e.stopPropagation(); handlePrevGallery(); }}
                            className={`absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 rounded-full z-10 transition-all duration-300 shadow-lg ${
                              isDarkMode ? 'bg-slate-800/90 hover:bg-slate-700 text-white' : 'bg-white/90 hover:bg-white text-gray-900'
                            }`}
                          >
                            <ChevronLeft size={16} className="sm:hidden" />
                            <ChevronLeft size={20} className="hidden sm:block" />
                          </button>
                          <button
                            onClick={(e) => { e.stopPropagation(); handleNextGallery(); }}
                            className={`absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 rounded-full z-10 transition-all duration-300 shadow-lg ${
                              isDarkMode ? 'bg-slate-800/90 hover:bg-slate-700 text-white' : 'bg-white/90 hover:bg-white text-gray-900'
                            }`}
                          >
                            <ChevronRight size={16} className="sm:hidden" />
                            <ChevronRight size={20} className="hidden sm:block" />
                          </button>

                          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full text-xs font-medium bg-black/60 text-white pointer-events-none">
                            {currentGalleryIndex + 1} / {galleryImages.length}
                          </div>
                        </>
                      )}
                    </div>

                    {/* Tap-to-enlarge hint on mobile */}
                    <p className={`text-xs text-center sm:hidden ${isDarkMode ? 'text-slate-500' : 'text-gray-400'}`}>
                      Tap image to enlarge
                    </p>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pb-2">
                  <a
                    href={selectedProject.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-xl transition-all duration-300 font-medium shadow-lg hover:shadow-xl text-sm sm:text-base"
                  >
                    <ExternalLink size={18} />
                    <span>View Demo</span>
                  </a>
                  <a
                    href={selectedProject.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl transition-all duration-300 font-medium shadow-lg hover:shadow-xl backdrop-blur-sm text-sm sm:text-base ${
                      isDarkMode
                        ? 'bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-600'
                        : 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-200'
                    }`}
                  >
                    <Github size={18} />
                    <span>View on GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FULL IMAGE LIGHTBOX */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center cursor-zoom-out"
          style={{ backgroundColor: '#000000' }}
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full text-white flex items-center justify-center transition-colors z-10"
            style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.3)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)')}
          >
            <X size={22} />
          </button>

          <img
            src={lightboxImage}
            alt="Full view"
            style={{
              maxWidth: '95vw',
              maxHeight: '95vh',
              objectFit: 'contain',
              display: 'block',
            }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Projects;
