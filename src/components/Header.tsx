import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-xl font-bold">
            <span className="text-blue-600">Manoj</span> Kumar
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['about', 'experience', 'skills', 'portfolio', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="capitalize text-gray-700 hover:text-blue-600 transition-colors"
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white pt-20">
          <nav className="container mx-auto px-6 flex flex-col space-y-6 py-6">
            {['about', 'experience', 'skills', 'portfolio', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="flex items-center justify-between capitalize text-xl text-gray-700 hover:text-blue-600 transition-colors border-b border-gray-200 pb-4"
              >
                {item}
                <ChevronRight size={20} />
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;