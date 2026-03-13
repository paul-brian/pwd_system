const SearchBar = ({
  searchValue,
  setSearchValue,
  filterValue,
  setFilterValue,
  placeholder = "Search...",
  options = [],
}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-3 mb-6">

      {/* Filter Dropdown */}
      {options.length > 0 && (
        <select
          value={filterValue}
          onChange={(e) => setFilterValue(e.target.value)}
          className="border border-slate-200 dark:border-slate-700/50 rounded-xl px-4 py-2.5 text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
        >
          {options.map((opt, i) => (
            <option key={i} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      )}

      {/* Search Input */}
      <div className="flex w-full items-center rounded-xl border border-slate-200 dark:border-slate-700/50 focus-within:ring-2 focus-within:ring-primary/30 focus-within:border-primary bg-white dark:bg-slate-800 transition-all">

        <div className="text-slate-400 dark:text-slate-500 flex items-center justify-center pl-4">
          <span className="material-symbols-outlined">search</span>
        </div>

        <input
          type="text"
          placeholder={placeholder}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="flex-1 border-none bg-transparent px-4 py-2.5 placeholder:text-slate-400 dark:placeholder:text-slate-500 text-sm text-slate-900 dark:text-white focus:outline-none"
        />

      </div>
    </div>
  );
};

export default SearchBar;