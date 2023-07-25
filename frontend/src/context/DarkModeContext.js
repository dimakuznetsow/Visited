import { createContext, useLayoutEffect, useState } from "react";

export const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("isDarkMode") === "true"
  );

  useLayoutEffect(() => {
    const html = document.querySelector("html");

    if (isDarkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    const html = document.querySelector("html");
    const newIsDarkMode = !isDarkMode;

    if (newIsDarkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }

    localStorage.setItem("isDarkMode", newIsDarkMode.toString());
    setIsDarkMode(newIsDarkMode);
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
