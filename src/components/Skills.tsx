import { Trophy, Award, CheckCircle, Zap, X, ExternalLink, Medal, Users, TrendingUp, Clock } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const technicalSkills = [
  { name: "HTML", proficiency: 70, icon: "/icons8-html5-48.png" },
  { name: "Java", proficiency: 75, icon: "/icons8-java-94.png" },
  { name: "Python", proficiency: 75, icon: "/icons8-python-48 copy.png" },
  { name: "C++", proficiency: 80, icon: "/icons8-c-48.png" },
  { name: "Android Studio", proficiency: 60, icon: "/icons8-android-studio-48.png" },
  { name: "Microsoft Excel", proficiency: 75, icon: "/icons8-ms-excel-48.png" },
  { name: "Canva", proficiency: 75, icon: "/icons8-canva-app-48.png" },
  { name: "Figma", proficiency: 65, icon: "/icons8-figma-48.png" },
  { name: "Visual Studio Code", proficiency: 70, icon: "/icons8-vs-code-48.png" },
  { name: "Flutter", proficiency: 70, icon: "/icons8-flutter-48.png" },
];

const certifications = [
  { name: "Journal Publication Certificate", issuer: "IRO Journal", type: "Research Paper", year: "2026", color: "from-blue-500 to-indigo-500", image: "/publication-jismac.2026.1.002.png", description: "Published a research paper titled Brainwave Monitoring and Stress Alert System with AI Smart Therapy at Journal of IoT in Social, Mobile, Analytics and Cloud (JISMAC)." },
  { name: "National Conference (NCRTAD-25)", issuer: "Bannari Amman Institute of Technology", type: "Recent Trends", year: "2025", color: "from-purple-500 to-indigo-500", image: "/conference_certificate.png", description: "Presented a research paper titled Brainwave Monitoring and Stress Alert System with AI Smart Therapy at a National-level AI and Data Science Conference." },
  { name: "Data Analytics with Python", issuer: "NPTEL Online Certifications", type: "Technical", year: "2025", color: "from-blue-500 to-cyan-500", image: "/data_analytics_with_python.png", description: "Comprehensive course covering Python programming for data analysis, statistics, and visualization techniques with 54% consolidated score." },
  { name: "Raspberry Pi Technical Trainer", issuer: "Paavai Engineering College", type: "Hardware", year: "2025", color: "from-green-500 to-teal-500", image: "/certificates/raspberry_pi_trainer_certification.png", description: "Technical trainer certification for latest tools including Chatbot, Raspberry Pi, and Arduino technologies for first-year students." },
  { name: "30 days Masterclass in FullStack Web Development", issuer: "Pantech AI", type: "Development", year: "2025", color: "from-pink-500 to-pink-500", image: "/manoj_kumar.s.png", description: "Successfully completed an intensive full stack web development masterclass covering front-end and back-end technologies." },
  { name: "AI Tools & ChatGPT Workshop", issuer: "be10x", type: "AI Tools", year: "2025", color: "from-red-500 to-red-500", image: "/ai_tools_workshop_certificate.jpg", description: "Completed an AI tools and ChatGPT workshop focused on rapid presentation creation, data analysis, and coding productivity." },
  { name: "Introduction to Microsoft Excel", issuer: "Coursera Project Network", type: "Analytics", year: "2024", color: "from-emerald-500 to-green-500", image: "/certificates/ms_excel_course_certificate.pdf.png", description: "Project-based learning covering Excel fundamentals, data analysis, and spreadsheet management through Coursera." },
  { name: "Mobile App Development", issuer: "Infosys Springboard", type: "Development", year: "2024", color: "from-purple-500 to-indigo-500", image: "/certificates/infosys_certificate.png", description: "Introduction to Android development covering mobile app design, development, and deployment through Infosys Springboard." },
  { name: "Global Immersion Program", issuer: "UMPSA University Malaysia", type: "Academic", year: "2024", color: "from-orange-500 to-red-500", image: "/certificates/umpsa_certificate.png", description: "Two-week global immersion program at Universiti Malaysia Pahang focusing on cultural exchange and international learning from November 14-27, 2024." },
  { name: "Cloud Computing", issuer: "NPTEL Online Certifications", type: "Cloud", year: "2024", color: "from-sky-500 to-blue-500", image: "/certificates/cloud_computing_(1).pdf.png", description: "Comprehensive course covering cloud computing concepts, services, and deployment models with 55% consolidated score from IIT Kharagpur." },
  { name: "Google AI-ML Virtual Internship", issuer: "AICTE Eduskills Foundation", type: "AI/ML", year: "2024", color: "from-violet-500 to-purple-500", image: "/certificates/google_ai-ml_certificate.pdf.png", description: "10-week AI-ML Virtual Internship supported by Google for Developers, covering artificial intelligence and machine learning fundamentals." },
  { name: "Google Android Developer Virtual Internship", issuer: "AICTE Eduskills Foundation", type: "Mobile", year: "2024", color: "from-green-500 to-emerald-500", image: "/certificates/google_android_developer_certificate.pdf.png", description: "10-week Android Developer Virtual Internship supported by Google for Developers, covering mobile app development best practices." },
  { name: "Technical Workshop", issuer: "Way2me", type: "Blockchain", year: "2024", color: "from-red-500 to-orange-500", image: "/blockchain_and_cloud_computing_workshop_certificate.jpg", description: "Actively participated in a three-day workshop on Blockchain and Cloud Computing, gaining practical insights into emerging technologies." },
  { name: "Campus Ambassador Program", issuer: "EXIMIUS - IIM Bangalore", type: "Leadership", year: "2024", color: "from-yellow-500 to-orange-500", image: "/eximius_campus_ambassador.jpeg", description: "Campus Ambassador for EXIMIUS 2024 at IIM Bangalore, contributing to making the event a success in June and July 2024." },
  { name: "PINNACLE-24 National Level Technical Symposium", issuer: "Coimbatore Institute of Technology", type: "Paper Presentation", year: "2024", color: "from-lime-500 to-lime-500", image: "/Symposium_Certificate.png", description: "Participated in a national-level technical symposium organized by the ECE Association and IETE Students Forum." },
];

const Skills = () => {
  const { isDarkMode } = useTheme();
  const [selectedCertificate, setSelectedCertificate] = useState<typeof certifications[0] | null>(null);
  const [placementLightbox, setPlacementLightbox] = useState(false);
  const [pdfViewer, setPdfViewer] = useState(false);

  const openCertificate = (cert: typeof certifications[0]) => {
    if (cert.image) setSelectedCertificate(cert);
  };
  const closeCertificate = () => setSelectedCertificate(null);

  const dm = isDarkMode;

  return (
    <section
      id="skills"
      className={`relative py-20 transition-all duration-700 overflow-hidden ${dm ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' : 'bg-gradient-to-br from-gray-50 via-white to-gray-50'}`}
    >
      <div className="container mx-auto px-6 relative z-10">

        {/* ── Section Header ── */}
        <div className="flex flex-col items-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${dm ? 'text-white' : 'text-gray-900'}`}>Skills & Certifications</h2>
          <div className="flex items-center gap-4 mb-6">
            <div className={`h-px w-16 ${dm ? 'bg-gradient-to-r from-transparent to-cyan-400' : 'bg-gradient-to-r from-transparent to-blue-600'}`} />
            <div className={`w-3 h-3 rounded-full ${dm ? 'bg-cyan-400' : 'bg-blue-600'}`} />
            <div className={`h-px w-16 ${dm ? 'bg-gradient-to-l from-transparent to-cyan-400' : 'bg-gradient-to-l from-transparent to-blue-600'}`} />
          </div>
          <p className={`text-center max-w-2xl text-lg ${dm ? 'text-slate-400' : 'text-gray-600'}`}>
            My technical skills and professional certifications with interactive certificate showcasing
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16">

          {/* ── Technical Skills Orbit ── */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl shadow-lg">
                <Zap size={24} className="text-white" />
              </div>
              <h3 className={`text-3xl font-bold ${dm ? 'text-white' : 'text-gray-900'}`}>Technical Skills</h3>
            </div>
            <div className="relative w-full h-96 flex items-center justify-center py-12">
              <style>{`
                @keyframes rotate-orbit { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
                @keyframes counter-rotate { 0% { transform: rotate(0deg); } 100% { transform: rotate(-360deg); } }
                .orbit-container { animation: rotate-orbit 20s linear infinite; }
                .orbit-container:hover { animation-play-state: paused; }
                .skill-item { animation: counter-rotate 20s linear infinite; }
              `}</style>
              <div className={`absolute w-24 h-24 rounded-full flex items-center justify-center ${dm ? 'bg-gradient-to-br from-cyan-500/30 to-blue-500/30 border-2 border-cyan-400/50' : 'bg-gradient-to-br from-blue-300/30 to-cyan-300/30 border-2 border-blue-400/50'}`}>
                <span className={`text-3xl font-bold ${dm ? 'text-cyan-400' : 'text-blue-600'}`}>Skills</span>
              </div>
              <div className="orbit-container absolute w-80 h-80">
                {technicalSkills.map((skill, index) => {
                  const angle = (index / technicalSkills.length) * 360;
                  const x = Math.cos((angle * Math.PI) / 180) * 160;
                  const y = Math.sin((angle * Math.PI) / 180) * 160;
                  return (
                    <div key={index} className="absolute" style={{ transform: `translate(${x}px, ${y}px)`, left: '50%', top: '50%', marginLeft: '-40px', marginTop: '-40px' }}>
                      <div className="skill-item">
                        <div className="flex flex-col items-center gap-2 group cursor-pointer">
                          <div className={`w-20 h-20 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-125 backdrop-blur-sm ${dm ? 'bg-slate-800/60 border border-slate-600/50 hover:border-cyan-400/50 shadow-lg' : 'bg-white/60 border border-gray-200 hover:border-cyan-400/50 shadow-lg'}`}>
                            <img src={skill.icon} alt={skill.name} className="w-14 h-14 object-contain" />
                          </div>
                          <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-full mt-2">
                            <p className={`text-xs font-semibold ${dm ? 'text-white' : 'text-gray-900'}`}>{skill.name}</p>
                            <p className={`text-xs ${dm ? 'text-slate-400' : 'text-gray-600'}`}>{skill.proficiency}%</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className={`absolute w-80 h-80 rounded-full border border-dashed ${dm ? 'border-cyan-400/20' : 'border-blue-400/20'}`} />
            </div>
          </div>

          {/* ── Certifications ── */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl shadow-lg">
                <Award size={24} className="text-white" />
              </div>
              <h3 className={`text-3xl font-bold ${dm ? 'text-white' : 'text-gray-900'}`}>Professional Certifications</h3>
            </div>
            <div className="space-y-6 max-h-[700px] overflow-y-auto pr-4">
              {certifications.map((cert, index) => (
                <div key={index} className="group">
                  <div
                    className={`p-6 rounded-xl backdrop-blur-sm transition-all duration-300 hover:shadow-xl group-hover:-translate-y-1 ${dm ? 'bg-slate-800/80' : 'bg-white/80'} ${cert.image ? 'cursor-pointer' : ''}`}
                    onClick={() => cert.image && openCertificate(cert)}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className={`font-bold text-lg group-hover:text-purple-400 transition-colors ${dm ? 'text-white' : 'text-gray-900'}`}>{cert.name}</h4>
                          {cert.image && <ExternalLink size={16} className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />}
                        </div>
                        <p className={`text-sm mb-2 ${dm ? 'text-slate-400' : 'text-gray-600'}`}>{cert.issuer}</p>
                        <p className={`text-xs leading-relaxed ${dm ? 'text-slate-300' : 'text-gray-700'}`}>{cert.description}</p>
                      </div>
                      <div className="flex flex-col items-end gap-2 ml-3">
                        <span className={`text-xs px-3 py-1 rounded-full text-white font-medium bg-gradient-to-r ${cert.color}`}>{cert.type}</span>
                        <span className={`text-xs ${dm ? 'text-slate-500' : 'text-gray-500'}`}>{cert.year}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-green-400">
                        <CheckCircle size={16} />
                        <span className="text-xs font-medium">Verified Certificate</span>
                      </div>
                      {cert.image && (
                        <span className="text-xs text-cyan-400 font-medium flex items-center gap-1">
                          Click to view <ExternalLink size={12} />
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={`mt-8 rounded-2xl p-6 ${dm ? 'bg-slate-800/80' : 'bg-white/80'}`}>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className={`text-xl font-bold mb-2 ${dm ? 'text-white' : 'text-gray-900'}`}>Total Certifications</h4>
                  <p className={`${dm ? 'text-slate-400' : 'text-gray-600'}`}>All certificates are clickable and viewable</p>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-bold text-purple-400">{certifications.length}</div>
                  <div className={`text-sm ${dm ? 'text-slate-400' : 'text-gray-600'}`}>Certificates</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Awards & Achievements ── */}
        <div className="mt-20 border-t pt-20" style={{ borderColor: dm ? 'rgba(100,116,139,0.3)' : 'rgba(59,130,246,0.3)' }}>
          <div className="flex flex-col items-center mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl shadow-lg">
                <Trophy size={28} className="text-white" />
              </div>
              <h2 className={`text-3xl sm:text-4xl font-bold ${dm ? 'text-white' : 'text-gray-900'}`}>Awards & Achievements</h2>
            </div>
            <div className="flex items-center gap-4 mb-6">
              <div className={`h-px w-16 ${dm ? 'bg-gradient-to-r from-transparent to-cyan-400' : 'bg-gradient-to-r from-transparent to-blue-600'}`} />
              <div className={`w-3 h-3 rounded-full ${dm ? 'bg-cyan-400' : 'bg-blue-600'}`} />
              <div className={`h-px w-16 ${dm ? 'bg-gradient-to-l from-transparent to-cyan-400' : 'bg-gradient-to-l from-transparent to-blue-600'}`} />
            </div>
            <p className={`text-center max-w-2xl text-lg ${dm ? 'text-slate-400' : 'text-gray-600'}`}>
              Recognition and achievements for innovative projects and leadership contributions
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">

            {/* ── Award 1: Techfinix-25 ── */}
            <div className="group">
              <div className={`rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl group-hover:-translate-y-1 ${dm ? 'bg-slate-800/80' : 'bg-white/80'}`}>
                <div className="flex flex-col sm:flex-row">
                  <div className="flex-1 p-5 sm:p-8">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className={`text-base sm:text-xl font-bold group-hover:text-cyan-400 transition-colors leading-snug ${dm ? 'text-white' : 'text-gray-900'}`}>
                        Techfinix-25 Project Expo Winner
                      </h3>
                      <span className="text-xs px-3 py-1 rounded-full text-white font-semibold bg-gradient-to-r from-blue-500 to-indigo-500 flex-shrink-0 mt-1">2025</span>
                    </div>
                    <p className={`text-sm mb-1 ${dm ? 'text-slate-400' : 'text-gray-600'}`}>Paavai Engineering College</p>
                    <p className={`text-xs mb-4 ${dm ? 'text-slate-500' : 'text-gray-400'}`}>Event Date: 08 November 2025</p>
                    <div className="mb-4">
                      <p className={`text-xs font-medium uppercase tracking-wide mb-1 ${dm ? 'text-slate-500' : 'text-gray-400'}`}>Project</p>
                      <p className={`text-sm font-semibold leading-snug ${dm ? 'text-purple-400' : 'text-purple-600'}`}>
                        Brainwave Monitoring & Stress Alert System with AI Smart Therapy
                      </p>
                    </div>
                    <p className={`text-sm leading-relaxed mb-4 ${dm ? 'text-slate-300' : 'text-gray-700'}`}>
                      Won 1st place at Techfinix-25, a national-level Project Expo organized by Paavai Engineering College. The project demonstrated real-time brainwave monitoring using EEG sensors combined with AI-driven stress classification, impressing judges with its innovation, technical depth, and real-world healthcare application.
                    </p>
                    <div className="mb-4 space-y-2">
                      <p className={`text-xs font-medium uppercase tracking-wide ${dm ? 'text-slate-500' : 'text-gray-400'}`}>Highlights</p>
                      {[
                        "Competed against 50+ teams across departments",
                        "Demonstrated live EEG-based stress detection",
                        "AI-powered real-time mental health classification",
                        "Received appreciation from industry judges",
                      ].map((point, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <span className={`mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0 ${dm ? 'bg-cyan-400' : 'bg-blue-500'}`} />
                          <span className={`text-xs leading-relaxed ${dm ? 'text-slate-300' : 'text-gray-700'}`}>{point}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-green-400">
                      <Medal size={16} />
                      <span className="text-xs sm:text-sm font-medium">Official Award Winner</span>
                    </div>
                  </div>

                  {/* Right — money visual */}
                  <div className={`sm:w-52 flex items-center justify-center p-6 ${dm ? 'bg-gradient-to-br from-slate-700/60 to-slate-800/60' : 'bg-gradient-to-br from-yellow-50 to-orange-50'}`}>
                    <div className="flex flex-col items-center gap-3">
                      <div className="text-5xl">🏆</div>
                      <div className="text-center">
                        <p className={`text-sm font-bold ${dm ? 'text-yellow-400' : 'text-orange-600'}`}>Prize Money</p>
                        <p className={`text-xs font-semibold ${dm ? 'text-slate-400' : 'text-gray-500'}`}>Techfinix - 25</p>
                      </div>
                      <div className="relative">
                        <div className="absolute -bottom-2 -right-2 w-36 h-20 rounded-xl bg-green-800/30" />
                        <div className="absolute -bottom-1 -right-1 w-36 h-20 rounded-xl bg-green-700/40" />
                        <div className="relative w-36 h-20 rounded-xl bg-gradient-to-br from-green-400 to-green-600 shadow-xl flex flex-col items-center justify-center overflow-hidden">
                          <div className="absolute inset-0 opacity-10">
                            {[...Array(6)].map((_, i) => (
                              <div key={i} className="w-full h-px bg-white" style={{ marginTop: `${12 + i * 12}px` }} />
                            ))}
                          </div>
                          <div className="text-white/30 text-4xl font-black absolute right-2 top-0">₹</div>
                          <div className="relative z-10 text-center">
                            <div className="text-white text-xs font-bold tracking-widest">RUPEES</div>
                            <div className="text-white text-2xl font-black">12,500</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Award 2: Journal Publication ── */}
            <div className="group">
              <div className={`rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl group-hover:-translate-y-1 ${dm ? 'bg-slate-800/80' : 'bg-white/80'}`}>
                <div className="flex flex-col sm:flex-row">
                  <div className="flex-1 p-5 sm:p-8">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className={`text-base sm:text-xl font-bold group-hover:text-cyan-400 transition-colors leading-snug ${dm ? 'text-white' : 'text-gray-900'}`}>
                        Journal Publication
                      </h3>
                      <span className="text-xs px-3 py-1 rounded-full text-white font-semibold bg-gradient-to-r from-blue-500 to-indigo-500 flex-shrink-0 mt-1">2026</span>
                    </div>
                    <p className={`text-sm font-semibold mb-0.5 ${dm ? 'text-cyan-400' : 'text-blue-600'}`}>
                      Journal of IoT in Social, Mobile, Analytics and Cloud (JISMAC)
                    </p>
                    <p className={`text-sm mb-1 ${dm ? 'text-slate-400' : 'text-gray-600'}`}>IRO Journal - ISSN: 2582-1369</p>
                    <p className={`text-xs mb-4 ${dm ? 'text-slate-500' : 'text-gray-400'}`}>
                      DOI: 10.36548/jismac.2026.1.002 | Published: 09 March 2026
                    </p>
                    <div className="mb-4">
                      <p className={`text-xs font-medium uppercase tracking-wide mb-1 ${dm ? 'text-slate-500' : 'text-gray-400'}`}>Paper Title</p>
                      <p className={`text-sm font-semibold leading-snug ${dm ? 'text-purple-400' : 'text-purple-600'}`}>
                        Brainwave Monitoring and Stress Alert System with AI Smart Therapy
                      </p>
                    </div>
                    <div className="mb-4">
                      <p className={`text-xs font-medium uppercase tracking-wide mb-1 ${dm ? 'text-slate-500' : 'text-gray-400'}`}>Authors</p>
                      <p className={`text-xs leading-relaxed ${dm ? 'text-slate-300' : 'text-gray-700'}`}>
                        Babylatha M.,{' '}
                        <span className={`font-semibold ${dm ? 'text-cyan-400' : 'text-blue-600'}`}>Manoj Kumar S.</span>,
                        {' '}Ganapathy R., Giribalan G.
                      </p>
                      <p className={`text-xs mt-0.5 ${dm ? 'text-slate-500' : 'text-gray-400'}`}>
                        Department of Information Technology, Paavai Engineering College, Namakkal, Tamil Nadu, India.
                      </p>
                    </div>
                    <p className={`text-sm leading-relaxed mb-4 ${dm ? 'text-slate-300' : 'text-gray-700'}`}>
                      Published a research paper presenting a wearable EEG-based stress monitoring system integrating AI and IoT to classify five mental states in real time. The system uses MLP and CNN models achieving above 85% classification accuracy with 2-3s alert latency, automatically activating smart therapy upon stress detection.
                    </p>
                    <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4">
                      <div className={`rounded-xl p-2 sm:p-3 text-center ${dm ? 'bg-slate-700/60 border border-slate-600/30' : 'bg-blue-50 border border-blue-100'}`}>
                        <p className={`text-base sm:text-lg font-bold ${dm ? 'text-white' : 'text-gray-900'}`}>Open Access</p>
                        <p className={`text-xs ${dm ? 'text-slate-400' : 'text-gray-500'}`}>CC BY-NC 4.0</p>
                      </div>
                      <div className={`rounded-xl p-2 sm:p-3 text-center ${dm ? 'bg-slate-700/60 border border-slate-600/30' : 'bg-blue-50 border border-blue-100'}`}>
                        <p className={`text-base sm:text-lg font-bold ${dm ? 'text-white' : 'text-gray-900'}`}>25 Pages</p>
                        <p className={`text-xs ${dm ? 'text-slate-400' : 'text-gray-500'}`}>Pages 15-39</p>
                      </div>
                      <div className={`rounded-xl p-2 sm:p-3 text-center ${dm ? 'bg-slate-700/60 border border-slate-600/30' : 'bg-blue-50 border border-blue-100'}`}>
                        <p className={`text-base sm:text-lg font-bold ${dm ? 'text-white' : 'text-gray-900'}`}>Vol.8</p>
                        <p className={`text-xs ${dm ? 'text-slate-400' : 'text-gray-500'}`}>Issue 1, 2026</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                      <div className="flex items-center gap-2 text-green-400">
                        <Medal size={16} />
                        <span className="text-xs sm:text-sm font-medium">Peer-Reviewed Publication</span>
                      </div>
                    </div>
                  </div>

                  {/* Right — journal visual with buttons */}
                  <div className={`sm:w-52 flex flex-col items-center justify-center p-6 gap-4 ${dm ? 'bg-gradient-to-br from-blue-900/40 to-indigo-900/40' : 'bg-gradient-to-br from-blue-50 to-indigo-50'}`}>
                    <div className="text-5xl">📄</div>
                    <div className="text-center">
                      <p className={`text-xs font-bold uppercase tracking-wide ${dm ? 'text-cyan-400' : 'text-blue-600'}`}>Published</p>
                      <p className={`text-xs font-semibold mt-0.5 ${dm ? 'text-slate-300' : 'text-gray-700'}`}>JISMAC Journal</p>
                      <p className={`text-xs mt-0.5 ${dm ? 'text-slate-500' : 'text-gray-400'}`}>March 2026</p>
                    </div>

                    {/* View Journal button */}
                    <a
                      href="https://irojournals.com/iroismac/article/view/8/1/2"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 w-full px-3 py-2 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 transition-all shadow hover:shadow-lg"
                    >
                      <ExternalLink size={12} />
                      View Journal
                    </a>

                    {/* View PDF button */}
                    <button
                      onClick={() => setPdfViewer(true)}
                      className={`flex items-center justify-center gap-1.5 w-full px-3 py-2 rounded-lg text-xs font-semibold transition-all shadow hover:shadow-lg ${dm ? 'bg-slate-700 hover:bg-slate-600 text-slate-200 border border-slate-500' : 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-200'}`}
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      View PDF
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Award 3: Placement Coordinator ── */}
            <div className="group">
              <div className={`rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl group-hover:-translate-y-1 ${dm ? 'bg-slate-800/80' : 'bg-white/80'}`}>
                <div className="p-5 sm:p-8">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className={`text-base sm:text-xl font-bold group-hover:text-cyan-400 transition-colors leading-snug ${dm ? 'text-white' : 'text-gray-900'}`}>
                      Placement Coordinator
                    </h3>
                    <span className="text-xs px-3 py-1 rounded-full text-white font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 flex-shrink-0 mt-1">2023 - 2026</span>
                  </div>
                  <p className={`text-sm font-semibold mb-0.5 ${dm ? 'text-cyan-400' : 'text-blue-600'}`}>Department of Information Technology</p>
                  <p className={`text-sm mb-4 ${dm ? 'text-slate-400' : 'text-gray-600'}`}>Paavai Engineering College, Namakkal</p>
                  <p className={`text-sm leading-relaxed mb-5 ${dm ? 'text-slate-300' : 'text-gray-700'}`}>
                    Served as the Student Placement Coordinator for the Department of IT, actively bridging students and recruiters. Organized placement drives, mock interviews, and resume workshops to prepare students for industry opportunities. Successfully facilitated campus recruitment for multiple batches achieving a strong placement rate through consistent coordination and leadership.
                  </p>
                  <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-5">
                    <div className={`rounded-xl p-2 sm:p-3 text-center ${dm ? 'bg-slate-700/60 border border-slate-600/30' : 'bg-blue-50 border border-blue-100'}`}>
                      <Clock size={14} className={`mx-auto mb-1 ${dm ? 'text-cyan-400' : 'text-blue-500'}`} />
                      <p className={`text-base sm:text-lg font-bold ${dm ? 'text-white' : 'text-gray-900'}`}>3</p>
                      <p className={`text-xs ${dm ? 'text-slate-400' : 'text-gray-500'}`}>Years</p>
                    </div>
                    <div className={`rounded-xl p-2 sm:p-3 text-center ${dm ? 'bg-slate-700/60 border border-slate-600/30' : 'bg-blue-50 border border-blue-100'}`}>
                      <TrendingUp size={14} className={`mx-auto mb-1 ${dm ? 'text-cyan-400' : 'text-blue-500'}`} />
                      <p className={`text-base sm:text-lg font-bold ${dm ? 'text-white' : 'text-gray-900'}`}>80.3%</p>
                      <p className={`text-xs ${dm ? 'text-slate-400' : 'text-gray-500'}`}>Placement Acheived</p>
                    </div>
                    <div className={`rounded-xl p-2 sm:p-3 text-center ${dm ? 'bg-slate-700/60 border border-slate-600/30' : 'bg-blue-50 border border-blue-100'}`}>
                      <Users size={14} className={`mx-auto mb-1 ${dm ? 'text-cyan-400' : 'text-blue-500'}`} />
                      <p className={`text-base sm:text-lg font-bold ${dm ? 'text-white' : 'text-gray-900'}`}>IT</p>
                      <p className={`text-xs ${dm ? 'text-slate-400' : 'text-gray-500'}`}>Department</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-green-400 mb-6">
                    <Medal size={16} />
                    <span className="text-xs sm:text-sm font-medium">Leadership Role</span>
                  </div>
                  <div
                    className="relative rounded-xl overflow-hidden cursor-pointer w-full"
                    onClick={() => setPlacementLightbox(true)}
                  >
                    <img
                      src="/Placement_Coordinators_Group_Photo.jpeg"
                      alt="Placement Coordinators Group Photo"
                      className="w-full h-auto object-contain transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Certificate Modal ── */}
      {selectedCertificate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className={`relative max-w-5xl max-h-[95vh] w-full rounded-2xl shadow-2xl overflow-hidden ${dm ? 'bg-slate-900' : 'bg-white'}`}>
            <div className={`flex items-center justify-between p-6 ${dm ? 'bg-slate-800' : 'bg-gray-50'}`}>
              <div>
                <h3 className={`text-xl font-bold mb-1 ${dm ? 'text-white' : 'text-gray-900'}`}>{selectedCertificate.name}</h3>
                <p className={`text-sm ${dm ? 'text-slate-400' : 'text-gray-600'}`}>{selectedCertificate.issuer} - {selectedCertificate.year}</p>
              </div>
              <button onClick={closeCertificate} className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${dm ? 'bg-slate-700/50 hover:bg-slate-600/50 text-slate-300 hover:text-white' : 'bg-gray-100/50 hover:bg-gray-200/50 text-gray-600 hover:text-gray-900'}`}>
                <X size={24} />
              </button>
            </div>
            <div className="p-6 overflow-auto max-h-[calc(95vh-120px)]">
              <div className="flex flex-col items-center">
                <div className="w-full max-w-4xl">
                  <img src={selectedCertificate.image} alt={selectedCertificate.name} className="w-full h-auto rounded-lg shadow-lg" style={{ maxHeight: '75vh', objectFit: 'contain' }} />
                </div>
                <div className="mt-6 w-full max-w-2xl">
                  <div className={`rounded-xl p-6 ${dm ? 'bg-slate-800/50' : 'bg-gray-50/50'}`}>
                    <h4 className={`text-lg font-semibold mb-3 ${dm ? 'text-white' : 'text-gray-900'}`}>Certificate Details</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between gap-4">
                        <span className={dm ? 'text-slate-400' : 'text-gray-600'}>Course:</span>
                        <span className={`font-medium text-right ${dm ? 'text-white' : 'text-gray-900'}`}>{selectedCertificate.name}</span>
                      </div>
                      <div className="flex justify-between gap-4">
                        <span className={dm ? 'text-slate-400' : 'text-gray-600'}>Issuer:</span>
                        <span className={`text-right ${dm ? 'text-white' : 'text-gray-900'}`}>{selectedCertificate.issuer}</span>
                      </div>
                      <div className="flex justify-between gap-4">
                        <span className={dm ? 'text-slate-400' : 'text-gray-600'}>Type:</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${selectedCertificate.color}`}>{selectedCertificate.type}</span>
                      </div>
                      <div className="flex justify-between gap-4">
                        <span className={dm ? 'text-slate-400' : 'text-gray-600'}>Year:</span>
                        <span className={dm ? 'text-white' : 'text-gray-900'}>{selectedCertificate.year}</span>
                      </div>
                      <div className="pt-3">
                        <p className={`text-sm leading-relaxed ${dm ? 'text-slate-300' : 'text-gray-700'}`}>{selectedCertificate.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Placement Photo Lightbox ── */}
      {placementLightbox && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center cursor-zoom-out"
          style={{ backgroundColor: '#000000' }}
          onClick={() => setPlacementLightbox(false)}
        >
          <button
            onClick={() => setPlacementLightbox(false)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full text-white flex items-center justify-center z-10"
            style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.3)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)')}
          >
            <X size={22} />
          </button>
          <img
            src="/Placement_Coordinators_Group_Photo.jpeg"
            alt="Placement Coordinators Group Photo"
            style={{ maxWidth: '95vw', maxHeight: '95vh', objectFit: 'contain', display: 'block' }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* ── PDF Viewer Modal ── */}
      {pdfViewer && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0,0,0,0.9)' }}
          onClick={() => setPdfViewer(false)}
        >
          <div
            className={`relative w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl flex flex-col`}
            style={{ height: '90vh' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`flex items-center justify-between px-5 py-3 flex-shrink-0 ${dm ? 'bg-slate-800' : 'bg-gray-100'}`}>
              <div className="flex-1 min-w-0 mr-3">
                <p className={`text-sm font-bold truncate ${dm ? 'text-white' : 'text-gray-900'}`}>
                  Brainwave Monitoring and Stress Alert System with AI Smart Therapy
                </p>
                <p className={`text-xs ${dm ? 'text-slate-400' : 'text-gray-500'}`}>
                  JISMAC Journal - March 2026 - Vol. 8, Issue 1, Pages 15-39
                </p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <a
                  href="https://irojournals.com/iroismac/article/view/8/1/2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 transition-all"
                >
                  <ExternalLink size={12} />
                  Open in Browser
                </a>
                <button
                  onClick={() => setPdfViewer(false)}
                  className={`p-1.5 rounded-lg transition-colors ${dm ? 'bg-slate-700 hover:bg-slate-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'}`}
                >
                  <X size={18} />
                </button>
              </div>
            </div>
            <div className="flex-1 bg-gray-200">
              <iframe
                src="/Published_Journal.pdf"
                className="w-full h-full border-0"
                title="Published Journal PDF"
              />
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default Skills;