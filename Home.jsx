import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="text-on-surface bg-surface font-body min-h-screen">
      {/* TopAppBar */}
      <nav className="fixed top-0 w-full z-50 bg-slate-50/80 backdrop-blur-xl shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-blue-600 text-2xl" data-icon="token">token</span>
            <span className="text-xl font-bold tracking-tight text-slate-900">SmartHire</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link className="text-blue-600 font-semibold border-b-2 border-blue-600 pb-1" to="/">Home</Link>
            <Link className="text-slate-600 font-medium hover:text-blue-500 transition-colors" to="/dashboard">Dashboard</Link>
            <a className="text-slate-600 font-medium hover:text-blue-500 transition-colors" href="#">Find Jobs</a>
          </div>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all scale-95 hover:scale-100 duration-200">
            Login / Sign Up
          </button>
        </div>
      </nav>

      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative px-8 pt-20 pb-32 overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high text-primary font-semibold text-sm mb-6">
                  <span className="material-symbols-outlined text-sm" data-icon="auto_awesome" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                  Next-Gen Recruitment
                </span>
                <h1 className="text-6xl md:text-7xl font-extrabold font-headline leading-tight tracking-tight text-on-surface mb-8">
                  Your AI-Powered Journey to a <span className="text-primary">Dream Career.</span>
                </h1>
                <p className="text-lg text-on-surface-variant leading-relaxed max-w-xl mb-10">
                  Stop searching, start matching. Our proprietary neural networks align your unique DNA with top-tier opportunities in real-time.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/dashboard" className="primary-gradient text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all inline-block">
                    Explore Opportunities
                  </Link>
                  <button className="bg-white border border-outline-variant/30 text-on-surface px-8 py-4 rounded-xl font-bold hover:bg-surface-container-low transition-all">
                    View Demo
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="w-full aspect-square rounded-[2rem] bg-gradient-to-br from-primary/10 to-tertiary/10 absolute -rotate-6 scale-105 blur-3xl"></div>
                <img alt="Professional woman using AI interface" className="relative z-10 rounded-[2rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVNhVXjGxAZa12m9K5AamaLGvkL9g0mZvy6SKASjTJFepzn_bn6OkhXwbwMby8dnGjP3b4alKnFVSeRD_C-kS9WiwqAAOwwQpyh6ufJjFHGlBze0lU5wd6JhrDYYoQkf8WSBovOGTnG21G-qAch-Mwx64FrbP16oYeLS0ZR2k5iBVskXHTxY3cTfc-IuZ4pUtcMUZHKzDItZ5Z0CfbswInPRxibtzLCpgsbB3Ydd6ruNw2az72QAxl07g86fe5r77H7XiWa8g8Q1nV" />
                
                {/* AI Insights Floating Card */}
                <div className="absolute -bottom-6 -left-6 glass-panel p-6 rounded-xl shadow-2xl z-20 border border-white/40 max-w-xs">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-tertiary/20 flex items-center justify-center">
                      <span className="material-symbols-outlined text-tertiary" data-icon="psychology" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-tertiary uppercase tracking-wider">AI Insight</p>
                      <p className="text-sm font-semibold">Skill Match: 98%</p>
                    </div>
                  </div>
                  <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                    <div className="h-full bg-tertiary w-[98%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Smart Search & Drag-and-Drop */}
        <section className="px-8 -mt-20 relative z-30">
          <div className="max-w-5xl mx-auto">
            <div className="glass-panel p-2 rounded-2xl shadow-2xl border border-white/50">
              <div className="bg-white rounded-xl p-8 flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 w-full">
                  <div className="relative group">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline" data-icon="search">search</span>
                    <input className="w-full pl-12 pr-4 py-4 bg-surface-container-low border-none rounded-xl focus:ring-2 focus:ring-primary/40 transition-all text-on-surface" placeholder="Paste your resume here for instant AI matching, or search by skill..." type="text" />
                  </div>
                </div>
                <div className="w-full md:w-64">
                  <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-primary/30 rounded-xl cursor-pointer bg-primary/5 hover:bg-primary/10 transition-all group">
                    <span className="material-symbols-outlined text-primary mb-2 transition-transform group-hover:-translate-y-1" data-icon="upload_file">upload_file</span>
                    <span className="text-sm font-bold text-primary">Drop Resume</span>
                    <input className="hidden" type="file" />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="px-8 py-32 bg-surface">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-extrabold font-headline mb-4">How It Works</h2>
              <p className="text-on-surface-variant max-w-2xl mx-auto">Our precision-engineered process ensures you spend less time applying and more time interviewing.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12">
              <div className="relative group">
                <div className="mb-8 w-20 h-20 rounded-2xl bg-surface-container-high flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-4xl" data-icon="cloud_upload" style={{ fontVariationSettings: "'FILL' 1" }}>cloud_upload</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Upload Resume</h3>
                <p className="text-on-surface-variant leading-relaxed">Import your existing profile or drag and drop your PDF. Our AI parses every detail including hidden soft skills.</p>
                <div className="hidden md:block absolute top-10 -right-6 text-surface-variant">
                  <span className="material-symbols-outlined text-4xl" data-icon="trending_flat">trending_flat</span>
                </div>
              </div>

              <div className="relative group">
                <div className="mb-8 w-20 h-20 rounded-2xl bg-tertiary-container/10 flex items-center justify-center text-tertiary group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-4xl" data-icon="neurology" style={{ fontVariationSettings: "'FILL' 1" }}>neurology</span>
                </div>
                <h3 className="text-xl font-bold mb-3">AI Analyzes &amp; Matches</h3>
                <p className="text-on-surface-variant leading-relaxed">The engine scans 10,000+ data points to find roles where you're not just a candidate, but the top 1% match.</p>
                <div className="hidden md:block absolute top-10 -right-6 text-surface-variant">
                  <span className="material-symbols-outlined text-4xl" data-icon="trending_flat">trending_flat</span>
                </div>
              </div>

              <div className="group">
                <div className="mb-8 w-20 h-20 rounded-2xl bg-green-100 flex items-center justify-center text-green-600 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-4xl" data-icon="event_available" style={{ fontVariationSettings: "'FILL' 1" }}>event_available</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Get Interview Invites</h3>
                <p className="text-on-surface-variant leading-relaxed">Receive direct requests from hiring managers who have already vetted your profile via our AI insights portal.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200/15 py-12 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-blue-600 text-lg" data-icon="token">token</span>
              <span className="text-lg font-bold text-slate-900">SmartHire</span>
            </div>
            <p className="text-slate-500 text-sm font-medium">© 2026 SmartHire. Precision recruitment powered by intelligence.</p>
            <p className="text-primary text-sm font-bold bg-primary/10 px-4 py-2 rounded-full mt-2">Developed by Anurag</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
