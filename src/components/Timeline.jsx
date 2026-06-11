import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { timeline } from '../data'

export default function Timeline() {
  const [ref, inView] = useInView()

  return (
    <section id="timeline" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12 bg-bg-2 section-divider">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
          ref={ref}
        >
          <p className="font-mono text-[11px] text-indigo-light tracking-[0.18em] uppercase mb-3">Career Evolution</p>
          <h2 className="font-display text-[clamp(28px,4vw,46px)] font-bold tracking-tight text-white mb-4">
            From Ops Executive<br className="hidden sm:block" /> to Systems Builder
          </h2>
          <p className="text-slate-body text-base max-w-lg leading-relaxed">
            A four-year journey from executing processes to engineering the systems that eliminate them.
          </p>
        </motion.div>

        <div className="relative max-w-2xl">
          {/* Vertical connector line */}
          <div className="absolute left-[18px] top-10 bottom-10 w-px bg-gradient-to-b from-indigo via-cyan/60 to-transparent hidden sm:block" />

          <div className="space-y-0">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.1 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="flex gap-6 sm:gap-8 pb-10 group"
              >
                {/* Dot */}
                <div className="hidden sm:flex flex-shrink-0 flex-col items-center">
                  <div
                    className={`w-9 h-9 rounded-full border flex items-center justify-center relative z-10 transition-all group-hover:scale-110 ${
                      item.current
                        ? 'border-cyan/60 bg-bg shadow-[0_0_16px_rgba(6,182,212,0.25)]'
                        : 'border-indigo/40 bg-bg'
                    }`}
                  >
                    <div
                      className={`w-2.5 h-2.5 rounded-full ${
                        item.current
                          ? 'bg-cyan'
                          : 'bg-gradient-to-br from-indigo to-cyan/70'
                      }`}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="pb-2">
                  <div className={`font-mono text-xs tracking-widest mb-1.5 ${item.current ? 'text-white font-semibold' : 'text-cyan/80'}`}>
                    {item.year} {item.current && <span className="ml-2 px-2 py-0.5 bg-cyan/10 border border-cyan/25 rounded-full text-cyan text-[10px]">Current</span>}
                  </div>
                  <h3 className={`font-display text-xl font-semibold tracking-tight mb-1 ${item.current ? 'text-cyan' : 'text-white'}`}>
                    {item.role}
                  </h3>
                  <div className="font-mono text-[11px] text-slate-dim uppercase tracking-wider mb-3">{item.dept}</div>
                  <p className="text-sm text-slate-body leading-relaxed max-w-md">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
