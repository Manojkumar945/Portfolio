import { useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = "Manoj Kumar - App Developer";
  }, []);

  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

function AppContent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-slate-900 dark:from-indigo-950 dark:via-purple-900 dark:to-slate-900 light:from-blue-50 light:via-indigo-50 light:to-purple-50 text-slate-100 dark:text-slate-100 light:text-gray-900 font-sans transition-colors duration-500">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;