import { useTheme } from '../contexts/ThemeContext';

const WallOfFame = () => {
  const { isDarkMode } = useTheme();

  const fameItems = [
    {
      id: 1,
      title: 'Innovation Leader',
      image: 'public/UMPSA_Memories.jpg',
      year: '2025'
    },
    {
      id: 2,
      title: 'Tech Excellence',
      image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?w=400&h=300&fit=crop',
      year: '2024'
    },
    {
      id: 3,
      title: 'Development Star',
      image: 'https://images.pexels.com/photos/3747517/pexels-photo-3747517.jpeg?w=400&h=300&fit=crop',
      year: '2024'
    },
    {
      id: 4,
      title: 'Problem Solver',
      image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?w=400&h=300&fit=crop',
      year: '2025'
    },
    {
      id: 5,
      title: 'Creative Mind',
      image: 'https://images.pexels.com/photos/3857671/pexels-photo-3857671.jpeg?w=400&h=300&fit=crop',
      year: '2024'
    },
    {
      id: 6,
      title: 'Team Player',
      image: 'https://images.pexels.com/photos/3776969/pexels-photo-3776969.jpeg?w=400&h=300&fit=crop',
      year: '2025'
    }
  ];

  return (
    <section id="wall-of-fame" className={`py-20 transition-all duration-700 ${
      isDarkMode
        ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'
        : 'bg-gradient-to-br from-gray-50 via-white to-gray-50'
    }`}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 transition-colors duration-700 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>Wall of Fame</h2>

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
                : 'bg-gradient-to-r from-blue-600 to-cyan-400'
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
            Celebrating achievements and memorable moments
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fameItems.map((item) => (
            <div key={item.id} className="group">
              <div className={`relative overflow-hidden rounded-2xl h-64 cursor-pointer transition-all duration-500 hover:shadow-2xl ${
                isDarkMode ? 'shadow-xl shadow-cyan-400/10' : 'shadow-lg shadow-blue-400/10'
              }`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Dark Overlay */}
                <div className={`absolute inset-0 transition-opacity duration-500 ${
                  isDarkMode
                    ? 'bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100'
                    : 'bg-gradient-to-t from-slate-900/70 via-slate-900/30 to-transparent opacity-0 group-hover:opacity-100'
                }`}></div>

                {/* Content */}
                <div className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 ${
                  isDarkMode ? 'text-white' : 'text-white'
                }`}>
                  <h3 className="text-2xl font-bold mb-2 text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:translate-y-0 translate-y-4">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:translate-y-0 translate-y-4">
                    {item.year}
                  </p>
                </div>

                {/* Border Glow Effect */}
                <div className={`absolute inset-0 rounded-2xl border-2 transition-all duration-500 pointer-events-none ${
                  isDarkMode
                    ? 'border-cyan-400/0 group-hover:border-cyan-400/100'
                    : 'border-cyan-400/0 group-hover:border-cyan-400/100'
                }`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WallOfFame;
