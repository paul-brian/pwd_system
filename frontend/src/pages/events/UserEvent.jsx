import React, { useState, useEffect } from "react";

const dummyEvents = [
  { name: "PWD General Assembly", date: "Oct 12, 2023 • 09:00 AM", venue: "Barangay Hall", status: "Attended" },
  { name: "Assistive Device Distribution", date: "Nov 05, 2023 • 01:30 PM", venue: "Covered Court", status: "Registered" },
  { name: "Health and Wellness Seminar", date: "Sep 20, 2023 • 08:00 AM", venue: "Multi-purpose Bldg", status: "Absent" },
  { name: "Year-end Celebration", date: "Dec 15, 2023 • 05:00 PM", venue: "Trapiche Plaza", status: "Registered" },
  { name: "Disability Rights Forum", date: "Aug 12, 2023 • 10:00 AM", venue: "Barangay Hall", status: "Attended" },
];

const statusColors = {
  Attended: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  Registered: "bg-primary/10 text-primary dark:bg-primary/20",
  Absent: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400",
};

const EventAttendance = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [stats, setStats] = useState({ Attended: 0, Registered: 0, Missed: 0 });

  // Filter events based on tab and search
  const filteredEvents = dummyEvents
    .filter((event) => {
      if (activeTab === "Upcoming") return event.status === "Registered";
      if (activeTab === "History") return event.status === "Attended" || event.status === "Absent";
      return true;
    })
    .filter((event) =>
      event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.venue.toLowerCase().includes(searchQuery.toLowerCase())
    );

  // Live stats calculation
  useEffect(() => {
    const calculateStats = () => {
      let attended = 0, registered = 0, missed = 0;
      dummyEvents.forEach((e) => {
        if (e.status === "Attended") attended++;
        else if (e.status === "Registered") registered++;
        else if (e.status === "Absent") missed++;
      });
      setStats({ Attended: attended, Registered: registered, Missed: missed });
    };
    calculateStats();
    const interval = setInterval(calculateStats, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="flex-1 flex flex-col overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-6">
      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">My Event Attendance</h2>
        <button className="flex items-center gap-2 bg-slate-200 dark:bg-slate-800 px-4 py-2 rounded-lg font-bold hover:bg-slate-300 dark:hover:bg-slate-700 transition-all text-sm sm:text-base">
          <span className="material-symbols-outlined">archive</span> View Archive
        </button>
      </header>

      {/* Tabs */}
      <div className="flex gap-4 mb-4 border-b border-slate-200 dark:border-slate-800 overflow-x-auto">
        {["All", "Upcoming", "History"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 text-sm sm:text-base font-bold whitespace-nowrap ${
              activeTab === tab ? "border-b-2 border-primary text-primary" : "text-slate-500 dark:text-slate-400 hover:text-primary transition-colors"
            }`}
          >
            {tab} Events
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="mb-4 max-w-md">
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 material-symbols-outlined">search</span>
          <input
            type="text"
            placeholder="Search event name or venue..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-sm sm:text-base focus:ring-2 focus:ring-primary transition-all"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 dark:bg-slate-800/50">
              <th className="px-4 py-3 text-sm sm:text-base font-bold text-slate-900 dark:text-white">Event Name</th>
              <th className="px-4 py-3 text-sm sm:text-base font-bold text-slate-900 dark:text-white">Date</th>
              <th className="px-4 py-3 text-sm sm:text-base font-bold text-slate-900 dark:text-white">Venue</th>
              <th className="px-4 py-3 text-sm sm:text-base font-bold text-slate-900 dark:text-white w-48 text-center">My Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
            {filteredEvents.map((event, i) => (
              <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                <td className="px-4 py-3 text-sm sm:text-base font-medium text-slate-900 dark:text-white">{event.name}</td>
                <td className="px-4 py-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">{event.date}</td>
                <td className="px-4 py-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">{event.venue}</td>
                <td className="px-4 py-3 text-center">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-bold ${statusColors[event.status]}`}>
                    {event.status === "Attended" && <span className="material-symbols-outlined text-xs sm:text-sm mr-1">check_circle</span>}
                    {event.status === "Registered" && <span className="material-symbols-outlined text-xs sm:text-sm mr-1">app_registration</span>}
                    {event.status === "Absent" && <span className="material-symbols-outlined text-xs sm:text-sm mr-1">cancel</span>}
                    {event.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {["Attended", "Registered", "Missed"].map((key) => (
          <div key={key} className="bg-white dark:bg-slate-900 p-4 sm:p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 text-2xl">
              <span className="material-symbols-outlined">
                {key === "Attended" ? "how_to_reg" : key === "Registered" ? "pending_actions" : "event_busy"}
              </span>
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-widest">{key}</p>
              <p className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-1">{stats[key]}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default EventAttendance;