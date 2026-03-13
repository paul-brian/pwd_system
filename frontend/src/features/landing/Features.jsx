import React from "react";

function Features() {

  return (
    <div>
      <section className="py-24 bg-slate-900/50" data-purpose="features" id="features">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Advanced Features for Modern Governance</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Built with the latest technology to ensure your community data is managed with precision and security.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* <!-- Benefit Card 1 --> */}
            <div className="glass-effect p-8 rounded-twelve hover:-translate-y-2 transition-transform duration-300 group">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Faster Data Processing</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Automated workflows reduce manual entry time by up to 70%, allowing staff to focus on service.</p>
            </div>
            {/* <!-- Benefit Card 2 --> */}
            <div className="glass-effect p-8 rounded-twelve hover:-translate-y-2 transition-transform duration-300 group">
              <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors">
                <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Secure Authentication</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Encrypted logins and role-based access control ensure sensitive PWD data remains private.</p>
            </div>
            {/* <!-- Benefit Card 3 --> */}
            <div className="glass-effect p-8 rounded-twelve hover:-translate-y-2 transition-transform duration-300 group">
              <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Real-Time Dashboard</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Instant visual summaries of disability types, age groups, and sector demographics.</p>
            </div>
            {/* <!-- Benefit Card 4 --> */}
            <div className="glass-effect p-8 rounded-twelve hover:-translate-y-2 transition-transform duration-300 group">
              <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors">
                <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Organized Records</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Digital filing system replaces paper clutter with searchable, tagged, and indexed records.</p>
            </div>
            {/* <!-- Benefit Card 5 --> */}
            <div className="glass-effect p-8 rounded-twelve hover:-translate-y-2 transition-transform duration-300 group">
              <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-6 group-hover:bg-orange-500/20 transition-colors">
                <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Approval Workflow</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Multi-tier approval process for registration verification ensuring data integrity.</p>
            </div>
            {/* <!-- Benefit Card 6 --> */}
            <div className="glass-effect p-8 rounded-twelve hover:-translate-y-2 transition-transform duration-300 group">
              <div className="w-12 h-12 rounded-lg bg-pink-500/10 flex items-center justify-center mb-6 group-hover:bg-pink-500/20 transition-colors">
                <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Responsive Admin Panel</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Access the management system from any device—desktop, tablet, or smartphone.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Features;