
import React from 'react';

export default function About() {
  return (
    <section id="about" className="min-h-screen bg-[#030712] text-slate-300 py-16 px-4 md:px-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Main Grid: Left Profile Card & Right Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Profile Card (4 Columns) */}
          <div className="lg:col-span-4 bg-[#0b0f19]/60 border border-slate-800/80 rounded-3xl p-6 relative overflow-hidden backdrop-blur-sm">
            {/* Soft background glow decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>
            
            {/* Top Badge & Image Container */}
            <div className="relative flex flex-col items-center text-center">
              <span className="self-start text-[10px] font-bold uppercase tracking-wider text-purple-400 bg-purple-950/40 border border-purple-800/50 px-3 py-1 rounded-full mb-4">
                AI/ML Engineer
              </span>
              
              {/* Profile Image with subtle background halo */}
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden mb-6 bg-gradient-to-b from-purple-900/30 to-slate-900 border border-slate-800">
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=500&auto=format&fit=crop" // Replace with your actual hosted image path
                  alt="Rahul Shelke" 
                  className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-300"
                />
              </div>

              <h1 className="text-3xl font-bold text-white tracking-tight">
                Rahul <span className="text-purple-400 font-extrabold">Shelke</span>
              </h1>
              <p className="text-sm text-slate-400 mt-2 font-medium">
                Building scalable AI systems from data to deployment.
              </p>
            </div>

            {/* Contact Information List */}
            <div className="mt-8 space-y-3 border-t border-slate-800/60 pt-6 text-xs md:text-sm text-slate-400">
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                <a href="mailto:rahulshelke2002@gmail.com" className="hover:text-white transition">rahulshelke2002@gmail.com</a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                <span>Pune, Maharashtra, India</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                <a href="https://linkedin.com/in/rahulshelke" target="_blank" rel="noreferrer" className="hover:text-purple-400 transition underline decoration-purple-500/30">linkedin.com/in/rahulshelke</a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.0.069-.608 0 1 .436 1.524 1.302 1.524.891 1.521 2.372 1.082 2.95.828.09-.647.35-1.082.636-1.331-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path></svg>
                <a href="https://github.com/RahulShelke2002" target="_blank" rel="noreferrer" className="hover:text-purple-400 transition">github.com/RahulShelke2002</a>
              </div>
            </div>

            {/* CTA Button */}
            <a href="#connect" className="mt-8 w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-purple-500/30 bg-purple-500/5 hover:bg-purple-500/10 text-white text-sm font-medium transition duration-300 group">
              <span>Let's Connect</span>
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>

          {/* Right: Bio & Key Attributes Grid (8 Columns) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Top Layout Split: Bio Text vs Personality Quad Cards */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              
              {/* Bio Statement Block */}
              <div className="md:col-span-7 space-y-5 text-sm md:text-base text-slate-400 leading-relaxed">
                <h2 className="text-3xl font-bold text-white tracking-tight mb-2">About me</h2>
                <p>
                  I'm an AI/ML Engineer with a strong focus on building and deploying scalable machine learning systems. I enjoy solving real-world problems by combining data, algorithms, and cloud technologies.
                </p>
                <p>
                  From data pipelines and model training to CI/CD, deployment, and monitoring — I build end-to-end solutions that are reliable, efficient, and production-ready.
                </p>
                <p>
                  I'm passionate about MLOps, cloud automation, and building systems that drive real business value.
                </p>
              </div>

              {/* Personality Quad Cards Container */}
              <div className="md:col-span-5 space-y-6">
                {/* Visual Pull Quote */}
                <div className="border-l-2 border-purple-500 pl-4 py-1 italic text-sm text-slate-300">
                  <span className="text-purple-400 font-bold block text-lg not-italic mb-1">“</span>
                  I don't just build models, <span className="text-purple-400 font-medium">I build reliable systems that create impact.</span>
                </div>

                {/* 2x2 Feature Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-4 rounded-xl bg-[#0b0f19]/40 border border-slate-900 space-y-1.5">
                    <div className="text-purple-400 font-semibold flex items-center gap-2">
                      <span className="p-1 rounded bg-purple-500/10">💡</span> Problem Solver
                    </div>
                    <p className="text-slate-400 text-[11px] leading-normal">Turning complex problems into simple, scalable solutions.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#0b0f19]/40 border border-slate-900 space-y-1.5">
                    <div className="text-emerald-400 font-semibold flex items-center gap-2">
                      <span className="p-1 rounded bg-emerald-500/10">💻</span> Engineer at Heart
                    </div>
                    <p className="text-slate-400 text-[11px] leading-normal">Strong foundation in software engineering and system design.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#0b0f19]/40 border border-slate-900 space-y-1.5">
                    <div className="text-amber-400 font-semibold flex items-center gap-2">
                      <span className="p-1 rounded bg-amber-500/10">📊</span> Data Driven
                    </div>
                    <p className="text-slate-400 text-[11px] leading-normal">Making decisions based on measurable metrics and data outcomes.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#0b0f19]/40 border border-slate-900 space-y-1.5">
                    <div className="text-blue-400 font-semibold flex items-center gap-2">
                      <span className="p-1 rounded bg-blue-500/10">📘</span> Always Learning
                    </div>
                    <p className="text-slate-400 text-[11px] leading-normal">Continuously exploring cutting-edge AI research and technical stacks.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Expertise Tags Section */}
            <div className="space-y-3 pt-4 border-t border-slate-900">
              <h3 className="text-sm font-semibold tracking-wider text-slate-400 uppercase">Core Expertise</h3>
              <div className="flex flex-wrap gap-2.5 text-xs font-medium">
                {['Machine Learning', 'Deep Learning', 'NLP', 'MLOps', 'Data Engineering', 'Cloud', 'System Design'].map((skill, index) => (
                  <span key={index} className="px-3 py-1.5 rounded-lg bg-[#0b0f19]/60 border border-slate-800 text-slate-300 hover:border-purple-500/40 transition duration-200 cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Experience Journey Timeline Component */}
        <div className="bg-[#0b0f19]/30 border border-slate-900 rounded-3xl p-6 md:p-8 space-y-6">
          <h2 className="text-xl font-bold text-white">Experience Journey</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Horizontal connection line indicator (hidden on mobile devices) */}
            <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-purple-500/40 via-blue-500/40 to-emerald-500/20 z-0"></div>

            {/* Timeline Item 1 */}
            <div className="relative z-10 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-xl shadow-[0_0_15px_rgba(168,85,247,0.1)]">
                  🎓
                </div>
                <div>
                  <span className="text-xs font-bold text-purple-400 block">2020 - 2024</span>
                  <h4 className="text-sm font-bold text-white">B.Tech in Computer Engineering</h4>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed pl-1">
                Pune Institute of Computer Technology. Built a resilient foundation in core algorithms, advanced data structures, and computer architecture design concepts.
              </p>
            </div>

            {/* Timeline Item 2 */}
            <div className="relative z-10 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-xl shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                  💼
                </div>
                <div>
                  <span className="text-xs font-bold text-blue-400 block">2024 - Present</span>
                  <h4 className="text-sm font-bold text-white">AI/ML Engineer</h4>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed pl-1">
                Developing intelligent custom ML inference architectures, scaling end-to-end continuous model delivery setups on cloud backends, and automating cloud cluster performance tasks.
              </p>
            </div>

            {/* Timeline Item 3 */}
            <div className="relative z-10 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-xl shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                  🚀
                </div>
                <div>
                  <span className="text-xs font-bold text-emerald-400 block">Future Target</span>
                  <h4 className="text-sm font-bold text-white">Building Scalable AI Systems</h4>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed pl-1">
                Continuously engineering automated, high-throughput pipelines designed to maintain highly optimized model states handling production request environments effortlessly.
              </p>
            </div>

          </div>
        </div>

        {/* Tech Stack Horizontal Segment Grid */}
        <div className="bg-[#0b0f19]/30 border border-slate-900 rounded-3xl p-6 space-y-6">
          <h2 className="text-xl font-bold text-white">Tech Stack</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 text-xs">
            
            {/* Stack Group 1: Languages */}
            <div className="flex gap-3 items-start">
              <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-lg">
                <>{"</>"}</>
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-white">Languages</h4>
                <p className="text-slate-400 leading-relaxed">Python, SQL, Bash, JavaScript, YAML</p>
              </div>
            </div>

            {/* Stack Group 2: ML / DL */}
            <div className="flex gap-3 items-start">
              <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-lg">
                🧠
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-white">ML / DL</h4>
                <p className="text-slate-400 leading-relaxed">Scikit-learn, PyTorch, TensorFlow, XGBoost</p>
              </div>
            </div>

            {/* Stack Group 3: Data Engineering */}
            <div className="flex gap-3 items-start">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-lg">
                🗄️
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-white">Data Engineering</h4>
                <p className="text-slate-400 leading-relaxed">Kafka, Spark, Airflow, Pandas, SQL</p>
              </div>
            </div>

            {/* Stack Group 4: MLOps */}
            <div className="flex gap-3 items-start">
              <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-lg">
                ♾️
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-white">MLOps</h4>
                <p className="text-slate-400 leading-relaxed">Docker, Kubernetes, MLflow, DVC</p>
              </div>
            </div>

            {/* Stack Group 5: Cloud & Tools */}
            <div className="flex gap-3 items-start">
              <div className="p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-lg">
                ☁️
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-white">Cloud & Tools</h4>
                <p className="text-slate-400 leading-relaxed">AWS, GCP, GitHub Actions, Prometheus, Grafana</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}