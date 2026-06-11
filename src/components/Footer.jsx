import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Linkedin, Mail, ArrowUp } from 'lucide-react'

export default function Footer() {
  const [ref, inView] = useInView()

  return (
    <footer className="bg-bg-2 border-t border-white/7 px-4 sm:px-6 lg:px-12 py-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          {/* Left */}
          <div>
            <div className="font-display text-lg font-bold text-white tracking-tight mb-1">Yashwant Shukla</div>
            <div className="font-mono text-[11px] text-slate-dim tracking-widest uppercase">Manager — Automation & Operations</div>
          </div>

          {/* Center links */}
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/in/yashwantshukla"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-lg border border-white/8 text-slate-dim hover:text-white hover:border-white/20 transition-all"
            >
              <Linkedin size={15} />
            </a>
            <a
              href="mailto:yashwant@example.com"
              aria-label="Email"
              className="p-2.5 rounded-lg border border-white/8 text-slate-dim hover:text-white hover:border-white/20 transition-all"
            >
              <Mail size={15} />
            </a>
          </div>

          {/* Right */}
          <div className="flex items-center gap-6">
            <span className="font-mono text-[11px] text-slate-dim">Built with AI-assisted development · 2026</span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Back to top"
              className="p-2.5 rounded-lg border border-white/8 text-slate-dim hover:text-white hover:border-white/20 transition-all"
            >
              <ArrowUp size={15} />
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
