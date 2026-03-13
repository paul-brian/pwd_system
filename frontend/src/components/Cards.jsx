import React from "react";

const Cards = ({ stat }) => {
  return (
    <div className="group bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-700/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-primary/30 dark:hover:border-primary/20">
      
      {/* Header: label + icon */}
      <div className="flex justify-between items-start mb-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
          {stat.label}
        </p>
        <div className="p-2.5 bg-primary/10 dark:bg-primary/5 rounded-xl group-hover:bg-primary/15 dark:group-hover:bg-primary/10 transition-colors">
          <span className="material-symbols-outlined text-primary text-2xl">
            {stat.icon}
          </span>
        </div>
      </div>

      {/* Main value */}
      <p className="text-4xl font-black text-slate-900 dark:text-white mb-3">
        {stat.value}
      </p>

      {/* Footer: change info */}
      <div className="flex items-center gap-2 pt-3 border-t border-slate-100 dark:border-slate-700/50">
        <span className={`text-xs font-bold ${stat.changeClass}`}>{stat.change}</span>
        <span className="text-xs text-slate-400 dark:text-slate-500">{stat.changeText}</span>
      </div>
    </div>
  );
};

export default Cards;