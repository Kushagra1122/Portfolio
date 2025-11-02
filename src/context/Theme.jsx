import React, { useState, createContext, useContext, useEffect } from "react";

// Create Context
const ThemeContext = createContext();

// Theme Provider component
const ThemeProvider = ({ children }) => {
  // Retrieve theme from localStorage, default to dark
  const savedTheme = localStorage.getItem("theme") || "dark";
  const [theme, setTheme] = useState(savedTheme);

  useEffect(() => {
    // Apply the theme to the body element when it changes
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);

    // Save the theme to localStorage for persistence
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme context
const useTheme = () => useContext(ThemeContext);

export { useTheme, ThemeProvider };
