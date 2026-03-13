import React from "react";
import { useNavigate} from "react-router-dom";

function Hero() {

  const navigate = useNavigate();

  return (
    <div>
      <section
        className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden"
        data-purpose="hero"
      >
        {/* <!-- Abstract Background Shapes --> */}
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-1/2 bg-primary/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 -z-10 w-1/3 h-1/3 bg-brandEmerald/10 blur-[100px] rounded-full"></div>
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest border border-primary/20">
                Next-Gen Barangay Management
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                Smart Digital Platform for <span className="gradient-text">PWD Record Management</span>
              </h1>
              <p className="text-lg text-slate-400 max-w-xl mx-auto lg:mx-0">
                Centralized and secure barangay profiling for efficient data management. Streamline registrations, approvals, and reporting in one unified dashboard.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <button 
                onClick={() => navigate("#")}
                className="w-full sm:w-auto px-8 py-4 gradient-bg text-white font-bold rounded-twelve hover:scale-105 transition-transform shadow-xl shadow-brandEmerald/20">
                  Explore System
                </button>
                <button 
                onClick={() => navigate("/Login")}
                className="w-full sm:w-auto px-8 py-4 bg-slate-800 text-white font-bold rounded-twelve hover:bg-slate-700 transition-colors border border-slate-700">
                  Login to Portal
                </button>
              </div>
            </div>
            <div className="w-full lg:w-1/2 relative animate-float">
              {/* <!-- Mockup Dashboard Container --> */}
              <div className="glass-effect rounded-2xl p-4 shadow-2xl border-white/5">
                <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                  </div>
                  <div className="h-2 w-32 bg-slate-700 rounded-full"></div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                    <p className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">Total PWDs</p>
                    <h4 className="text-2xl font-bold text-white">1,284</h4>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                    <p className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">Growth Rate</p>
                    <h4 className="text-2xl font-bold text-brandEmerald">+12.5%</h4>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="h-32 bg-gradient-to-t from-primary/20 to-transparent rounded-xl flex items-end justify-around p-4 border border-white/5">
                    <div className="w-4 h-16 bg-brandEmerald rounded-t"></div>
                    <div className="w-4 h-24 bg-brandBlue rounded-t"></div>
                    <div className="w-4 h-12 bg-brandEmerald rounded-t"></div>
                    <div className="w-4 h-20 bg-brandBlue rounded-t"></div>
                    <div className="w-4 h-14 bg-brandEmerald rounded-t"></div>
                    <div className="w-4 h-28 bg-brandBlue rounded-t"></div>
                  </div>
                  <div className="h-20 bg-white/5 rounded-xl flex items-center px-4 gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-700"></div>
                    <div className="flex-1 space-y-2">
                      <div className="h-2 w-1/2 bg-slate-700 rounded-full"></div>
                      <div className="h-2 w-1/4 bg-slate-800 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;