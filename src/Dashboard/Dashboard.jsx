

import React, { useState } from 'react';
import MainContent from './MainContent.jsx'; 
import './Dashboard.css';

// === Inline SVG Icons ===
const SearchIcon = ({ size = 18, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className={className}>
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const BellIcon = ({ size = 20, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className={className}>
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
  </svg>
);

const ChevronDownIcon = ({ size = 16, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className={className}>
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);


const SunIcon = ({ size = 20, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className={className}>
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const MoonIcon = ({ size = 20, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className={className}>
    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
  </svg>
);

const FullscreenIcon = ({ size = 20, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className={className}>
    <path d="M8 3H5a2 2 0 0 0-2 2v3M16 3h3a2 2 0 0 1 2 2v3M8 21H5a2 2 0 0 1-2-2v-3M16 21h3a2 2 0 0 0 2-2v-3" />
  </svg>
);

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); // State to track dark mode

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode); // Toggle the React state
    document.body.classList.toggle('dark-mode'); // Toggle the class on the body element
  };

  const handleFullscreenToggle = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  return (
   
    <div className={`dashboard-container ${sidebarOpen ? 'sidebar-open' : ''}`}>
      <div className="top-panel">
        <div className="hamburger-and-logo">
          <div className="hamburger-icon" onClick={toggleSidebar}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>

          <div className="logo-area">
            <img
              src="/logo.png" 
              alt="Astrolite Logo"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://placehold.co/180x60/4ade80/ffffff?text=Astrolite"; 
              }}
            />
          </div>
        </div>
        <div className="header-content-area">
          <div className="section-box action-box">
            <div className="button-group">
              <button className="buy-btn active">BUY</button>
              <button className="sell-btn">SELL</button>
            </div>
          </div>

         
          <div className="section-box icon-box">
            <img src="https://img.icons8.com/?size=100&id=BkugfgmBwtEI&format=png&color=000000" alt="Icon 1" className="header-icons" />
            <img src="https://img.icons8.com/?size=100&id=YrXy82StfwT9&format=png&color=000000" alt="Icon 2" className="header-icons" />
            <img src="https://img.icons8.com/?size=100&id=m9tauTQ9K0gT&format=png&color=000000" alt="Icon 3" className="header-icons" />
          </div>

          <div className="section-box utility-box">
            <div className="search-container">
              <SearchIcon className="search-icon" />
              <input type="text" className="search-box" placeholder="Search" />
            </div>

            <button className="icon-button" onClick={handleThemeToggle}>
              {isDarkMode ? <SunIcon /> : <MoonIcon />} {/* Renders Sun or Moon based on theme */}
            </button>

            <button className="icon-button" onClick={handleFullscreenToggle}>
              <FullscreenIcon />
            </button>

            <BellIcon className="bell-icon" />

            <img src="https://i.pravatar.cc/150?img=12" alt="User" className="profile-pic" />
            <div className="profile-name">
              Saikrupan <ChevronDownIcon className="profile-down-arrow" />
            </div>
          </div>
        </div>
      </div>

      <div className="main-body-content">
        {/* Sidebar */}
        <div className={`sidebar ${sidebarOpen ? 'visible' : 'hidden'}`}>
          <ul className="nav-list">
            <li className="active"><i className="fas fa-store"></i> Market</li>
            <li><i className="fas fa-th"></i> Categories</li>
            <li><i className="fas fa-shopping-bag"></i> Order <span className="badge">3</span></li>
            <li><i className="fas fa-heart"></i> Favourite</li>
            <li><i className="fas fa-shopping-cart"></i> Cart <span className="badge cart">8</span></li>
            <li><i className="fas fa-envelope"></i> Message</li>
            <li><i className="fas fa-smile"></i> Feedback</li>
            <li><i className="fas fa-question-circle"></i> Help</li>
            <li><i className="fas fa-cog"></i> Settings</li>
          </ul>
        </div>

        {/* Main Content Area */}
        <div className="main-container">
          <MainContent /> {/* This is where your primary dashboard content will go */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
