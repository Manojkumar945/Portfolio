import { useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function AppContent() {
  useEffect(() => {
    document.title = "Manoj Kumar - App Developer";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-slate-900 dark:from-indigo-950 dark:via-purple-900 dark:to-slate-900 light:from-slate-50 light:via-blue-50 light:to-indigo-100 text-slate-100 dark:text-slate-100 light:text-slate-900 font-sans transition-colors duration-300">
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

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;