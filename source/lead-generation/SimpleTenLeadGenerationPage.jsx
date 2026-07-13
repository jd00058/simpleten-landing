import React from 'react';
import { motion as Motion } from 'framer-motion';
import {
  ArrowRight, Award, BarChart3, BookOpen, Brain, CheckCircle, ClipboardList, Database,
  LineChart, MessageCircle, Play, Search, Settings, Sparkles, Target, Users, Zap
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const systems = [
  {
    icon: Target,
    name: 'Growth OS',
    line: 'Leads, sales, CRM, follow-up.',
    body: 'Generate more qualified leads, respond faster, increase conversion rates, and build a sales process that consistently turns opportunities into customers.',
  },
  {
    icon: Settings,
    name: 'Operations OS',
    line: 'Fulfillment, communication, SOPs, admin.',
    body: 'Document processes, reduce repetitive work, improve communication, and keep projects moving without constant oversight.',
  },
  {
    icon: Database,
    name: 'Intelligence OS',
    line: 'Dashboards, KPIs, reporting, insights.',
    body: 'Bring your business data together, understand what is working, identify bottlenecks, and make decisions backed by real numbers instead of guesswork.',
  },
  {
    icon: BookOpen,
    name: 'Knowledge OS',
    line: 'Expertise capture, onboarding, AI assistants.',
    body: 'Capture the expertise of your best people, create SOPs, build onboarding systems, and protect the knowledge your business depends on.',
  },
  {
    icon: Search,
    name: 'Marketing OS',
    line: 'SEO, AEO, GEO, reviews, reputation, content.',
    body: 'Improve your visibility across search, AI search, referrals, reviews, and content so more of the right customers find your business.',
  },
];

const benefits = [
  { title: 'Knowing where interest is coming from', copy: 'No more missed opportunities or forgotten follow-ups.', icon: Zap },
  { title: 'A Follup System Thats Always On', copy: 'Keep projects moving with consistent communication.', icon: MessageCircle },
  { title: 'Your team spends less time on busy work.', copy: 'Remove repetitive tasks so people can focus on serving customers.', icon: Users },
  { title: 'You always know what needs attention.', copy: 'Clear reporting helps you make faster, better decisions.', icon: BarChart3 },
];

const process = [
  { num: '01', title: 'Assess', copy: 'We learn how your business works, identify where you are losing time and revenue, and establish a baseline for improvement.' },
  { num: '02', title: 'Activate', copy: 'We create and implement the highest-impact systems first, making sure everything works together instead of creating more complexity.' },
  { num: '03', title: 'Excellerate', copy: 'We continue measuring results, refining systems, and identifying the next opportunities for growth as your business changes over time.' },
];

const faqs = [
  ['How do I know if my business is ready?', 'If leads are slipping through the cracks, your team is relying on manual follow-up, or you do not have clear visibility into what is working, your business is ready for a better operating system.'],
  ['What types of businesses do you work with?', 'SimpleTen is built for service businesses: home services, professional services, local operators, agencies, field-service teams, and growing companies that need better lead flow, sales systems, and operations.'],
  ['Do I need new software?', 'Not always. We start with the tools you already use, then recommend new software only when it creates measurable leverage.'],
  ['How long does implementation take?', 'The Blueprint gives you a clear roadmap first. Simple systems can often be implemented quickly, while larger operating systems are built in focused phases.'],
  ['Will this replace my employees?', 'No. The goal is to remove repetitive work, improve consistency, and give your people more time to serve customers, sell, and solve higher-value problems.'],
  ['How do you measure success?', 'We look at the business outcomes that matter: lead response time, booked appointments, conversion rate, operational cycle time, margin, reporting clarity, and time saved.'],
];

function Button({ children, variant = 'primary', href = '#blueprint', className = '' }) {
  const base = 'group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-tight transition-all focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-slate-950';
  const styles = variant === 'primary'
    ? 'bg-teal-400 text-slate-950 shadow-[0_0_38px_rgba(45,212,191,0.32)] hover:bg-teal-300'
    : 'border border-white/10 bg-white/[0.04] text-slate-100 hover:border-teal-300/40 hover:bg-teal-400/10 hover:text-teal-100';
  return <a href={href} className={`${base} ${styles} ${className}`}>{children}</a>;
}

function Kicker({ children }) {
  return <div className="font-mono text-[11px] uppercase tracking-[0.34em] text-teal-300/80">{children}</div>;
}

function SectionHeading({ eyebrow, title, copy, center = true }) {
  return (
    <Motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={stagger} className={center ? 'mx-auto max-w-4xl text-center' : 'max-w-4xl'}>
      {eyebrow && <Motion.div variants={fadeUp}><Kicker>{eyebrow}</Kicker></Motion.div>}
      <Motion.h2 variants={fadeUp} className="mt-5 text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-white md:text-6xl">
        {title}
      </Motion.h2>
      {copy && <Motion.p variants={fadeUp} className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400 md:text-xl">{copy}</Motion.p>}
    </Motion.div>
  );
}

function Card({ children, className = '', glow = false }) {
  return (
    <div className={`relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/60 p-7 shadow-lg backdrop-blur-md ${className}`}>
      {glow && <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-teal-400/15 blur-3xl" />}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

function GrowthMap() {
  const nodes = [
    { label: 'Lead Capture', x: '10%', y: '20%', icon: Target },
    { label: 'Fast Follow-Up', x: '64%', y: '16%', icon: Zap },
    { label: 'Sales Pipeline', x: '16%', y: '70%', icon: LineChart },
    { label: 'Operations', x: '68%', y: '70%', icon: Settings },
    { label: 'Reporting', x: '40%', y: '8%', icon: BarChart3 },
    { label: 'Knowledge', x: '40%', y: '82%', icon: Brain },
  ];
  return (
    <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] border border-teal-400/15 bg-slate-950/70 p-8 shadow-2xl shadow-teal-950/30">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(20,184,166,0.16),transparent_54%)]" />
      <div className="absolute left-1/2 top-1/2 z-10 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-teal-300/35 bg-teal-400/10 text-center shadow-[0_0_90px_rgba(20,184,166,0.25)]">
        <Sparkles className="mb-2 h-8 w-8 text-teal-200" />
        <span className="font-mono text-xs uppercase tracking-[0.18em] text-teal-100">Growth OS</span>
      </div>
      <svg className="absolute inset-0 h-full w-full opacity-45" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M50 50 C20 25 20 25 16 25" stroke="rgba(45,212,191,.45)" strokeWidth=".35" fill="none" />
        <path d="M50 50 C78 22 75 22 72 22" stroke="rgba(45,212,191,.45)" strokeWidth=".35" fill="none" />
        <path d="M50 50 C23 78 22 75 22 75" stroke="rgba(45,212,191,.45)" strokeWidth=".35" fill="none" />
        <path d="M50 50 C78 78 76 75 76 75" stroke="rgba(45,212,191,.45)" strokeWidth=".35" fill="none" />
        <path d="M50 50 C50 22 50 15 50 12" stroke="rgba(20,184,166,.35)" strokeWidth=".35" fill="none" />
        <path d="M50 50 C50 78 50 85 50 88" stroke="rgba(20,184,166,.35)" strokeWidth=".35" fill="none" />
      </svg>
      {nodes.map((node) => (
        <div key={node.label} className="absolute z-10 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-slate-200" style={{ left: node.x, top: node.y }}>
          {React.createElement(node.icon, { className: 'h-4 w-4 text-teal-300' })}
          {node.label}
        </div>
      ))}
    </div>
  );
}

export default function SimpleTenLeadGenerationPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#020617] font-sans text-slate-300 selection:bg-teal-500/30">
      <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.035] mix-blend-soft-light" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")' }} />

      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="/lead-generation.html" className="text-base font-semibold tracking-tight text-white">SimpleTen</a>
          <nav className="hidden items-center gap-7 font-mono text-[11px] uppercase tracking-[0.22em] text-slate-500 md:flex">
            <a href="#blueprint" className="transition hover:text-teal-300">Blueprint</a>
            <a href="#systems" className="transition hover:text-teal-300">Growth OS</a>
            <a href="#faq" className="transition hover:text-teal-300">FAQ</a>
          </nav>
          <a href="#cta" className="rounded-full bg-teal-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-teal-300">Book Blueprint</a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden px-6 pb-24 pt-32 md:pt-40">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(20,184,166,0.28),transparent_70%)]" />
          <div className="pointer-events-none absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-teal-400/10 blur-3xl" />
          <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
            <Motion.div initial="hidden" animate="visible" variants={stagger}>
              <Motion.div variants={fadeUp} className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 font-mono text-xs uppercase tracking-[0.16em] text-teal-300">
                <span className="h-2 w-2 animate-pulse rounded-full bg-teal-300" />
                Business Automation
              </Motion.div>
              <Motion.h1 variants={fadeUp} className="text-[2.85rem] font-bold leading-[0.95] tracking-[-0.055em] text-white md:text-[4.7rem] lg:text-[5.6rem]">
                Helping Service Businesses Grow Without Adding More Work
              </Motion.h1>
              <Motion.p variants={fadeUp} className="mt-8 max-w-3xl text-xl font-medium leading-8 text-teal-100/75 md:text-2xl">
                Generate more QUALIFIED leads, Serve more customers, Scale to multiple locations.
              </Motion.p>
              <Motion.p variants={fadeUp} className="mt-6 max-w-3xl text-base leading-8 text-slate-400 md:text-lg">
                We've developed an automated system to find more customers, qualify each one, and discover interest. We've made what most businesses would consider to be too technical, simple. Think of a hand that has 5 fingers, all working together for one goal, thats what we do.
              </Motion.p>
              <Motion.div variants={fadeUp} className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button href="#blueprint">Book Your Free Service Business Blueprint <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Button>
                <Button href="#systems" variant="secondary">See How Growth OS Works</Button>
              </Motion.div>
            </Motion.div>
            <Motion.div initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.18 }}>
              <GrowthMap />
            </Motion.div>
          </div>
        </section>

        <section className="relative z-10 border-y border-white/10 px-6 py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <SectionHeading
              eyebrow="What is SimpleTen"
              title={(
                <>
                  <span className="block">Build.</span>
                  <span className="block text-teal-300">Better.</span>
                  <span className="block">Business.</span>
                </>
              )}
              center={false}
            />
            <Motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid gap-4 text-lg leading-8 text-slate-300">
              {[
                'We Don\'t Make software. We Install Systems.',
                'Track time, money, and opportunities in order to scale.',
                'Become more profitable and positioned for growth.',
              ].map((copy) => (
                <Motion.div key={copy} variants={fadeUp} className="flex gap-4 rounded-3xl border border-teal-300/15 bg-white/[0.04] p-5 shadow-lg shadow-teal-950/20 backdrop-blur-sm">
                  <div className="mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-2xl bg-teal-400/10 text-teal-300 ring-1 ring-teal-300/20">
                    <Award className="h-5 w-5" />
                  </div>
                  <p>{copy}</p>
                </Motion.div>
              ))}
            </Motion.div>
          </div>
        </section>

        <section id="blueprint" className="relative overflow-hidden px-6 py-24">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_540px_at_50%_260px,rgba(20,184,166,0.18),transparent)]" />
          <div className="relative mx-auto max-w-6xl">
            <Card glow className="border-teal-400/20 bg-teal-950/20 p-8 md:p-14">
              <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                <div>
                  <Kicker>Service Business Blueprint</Kicker>
                  <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.045em] text-white md:text-6xl">Every Great Business Runs on Great Systems.</h2>
                </div>
                <div className="space-y-5 text-lg leading-8 text-slate-300">
                  <p>Before we build anything, we learn how your business works.</p>
                  <p>Our Service Business Blueprint identifies the bottlenecks slowing your growth, uncovers hidden opportunities, and creates a clear roadmap for improving lead generation, sales, operations, and profitability.</p>
                  <p className="font-semibold text-white">No guesswork. Just a plan built around your business.</p>
                  <Button href="#cta" className="mt-2">Schedule Your Blueprint</Button>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section className="px-6 py-24">
          <SectionHeading eyebrow="Benefits" title="This Could Be Your Business" copy="A lead-generation system only works when sales, service, operations, and reporting are connected." />
          <div className="mx-auto mt-14 grid max-w-6xl gap-5 md:grid-cols-2">
            {benefits.map((item) => (
              <Motion.article key={item.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <Card className="h-full transition-colors hover:border-teal-400/35" glow>
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-400/10 text-teal-300 ring-1 ring-teal-300/20">
                    {React.createElement(item.icon, { className: 'h-6 w-6' })}
                  </div>
                  <h3 className="text-2xl font-semibold tracking-tight text-white">{item.title}</h3>
                  <p className="mt-4 text-base leading-7 text-slate-400">{item.copy}</p>
                </Card>
              </Motion.article>
            ))}
          </div>
        </section>

        <section id="systems" className="relative border-y border-white/10 px-6 py-24">
          <SectionHeading eyebrow="Services" title="Your Growth Operating System" copy="Every service business is different, but the systems that drive growth are remarkably similar. We build the operating systems that help businesses attract customers, convert more sales, operate efficiently, and grow with confidence." />
          <div className="mx-auto mt-16 grid max-w-7xl gap-6 lg:grid-cols-3">
            {systems.map((system, index) => (
              <Motion.article key={system.name} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className={index === 0 ? 'lg:col-span-2' : ''}>
                <Card className="h-full transition-colors hover:border-teal-400/35" glow={index === 0}>
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-teal-300 ring-1 ring-white/10">
                      {React.createElement(system.icon, { className: 'h-6 w-6' })}
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold tracking-tight text-white">{system.name}</h3>
                      <p className="font-mono text-xs uppercase tracking-[0.14em] text-teal-300/70">{system.line}</p>
                    </div>
                  </div>
                  <p className="text-base leading-7 text-slate-400">{system.body}</p>
                </Card>
              </Motion.article>
            ))}
          </div>
        </section>

        <section className="px-6 py-24">
          <SectionHeading eyebrow="Process" title="SimpleTen Activation" copy="We start with the highest-leverage systems first, then keep improving as your business changes." />
          <div className="relative mx-auto mt-16 max-w-7xl">
            <div className="absolute left-0 top-1/2 hidden h-px w-full bg-white/10 lg:block" />
            <div className="relative grid gap-6 lg:grid-cols-3">
              {process.map((step) => (
                <Motion.article key={step.num} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                  <Card className="h-full">
                    <span className="font-mono text-4xl font-bold text-white/10">{step.num}</span>
                    <h3 className="mt-8 text-xl font-semibold text-white">{step.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-slate-400">{step.copy}</p>
                  </Card>
                </Motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden px-6 py-24">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_540px_at_50%_260px,rgba(20,184,166,0.2),transparent)]" />
          <div className="relative mx-auto max-w-6xl">
            <Card glow className="border-teal-400/20 bg-slate-950/80 p-8 md:p-14">
              <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
                <div>
                  <Kicker>Credibility</Kicker>
                  <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.045em] text-white md:text-5xl">Trusted Leaders in AI, Automation, and Business Systems</h2>
                </div>
                <div className="space-y-5 text-base leading-8 text-slate-400 md:text-lg">
                  <p>SimpleTen combines real-world experience in marketing, operations, creative strategy, and automation to help service businesses modernize with confidence.</p>
                  <p>We’re proud to organize Sacramento’s largest monthly AI Meetup through the globally recognized AI Collective, serve as official n8n Ambassadors, and work alongside developers, engineers, and AI specialists to build systems that solve real business problems.</p>
                  <p>Combined with experience in advertising, brand strategy, and MIT certification in Applied Agentic AI for Organizational Transformation, our focus is simple:</p>
                  <p className="text-2xl font-semibold tracking-tight text-white">Build systems that make businesses stronger.</p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section id="faq" className="border-y border-white/10 px-6 py-24">
          <SectionHeading eyebrow="FAQ" title="Business Questions, Not Tech Jargon" />
          <div className="mx-auto mt-14 grid max-w-5xl gap-4">
            {faqs.map(([q, a]) => (
              <Motion.div key={q} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <Card>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="mt-1 h-5 w-5 flex-none text-teal-300" />
                    <div>
                      <h3 className="text-xl font-semibold text-white">{q}</h3>
                      <p className="mt-3 leading-7 text-slate-400">{a}</p>
                    </div>
                  </div>
                </Card>
              </Motion.div>
            ))}
          </div>
        </section>

        <section id="cta" className="relative overflow-hidden px-6 py-32">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_600px_at_50%_50%,rgba(20,184,166,0.32),transparent)]" />
          <Card glow className="mx-auto max-w-5xl border-teal-400/20 bg-teal-950/20 p-9 text-center md:p-20">
            <Kicker>Build a Business That Runs Better</Kicker>
            <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-[-0.05em] text-white md:text-6xl">Stop Working Around Broken Systems. Build a Business That Runs Better.</h2>
            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
              Whether you’re trying to generate more leads, improve your sales process, streamline operations, or simply get your time back, SimpleTen helps you build the systems that make growth sustainable.
            </p>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-400">Book your free Service Business Blueprint and discover the biggest opportunities inside your business.</p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="mailto:jesse@simpleten.ai?subject=Service%20Business%20Blueprint">Book Your Free Blueprint <Play className="h-4 w-4 fill-current" /></Button>
              <Button href="#systems" variant="secondary">Review the Growth OS</Button>
            </div>
            <p className="mt-8 text-sm font-medium text-slate-500">SimpleTen builds Growth Operating Systems for service businesses that help them generate more leads, convert more customers, operate more efficiently, and make better business decisions.</p>
          </Card>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 font-mono text-xs uppercase tracking-[0.22em] text-slate-500 md:flex-row">
          <span>SimpleTen</span>
          <span>Business Automation</span>
        </div>
      </footer>
    </div>
  );
}
