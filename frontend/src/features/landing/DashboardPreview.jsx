import React from "react";

function DashboardPreview() {
  return (
    <div>
      <section className="py-24" data-purpose="dashboard-preview">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Command Center Overview</h2>
              <p className="text-slate-400">Everything you need to manage your community, right at your fingertips.</p>
            </div>
            <div className="glass-effect rounded-2xl p-6 md:p-10 shadow-3xl border-white/10 relative overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {/* <!-- Metric 1 --> */}
                <div className="p-6 bg-slate-800/50 rounded-xl border border-white/5">
                  <span className="text-slate-400 text-xs font-medium uppercase tracking-wider">Total Registered PWD</span>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-3xl font-bold text-white">4,291</span>
                    <span className="text-xs bg-emerald-500/20 text-emerald-500 px-2 py-1 rounded-full">+4.5%</span>
                  </div>
                </div>
                {/* <!-- Metric 2 --> */}
                <div className="p-6 bg-slate-800/50 rounded-xl border border-white/5">
                  <span className="text-slate-400 text-xs font-medium uppercase tracking-wider">Approved Requests</span>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-3xl font-bold text-white">3,850</span>
                    <span className="text-xs bg-emerald-500/20 text-emerald-500 px-2 py-1 rounded-full">92%</span>
                  </div>
                </div>
                {/* <!-- Metric 3 --> */}
                <div className="p-6 bg-slate-800/50 rounded-xl border border-white/5">
                  <span className="text-slate-400 text-xs font-medium uppercase tracking-wider">Pending Approvals</span>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-3xl font-bold text-white">441</span>
                    <span className="text-xs bg-amber-500/20 text-amber-500 px-2 py-1 rounded-full">Action Required</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                {/* <!-- Analytics Graph Mockup --> */}
                <div className="lg:col-span-3 bg-slate-800/50 rounded-xl border border-white/5 p-6 h-[300px] flex flex-col">
                  <h4 className="text-white font-semibold mb-6 flex items-center justify-between">
                    Registration Trends
                    <select className="bg-slate-900 border-none text-xs rounded-md text-slate-400">
                      <option>Last 30 Days</option>
                    </select>
                  </h4>
                  <div className="flex-1 flex items-end gap-2 px-2">
                    <div className="flex-1 bg-primary/20 hover:bg-primary/40 transition-colors h-[40%] rounded-t"></div>
                    <div className="flex-1 bg-primary/20 hover:bg-primary/40 transition-colors h-[60%] rounded-t"></div>
                    <div className="flex-1 bg-primary/20 hover:bg-primary/40 transition-colors h-[45%] rounded-t"></div>
                    <div className="flex-1 bg-primary/20 hover:bg-primary/40 transition-colors h-[80%] rounded-t"></div>
                    <div className="flex-1 bg-primary/20 hover:bg-primary/40 transition-colors h-[95%] rounded-t"></div>
                    <div className="flex-1 bg-primary/20 hover:bg-primary/40 transition-colors h-[70%] rounded-t"></div>
                    <div className="flex-1 bg-primary/20 hover:bg-primary/40 transition-colors h-[85%] rounded-t"></div>
                  </div>
                </div>
                {/* <!-- Table Preview Mockup --> */}
                <div className="lg:col-span-2 bg-slate-800/50 rounded-xl border border-white/5 p-6">
                  <h4 className="text-white font-semibold mb-6">Recent Applications</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs border-b border-white/5 pb-2">
                      <span className="text-slate-400">Juan Dela Cruz</span>
                      <span className="px-2 py-0.5 bg-brandEmerald/10 text-brandEmerald rounded">Approved</span>
                    </div>
                    <div className="flex items-center justify-between text-xs border-b border-white/5 pb-2">
                      <span className="text-slate-400">Maria Santos</span>
                      <span className="px-2 py-0.5 bg-amber-500/10 text-amber-500 rounded">Pending</span>
                    </div>
                    <div className="flex items-center justify-between text-xs border-b border-white/5 pb-2">
                      <span className="text-slate-400">Ricardo Reyes</span>
                      <span className="px-2 py-0.5 bg-brandEmerald/10 text-brandEmerald rounded">Approved</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400">Elena Gomez</span>
                      <span className="px-2 py-0.5 bg-amber-500/10 text-amber-500 rounded">Pending</span>
                    </div>
                  </div>
                  <button className="w-full mt-6 text-xs text-primary font-bold hover:underline">View All Records →</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DashboardPreview;