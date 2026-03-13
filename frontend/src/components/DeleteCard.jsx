const DeleteCard = ({
  title = "Delete Item",
  name,
  message,
  warning,
  confirmText = "Delete",
  cancelText = "Cancel",
  onCancel,
  onConfirm,
}) => {
  return (
    <div>
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 bg-red-100 dark:bg-red-900/20 rounded-xl">
          <span className="material-symbols-outlined text-red-600 dark:text-red-400 text-2xl">
            warning
          </span>
        </div>

        <h2 className="text-2xl font-bold text-red-600 dark:text-red-400">
          {title}
        </h2>
      </div>

      {/* Message */}
      <p className="text-slate-600 dark:text-slate-400 mb-2">
        {message}{" "}
        <strong className="text-slate-900 dark:text-white">{name}</strong>?
      </p>

      {/* Warning Box */}
      {warning && (
        <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-700/30 rounded-xl">
          <p className="text-sm text-amber-900 dark:text-amber-200">
            {warning}
          </p>
        </div>
      )}

      {/* Buttons */}
      <div className="mt-6 flex justify-end gap-3">
        <button
          onClick={onCancel}
          className="px-6 py-2.5 bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white rounded-xl font-bold hover:bg-slate-300 dark:hover:bg-slate-600 transition-all duration-200"
        >
          {cancelText}
        </button>

        <button
          onClick={onConfirm}
          className="px-6 py-2.5 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-xl font-bold transition-all duration-200 shadow-lg shadow-red-500/30 active:scale-95"
        >
          {confirmText}
        </button>
      </div>
    </div>
  );
};

export default DeleteCard;