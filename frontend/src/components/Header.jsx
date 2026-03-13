import { useEffect, useState } from "react";
import { useLocation, NavLink } from "react-router-dom";
import { getRouteMeta } from "../routes/routeUtils";

const Header = ({ onMenu }) => {
  const location = useLocation();
  const { title, icon, path } = getRouteMeta(location.pathname);

  const [darkMode, setDarkMode] = useState(false);

  /* Persist theme */
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <header className="sticky top-0 z-20 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 md:px-8 py-3">
      <div className="flex items-center justify-between gap-4">

        {/* LEFT */}
        <div className="flex items-center gap-4">
          {/* Hamburger */}
          <button
            onClick={onMenu}
            className="md:hidden w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800"
          >
            <span className="material-symbols-outlined">menu</span>
          </button>

          {/* Title + Icon */}
          <div className="flex items-center gap-3 animate-fade-in">
            <span className="material-symbols-outlined text-primary text-2xl">
              {icon}
            </span>

            <div>
              <h2 className="text-lg font-bold text-slate-800 dark:text-white">
                {title}
              </h2>

              {/* Breadcrumb */}
              <nav className="text-xs text-slate-500">
                <NavLink to="/PagesDashboard" className="hover:underline">
                  Dashboard
                </NavLink>
                {path !== "/PagesDashboard" && (
                  <>
                    <span className="mx-1">/</span>
                    <span className="text-slate-400">{title}</span>
                  </>
                )}
              </nav>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3">

          {/* Search (desktop only) */}
          <label className="hidden md:flex items-center w-[280px] h-10 bg-slate-100 dark:bg-slate-800 rounded-lg px-3">
            <span className="material-symbols-outlined text-slate-400 mr-2">
              search
            </span>
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-transparent text-sm outline-none dark:text-white"
            />
          </label>

          {/* Notification */}
          <button className="relative w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
          </button>

          {/* Dark Mode */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-blue-600 flex items-center justify-center"
          >
            <span className="material-symbols-outlined text-white">
              {darkMode ? "contrast" : "display_settings"}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;