import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { additionalProjects } from '../data'

export default function AdditionalProjects() {
  const [ref, inView] = useInView()

  return (
    <section id="projects" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12 bg-bg-2 section-divider">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="font-mono text-[11px] text-indigo-light tracking-[0.18em] uppercase mb-3">Additional Systems</p>
          <h2 className="font-display text-[clamp(28px,4vw,46px)] font-bold tracking-tight text-white mb-4">
            More Automations Built
          </h2>
          <p className="text-slate-body text-base max-w-lg leading-relaxed">
            Five more production tools, each eliminating a distinct operational friction point.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {additionalProjects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card glass-card-hover rounded-2xl p-7 group"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo/10 border border-indigo/20 flex items-center justify-center text-xl mb-5 group-hover:scale-110 transition-transform">
                {p.icon}
              </div>
              <h3 className="font-display text-lg font-semibold text-white mb-2">{p.title}</h3>
              <p className="text-sm text-slate-body leading-relaxed mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map(tag => (
                  <span key={tag} className="font-mono text-[10px] px-2.5 py-1 rounded-full border border-white/8 text-slate-dim">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
