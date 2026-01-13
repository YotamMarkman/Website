import React, { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { themes, defaultTheme } from '@styles/themes';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(defaultTheme);

  // Load saved theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme);
    }
  }, []);

  // Apply theme colors to CSS variables
  useEffect(() => {
    const themeColors = themes[currentTheme].colors;
    const root = document.documentElement;

    root.style.setProperty('--dark-navy', themeColors.darkNavy);
    root.style.setProperty('--navy', themeColors.navy);
    root.style.setProperty('--light-navy', themeColors.lightNavy);
    root.style.setProperty('--lightest-navy', themeColors.lightestNavy);
    root.style.setProperty('--navy-shadow', themeColors.navyShadow);
    root.style.setProperty('--dark-slate', themeColors.darkSlate);
    root.style.setProperty('--slate', themeColors.slate);
    root.style.setProperty('--light-slate', themeColors.lightSlate);
    root.style.setProperty('--lightest-slate', themeColors.lightestSlate);
    root.style.setProperty('--white', themeColors.white);
    root.style.setProperty('--green', themeColors.accent);
    root.style.setProperty('--green-tint', themeColors.accentTint);

    // Save to localStorage
    localStorage.setItem('portfolio-theme', currentTheme);
  }, [currentTheme]);

  const changeTheme = themeName => {
    if (themes[themeName]) {
      setCurrentTheme(themeName);
    }
  };

  const value = {
    currentTheme,
    changeTheme,
    themes,
    themeName: themes[currentTheme].name,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
