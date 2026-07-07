import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Component/Sidebar';
import Navbar from './Component/Navbar';
import { useTheme } from './ThemeContext'; // <--- Yeh import zaroori hai theme check karne ke liye
import Home from './pages/Home';
import Teacher from './pages/Teacher';
import Application from './pages/Applicatoin';

// Dashboard Pages (Agar abhi pages nahi banaye to inhein comment rehne dein)
// import EducationDashboard from './pages/EducationDashboard';
// import TeacherDashboard from './pages/TeacherDashboard';

const App = () => {
  // Mobile sidebar ke liye state
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  // Theme context se current theme lein
  const { theme } = useTheme(); 

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      {/* IMPORTANT: Yahan dynamic class lagayi hai. 
        Agar theme 'dark' hogi to pooray page par dark mode apply ho jayega smoothly.
      */}
      <div className={`flex h-screen w-full bg-[#f8f9fa] dark:bg-[#121212] text-gray-800 dark:text-gray-200 overflow-hidden transition-colors duration-300 ${theme === 'dark' ? 'dark' : ''}`}>
        
        {/* Sidebar Component */}
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col h-full overflow-hidden">
          
          {/* Navbar Component */}
          <Navbar toggleSidebar={toggleSidebar} />
          
          {/* Dynamic Page Content */}
          <main className="flex-1 overflow-y-auto p-4 sm:p-6">
            <Routes>
              {/* Filhal test karne ke liye blank headers rakh diye hain */}
              <Route path="/" element={<Home/>} />
              <Route path="/teachers" element={<Teacher/>} />
              <Route path="/applications" element={<Application/>} />
              <Route path="/results" element={<h1 className="text-2xl font-bold">Results Page</h1>} />
              <Route path="/students" element={<h1 className="text-2xl font-bold">Students Page</h1>} />
            </Routes>
          </main>

        </div>
      </div>
    </Router>
  );
};

export default App;