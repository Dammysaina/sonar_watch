import React from 'react';
import HomeIcon from "../assets/images/home.svg"

const Sidebar = () => {
  return (
    <div className="w-64 h-screen p-4">
      <ul>
        <li className="mb-4 text-gray-700 dark:text-gray-300"><span><img src={HomeIcon} alt='homeicon' /></span>Home</li>
        <li className="mb-4 text-gray-700 dark:text-gray-300">Profile</li>
        <li className="mb-4 text-gray-700 dark:text-gray-300">Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;
