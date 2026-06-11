import { motion } from 'framer-motion'
import { useInView, useCounter } from '../hooks/useInView'
import { metrics } from '../data'

function MetricCard({ item, index, enabled }) {
  const count = useCounter(item.value, 1400, enabled)

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={enabled ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="glass-card glass-card-hover rounded-2xl p-7 relative overflow-hidden group"
    >
      {/* Top shimmer line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="font-display text-[42px] font-bold tracking-tight leading-none mb-3"
        style={{ background: 'linear-gradient(135deg, #F8FAFC 0%, #94A3B8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
        {item.text
          ? item.text
          : `${count}${item.suffix || ''}`
        }
      </div>
      <div className="text-sm text-slate-body font-medium leading-snug">{item.label}</div>
    </motion.div>
  )
}

export default function Metrics() {
  const [ref, inView] = useInView()

  return (
    <section id="metrics" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="font-mono text-[11px] text-indigo-light tracking-[0.18em] uppercase mb-3">Impact Dashboard</p>
          <h2 className="font-display text-[clamp(28px,4vw,46px)] font-bold tracking-tight text-white mb-4">
            Systems That Moved the Needle
          </h2>
          <p className="text-slate-body text-base max-w-lg leading-relaxed">
            Operational outcomes from production systems built and deployed across the team.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {metrics.map((m, i) => (
            <MetricCard key={i} item={m} index={i} enabled={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
