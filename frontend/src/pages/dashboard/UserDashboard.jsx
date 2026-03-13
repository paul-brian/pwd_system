import { useState } from "react";

// Dummy Data
const dummyEvents = [
  { id: "EVT-001", name: "Health & Wellness Seminar", date: "Feb 15, 2026", venue: "Trapiche Covered Court", status: "Upcoming", statusColor: "blue" },
  { id: "EVT-002", name: "Livelihood Training", date: "Feb 10, 2026", venue: "Training Center", status: "Completed", statusColor: "emerald" },
];

const dummyCheckups = [
  { id: "CHK-001", date: "Feb 5, 2026", vitals: "120/80 BP - 60kg", status: "Stable", staff: "Nurse Sarah" },
  { id: "CHK-002", date: "Jan 28, 2026", vitals: "130/85 BP - 62kg", status: "Follow-up", staff: "Dr. Reyes" },
];

const trendColors = {
  emerald: "text-emerald-500 bg-emerald-50 dark:bg-emerald-900/20",
  orange: "text-orange-500 bg-orange-50 dark:bg-orange-900/20",
  blue: "text-blue-500 bg-blue-50 dark:bg-blue-900/20",
  slate: "text-slate-400 bg-slate-100 dark:bg-slate-800/20",
};

const UserDashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalComponent, setModalComponent] = useState(null);

  const handleEventAction = (event) => {
    setModalComponent(
      <div>
        <h3 className="font-bold text-lg mb-2">{event.name}</h3>
        <p className="mb-1"><span className="font-semibold">Date:</span> {event.date}</p>
        <p className="mb-1"><span className="font-semibold">Venue:</span> {event.venue}</p>
        <p className="mb-1"><span className="font-semibold">Status:</span> {event.status}</p>
      </div>
    );
    setShowModal(true);
  };

  const Modal = ({ children, onClose }) => (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-900 rounded-xl p-6 w-full sm:max-w-sm md:max-w-md lg:max-w-lg">
        {children}
        <div className="flex justify-end mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-[100dvh] overflow-x-hidden">
      <div className="p-4 sm:p-6 md:p-8 max-w-7xl mx-auto space-y-6">

        {/* Welcome Banner */}
        <div className="relative overflow-hidden rounded-xl bg-blue-600 text-white p-6 md:p-10 shadow-lg">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Welcome, John Doe
          </h1>
          <p className="text-white/90 mt-2 text-sm sm:text-base">
            Here’s your PWD dashboard overview with live stats and events.
          </p>
          <div className="absolute top-0 right-0 w-40 h-40 sm:w-64 sm:h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: "Upcoming Events", value: dummyEvents.length, icon: "event", trendColor: "blue" },
            { title: "Recent Checkups", value: dummyCheckups.length, icon: "health_and_safety", trendColor: "emerald" },
            { title: "Pending Alerts", value: 1, icon: "notifications", trendColor: "orange" },
            { title: "Completed Check-ins", value: 5, icon: "how_to_reg", trendColor: "emerald" },
          ].map((stat) => (
            <div
              key={stat.title}
              className="bg-white dark:bg-slate-900 p-4 sm:p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-3"
            >
              <div className="flex justify-between items-start">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${trendColors[stat.trendColor]}`}>
                  <span className="material-symbols-outlined text-xl">{stat.icon}</span>
                </div>
              </div>
              <div>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                  {stat.title}
                </p>
                <p className="text-slate-900 dark:text-white text-2xl font-bold leading-tight">
                  {stat.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Upcoming Events Table */}
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="px-4 sm:px-6 py-3 border-b">
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">
              Upcoming Events
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-left">
              <thead className="bg-slate-50 dark:bg-slate-800/50">
                <tr>
                  {["Event Name", "Date", "Venue", "Status", "Action"].map(h => (
                    <th key={h} className="px-4 sm:px-6 py-3 text-xs sm:text-sm font-bold text-slate-500 uppercase">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {dummyEvents.map(event => (
                  <tr key={event.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="px-4 sm:px-6 py-3 text-sm font-semibold dark:text-white">{event.name}</td>
                    <td className="px-4 sm:px-6 py-3 text-sm text-slate-500 dark:text-slate-400">{event.date}</td>
                    <td className="px-4 sm:px-6 py-3 text-sm text-slate-500 dark:text-slate-400">{event.venue}</td>
                    <td className="px-4 sm:px-6 py-3">
                      <span className={`px-2 py-1 rounded-lg text-xs font-bold ${trendColors[event.statusColor]}`}>
                        {event.status}
                      </span>
                    </td>
                    <td className="px-4 sm:px-6 py-3">
                      <button
                        onClick={() => handleEventAction(event)}
                        className="text-slate-400 hover:text-blue-600 transition"
                      >
                        <span className="material-symbols-outlined">more_vert</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Checkups Table */}
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="px-4 sm:px-6 py-3 border-b">
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">
              Recent Checkups
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-left">
              <thead className="bg-slate-50 dark:bg-slate-800/50">
                <tr>
                  {["Date", "Vitals", "Status", "Staff"].map(h => (
                    <th key={h} className="px-4 sm:px-6 py-3 text-xs sm:text-sm font-bold text-slate-500 uppercase">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {dummyCheckups.map(chk => (
                  <tr key={chk.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="px-4 sm:px-6 py-3 text-sm text-slate-600 dark:text-slate-400">{chk.date}</td>
                    <td className="px-4 sm:px-6 py-3 text-sm text-slate-600 dark:text-slate-400">{chk.vitals}</td>
                    <td className="px-4 sm:px-6 py-3 font-bold text-sm">{chk.status}</td>
                    <td className="px-4 sm:px-6 py-3 text-sm text-slate-600 dark:text-slate-400">{chk.staff}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            {modalComponent}
          </Modal>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;