import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { techStack } from '../data'

const catColors = {
  indigo: { dot: 'bg-indigo-light', border: 'border-indigo/30', label: 'text-indigo-light' },
  cyan: { dot: 'bg-cyan', border: 'border-cyan/30', label: 'text-cyan' },
  green: { dot: 'bg-emerald-400', border: 'border-emerald-500/30', label: 'text-emerald-400' },
  purple: { dot: 'bg-purple-400', border: 'border-purple-500/30', label: 'text-purple-400' },
  orange: { dot: 'bg-orange-400', border: 'border-orange-500/30', label: 'text-orange-400' },
}

export default function TechStack() {
  const [ref, inView] = useInView()

  return (
    <section id="tech" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12 bg-bg-2 section-divider">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="font-mono text-[11px] text-indigo-light tracking-[0.18em] uppercase mb-3">Technology</p>
          <h2 className="font-display text-[clamp(28px,4vw,46px)] font-bold tracking-tight text-white mb-4">
            Tools & Stack
          </h2>
          <p className="text-slate-body text-base max-w-lg leading-relaxed">
            Purpose-selected tools chosen for what they solve, not what they signal.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {techStack.map((cat, i) => {
            const c = catColors[cat.color] || catColors.indigo
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={`glass-card glass-card-hover rounded-2xl p-6 border ${c.border}`}
              >
                <div className={`font-mono text-[10px] font-medium uppercase tracking-[0.18em] mb-5 pb-4 border-b ${c.border} ${c.label}`}>
                  {cat.category}
                </div>
                <div className="space-y-3">
                  {cat.items.map((item) => (
                    <div key={item} className="flex items-center gap-2.5 text-sm font-medium text-slate-white">
                      <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${c.dot}`} />
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
