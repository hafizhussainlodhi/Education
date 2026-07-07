import React from 'react';

const Application = () => {
  // Bottom section ke liye list data array
  const studentListData = [
    { id: 1, title: 'Student Sauder', sub1: 'Student Sauder', sub2: 'Student Sauder', img: '/a-5.png' },
    { id: 2, title: 'Student Sauder', sub1: 'Student Sauder', sub2: 'Student Sauder', sub3: 'Student Sauder', img: '/a-5.png' },
  ];

  return (
    <div className="w-full space-y-6 pb-8">
      
      {/* 1. TOP PROFILE BANNER CARD */}
      <div className="bg-white dark:bg-[#1e2125] p-6 rounded-3xl border border-gray-200 dark:border-gray-800/50 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 transition-all">
        <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left w-full">
          {/* User Avatar */}
          <div className="w-28 h-28 rounded-full overflow-hidden shrink-0 border-2 border-gray-100 dark:border-gray-700">
            <img src="/a-1.png" alt="Student Profile" className="w-full h-full object-cover" />
          </div>
          
          {/* Profile Details */}
          <div className="space-y-1">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Student Sauder</h2>
            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">Student Sauder</p>
            <div className="pt-2 space-y-0.5 text-xs text-gray-400 dark:text-gray-500 font-medium">
              <p>Student Sauder</p>
              <p>Student Sauder</p>
            </div>
          </div>
        </div>

        {/* Right side Actions Block */}
        <div className="flex items-center border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-sm shrink-0 bg-gray-50 dark:bg-[#121212]">
          <button className="px-5 py-2.5 text-sm font-bold text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            Visit Profile
          </button>
          <div className="border-l border-gray-200 dark:border-gray-700 px-3 py-2.5 text-gray-600 dark:text-gray-300 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800">
            ☰
          </div>
        </div>
      </div>


      {/* 2. MIDDLE CARDS SECTION */}
      {/* Desktop par 3 columns honge, center wala bada hoga, mobile par single row items banenge */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Side Small Card */}
        <div className="lg:col-span-3 bg-white dark:bg-[#1e2125] p-5 rounded-2xl border border-gray-200 dark:border-gray-800/50 shadow-sm text-center flex flex-col items-center justify-between min-h-[340px]">
          <div className="w-full">
            <div className="w-full h-32 rounded-xl overflow-hidden mb-4">
              <img src="/a-4.png" alt="thumb" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-1 text-xs text-gray-400 dark:text-gray-500 font-medium">
              <p className="text-gray-600 dark:text-gray-300">Lerely Meind</p>
              <p>Lerely Meind Lerely Meind</p>
              <p>Lerely Meind</p>
            </div>
          </div>
          <div className="w-full pt-4 space-y-2">
            <button className="w-full py-2 bg-gray-100 dark:bg-white text-gray-900 dark:text-black font-bold text-xs rounded-xl shadow-sm">
              Lerely Meind
            </button>
            <p className="text-[10px] text-gray-400 font-medium">Lerely Meind</p>
          </div>
        </div>

        {/* Center Featured Big Card */}
        <div className="lg:col-span-6 bg-white dark:bg-[#1e2125] p-6 rounded-2xl border border-gray-200 dark:border-gray-800/50 shadow-sm relative min-h-[380px] flex flex-col justify-between">
          {/* Top Back Arrow icon style overlay */}
          <span className="absolute left-4 top-4 text-gray-400 dark:text-gray-500 text-sm cursor-pointer hover:text-white">⟨</span>
          
          <div className="flex flex-col sm:flex-row gap-5 items-start mt-2">
            <div className="w-24 h-24 rounded-full overflow-hidden shrink-0 border border-gray-100 dark:border-gray-800">
              <img src="/a-3.png" alt="Center avatar" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-3 text-xs w-full">
              <div className="space-y-0.5">
                <p className="text-gray-400 font-medium">Lerely Meind Lerely Meind</p>
                <h3 className="text-base font-bold text-gray-900 dark:text-white">Lerely Meind</h3>
                <p className="text-gray-500 font-medium">Lerely Meind</p>
              </div>
              <div className="text-gray-400 font-medium space-y-0.5">
                <p>Lerely Meind Lerely Meind</p>
                <p>Lerely Meind</p>
              </div>
              
              {/* Bullet points stack matching design */}
              <ul className="list-disc pl-4 text-gray-700 dark:text-gray-300 space-y-1 font-semibold">
                <li>Lerely Meind</li>
                <li>Lerely Meind</li>
                <li>Lerely Meind</li>
              </ul>
              <p className="text-gray-400 font-medium pt-1">Lerely Meind Lerely Meind</p>
            </div>
          </div>

          <div className="w-full pt-5 space-y-2">
            <button className="w-full py-2.5 bg-gray-100 dark:bg-white text-gray-900 dark:text-black font-bold text-sm rounded-xl shadow-sm">
              Lerely Meind
            </button>
            <div className="flex justify-center gap-6 text-[10px] text-gray-400 font-semibold border-t border-gray-100 dark:border-gray-800/60 pt-3">
              <span className="cursor-pointer border-b border-gray-400 pb-0.5">Lerely Meind</span>
              <span className="cursor-pointer">Lerely Meind</span>
            </div>
          </div>
        </div>

        {/* Right Side Small Card */}
        <div className="lg:col-span-3 bg-white dark:bg-[#1e2125] p-5 rounded-2xl border border-gray-200 dark:border-gray-800/50 shadow-sm text-center flex flex-col items-center justify-between min-h-[340px]">
          <div className="w-full">
            <div className="w-full h-32 rounded-xl overflow-hidden mb-4">
              <img src="/a-4.png" alt="thumb" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-1 text-xs text-gray-400 dark:text-gray-500 font-medium">
              <p className="text-gray-600 dark:text-gray-300">Lerely Meind</p>
              <p>Lerely Meind Lerely Meind</p>
              <p>Lerely Meind</p>
            </div>
          </div>
          <div className="w-full pt-4 space-y-2">
            <button className="w-full py-2 bg-gray-100 dark:bg-white text-gray-900 dark:text-black font-bold text-xs rounded-xl shadow-sm">
              Lerely Meind
            </button>
            <p className="text-[10px] text-gray-400 font-medium">Lerely Meind</p>
          </div>
        </div>

      </div>


      {/* 3. BOTTOM LIST ROWS CARD */}
      <div className="bg-white dark:bg-[#1e2125] p-5 rounded-2xl border border-gray-200 dark:border-gray-800/50 shadow-sm space-y-4">
        {studentListData.map((row) => (
          <div 
            key={row.id} 
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl border border-gray-100 dark:border-gray-800/40 bg-gray-50/30 dark:bg-[#121212]/20 hover:bg-gray-50 dark:hover:bg-gray-800/20 transition-all"
          >
            {/* Left Row details */}
            <div className="flex items-center gap-4">
              <img src={row.img} alt="Avatar row" className="w-14 h-14 rounded-full object-cover shrink-0 border border-gray-200 dark:border-gray-700" />
              <div className="space-y-0.5 text-xs font-semibold">
                <h4 className="text-sm font-bold text-gray-900 dark:text-white">{row.title}</h4>
                <p className="text-gray-500 dark:text-gray-400">{row.sub1}</p>
                <div className="flex flex-wrap gap-x-3 text-[11px] text-gray-400 dark:text-gray-500 pt-1 font-medium">
                  <span>{row.sub2}</span>
                  {row.sub3 && <span>• {row.sub3}</span>}
                </div>
              </div>
            </div>

            {/* Right Row action panel */}
            <div className="flex items-center justify-between sm:justify-end gap-6 border-t sm:border-t-0 pt-2 sm:pt-0">
              <span className="text-[11px] font-semibold text-gray-500 dark:text-gray-400 tracking-wide px-1">
                Student Sauder
              </span>
              
              {/* Icon Capsule Button */}
              <button className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 dark:bg-white text-gray-900 dark:text-black font-bold text-[11px] rounded-full shadow-sm whitespace-nowrap">
                <span>🏠</span>
                <span>Student Sauder</span>
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Application;