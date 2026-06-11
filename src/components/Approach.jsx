import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { approach } from '../data'

export default function Approach() {
  const [ref, inView] = useInView()

  return (
    <section id="approach" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12 section-divider">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="font-mono text-[11px] text-indigo-light tracking-[0.18em] uppercase mb-3">Process</p>
          <h2 className="font-display text-[clamp(28px,4vw,46px)] font-bold tracking-tight text-white mb-4">
            How I Build Systems
          </h2>
          <p className="text-slate-body text-base max-w-lg leading-relaxed">
            A repeatable engineering discipline applied to every operational problem — from discovery to continuous improvement.
          </p>
        </motion.div>

        {/* Desktop: horizontal grid */}
        <div className="hidden lg:grid grid-cols-7 border border-white/7 rounded-2xl overflow-hidden">
          {approach.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className={`p-6 group hover:bg-bg-2 transition-colors cursor-default ${i < 6 ? 'border-r border-white/7' : ''}`}
            >
              <div className="font-mono text-[10px] text-indigo-light tracking-wider mb-4">{step.num}</div>
              <div className="text-2xl mb-4 group-hover:scale-110 transition-transform inline-block">{step.icon}</div>
              <div className="font-display text-sm font-semibold text-white leading-snug">{step.title}</div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: vertical list */}
        <div className="lg:hidden grid sm:grid-cols-2 gap-4">
          {approach.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="glass-card rounded-xl p-5 flex items-start gap-4"
            >
              <div className="w-8 h-8 rounded-lg bg-indigo/10 border border-indigo/20 flex items-center justify-center text-sm flex-shrink-0">
                {step.icon}
              </div>
              <div>
                <div className="font-mono text-[10px] text-indigo-light mb-0.5">{step.num}</div>
                <div className="font-display text-sm font-semibold text-white mb-1">{step.title}</div>
                <div className="text-xs text-slate-dim leading-relaxed">{step.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
