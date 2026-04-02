import WaitlistForm from '@/components/WaitlistForm'

const features = [
  {
    icon: '/',
    title: 'AI Agents',
    description:
      'Autonomous agents that work through your knowledge to craft ideas and find opportunities you missed.',
  },
  {
    icon: '#',
    title: 'Knowledge Graph',
    description:
      'Automatic connections between concepts — no manual tagging, no organizing required.',
  },
  {
    icon: '→',
    title: 'Conversational',
    description:
      'Chat interface, not file browsers. Ask instead of search. Get answers grounded in your own work.',
  },
  {
    icon: '∞',
    title: 'Format Agnostic',
    description:
      'PDFs, notes, bookmarks, docs — bring everything. idearchy handles the rest.',
  },
  {
    icon: '◎',
    title: 'Proactive',
    description:
      "Surfaces insights you didn't ask for. Your knowledge keeps working while you sleep.",
  },
  {
    icon: '■',
    title: 'Private',
    description:
      'Your knowledge stays yours. Privacy is a foundation, not an afterthought.',
  },
]

const steps = [
  {
    n: '01',
    title: 'Upload',
    description:
      'Bring your docs, notes, PDFs, bookmarks — the messier, the better. No organizing required.',
  },
  {
    n: '02',
    title: 'Index',
    description:
      'AI maps relationships between your ideas, building a knowledge graph automatically.',
  },
  {
    n: '03',
    title: 'Chat',
    description:
      'Converse with your knowledge base. Ask anything. Get answers grounded in your own work.',
  },
  {
    n: '04',
    title: 'Discover',
    description:
      "AI Agents proactively surface ideas, connections, and opportunities you'd never find manually.",
  },
]

export default function HomePage() {
  return (
    <div className="font-nunito">
      {/* ─── NAVBAR ─── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 border-b"
        style={{
          background: 'rgba(10,10,10,0.9)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderColor: 'rgba(255,255,255,0.06)',
        }}
      >
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="font-archivo font-black text-base tracking-tight" style={{ color: '#fafafa' }}>
            idearchy<span style={{ color: '#ff3300' }}>.</span>tech
          </span>
          <a
            href="#waitlist"
            className="font-archivo font-bold text-xs tracking-widest uppercase transition-colors duration-200 hover:opacity-70"
            style={{ color: '#ff3300' }}
          >
            Join Waitlist →
          </a>
        </div>
      </nav>

      {/* ─── HERO (dark) ─── */}
      <section
        className="relative min-h-screen flex flex-col justify-center pt-14 bg-grid-dark overflow-hidden"
        style={{ background: '#0a0a0a' }}
      >
        <div className="max-w-5xl mx-auto px-6 py-32">
          {/* Label */}
          <p
            className="font-archivo text-xs font-bold uppercase tracking-widest mb-8 animate-fade-up opacity-0-init anim-delay-1"
            style={{ color: '#666' }}
          >
            Knowledge Infrastructure
          </p>

          {/* Rule */}
          <div className="rule-accent mb-8 animate-fade-up opacity-0-init anim-delay-1" />

          {/* Headline */}
          <h1
            className="font-archivo font-black leading-none tracking-tight mb-8 animate-fade-up opacity-0-init anim-delay-2"
            style={{
              fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
              color: '#fafafa',
            }}
          >
            Your knowledge is<br />
            already there
            <span style={{ color: '#ff3300' }}>.</span>
          </h1>

          {/* Subheadline */}
          <p
            className="font-nunito text-xl leading-relaxed max-w-xl mb-12 animate-fade-up opacity-0-init anim-delay-3"
            style={{ color: '#666' }}
          >
            It just isn&apos;t working for you yet. idearchy turns scattered documents
            into an intelligent system you can talk to.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up opacity-0-init anim-delay-4">
            <a
              href="#waitlist"
              className="inline-block font-archivo font-black text-sm tracking-widest uppercase px-8 py-4 transition-opacity duration-200 hover:opacity-85"
              style={{ background: '#ff3300', color: '#fafafa' }}
            >
              GET EARLY ACCESS →
            </a>
            <a
              href="#how-it-works"
              className="inline-block font-archivo font-bold text-sm tracking-widest uppercase px-8 py-4 transition-colors duration-200 hover:border-white"
              style={{ border: '1px solid #333', color: '#999' }}
            >
              SEE HOW IT WORKS
            </a>
          </div>
        </div>

        {/* Decorative rotated square */}
        <div
          className="absolute bottom-16 right-16 hidden md:block opacity-20"
          style={{
            width: '64px',
            height: '64px',
            border: '2px solid #ff3300',
            transform: 'rotate(45deg)',
          }}
        />

        {/* Slide number */}
        <div className="absolute bottom-8 left-6">
          <span
            className="font-archivo font-black text-6xl leading-none select-none"
            style={{ color: 'rgba(255,255,255,0.04)' }}
          >
            01
          </span>
        </div>
      </section>

      {/* ─── PROBLEM (light) ─── */}
      <section className="relative bg-grid-light py-28 overflow-hidden" style={{ background: '#fafafa' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="rule-accent mb-8" />
          <p className="font-archivo text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#ff3300' }}>
            The Problem
          </p>
          <h2
            className="font-archivo font-black leading-tight tracking-tight mb-16"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#0a0a0a' }}
          >
            Your knowledge is trapped.
          </h2>

          <ul className="space-y-8 max-w-2xl">
            {[
              'Notes scattered across apps, folders, and formats — never where you need them.',
              "You've read it, written it, learned it — but can't recall it when it matters.",
              'Organizing takes more time than creating, so nothing gets organized.',
              'Existing tools demand you be the librarian. You just want to think.',
            ].map((pain, i) => (
              <li key={i} className="flex items-start gap-5">
                <span
                  className="font-archivo font-black text-lg mt-0.5 flex-shrink-0"
                  style={{ color: '#ff3300' }}
                >
                  ×
                </span>
                <p className="font-nunito text-lg leading-relaxed" style={{ color: '#333' }}>
                  {pain}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="absolute bottom-8 right-6">
          <span
            className="font-archivo font-black text-6xl leading-none select-none"
            style={{ color: 'rgba(0,0,0,0.04)' }}
          >
            02
          </span>
        </div>
      </section>

      {/* ─── INSIGHT (dark) ─── */}
      <section className="relative bg-grid-dark py-28 overflow-hidden" style={{ background: '#0a0a0a' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="rule-accent mb-8" />
          <p className="font-archivo text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#666' }}>
            The Insight
          </p>
          <h2
            className="font-archivo font-black leading-tight tracking-tight mb-16"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#fafafa' }}
          >
            Storage ≠ Memory
          </h2>

          {/* Analogy cards */}
          <div className="flex flex-col sm:flex-row items-center gap-6 mb-14">
            <div
              className="flex-1 p-8 border"
              style={{ borderColor: '#222', background: 'rgba(255,255,255,0.02)' }}
            >
              <p className="font-archivo font-bold text-xs uppercase tracking-widest mb-4" style={{ color: '#555' }}>
                Today
              </p>
              <p
                className="font-archivo font-black text-4xl mb-2"
                style={{ color: '#fafafa' }}
              >
                Disk
              </p>
              <p className="font-nunito text-sm" style={{ color: '#555' }}>
                Static files sitting on a shelf.
              </p>
            </div>

            <span
              className="font-archivo font-black text-3xl flex-shrink-0"
              style={{ color: '#ff3300' }}
            >
              →
            </span>

            <div
              className="flex-1 p-8 border"
              style={{ borderColor: '#ff3300', background: 'rgba(255,51,0,0.06)' }}
            >
              <p className="font-archivo font-bold text-xs uppercase tracking-widest mb-4" style={{ color: '#ff3300' }}>
                With idearchy
              </p>
              <p
                className="font-archivo font-black text-4xl mb-2"
                style={{ color: '#fafafa' }}
              >
                RAM
              </p>
              <p className="font-nunito text-sm" style={{ color: '#888' }}>
                Indexed, connected, ready on demand.
              </p>
            </div>
          </div>

          <p className="font-nunito text-base leading-relaxed max-w-xl" style={{ color: '#666' }}>
            Your knowledge exists in storage — static files sitting on a shelf. idearchy moves it
            into active memory — indexed, connected, and ready to use on demand.
          </p>
        </div>

        <div className="absolute bottom-8 right-6">
          <span
            className="font-archivo font-black text-6xl leading-none select-none"
            style={{ color: 'rgba(255,255,255,0.03)' }}
          >
            03
          </span>
        </div>
      </section>

      {/* ─── SOLUTION (light) ─── */}
      <section className="relative bg-grid-light py-28 overflow-hidden" style={{ background: '#fafafa' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="rule-accent mb-8" />
          <p className="font-archivo text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#ff3300' }}>
            The Solution
          </p>
          <h2
            className="font-archivo font-black leading-tight tracking-tight mb-6"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#0a0a0a' }}
          >
            Chat with your knowledge.
          </h2>
          <p className="font-nunito text-xl max-w-xl mb-16 leading-relaxed" style={{ color: '#666' }}>
            idearchy turns unorganized documents into an intelligent system you can talk to —
            and that talks back with ideas.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l" style={{ borderColor: '#e5e5e5' }}>
            {[
              {
                label: 'Ingest',
                desc: 'Drop in documents, notes, bookmarks — any format. No organizing required.',
                active: false,
              },
              {
                label: 'Converse',
                desc: 'Ask questions, explore connections, surface forgotten insights through natural chat.',
                active: true,
              },
              {
                label: 'Act',
                desc: 'AI Agents generate ideas, find opportunities, and draft plans from what you already know.',
                active: false,
              },
            ].map((col) => (
              <div
                key={col.label}
                className="p-10 border-r border-b"
                style={{
                  borderColor: '#e5e5e5',
                  borderLeft: col.active ? '3px solid #ff3300' : undefined,
                  background: col.active ? 'rgba(255,51,0,0.03)' : 'transparent',
                }}
              >
                <p
                  className="font-archivo font-black text-xl mb-4"
                  style={{ color: col.active ? '#ff3300' : '#0a0a0a' }}
                >
                  {col.label}
                </p>
                <p className="font-nunito text-base leading-relaxed" style={{ color: '#666' }}>
                  {col.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 right-6">
          <span
            className="font-archivo font-black text-6xl leading-none select-none"
            style={{ color: 'rgba(0,0,0,0.04)' }}
          >
            04
          </span>
        </div>
      </section>

      {/* ─── HOW IT WORKS (dark) ─── */}
      <section
        id="how-it-works"
        className="relative bg-grid-dark py-28 overflow-hidden"
        style={{ background: '#0a0a0a' }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="rule-accent mb-8" />
          <p className="font-archivo text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#666' }}>
            How It Works
          </p>
          <h2
            className="font-archivo font-black leading-tight tracking-tight mb-20"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#fafafa' }}
          >
            How it works.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-16">
            {steps.map((step) => (
              <div key={step.n} className="relative">
                <span
                  className="font-archivo font-black leading-none select-none absolute -top-4 -left-2"
                  style={{ fontSize: 'clamp(4rem, 8vw, 6rem)', color: 'rgba(255,255,255,0.04)' }}
                >
                  {step.n}
                </span>
                <div className="relative">
                  <p
                    className="font-archivo font-black text-2xl mb-3"
                    style={{ color: '#fafafa' }}
                  >
                    {step.title}
                  </p>
                  <p className="font-nunito text-base leading-relaxed" style={{ color: '#666' }}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 right-6">
          <span
            className="font-archivo font-black text-6xl leading-none select-none"
            style={{ color: 'rgba(255,255,255,0.03)' }}
          >
            05
          </span>
        </div>
      </section>

      {/* ─── FEATURES (light) ─── */}
      <section className="relative bg-grid-light py-28 overflow-hidden" style={{ background: '#fafafa' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="rule-accent mb-8" />
          <p className="font-archivo text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#ff3300' }}>
            Features
          </p>
          <h2
            className="font-archivo font-black leading-tight tracking-tight mb-20"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#0a0a0a' }}
          >
            Built different.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 border-t border-l" style={{ borderColor: '#e5e5e5' }}>
            {features.map((f) => (
              <div
                key={f.title}
                className="p-8 border-r border-b group transition-colors duration-300 hover:bg-orange-50"
                style={{ borderColor: '#e5e5e5' }}
              >
                <span
                  className="font-archivo font-black text-2xl block mb-5 transition-colors duration-300 group-hover:text-orange-500"
                  style={{ color: '#ff3300' }}
                >
                  {f.icon}
                </span>
                <p className="font-archivo font-black text-lg mb-3" style={{ color: '#0a0a0a' }}>
                  {f.title}
                </p>
                <p className="font-nunito text-sm leading-relaxed" style={{ color: '#666' }}>
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 right-6">
          <span
            className="font-archivo font-black text-6xl leading-none select-none"
            style={{ color: 'rgba(0,0,0,0.04)' }}
          >
            06
          </span>
        </div>
      </section>

      {/* ─── WAITLIST CTA (light) ─── */}
      <section
        id="waitlist"
        className="relative bg-grid-light py-28 overflow-hidden"
        style={{ background: '#fafafa', borderTop: '1px solid #e5e5e5' }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-lg">
            <div className="rule-accent mb-8" />
            <p className="font-archivo text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#ff3300' }}>
              Get Early Access
            </p>
            <h2
              className="font-archivo font-black leading-tight tracking-tight mb-4"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#0a0a0a' }}
            >
              Stop filing<span style={{ color: '#ff3300' }}>.</span>
              <br />
              Start using<span style={{ color: '#ff3300' }}>.</span>
            </h2>
            <p className="font-nunito text-lg leading-relaxed mb-14" style={{ color: '#666' }}>
              Turn your scattered knowledge into your most powerful tool.
              Join the waitlist — we&apos;ll reach out as soon as your spot opens.
            </p>

            <WaitlistForm />
          </div>
        </div>

        <div className="absolute bottom-8 right-6">
          <span
            className="font-archivo font-black text-6xl leading-none select-none"
            style={{ color: 'rgba(0,0,0,0.04)' }}
          >
            07
          </span>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer
        className="py-10 px-6 border-t"
        style={{ background: '#0a0a0a', borderColor: '#1a1a1a' }}
      >
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-archivo font-black text-sm tracking-tight" style={{ color: '#fafafa' }}>
            idearchy<span style={{ color: '#ff3300' }}>.</span>tech
          </span>
          <div className="flex gap-8">
            {['Privacy', 'Terms', 'Contact'].map((link) => (
              <a
                key={link}
                href="#"
                className="font-nunito text-xs uppercase tracking-widest transition-colors duration-200 hover:opacity-100"
                style={{ color: '#555' }}
              >
                {link}
              </a>
            ))}
          </div>
          <span className="font-nunito text-xs" style={{ color: '#444' }}>
            © {new Date().getFullYear()} idearchy.tech
          </span>
        </div>
      </footer>
    </div>
  )
}
