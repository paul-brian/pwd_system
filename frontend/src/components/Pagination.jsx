const Pagination = ({
  currentPage,
  totalPages,
  setCurrentPage,
  totalItems,
  itemsPerPage,
}) => {
  const start = (currentPage - 1) * itemsPerPage + 1;
  const end = Math.min(currentPage * itemsPerPage, totalItems);

  const pages = [...Array(totalPages).keys()].map((n) => n + 1);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-3 px-5 py-4 border-t border-[#e7edf3] dark:border-slate-800">

      {/* Info */}
      <p className="text-xs md:text-sm text-[#4e7397] text-center md:text-left">
        Showing <span className="font-semibold">{start}</span> –
        <span className="font-semibold"> {end}</span> of{" "}
        <span className="font-semibold">{totalItems}</span>
      </p>

      {/* Pagination */}
      <div className="flex items-center gap-1 overflow-x-auto max-w-full">

        {/* Prev */}
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1.5 text-xs md:text-sm rounded-lg border border-[#d0dbe7] dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-40"
        >
          Prev
        </button>

        {/* Pages */}
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-3 py-1.5 text-xs md:text-sm rounded-lg border ${
              page === currentPage
                ? "bg-primary text-white border-primary"
                : "border-[#d0dbe7] dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800"
            }`}
          >
            {page}
          </button>
        ))}

        {/* Next */}
        <button
          onClick={() =>
            setCurrentPage((p) => Math.min(p + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="px-3 py-1.5 text-xs md:text-sm rounded-lg border border-[#d0dbe7] dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-40"
        >
          Next
        </button>

      </div>
    </div>
  );
};

export default Pagination;