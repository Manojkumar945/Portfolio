import React, { createContext, useContext, useState, useEffect } from 'react';

interface ThemeContextType {
  isHeaderLight: boolean;
  isDarkMode: boolean;
  toggleHeaderTheme: () => void;
  toggleGlobalTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isHeaderLight, setIsHeaderLight] = useState(() => {
    // Check localStorage for header theme preference
    const saved = localStorage.getItem('headerTheme');
    return saved === 'light';
  });

  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage for global theme preference
    const saved = localStorage.getItem('globalTheme');
    return saved !== 'light'; // Default to dark mode
  });

  useEffect(() => {
    // Save header theme preference to localStorage
    localStorage.setItem('headerTheme', isHeaderLight ? 'light' : 'dark');
  }, [isHeaderLight]);

  useEffect(() => {
    // Save global theme preference to localStorage
    localStorage.setItem('globalTheme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleHeaderTheme = () => {
    setIsHeaderLight(!isHeaderLight);
  };

  const toggleGlobalTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isHeaderLight, isDarkMode, toggleHeaderTheme, toggleGlobalTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};