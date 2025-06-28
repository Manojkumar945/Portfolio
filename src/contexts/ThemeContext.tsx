import React, { createContext, useContext, useState, useEffect } from 'react';

interface ThemeContextType {
  isHeaderLight: boolean;
  toggleHeaderTheme: () => void;
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

  useEffect(() => {
    // Save header theme preference to localStorage
    localStorage.setItem('headerTheme', isHeaderLight ? 'light' : 'dark');
  }, [isHeaderLight]);

  const toggleHeaderTheme = () => {
    setIsHeaderLight(!isHeaderLight);
  };

  return (
    <ThemeContext.Provider value={{ isHeaderLight, toggleHeaderTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};