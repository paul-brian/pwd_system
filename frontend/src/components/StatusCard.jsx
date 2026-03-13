const StatusBadge = ({ status }) => {
  // Mapping ng status → color + icon
  const statusMap = {
    // General Status
    Approve: { color: "green", icon: "check_circle" },
    Pending: { color: "amber", icon: "hourglass_empty" },
    Rejected: { color: "red", icon: "error" },

    // User roles
    User: { color: "blue", icon: "person" },
    Admin: { color: "purple", icon: "admin_panel_settings" },
    Staff: { color: "teal", icon: "badge" },

    // Project / Task Status
    Upcoming: { color: "amber", icon: "schedule" },
    Ongoing: { color: "blue", icon: "autorenew" },
    Completed: { color: "green", icon: "done_all" },
    Stable: { color: "green", icon: "check_circle" },
    "Follow-Up": { color: "amber", icon: "follow_the_signs" },
    Critical: { color: "red", icon: "warning" },

    // Inventory Status
    "Low-Stock": { color: "amber", icon: "inventory_2" },
    "Out of Stock": { color: "red", icon: "inventory_2" },

    // Account / User Status
    Active: { color: "green", icon: "check_circle" },
    Inactive: { color: "red", icon: "block" },
  };

  // Default if walang match
  const { color = "slate", icon = "info" } =
    statusMap[status] || {};

  // Color classes mapping
  const colorClasses = {
    green: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
    red: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
    amber: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
    blue: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    purple: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
    teal: "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400",
    slate: "bg-slate-100 text-slate-700 dark:bg-slate-900/30 dark:text-slate-400",
  };

  return (
    <span
      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold ${colorClasses[color]}`}
    >
      <span className="material-symbols-outlined text-[14px]">
        {icon}
      </span>
      {status}
    </span>
  );
};

export default StatusBadge;