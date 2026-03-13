import { useTheme } from "../context/ThemeContext";

const DarkModeToggle = ({ size = 10 }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`w-${size} h-${size} rounded-lg bg-slate-100 dark:bg-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-95`}
      title="Toggle Dark Mode"
    >
      <span className="material-symbols-outlined text-white text-lg">
        {theme === "dark" ? "contrast" : "display_settings"}
      </span>
    </button>
  );
};

export default DarkModeToggle;