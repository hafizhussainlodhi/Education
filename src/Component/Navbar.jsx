import React from 'react';
import { useTheme } from '../ThemeContext';
import { Moon, Sun, Menu } from 'lucide-react'; // Menu icon import kiya

const Navbar = ({ toggleSidebar }) => {
  const { toggleTheme, theme } = useTheme();

  return (
    <nav className="h-20 w-full bg-white dark:bg-[#1e2125] flex items-center justify-between px-4 md:px-6 border-b border-gray-200 dark:border-gray-700 transition-all">
      
      {/* Left: Hamburger Menu (Sirf Mobile par dikhega) */}
      <button 
        onClick={toggleSidebar} 
        className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 mr-2"
      >
        <Menu size={24} />
      </button>

      {/* Search Bar (Mobile par flexible aur chota ho jayega) */}
      <div className="flex items-center bg-gray-50 dark:bg-[#121212] rounded-full px-3 py-2 w-full max-w-[180px] sm:max-w-md border border-gray-200 dark:border-none">
        <span className="mr-2 text-gray-400">🔍</span>
        <input 
          type="text" 
          placeholder="Search..." 
          className="bg-transparent outline-none w-full text-xs sm:text-sm dark:text-white"
        />
      </div>

      {/* Right Side Items */}
      <div className="flex items-center gap-1.5 sm:gap-3 ml-2">
        
        {/* THEME TOGGLE BUTTON */}
        <button 
          onClick={toggleTheme}
          className="flex items-center justify-center w-10 h-7 sm:w-12 sm:h-8 rounded-full bg-gray-200 dark:bg-[#0a0a0a] transition-all duration-300"
        >
          {theme === 'dark' ? (
            <Moon size={16} className="text-blue-400" />
          ) : (
            <Sun size={16} className="text-yellow-500" />
          )}
        </button>

        {/* Other Icons */}
        <div className="flex items-center gap-1 bg-gray-50 dark:bg-[#121212] px-2 py-1.5 sm:px-3 sm:py-2 rounded-full cursor-pointer">
          <img src="/N-flag.png" alt="Flag" className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="text-gray-400 text-[10px] sm:text-xs">▼</span>
        </div>
        
        {/* Notification Icon (Mobile par space bachane ke liye hide kar sakte hain ya chota rakh sakte hain) */}
        <div className="p-1.5 sm:p-2 bg-gray-50 dark:bg-[#121212] rounded-full cursor-pointer">
          <img src="/N-notification.png" alt="Notification" className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>

        <div className="flex items-center gap-1 sm:gap-2 bg-gray-50 dark:bg-[#121212] px-2 py-1 sm:px-3 sm:py-1 rounded-full cursor-pointer">
          <img src="/N-girl.png" alt="Profile" className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover" />
          <span className="text-gray-400 text-[10px] sm:text-xs">▼</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;