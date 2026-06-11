import { motion } from 'framer-motion'
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] } }),
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Grid background */}
      <div className="absolute inset-0 hero-grid-bg pointer-events-none" />

      {/* Ambient orbs */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-indigo/15 blur-[120px] animate-orb-1 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-cyan/12 blur-[100px] animate-orb-2 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] rounded-full bg-purple-600/10 blur-[80px] animate-orb-3 pointer-events-none" />

      {/* Subtle top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo/40 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center py-20">
        {/* Badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-cyan/25 bg-cyan/5 text-cyan"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse-dot" />
          <span className="font-mono text-[11px] tracking-widest font-medium uppercase">
            Manager — Automation & Operations
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
          className="font-display text-[clamp(36px,7vw,80px)] font-bold leading-[1.06] tracking-tight mb-6"
        >
          Building AI-Powered Systems
          <br />
          <span className="gradient-text">That Scale Operations</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
          className="max-w-2xl mx-auto text-slate-body text-[clamp(15px,2vw,18px)] leading-relaxed mb-10"
        >
          I identify inefficiencies, design scalable workflows, and use AI-assisted development to build internal business systems that reduce manual effort, improve visibility, and help teams operate at scale.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={3}
          className="flex flex-col sm:flex-row gap-3 justify-center mb-12"
        >
          <a
            href="#case-studies"
            onClick={(e) => { e.preventDefault(); document.querySelector('#case-studies')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-indigo hover:bg-indigo-light text-white font-display font-semibold text-sm rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo/25 w-full sm:w-auto"
          >
            View Case Studies
            <ArrowRight size={16} />
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/4 hover:bg-white/7 border border-white/10 hover:border-white/20 text-slate-white font-display font-medium text-sm rounded-xl transition-all hover:-translate-y-0.5 w-full sm:w-auto"
          >
            <Download size={15} />
            Download Resume
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={4}
          className="flex items-center justify-center gap-4"
        >
          {[
            { icon: Linkedin, href: 'https://linkedin.com/in/yashwantshukla', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:yashwant@example.com', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={href}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-white/8 text-slate-dim hover:text-white hover:border-white/20 transition-all"
            >
              <Icon size={16} />
            </a>
          ))}
          <span className="text-xs font-mono text-slate-dim/60 tracking-widest uppercase ml-2">Raipur, India</span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 animate-scroll-bob">
        <div className="flex flex-col items-center gap-1.5 text-slate-dim/50">
          <svg width="14" height="20" viewBox="0 0 14 20" fill="none" className="opacity-50">
            <rect x="1" y="1" width="12" height="18" rx="6" stroke="currentColor" strokeWidth="1.5"/>
            <circle cx="7" cy="6" r="1.5" fill="currentColor">
              <animate attributeName="cy" values="6;12;6" dur="2s" repeatCount="indefinite"/>
            </circle>
          </svg>
          <span className="font-mono text-[9px] tracking-widest uppercase">scroll</span>
        </div>
      </div>
    </section>
  )
}
