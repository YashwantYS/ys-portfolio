import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { caseStudies } from '../data'
import { ChevronDown } from 'lucide-react'

const colorMap = {
  cyan: { bg: 'bg-cyan/8', border: 'border-cyan/25', text: 'text-cyan' },
  indigo: { bg: 'bg-indigo/8', border: 'border-indigo/30', text: 'text-indigo-light' },
  green: { bg: 'bg-emerald-500/8', border: 'border-emerald-500/25', text: 'text-emerald-400' },
  purple: { bg: 'bg-purple-500/8', border: 'border-purple-500/25', text: 'text-purple-400' },
  orange: { bg: 'bg-orange-500/8', border: 'border-orange-500/25', text: 'text-orange-400' },
}

function TechPill({ label }) {
  return (
    <span className="font-mono text-[11px] px-3 py-1 rounded-full bg-indigo/10 border border-indigo/25 text-indigo-light">
      {label}
    </span>
  )
}

function ArchDiagram({ layers }) {
  return (
    <div className="space-y-2">
      {layers.map((layer, i) => {
        const c = colorMap[layer.color] || colorMap.indigo
        return (
          <div key={i} className="flex items-center gap-3">
            <div className={`text-[10px] font-mono w-20 flex-shrink-0 ${c.text}`}>{layer.layer}</div>
            <div className="flex gap-2 flex-wrap">
              {layer.items.map((item, j) => (
                <span
                  key={j}
                  className={`text-[11px] font-mono px-2.5 py-1 rounded-md border ${c.bg} ${c.border} ${c.text}`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}

function MockATS() {
  const screenshots = [
    "/images/Dashboard.png",
    "/images/Pipeline.png",
    "/images/Report.png",
    "/images/Resume uploading.png"
  ]

  const [current, setCurrent] = useState(0)

  const next = () =>
    setCurrent((prev) => (prev + 1) % screenshots.length)

  const prev = () =>
    setCurrent((prev) =>
      prev === 0 ? screenshots.length - 1 : prev - 1
    )

  return (
    <div className="bg-bg-3 rounded-xl border border-white/7 overflow-hidden">
      <div className="relative">
        <img
          src={screenshots[current]}
          alt="ATS Screenshot"
          className="w-full h-auto rounded-xl"
        />

        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 text-white px-3 py-2 rounded"
        >
          ←
        </button>

        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 text-white px-3 py-2 rounded"
        >
          →
        </button>
      </div>

      <div className="flex justify-center gap-2 py-3">
        {screenshots.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 rounded-full ${
              current === index
                ? "bg-cyan"
                : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

function MockCBNexus() {
  // Drop your screenshots into /public/images/cbnexus/ with these exact
  // filenames (or edit this array to match whatever you name them).
  const screenshots = [
    "/images/cbnexus/Dashboard.png",
    "/images/cbnexus/AdminSettings.png",
    "/images/cbnexus/ApplyForLeave.png",
    "/images/cbnexus/ScreeningCenter.png"
  ]

  const [current, setCurrent] = useState(0)

  const next = () =>
    setCurrent((prev) => (prev + 1) % screenshots.length)

  const prev = () =>
    setCurrent((prev) =>
      prev === 0 ? screenshots.length - 1 : prev - 1
    )

  return (
    <div className="bg-bg-3 rounded-xl border border-white/7 overflow-hidden">
      <div className="relative">
        <img
          src={screenshots[current]}
          alt="CB Nexus Screenshot"
          className="w-full h-auto rounded-xl"
        />

        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 text-white px-3 py-2 rounded"
        >
          ←
        </button>

        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 text-white px-3 py-2 rounded"
        >
          →
        </button>
      </div>

      <div className="flex justify-center gap-2 py-3">
        {screenshots.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 rounded-full ${
              current === index
                ? "bg-cyan"
                : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

function MockLeave() {
  return (
    <div className="bg-bg-3 rounded-xl border border-white/7 overflow-hidden">
      <div className="bg-slate-dim/10 px-4 py-2.5 border-b border-white/7 flex items-center gap-2">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
        <div className="ml-2 flex-1 bg-white/5 border border-white/8 rounded-md px-3 py-1 font-mono text-[10px] text-slate-dim">
          leave-management-system
        </div>
      </div>
      <div className="p-4 grid grid-cols-2 gap-3">
        <div className="bg-indigo/8 border border-indigo/20 rounded-lg p-3">
          <div className="font-mono text-[9px] text-indigo-light uppercase tracking-wider mb-1">Leave Balance</div>
          <div className="font-display text-2xl font-bold text-white">12.5</div>
          <div className="font-mono text-[9px] text-slate-dim mt-0.5">days available</div>
        </div>
        <div className="bg-cyan/8 border border-cyan/20 rounded-lg p-3">
          <div className="font-mono text-[9px] text-cyan uppercase tracking-wider mb-1">WFH Quota</div>
          <div className="font-display text-2xl font-bold text-white">8/24</div>
          <div className="font-mono text-[9px] text-slate-dim mt-0.5">used this year</div>
        </div>
        <div className="col-span-2 bg-emerald-500/8 border border-emerald-500/20 rounded-lg p-3">
          <div className="font-mono text-[9px] text-emerald-400 uppercase tracking-wider mb-2">Comp-Off Ledger</div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-slate-body">Accrued this month</span>
            <span className="font-display font-semibold text-emerald-400">+1.0 day</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function MockReporting() {
  return (
    <div className="bg-bg-3 rounded-xl border border-white/7 overflow-hidden">
      <div className="bg-slate-dim/10 px-4 py-2.5 border-b border-white/7 flex items-center gap-2">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
        <div className="ml-2 flex-1 bg-white/5 border border-white/8 rounded-md px-3 py-1 font-mono text-[10px] text-slate-dim">
          performance-dashboard
        </div>
      </div>
      <div className="p-4 space-y-3">
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: 'Weekly', val: 'Auto', color: 'indigo' },
            { label: 'Leaderboard', val: 'Live', color: 'cyan' },
            { label: 'Coaching', val: 'AI', color: 'green' },
          ].map(item => {
            const c = colorMap[item.color] || colorMap.indigo
            return (
              <div key={item.label} className={`${c.bg} border ${c.border} rounded-lg p-2.5 text-center`}>
                <div className={`font-mono text-[9px] uppercase tracking-wider ${c.text} mb-1`}>{item.label}</div>
                <div className="font-display text-lg font-bold text-white">{item.val}</div>
              </div>
            )
          })}
        </div>
        <div className="space-y-1.5 pt-1">
          {[
            { name: 'Recruiter A', val: 92 },
            { name: 'Recruiter B', val: 78 },
            { name: 'Recruiter C', val: 65 },
          ].map(r => (
            <div key={r.name} className="flex items-center gap-3">
              <div className="font-mono text-[10px] text-slate-dim w-20 flex-shrink-0">{r.name}</div>
              <div className="flex-1 bg-white/5 rounded-full h-1.5 overflow-hidden">
                <div className="h-full rounded-full bg-gradient-to-r from-indigo to-cyan" style={{ width: `${r.val}%` }} />
              </div>
              <div className="font-mono text-[10px] text-slate-dim w-8 text-right">{r.val}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const mockComponents = {
  zenalpha: MockATS,
  'cb-nexus': MockCBNexus,
  'leave-management': MockLeave,
  'recruitment-suite': MockReporting,
}

function CaseStudyCard({ cs, index }) {
  const [ref, inView] = useInView()
  const [expanded, setExpanded] = useState(false)
  const MockComponent = mockComponents[cs.id]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-2xl border border-white/7 overflow-hidden bg-bg-3"
    >
      <div className="p-6 sm:p-8 lg:p-10 grid lg:grid-cols-2 gap-8 lg:gap-12">
        <div>
          <p className="font-mono text-[11px] text-cyan tracking-[0.15em] uppercase mb-3">
            {cs.tag} · {String(index + 1).padStart(2, '0')}
          </p>
          <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">{cs.title}</h3>
          <p className="text-slate-body text-sm mb-4">{cs.headline}</p>

        <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-xs font-mono font-medium bg-indigo/10 border border-indigo/25 text-indigo-light rounded-lg">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-light"></span>
          Private System • Screenshots & Architecture Available
        </div>

          <p className="text-slate-body/80 text-sm leading-relaxed mb-6">{cs.description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {cs.tech.map(t => <TechPill key={t} label={t} />)}
          </div>
          <button
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-2 text-sm font-medium text-indigo-light hover:text-white transition-colors"
          >
            {expanded ? 'Show less' : 'View details'}
            <ChevronDown size={15} className={`transition-transform ${expanded ? 'rotate-180' : ''}`} />
          </button>
        </div>

        <div className="lg:self-start">
          {MockComponent && <MockComponent />}
        </div>
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="overflow-hidden"
          >
            <div className="border-t border-white/7 grid md:grid-cols-3">
              <div className="p-6 sm:p-8 border-b md:border-b-0 md:border-r border-white/7">
                <p className="font-mono text-[10px] text-indigo-light uppercase tracking-wider mb-3">Problem</p>
                <p className="text-sm text-slate-body leading-relaxed">{cs.problem}</p>
              </div>
              <div className="p-6 sm:p-8 border-b md:border-b-0 md:border-r border-white/7">
                <p className="font-mono text-[10px] text-indigo-light uppercase tracking-wider mb-3">Solution</p>
                <p className="text-sm text-slate-body leading-relaxed mb-4">{cs.solution}</p>
                <ul className="space-y-1.5">
                  {cs.features.slice(0, 5).map(f => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-body">
                      <span className="text-indigo-light mt-0.5 flex-shrink-0">—</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 sm:p-8">
                <p className="font-mono text-[10px] text-indigo-light uppercase tracking-wider mb-4">Architecture</p>
                <ArchDiagram layers={cs.architecture} />
                <div className="mt-6 pt-5 border-t border-white/7">
                  <p className="font-mono text-[10px] text-cyan uppercase tracking-wider mb-2">Impact</p>
                  <p className="text-sm text-slate-body leading-relaxed">{cs.impact}</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function CaseStudies() {
  const [ref, inView] = useInView()

  return (
    <section id="case-studies" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12 section-divider">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="font-mono text-[11px] text-indigo-light tracking-[0.18em] uppercase mb-3">Featured Work</p>
          <h2 className="font-display text-[clamp(28px,4vw,46px)] font-bold tracking-tight text-white mb-4">
            Case Studies
          </h2>
          <p className="text-slate-body text-base max-w-lg leading-relaxed">
            Production systems built with AI-assisted development to eliminate real operational problems.
          </p>
        </motion.div>

        <div className="space-y-6">
          {caseStudies.map((cs, i) => (
            <CaseStudyCard key={cs.id} cs={cs} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}