import { useState, useEffect, useCallback } from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface Memory {
  id: number;
  image: string;
  caption: string;
  date: string;
}

interface FameItem {
  id: number;
  title: string;
  coverImage: string;
  year: string;
  location: string;
  description: string;
  memories: Memory[];
}

const WallOfFame = () => {
  const { isDarkMode } = useTheme();
  const [selectedItem, setSelectedItem] = useState<FameItem | null>(null);
  const [activeMemory, setActiveMemory] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const fameItems: FameItem[] = [
    {
      id: 1,
      title: 'UMPSA - Malaysia',
      coverImage: '/UMPSA_Memories.jpg',
      year: '2024',
      location: 'Universiti Malaysia Pahang Al-Sultan Abdullah',
      description: 'Unforgettable moments spent at UMPSA — from late-night study sessions to joyful campus hangouts that shaped who we are.',
      memories: [
        {
          id: 1,
          image: '/UMPSA_Memories.jpg',
          caption: 'First day at UMPSA campus — full of excitement and new beginnings!',
          date: 'Nov 2024',
        },
        {
          id: 2,
          image: '/UMPSA4.jpeg',
          caption: 'Group project sessions — teamwork makes the dream work 💪',
          date: 'Nov 2024',
        },
        {
          id: 3,
          image: '/UMPSA2.jpeg',
          caption: 'Campus walk at golden hour — serenity in every step.',
          date: 'Nov 2024',
        },
        {
          id: 4,
          image: '/UMPSA3.jpeg',
          caption: 'Farewell gathering with amazing friends — bonds for life.',
          date: 'Nov 2024',
        },
      ],
    },
    {
      id: 2,
      title: 'Batu Caves - Malaysia',
      coverImage: '/Batu_Caves.jpeg',
      year: '2024',
      location: 'Gombak, Selangor, Malaysia',
      description: 'A spiritual and breathtaking journey to one of Malaysia\'s most iconic landmarks — the majestic Batu Caves.',
      memories: [
        {
          id: 1,
          image: '/BC1.jpeg',
          caption: 'The iconic 272 steps — the climb was worth every breath! 🏔️',
          date: 'Nov 2024',
        },
        {
          id: 2,
          image: '/BC2.jpeg',
          caption: 'The magnificent Lord Murugan statue standing tall in gold.',
          date: 'Nov 2024',
        },
        {
          id: 3,
          image: '/Batu_Caves.jpeg',
          caption: 'Inside the cave temple — ancient, mystical, and awe-inspiring.',
          date: 'Nov 2024',
        },
      ],
    },
    {
      id: 3,
      title: 'College Memories',
      coverImage: '/Isha_Gang.jpeg',
      year: '2024',
      location: 'Tech Hub, Malaysia',
      description: 'Deep dives into the world of technology — workshops, hackathons, and knowledge-sharing sessions that sparked innovation.',
      memories: [
        {
          id: 1,
          image: '/Isha_Gang.jpeg',
          caption: 'Our gang together — memories that last a lifetime! 🎓',
          date: 'Jul 2024',
        },
        {
          id: 2,
          image: '/TS2.jpeg',
          caption: 'Workshop on AI & ML — the future is now and we are ready.',
          date: 'Jul 2024',
        },
        {
          id: 3,
          image: '/TS3.jpeg',
          caption: 'Demo day presentations — our project stole the show! 🎯',
          date: 'Aug 2024',
        },
        {
          id: 4,
          image: '/Tech_Session.jpeg',
          caption: 'Networking with industry leaders — invaluable connections made.',
          date: 'Aug 2024',
        },
      ],
    },
  ];

  const openModal = (item: FameItem) => {
    setSelectedItem(item);
    setActiveMemory(0);
    setIsAnimating(false);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedItem(null);
    setActiveMemory(0);
    document.body.style.overflow = '';
  };

  const goToMemory = useCallback((index: number) => {
    if (!selectedItem || isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveMemory(index);
      setIsAnimating(false);
    }, 200);
  }, [selectedItem, isAnimating]);

  const prevMemory = () => {
    if (!selectedItem) return;
    const prev = (activeMemory - 1 + selectedItem.memories.length) % selectedItem.memories.length;
    goToMemory(prev);
  };

  const nextMemory = () => {
    if (!selectedItem) return;
    const next = (activeMemory + 1) % selectedItem.memories.length;
    goToMemory(next);
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!selectedItem) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowLeft') prevMemory();
      if (e.key === 'ArrowRight') nextMemory();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [selectedItem, activeMemory]);

  return (
    <>
      <section
        id="wall-of-fame"
        className={`py-20 transition-all duration-700 ${
          isDarkMode
            ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'
            : 'bg-gradient-to-br from-gray-50 via-white to-gray-50'
        }`}
      >
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="flex flex-col items-center mb-16">
            <h2
              className={`text-4xl font-bold mb-4 transition-colors duration-700 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              Wall of Fame
            </h2>

            <div className="flex items-center gap-4 mb-6">
              <div
                className={`h-px w-16 transition-all duration-700 ${
                  isDarkMode
                    ? 'bg-gradient-to-r from-transparent to-cyan-400'
                    : 'bg-gradient-to-r from-transparent to-blue-600'
                }`}
              />
              <div
                className={`w-3 h-3 rounded-full transition-all duration-700 ${
                  isDarkMode
                    ? 'bg-gradient-to-r from-cyan-400 to-blue-500'
                    : 'bg-gradient-to-r from-blue-600 to-cyan-400'
                }`}
              />
              <div
                className={`h-px w-16 transition-all duration-700 ${
                  isDarkMode
                    ? 'bg-gradient-to-l from-transparent to-cyan-400'
                    : 'bg-gradient-to-l from-transparent to-blue-600'
                }`}
              />
            </div>

            <p
              className={`text-center max-w-2xl text-lg transition-colors duration-700 ${
                isDarkMode ? 'text-slate-400' : 'text-gray-600'
              }`}
            >
              Celebrating achievements and memorable moments
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fameItems.map((item) => (
              <div
                key={item.id}
                className="group cursor-pointer"
                onClick={() => openModal(item)}
              >
                <div
                  className={`relative overflow-hidden rounded-2xl h-64 transition-all duration-500 hover:shadow-2xl ${
                    isDarkMode
                      ? 'shadow-xl shadow-cyan-400/10'
                      : 'shadow-lg shadow-blue-400/10'
                  }`}
                >
                  <img
                    src={item.coverImage}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />

                  {/* Overlay */}
                  <div
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      isDarkMode
                        ? 'bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100'
                        : 'bg-gradient-to-t from-slate-900/70 via-slate-900/30 to-transparent opacity-0 group-hover:opacity-100'
                    }`}
                  />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <h3 className="text-2xl font-bold mb-2 text-center px-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                      {item.title}
                    </h3>
                    <p className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 mb-2">
                      {item.year}
                    </p>
                    {/* Memory count badge */}
                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                      <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M4 3a2 2 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
                      </svg>
                      <span className="text-xs text-cyan-300 font-semibold">
                        {item.memories.length} memories
                      </span>
                    </div>
                  </div>

                  {/* Border Glow */}
                  <div
                    className={`absolute inset-0 rounded-2xl border-2 transition-all duration-500 pointer-events-none ${
                      isDarkMode
                        ? 'border-cyan-400/0 group-hover:border-cyan-400'
                        : 'border-cyan-400/0 group-hover:border-cyan-400'
                    }`}
                  />
                </div>

                {/* Card Footer */}
                <div className="mt-3 px-1 flex items-center justify-between">
                  <span className={`text-sm font-semibold ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>
                    {item.title}
                  </span>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                    isDarkMode
                      ? 'bg-cyan-400/10 text-cyan-400'
                      : 'bg-blue-100 text-blue-600'
                  }`}>
                    {item.memories.length} photos
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LIGHTBOX MODAL ── */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)' }}
          onClick={(e) => e.target === e.currentTarget && closeModal()}
        >
          <div
            className={`relative w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 ${
              isDarkMode ? 'bg-slate-900' : 'bg-white'
            }`}
            style={{ maxHeight: '90vh' }}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full flex items-center justify-center bg-black/50 text-white hover:bg-black/80 transition-colors"
              aria-label="Close"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex flex-col md:flex-row h-full" style={{ maxHeight: '90vh' }}>
              {/* ── LEFT: Main Image Viewer ── */}
              <div className="relative flex-1 min-h-64 md:min-h-0 flex flex-col">
                <div
                  className="relative cursor-zoom-in overflow-hidden rounded-l-3xl"
                  style={{ minHeight: '320px', maxHeight: '60vh', flex: 1 }}
                  onClick={() => setLightboxImage(selectedItem.memories[activeMemory].image)}
                >
                  <img
                    key={activeMemory}
                    src={selectedItem.memories[activeMemory].image}
                    alt={selectedItem.memories[activeMemory].caption}
                    className={`w-full h-full transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
                    style={{ objectFit: 'cover', maxHeight: '60vh' }}
                  />
                </div>

                {/* Image counter */}
                <div className="absolute top-3 left-3 bg-black/50 text-white text-xs px-2 py-1 rounded-full pointer-events-none">
                  {activeMemory + 1} / {selectedItem.memories.length}
                </div>

                {/* Gradient + caption */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 pointer-events-none">
                  <p className="text-white text-sm font-medium leading-snug">
                    {selectedItem.memories[activeMemory].caption}
                  </p>
                  <p className="text-cyan-300 text-xs mt-1">
                    📅 {selectedItem.memories[activeMemory].date}
                  </p>
                </div>

                {/* Prev / Next arrows */}
                {selectedItem.memories.length > 1 && (
                  <>
                    <button
                      onClick={(e) => { e.stopPropagation(); prevMemory(); }}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors z-10"
                      aria-label="Previous"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); nextMemory(); }}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors z-10"
                      aria-label="Next"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </>
                )}
              </div>

              {/* ── RIGHT: Info + Thumbnails ── */}
              <div
                className={`w-full md:w-72 flex flex-col overflow-y-auto ${
                  isDarkMode ? 'bg-slate-900' : 'bg-gray-50'
                }`}
              >
                {/* Header */}
                <div className={`p-5 border-b ${isDarkMode ? 'border-slate-700' : 'border-gray-200'}`}>
                  <div className={`text-xs font-semibold uppercase tracking-widest mb-1 ${
                    isDarkMode ? 'text-cyan-400' : 'text-blue-500'
                  }`}>
                    {selectedItem.year}
                  </div>
                  <h3 className={`text-xl font-bold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {selectedItem.title}
                  </h3>
                  <div className={`flex items-center gap-1 text-xs mb-3 ${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {selectedItem.location}
                  </div>
                  <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
                    {selectedItem.description}
                  </p>
                </div>

                {/* Thumbnail Strip */}
                <div className="p-4 flex-1">
                  <p className={`text-xs font-semibold uppercase tracking-wider mb-3 ${
                    isDarkMode ? 'text-slate-500' : 'text-gray-400'
                  }`}>
                    All Memories
                  </p>
                  <div className="grid grid-cols-3 md:grid-cols-2 gap-2">
                    {selectedItem.memories.map((memory, index) => (
                      <button
                        key={memory.id}
                        onClick={() => goToMemory(index)}
                        className={`relative overflow-hidden rounded-xl aspect-square transition-all duration-200 ${
                          activeMemory === index
                            ? isDarkMode
                              ? 'ring-2 ring-cyan-400 scale-95'
                              : 'ring-2 ring-blue-500 scale-95'
                            : 'opacity-60 hover:opacity-100 hover:scale-95'
                        }`}
                      >
                        <img
                          src={memory.image}
                          alt={memory.caption}
                          className="w-full h-full object-cover"
                        />
                        {activeMemory === index && (
                          <div className={`absolute inset-0 border-2 rounded-xl pointer-events-none ${
                            isDarkMode ? 'border-cyan-400' : 'border-blue-500'
                          }`} />
                        )}
                        {/* Thumbnail caption overlay */}
                        <div className="absolute bottom-0 left-0 right-0 bg-black/60 px-1 py-0.5">
                          <p className="text-white text-[9px] leading-tight truncate">{memory.date}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Dot indicators */}
                {selectedItem.memories.length > 1 && (
                  <div className={`flex justify-center gap-1.5 pb-4 px-4 border-t pt-3 ${
                    isDarkMode ? 'border-slate-700' : 'border-gray-200'
                  }`}>
                    {selectedItem.memories.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToMemory(index)}
                        className={`rounded-full transition-all duration-300 ${
                          activeMemory === index
                            ? isDarkMode
                              ? 'w-5 h-2 bg-cyan-400'
                              : 'w-5 h-2 bg-blue-500'
                            : isDarkMode
                            ? 'w-2 h-2 bg-slate-600 hover:bg-slate-400'
                            : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                        }`}
                        aria-label={`Go to memory ${index + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── FULL IMAGE LIGHTBOX ── */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center cursor-zoom-out"
          style={{ backgroundColor: '#000000' }}
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full text-white flex items-center justify-center z-10 transition-colors"
            style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.3)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)')}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={lightboxImage}
            alt="Full view"
            style={{ maxWidth: '95vw', maxHeight: '95vh', objectFit: 'contain', display: 'block' }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default WallOfFame;