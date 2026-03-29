import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="bg-surface font-body text-on-surface min-h-screen flex">
      {/* Navigation Drawer (Persistent Sidebar) */}
      <aside className="fixed left-0 top-0 h-full z-40 flex flex-col bg-white border-r border-slate-100 w-20 md:w-64 transition-all duration-300 ease-in-out group shadow-[0_12px_40px_0_rgba(13,28,47,0.06)]">
        <div className="p-6 flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-container rounded-xl flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>deployed_code</span>
          </div>
          <Link to="/" className="hidden md:block text-xl font-black tracking-tight text-blue-700">SmartHire</Link>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-2">
          <Link className="flex items-center gap-4 px-4 py-3 rounded-xl bg-blue-50 text-blue-700 border-r-4 border-blue-600 transition-all duration-300" to="/dashboard">
            <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
            <span className="hidden md:block font-medium">Dashboard</span>
          </Link>
          <a className="flex items-center gap-4 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-blue-500 transition-all duration-300" href="#">
            <span className="material-symbols-outlined" data-icon="work">work</span>
            <span className="hidden md:block font-medium">Job Search</span>
          </a>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="ml-20 md:ml-64 w-full min-h-screen p-6 md:p-12 pb-24 md:pb-12">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight font-headline text-on-surface">Candidate Intelligence</h1>
            <p className="text-on-surface-variant mt-2 font-medium">Welcome back, Alex. Your matching engine has 12 new opportunities.</p>
          </div>
          <div className="glass-morphism rounded-2xl p-4 pr-6 flex items-center gap-4 shadow-sm border border-white/40">
            <div className="relative w-16 h-16">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                <circle className="stroke-slate-100" cx="18" cy="18" fill="none" r="16" strokeWidth="3"></circle>
                <circle className="stroke-primary" cx="18" cy="18" fill="none" r="16" strokeDasharray="85, 100" strokeLinecap="round" strokeWidth="3"></circle>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs font-bold text-on-surface">85%</span>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-on-surface uppercase tracking-wider">AI Profile Strength</h3>
              <p className="text-xs text-on-surface-variant font-medium">Excellent completion rate</p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 items-start">
          <div className="xl:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold font-headline text-on-surface flex items-center gap-2">
                <span className="material-symbols-outlined text-primary" data-icon="auto_awesome" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                Top AI Match Picks
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {/* Job Card */}
              <div className="group bg-white rounded-xl p-6 flex flex-col md:flex-row items-start md:items-center gap-6 transition-all shadow-sm hover:shadow-[0_12px_40px_0_rgba(13,28,47,0.06)] border border-transparent hover:border-blue-100">
                <div className="w-16 h-16 rounded-xl bg-slate-50 flex items-center justify-center overflow-hidden border border-slate-100 shrink-0">
                  <span className="material-symbols-outlined text-3xl text-primary">domain</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Stripe</span>
                    <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Global Remote</span>
                  </div>
                  <h3 className="text-lg font-bold text-on-surface group-hover:text-primary transition-colors">Staff Product Designer, Payments</h3>
                  <p className="text-on-surface-variant text-sm font-medium mt-1">$200k - $275k • Full-time</p>
                </div>
                <div className="flex items-center gap-6 w-full md:w-auto mt-4 md:mt-0 pt-4 md:pt-0 border-t md:border-t-0 border-slate-50">
                  <div className="relative w-14 h-14 shrink-0">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                      <circle className="stroke-slate-50" cx="18" cy="18" fill="none" r="16" strokeWidth="4"></circle>
                      <circle className="stroke-emerald-match" cx="18" cy="18" fill="none" r="16" strokeDasharray="92, 100" strokeLinecap="round" strokeWidth="4"></circle>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[10px] font-black text-emerald-match">92%</span>
                    </div>
                  </div>
                  <button className="flex-1 md:flex-none px-6 py-3 bg-[#4F46E5] text-white font-bold rounded-lg hover:shadow-lg hover:shadow-indigo-200 transition-all active:scale-95">Apply Now</button>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-surface-container-low rounded-xl p-8 border border-white/60 relative overflow-hidden">
              <h2 className="text-xl font-bold font-headline text-on-surface mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-tertiary" data-icon="query_stats">query_stats</span>
                Skill Gap Analyzer
              </h2>
              <div className="mb-8">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Current Strengths</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-white border border-slate-100 rounded-full text-sm font-semibold text-primary">Figma</span>
                  <span className="px-3 py-1.5 bg-white border border-slate-100 rounded-full text-sm font-semibold text-primary">React</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
