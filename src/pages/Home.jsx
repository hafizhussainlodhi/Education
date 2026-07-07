import React from 'react';
import { 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend 
} from 'recharts';

// --- DATA ARRAYS ---
const lineChartData = [
  { name: 'Jan', Teacher: 45, Student: 25 },
  { name: 'Feb', Teacher: 60, Student: 50 },
  { name: 'Mar', Teacher: 75, Student: 55 },
  { name: 'Apr', Teacher: 52, Student: 30 },
  { name: 'May', Teacher: 45, Student: 32 },
  { name: 'Jun', Teacher: 42, Student: 52 },
  { name: 'Jul', Teacher: 30, Student: 25 },
];

const barChartData = [
  { name: '1', Girls: 400, Boys: 320 },
  { name: '2', Girls: 520, Boys: 600 },
  { name: '3', Girls: 500, Boys: 330 },
  { name: '4', Girls: 560, Boys: 630 },
  { name: '5', Girls: 500, Boys: 330 },
  { name: '6', Girls: 500, Boys: 550 },
  { name: '7', Girls: 440, Boys: 240 },
  { name: '8', Girls: 380, Boys: 330 },
  { name: '9', Girls: 250, Boys: 310 },
  { name: '10', Girls: 370, Boys: 290 },
  { name: '11', Girls: 430, Boys: 440 },
  { name: '12', Girls: 540, Boys: 440 },
];

const studentsTableData = [
  { id: 'PRE2209', name: 'John Smith', marks: 1185, percentage: '98%', year: '2019', img: '/9.png' },
  { id: 'PRE1245', name: 'Jolie Hoskins', marks: 1195, percentage: '99.5%', year: '2018', img: '/10.png' },
  { id: 'PRE1625', name: 'Pennington Joy', marks: 1196, percentage: '99.6%', year: '2017', img: '/11.png' },
  { id: 'PRE2516', name: 'Millie Marsden', marks: 1187, percentage: '98.2%', year: '2016', img: '/12.png' },
  { id: 'PRE2209', name: 'John Smith', marks: 1185, percentage: '98%', year: '2015', img: '/13.png' },
];

const activitiesData = [
  { id: 1, title: '1st place in "Chess"', desc: 'John Doe won 1st place in "Chess"', time: '1 Day ago', img: '/5.png' },
  { id: 2, title: 'Participated in "Carrom"', desc: 'Justin Lee participated in "Carrom"', time: '2 hours ago', img: '/6.png' },
  { id: 3, title: 'Internation conference in "St.John School"', desc: 'Justin Lee attended internation conference in "St.John School"', time: '2 Week ago', img: '/7.png' },
  { id: 4, title: 'Won 1st place in "Chess"', desc: 'John Doe won 1st place in "Chess"', time: '3 Day ago', img: '/8.png' },
];

const Home = () => {
  const statsData = [
    { id: 1, title: 'Popular courses', value: '50055', image: '/1.png' },
    { id: 2, title: 'About Us', value: '50+', image: '/2.png' },
    { id: 3, title: 'Department', value: '30+', image: '/3.png' },
    { id: 4, title: 'Revenue', value: '$505', image: '/4.png' },
  ];

  return (
    <div className="w-full space-y-6 pb-8">
      
      {/* 1. Top Welcome Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white transition-colors">
          Welcome Admin!
        </h1>
        <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
          <span className="hover:underline cursor-pointer">Home</span>
          <span className="mx-2">/</span>
          <span className="text-gray-900 dark:text-white font-medium">Admin</span>
        </div>
      </div>

      {/* 2. Grid Layout for Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statsData.map((card) => (
          <div
            key={card.id}
            className="flex items-center justify-between p-5 rounded-xl border transition-all duration-300
              bg-white dark:bg-[#1e2125] border-gray-200 dark:border-gray-800/50 shadow-sm"
          >
            <div className="space-y-1">
              <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                {card.title}
              </p>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                {card.value}
              </h3>
            </div>
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-50 dark:bg-[#121212] p-1.5">
              <img src={card.image} alt={card.title} className="w-full h-full object-contain" />
            </div>
          </div>
        ))}
      </div>

      {/* 3. Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Line Chart */}
        <div className="bg-white dark:bg-[#1e2125] p-5 rounded-xl border border-gray-200 dark:border-gray-800/50 shadow-sm transition-all">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">Overview</h2>
            <button className="text-gray-400 dark:text-gray-500 font-bold">⋮</button>
          </div>
          <div className="w-full h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lineChartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" opacity={0.15} />
                <XAxis dataKey="name" tick={{ fill: '#94a3b8', fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: '#94a3b8', fontSize: 12 }} axisLine={false} tickLine={false} domain={[20, 80]} />
                <Tooltip contentStyle={{ backgroundColor: '#1e2125', borderRadius: '8px', border: 'none', color: '#fff' }} />
                <Legend verticalAlign="top" align="right" iconType="circle" iconSize={8} wrapperStyle={{ top: -40, fontSize: '12px' }} />
                <Line type="monotone" dataKey="Teacher" stroke="#2563eb" strokeWidth={3} dot={false} />
                <Line type="monotone" dataKey="Student" stroke="#0ea5e9" strokeWidth={3} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="bg-white dark:bg-[#1e2125] p-5 rounded-xl border border-gray-200 dark:border-gray-800/50 shadow-sm transition-all">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">Number of Students</h2>
            <button className="text-gray-400 dark:text-gray-500 font-bold">⋮</button>
          </div>
          <div className="w-full h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barChartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" opacity={0.15} />
                <XAxis dataKey="name" tick={{ fill: '#94a3b8', fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: '#94a3b8', fontSize: 12 }} axisLine={false} tickLine={false} domain={[0, 800]} />
                <Tooltip contentStyle={{ backgroundColor: '#1e2125', borderRadius: '8px', border: 'none', color: '#fff' }} />
                <Legend verticalAlign="top" align="right" iconType="circle" iconSize={8} wrapperStyle={{ top: -40, fontSize: '12px' }} />
                <Bar dataKey="Girls" fill="#0ea5e9" radius={[4, 4, 0, 0]} maxBarSize={10} />
                <Bar dataKey="Boys" fill="#2563eb" radius={[4, 4, 0, 0]} maxBarSize={10} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* --- 4. NEW BOTTOM TABLES & ACTIVITIES SECTION --- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Left Side: Students Table Card */}
        <div className="bg-white dark:bg-[#1e2125] p-5 rounded-xl border border-gray-200 dark:border-gray-800/50 shadow-sm transition-all overflow-hidden flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-semibold text-gray-900 dark:text-white">A chat list of teacher please use different images for contacts</h2>
              <button className="text-gray-400 dark:text-gray-500 font-bold">⋮</button>
            </div>
            
            {/* Responsive Table Wrapper */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-gray-500 dark:text-gray-400 min-w-[450px]">
                <thead>
                  <tr className="text-gray-900 dark:text-gray-200 border-b border-gray-100 dark:border-gray-800">
                    <th className="py-3 font-semibold">ID</th>
                    <th className="py-3 font-semibold">Name</th>
                    <th className="py-3 font-semibold">Marks</th>
                    <th className="py-3 font-semibold">Percentage</th>
                    <th className="py-3 font-semibold">Year</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800/40">
                  {studentsTableData.map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50/50 dark:hover:bg-gray-800/20 transition-colors">
                      <td className="py-3.5 font-medium tracking-wide">{row.id}</td>
                      <td className="py-3.5 flex items-center gap-2 text-gray-900 dark:text-white font-medium">
                        <img src={row.img} alt={row.name} className="w-6 h-6 rounded-full object-cover" />
                        {row.name}
                      </td>
                      <td className="py-3.5">{row.marks}</td>
                      <td className="py-3.5 font-medium text-emerald-500 dark:text-emerald-400">{row.percentage}</td>
                      <td className="py-3.5 tracking-wider">{row.year}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Side: Activity List Card */}
        <div className="bg-white dark:bg-[#1e2125] p-5 rounded-xl border border-gray-200 dark:border-gray-800/50 shadow-sm transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-semibold text-gray-900 dark:text-white">List of teacher upload videos</h2>
              <button className="text-gray-400 dark:text-gray-500 font-bold">⋮</button>
            </div>

            {/* List Wrapper */}
            <div className="space-y-4">
              {activitiesData.map((item) => (
                <div key={item.id} className="flex items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-3">
                    {/* Activity Icon */}
                    <div className="w-9 h-9 rounded-lg bg-gray-50 dark:bg-[#121212] flex items-center justify-center p-2 shrink-0">
                      <img src={item.img} alt="icon" className="w-full h-full object-contain" />
                    </div>
                    {/* Text Details */}
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">{item.title}</h4>
                      <p className="text-gray-400 dark:text-gray-500 text-[11px] mt-0.5 line-clamp-1">{item.desc}</p>
                    </div>
                  </div>
                  {/* Time badge */}
                  <span className="px-2 py-1 rounded bg-gray-100 dark:bg-[#121212] text-[10px] text-gray-500 dark:text-gray-400 whitespace-nowrap">
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* --- 5. PROGRESS SUCCESS RATE BAR --- */}
      <div className="w-full bg-white dark:bg-[#1e2125] p-4 rounded-xl border border-gray-200 dark:border-gray-800/50 shadow-sm transition-all">
        <div className="flex flex-col sm:flex-row sm:items-center justify-center gap-3 w-full max-w-4xl mx-auto">
          {/* Main Gray Track Bar */}
          <div className="w-full bg-gray-100 dark:bg-[#121212] h-2.5 rounded-full overflow-hidden relative">
            {/* Active Blue Status Bar (Width 67%) */}
            <div 
              className="bg-blue-600 dark:bg-blue-500 h-full rounded-full transition-all duration-500" 
              style={{ width: '67%' }}
            />
          </div>
          {/* Percentage Text Label */}
          <span className="text-sm font-bold text-gray-900 dark:text-white whitespace-nowrap text-center sm:text-left">
            67% success rate
          </span>
        </div>
      </div>

    </div>
  );
};

export default Home;