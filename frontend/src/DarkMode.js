// DarkModeToggle.js

import React, { useState, useEffect } from 'react';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Save the mode preference in local storage or a cookie
    localStorage.setItem('darkMode', !isDarkMode);
  };

  // Load the initial mode preference from local storage or a cookie
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      setIsDarkMode(savedMode === 'true');
    }
  }, []);

  // Update the CSS link based on the mode
  useEffect(() => {
    const linkElement = document.getElementById('theme-link');
    if (linkElement) {
      linkElement.href = isDarkMode ? 'dark-mode.    https://cdn.jsdelivr.net/npm/bootstrap-dark-5@1.1.3/dist/css/bootstrap-dark.min.css' : 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css';
    }
  }, [isDarkMode]);

  return (
    <div className="dark-mode-toggle">
      <button className="toggle-button" onClick={toggleDarkMode}>
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </div>
  );
};

export default DarkModeToggle;
