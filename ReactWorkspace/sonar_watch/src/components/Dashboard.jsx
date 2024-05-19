import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Navbar toggleDarkMode={toggleDarkMode} />
      <div className="flex">
        <Sidebar />
        <div className="flex-grow p-4">
          <h2 className="text-xl font-bold dark:text-white">Welcome to the Dashboard</h2>
          <p className="text-gray-700 dark:text-gray-300">
            {/* This is a sample dashboard using React and Tailwind CSS. */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
