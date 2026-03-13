import { createContext, useContext, useState } from "react";

const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState({
    visible: false,
    message: "",
    type: "success",
  });

  const showToast = (message, type = "success") => {
    setToast({ visible: true, message, type });

    setTimeout(() => {
      setToast((prev) => ({ ...prev, visible: false }));
    }, 3000);
  };

  const success = (message) => showToast(message, "success");
  const error = (message) => showToast(message, "error");

  return (
    <ToastContext.Provider value={{ success, error }}>
      {children}

      {toast.visible && (
        <div
          className={`fixed top-6 right-6 z-50 px-6 py-3.5 rounded-xl shadow-2xl text-white font-medium flex items-center gap-3 animate-in fade-in slide-in-from-top-2 transition-all border
          ${
            toast.type === "success"
              ? "bg-gradient-to-r from-emerald-500 to-emerald-600 border-emerald-400/30 shadow-emerald-500/20"
              : "bg-gradient-to-r from-red-500 to-red-600 border-red-400/30 shadow-red-500/20"
          }`}
        >
          <span className="material-symbols-outlined text-lg">
            {toast.type === "success" ? "check_circle" : "error"}
          </span>

          {toast.message}
        </div>
      )}
    </ToastContext.Provider>
  );
};