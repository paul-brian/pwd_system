import React from "react";

function Impact() {
  return (
    <div>
      <section className="py-24 bg-darkBg" data-purpose="impact" id="about">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Why Digital PWD Management Matters
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
              <div className="space-y-3">
                <h4 className="text-xl font-bold text-primary flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Data Accuracy
                </h4>
                <p className="text-slate-400 leading-relaxed">
                  Eliminate duplication and transcription errors that plague paper-based
                  systems. Ensure every PWD has a unique, verified digital ID.
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="text-xl font-bold text-primary flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Accessibility
                </h4>
                <p className="text-slate-400 leading-relaxed">
                  Our platform is built with inclusivity in mind, making it easy for
                  administrators to manage records regardless of their technical
                  expertise.
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="text-xl font-bold text-primary flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Transparency
                </h4>
                <p className="text-slate-400 leading-relaxed">
                  Track the status of every application and provide clear updates to
                  constituents, building trust between the barangay and the community.
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="text-xl font-bold text-primary flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Efficiency
                </h4>
                <p className="text-slate-400 leading-relaxed">
                  Generate government-compliant reports in seconds instead of days. Speed
                  up the delivery of benefits and support services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Impact;