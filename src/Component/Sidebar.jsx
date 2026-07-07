import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, FileText, GraduationCap, X } from 'lucide-react'; 

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const menuItems = [
    { name: 'Dashboard', path: '/', icon: <LayoutDashboard size={20} /> },
    { name: 'Teachers Dashboard', path: '/teachers', icon: <Users size={20} /> },
    { name: 'A application page', path: '/applications', icon: <FileText size={20} /> },
    { name: 'A Results Page', path: '/results', icon: <FileText size={20} /> },
    { name: 'A Student Page', path: '/students', icon: <GraduationCap size={20} /> },
  ];

  return (
    <>
      {/* Backdrop for Mobile */}
      {isOpen && ( 
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden" 
          onClick={toggleSidebar}
        />
      )}

      {/* CHANGES HERE:
        1. bg-[#ffffff] (Light mode background)
        2. dark:bg-[#1e2125] (Aapka original dark background)
        3. text-gray-600 dark:text-gray-300 (Text color switch)
        4. border-r border-gray-200 dark:border-transparent (Light mode mein halka border)
      */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 p-4 transform transition-all duration-300 ease-in-out
        bg-[#ffffff] dark:bg-[#1e2125] 
        text-gray-600 dark:text-gray-300 
        border-r border-gray-200 dark:border-none
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:relative md:translate-x-0 md:h-screen
      `}>
        
        {/* Sidebar Header (Text color changed to text-gray-900 dark:text-white) */}
        <div className="flex items-center justify-between text-gray-900 dark:text-white font-bold text-lg mb-8 px-4">
          <span>EDU DASHBOARD</span>
          <button onClick={toggleSidebar} className="md:hidden text-gray-400 hover:text-gray-600 dark:hover:text-white">
            <X size={20} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  onClick={() => {
                    if (window.innerWidth < 768) toggleSidebar();
                  }}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      isActive 
                        ? 'bg-[#1e2125] text-white dark:bg-white dark:text-black font-semibold shadow-sm' 
                        : 'hover:bg-gray-100 dark:hover:bg-[#2a2d32] text-gray-500 dark:text-gray-400'
                    }`
                  }
                >
                  {item.icon}
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;