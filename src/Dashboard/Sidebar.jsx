import React, { useState } from 'react';

// --- Inline SVG Icons (replacing Lucide React) ---
const LayoutGridIcon = ({ size = 20, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="3" width="7" height="7"></rect>
    <rect x="14" y="3" width="7" height="7"></rect>
    <rect x="14" y="14" width="7" height="7"></rect>
    <rect x="3" y="14" width="7" height="7"></rect>
  </svg>
);
const ShoppingCartIcon = ({ size = 20, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="9" cy="21" r="1"></circle>
    <circle cx="20" cy="21" r="1"></circle>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
  </svg>
);
const MessageSquareIcon = ({ size = 20, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
  </svg>
);
const HeartIcon = ({ size = 20, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
);
const SettingsIcon = ({ size = 20, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 0-2 0l-.15-.08a2 2 0 0 0-2.73 2.73l.08.15a2 2 0 0 0 0 2l-.25.43a2 2 0 0 1-1.73 1H2a2 2 0 0 0-2 2v.44a2 2 0 0 0 2 2h.18a2 2 0 0 1 1.73 1l.25.43a2 2 0 0 0 0 2l-.08.15a2 2 0 0 0 2.73 2.73l.15.08a2 2 0 0 0 2 0l.43-.25a2 2 0 0 1 1.73-1H22a2 2 0 0 0 2-2v-.44a2 2 0 0 0-2-2h-.18a2 2 0 0 1-1.73-1l-.25-.43a2 2 0 0 0 0-2l.08-.15a2 2 0 0 0-2.73-2.73l-.15-.08a2 2 0 0 0-2 0l-.43.25a2 2 0 0 1-1.73 1V2z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
);
const HelpCircleIcon = ({ size = 20, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
    <line x1="12" y1="17" x2="12.01" y2="17"></line>
  </svg>
);
const BriefcaseIcon = ({ size = 20, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
  </svg>
);
// --- End Inline SVG Icons ---

// Sidebar Component
const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('Market');
  const navItems = [
    { name: 'Market', icon: LayoutGridIcon, count: null },
    { name: 'Categories', icon: LayoutGridIcon, count: null },
    { name: 'Order', icon: BriefcaseIcon, count: 3 },
    { name: 'Favourite', icon: HeartIcon, count: null },
    { name: 'Cart', icon: ShoppingCartIcon, count: 3 },
    { name: 'Message', icon: MessageSquareIcon, count: null },
    { name: 'Feedback', icon: MessageSquareIcon, count: null },
    { name: 'Help', icon: HelpCircleIcon, count: null },
  ];
  const bottomItems = [
    { name: 'Settings', icon: SettingsIcon },
  ];
  return (
    <aside className="sidebar-container">
      <style>{`
        /* Sidebar Container */
        .sidebar-container {
          width: 200px; /* w-64 */
          background-color: #ffffff; /* bg-white */
          padding: 16px; /* p-4 */
          border-radius: 8px; /* rounded-lg */
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); /* shadow-sm */
          margin-right: 16px; /* mr-4 */
          flex-shrink: 0; /* flex-shrink-0 */
        }

        .sidebar-nav-list {
          list-style: none;
          padding: 0;
          margin: 0;
          margin-bottom: 24px; /* mb-6 */
          display: flex;
          flex-direction: column;
          gap: 8px; /* space-y-2 */
        }

        .sidebar-bottom-list {
          list-style: none;
          padding: 16px 0 0 0; /* pt-4 */
          margin: 0;
          border-top: 1px solid #e5e7eb; /* border-t border-gray-200 */
          display: flex;
          flex-direction: column;
          gap: 8px; /* space-y-2 */
        }

        .sidebar-item-link {
          display: flex;
          align-items: center;
          padding: 8px 12px; /* py-2 px-3 */
          border-radius: 8px; /* rounded-lg */
          color: #374151; /* text-gray-700 */
          transition: background-color 0.2s, color 0.2s; /* transition-colors */
          text-decoration: none; /* Remove underline from links */
        }

        .sidebar-item-link:hover {
          background-color: #f3f4f6; /* hover:bg-gray-100 */
        }

        .sidebar-item-link svg { /* Targeting icons directly */
          margin-right: 12px; /* mr-3 */
        }

        .sidebar-item-link.active {
          background-color: #d1fae5; /* bg-green-100 */
          color: #10b981; /* text-green-700 */
          font-weight: 600; /* font-semibold */
        }

        .sidebar-item-count {
          margin-left: auto; /* ml-auto */
          background-color: #22c55e; /* bg-green-500 */
          color: #ffffff; /* text-white */
          font-size: 0.75rem; /* text-xs */
          padding: 2px 8px; /* px-2 py-0.5 */
          border-radius: 9999px; /* rounded-full */
        }
      `}</style>
      <ul className="sidebar-nav-list">
        {navItems.map((item) => (
          <li key={item.name}>
            <a
              href="#"
              className={`sidebar-item-link ${
                activeItem === item.name ? 'active' : ''
              }`}
              onClick={() => setActiveItem(item.name)}
            >
              <item.icon size={20} className="sidebar-icon" />
              <span>{item.name}</span>
              {item.count && (
                <span className="sidebar-item-count">
                  {item.count}
                </span>
              )}
            </a>
          </li>
        ))}
      </ul>
      <ul className="sidebar-bottom-list">
        {bottomItems.map((item) => (
          <li key={item.name}>
            <a
              href="#"
              className={`sidebar-item-link ${
                activeItem === item.name ? 'active' : ''
              }`}
              onClick={() => setActiveItem(item.name)}
            >
              <item.icon size={20} className="sidebar-icon" />
              <span>{item.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;