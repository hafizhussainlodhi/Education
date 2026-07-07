import React from 'react';

const Teacher = () => {
  // Numbers of students static list
  const studentsList = [
    { id: 1, name: 'John Cena', img: '/t-6.png' },
    { id: 2, name: 'John Cena', img: '/t-7.png' },
    { id: 3, name: 'John Cena', img: '/t-8.png' },
    { id: 4, name: 'John Cena', img: '/t-10.png' },
  ];

  return (
    <div className="w-full space-y-6 pb-8">
      
      {/* 1. Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white dark:bg-[#1e2125] flex items-center justify-center p-2 shadow-sm">
            <img src="/t-1.png" alt="teachers icon" className="w-full h-full object-contain" />
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
            Teachers
          </h1>
        </div>
        
        {/* Right Sort dropdown placeholder */}
        <div className="flex items-center gap-2 bg-white dark:bg-[#1e2125] px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-800/50 shadow-sm cursor-pointer text-xs font-semibold max-w-max">
          <span>Light Mods</span>
          <span className="text-gray-400 text-[10px]">▼</span>
        </div>
      </div>

      {/* 2. Main Mesh Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        
        {/* Card A: Primary Video */}
        <div className="bg-white dark:bg-[#1e2125] p-5 rounded-2xl border border-gray-200 dark:border-gray-800/50 shadow-sm flex flex-col justify-between h-full">
          <div>
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">Primary Video</h2>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">List of teacher upload videos</p>
            
            {/* Gallery Images Container */}
            <div className="grid grid-cols-12 gap-2 mt-4">
              <div className="col-span-7 h-36 rounded-xl overflow-hidden">
                <img src="/t-2.png" alt="primary" className="w-full h-full object-cover" />
              </div>
              <div className="col-span-5 flex flex-col gap-2">
                <div className="h-[68px] rounded-xl overflow-hidden">
                  <img src="/t-3.png" alt="secondary 1" className="w-full h-full object-cover" />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="h-14 rounded-xl overflow-hidden">
                    <img src="/t-4.png" alt="secondary 2" className="w-full h-full object-cover" />
                  </div>
                  <div className="h-14 rounded-xl overflow-hidden">
                    <img src="/t-5.png" alt="secondary 3" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button className="w-full mt-5 py-2.5 bg-gray-100 hover:bg-gray-200 dark:bg-white dark:hover:bg-gray-100 text-gray-900 dark:text-black font-semibold text-xs rounded-xl transition-colors">
            View All
          </button>
        </div>

        {/* Card B: Numbers of Students List */}
        <div className="bg-white dark:bg-[#1e2125] p-5 rounded-2xl border border-gray-200 dark:border-gray-800/50 shadow-sm">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Numbers of students</h2>
          <div className="space-y-3.5">
            {studentsList.map((student) => (
              <div key={student.id} className="flex items-center gap-3 p-1.5 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                <img src={student.img} alt={student.name} className="w-10 h-10 rounded-full object-cover shrink-0" />
                <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">{student.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Card C: Light Mods Status Checklist */}
        <div className="bg-white dark:bg-[#1e2125] p-5 rounded-2xl border border-gray-200 dark:border-gray-800/50 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-bold text-gray-800 dark:text-gray-200">Light Mods</h2>
              <span className="text-gray-400 text-xs">★ ▼</span>
            </div>
            
            <div className="space-y-3">
              {[1, 2, 3, 4, 5].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <img src="/t-right.png" alt="check" className="w-4 h-4 object-contain" />
                    <span className="text-gray-500 dark:text-gray-400 font-medium">Light Mods</span>
                  </div>
                  <span className="font-semibold text-gray-800 dark:text-gray-200">113</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 mt-4">
            <button className="py-2 text-[10px] font-bold bg-gray-50 dark:bg-[#121212] text-gray-800 dark:text-white rounded-lg border border-gray-100 dark:border-transparent">Light Mods</button>
            <button className="py-2 text-[10px] font-bold bg-gray-50 dark:bg-[#121212] text-gray-800 dark:text-white rounded-lg border border-gray-100 dark:border-transparent">Light Mods</button>
          </div>
        </div>

        {/* Card D: Circular Badge Profile View */}
        <div className="bg-white dark:bg-[#1e2125] p-6 rounded-2xl border border-gray-200 dark:border-gray-800/50 shadow-sm flex flex-col items-center justify-center text-center h-full">
          <div className="w-24 h-24 relative mb-4">
            <img src="/t-9.png" alt="avatar layout" className="w-full h-full object-contain" />
          </div>
          <h3 className="font-bold text-gray-900 dark:text-white text-base">Light Mods</h3>
          <p className="text-2xl font-black text-gray-900 dark:text-white mt-1">+ 113</p>
          <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-0.5">Light Mods</p>
        </div>

      </div>

      {/* 3. Bottom Controls Layout Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Bottom Left: List items with stats and purple badge tags */}
        <div className="lg:col-span-5 bg-white dark:bg-[#1e2125] p-5 rounded-2xl border border-gray-200 dark:border-gray-800/50 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800/60 pb-2">
            <h2 className="text-sm font-bold text-gray-900 dark:text-white">Light Mods</h2>
            <span className="text-emerald-500 dark:text-emerald-400 text-xs">✓</span>
          </div>
          
          <div className="space-y-3.5">
            {[
              { label: 'Light Mods', count: '113', tag: 'P 50' },
              { label: 'Light Mods', count: '170', tag: 'No' },
              { label: 'Light Mods', count: '110', tag: 'Go' }
            ].map((row, idx) => (
              <div key={idx} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                  <span className="text-gray-400 dark:text-gray-500 text-sm">⚿</span>
                  <span className="text-gray-600 dark:text-gray-400 font-medium">{row.label}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-semibold text-gray-900 dark:text-white">{row.count}</span>
                  <span className="px-2 py-0.5 text-[9px] font-bold text-white bg-purple-600/80 rounded min-w-[32px] text-center">{row.tag}</span>
                </div>
              </div>
            ))}

            {/* Last item with check icon instead of badge */}
            <div className="flex items-center justify-between text-xs pt-1">
              <div className="flex items-center gap-3">
                <span className="text-gray-400 dark:text-gray-500 text-sm">📁</span>
                <span className="text-gray-600 dark:text-gray-400 font-medium">Light Mods</span>
              </div>
              <div className="flex items-center gap-7 mr-1">
                <span className="font-semibold text-gray-900 dark:text-white">117</span>
                <span className="text-emerald-500 text-sm font-bold">✓</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Middle: Filter & Search inputs mock panel */}
        <div className="lg:col-span-4 bg-white dark:bg-[#1e2125] p-5 rounded-2xl border border-gray-200 dark:border-gray-800/50 shadow-sm space-y-4">
          <h2 className="text-sm font-bold text-gray-900 dark:text-white">Light Mods</h2>
          
          <div className="space-y-3">
            <div className="relative">
              <input type="text" placeholder="Light Mods" className="w-full bg-gray-50 dark:bg-[#121212] border border-gray-200 dark:border-transparent rounded-xl px-4 py-2 text-xs text-gray-800 dark:text-white outline-none" />
              <span className="absolute right-3 top-2.5 text-gray-400 text-xs">🔍</span>
            </div>
            
            <p className="text-[10px] text-gray-400 dark:text-gray-500 font-medium px-1">Light Mods</p>
            
            <div className="relative">
              <input type="text" placeholder="Light Mods" className="w-full bg-gray-50 dark:bg-[#121212] border border-gray-200 dark:border-transparent rounded-xl px-4 py-2 text-xs text-gray-800 dark:text-white outline-none" />
              <span className="absolute right-3 top-2.5 text-gray-400 text-xs">✕</span>
            </div>
            
            <div className="flex items-center justify-between px-1 pt-1 text-xs">
              <span className="text-gray-400 dark:text-gray-500 font-medium">Light Mods</span>
              <span className="text-gray-400 dark:text-gray-500 cursor-pointer hover:text-red-400">✕</span>
            </div>
          </div>
        </div>

        {/* Bottom Right: Accordions Panel Stack */}
        <div className="lg:col-span-3 bg-white dark:bg-[#1e2125] p-4 rounded-2xl border border-gray-200 dark:border-gray-800/50 shadow-sm space-y-2 flex flex-col justify-between">
          
          {/* Main header accordion view */}
          <div className="border-b border-gray-100 dark:border-gray-800/60 pb-2">
            <div className="flex items-center justify-between text-xs bg-gray-50 dark:bg-[#121212] p-2.5 rounded-xl cursor-pointer">
              <div className="flex items-center gap-2">
                <img src="/t-right.png" alt="check" className="w-4 h-4 object-contain" />
                <span className="font-bold text-gray-900 dark:text-white">Light Mods</span>
              </div>
              <span className="text-gray-400 text-[10px]">▼</span>
            </div>
            <p className="text-[11px] text-gray-400 dark:text-gray-500 px-2 mt-2 font-medium">Light Mods</p>
          </div>

          {/* Simple collapsed tabs */}
          <div className="space-y-2">
            {['Light Mods', 'Light Mods', 'Light Mods'].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between text-xs bg-gray-50 dark:bg-[#121212] p-2.5 rounded-xl cursor-pointer">
                <div className="flex items-center gap-2">
                  <img src="/t-right.png" alt="check" className="w-4 h-4 object-contain" />
                  <span className="font-semibold text-gray-700 dark:text-gray-300">{item}</span>
                </div>
                <span className="text-gray-400 text-[10px]">▼</span>
              </div>
            ))}

            {/* Custom inner layout collapsed panel */}
            <div className="bg-gray-100 dark:bg-[#202429] p-2.5 rounded-xl text-xs text-gray-400 dark:text-gray-500 font-medium">
              Light Mods
            </div>

            {/* Select settings block */}
            <div className="flex items-center justify-between text-xs bg-gray-50 dark:bg-[#121212] p-2.5 rounded-xl">
              <span className="text-gray-600 dark:text-gray-400 font-medium">Light Mods</span>
              <span className="text-gray-400 text-[9px] bg-white dark:bg-[#1e2125] border border-gray-200 dark:border-gray-800 px-1.5 py-0.5 rounded shadow-sm">C ▼</span>
            </div>

            <div className="flex items-center gap-2 text-xs bg-gray-50 dark:bg-[#121212] p-2.5 rounded-xl">
              <img src="/t-right.png" alt="check" className="w-4 h-4 object-contain" />
              <span className="font-semibold text-gray-700 dark:text-gray-300">Light Mods</span>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Teacher;