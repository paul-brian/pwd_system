import React from "react";
import { useNavigate} from "react-router-dom";

function CTA() {
  const navigate = useNavigate();
  return (
    <div>
      <section className="py-24 relative" data-purpose="cta-final">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12 text-center relative overflow-hidden border border-white/10">
            <div className="relative z-10 space-y-8">
              <h2 className="text-3xl md:text-5xl font-extrabold text-white">Modernize Your Barangay's <br />PWD Management Today</h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-lg">Join dozens of barangays leading the digital transformation in public service. Secure, efficient, and user-friendly.</p>
              <div className="flex justify-center">
                <button 
                onClick={() => navigate("/Login")}
                className="px-12 py-5 gradient-bg text-white font-bold text-xl rounded-twelve hover:scale-105 transition-transform shadow-2xl shadow-brandEmerald/40">
                  Login to System
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CTA;