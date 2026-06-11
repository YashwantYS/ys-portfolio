import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Mail, Linkedin, Send, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [ref, inView] = useInView()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    // Simulate submission — wire up Formspree / Resend in production
    await new Promise(r => setTimeout(r, 1200))
    setSent(true)
    setLoading(false)
  }

  return (
    <section id="contact" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12 section-divider">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="font-mono text-[11px] text-indigo-light tracking-[0.18em] uppercase mb-3">Contact</p>
          <h2 className="font-display text-[clamp(28px,4vw,46px)] font-bold tracking-tight text-white mb-4">
            Let's Talk Systems
          </h2>
          <p className="text-slate-body text-base max-w-lg leading-relaxed">
            If you're looking at a messy manual process and wondering if it can be automated — let's talk.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <a
              href="https://www.linkedin.com/in/shuklayash11/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 glass-card glass-card-hover rounded-2xl group"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo/10 border border-indigo/25 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Linkedin size={18} className="text-indigo-light" />
              </div>
              <div>
                <div className="font-display text-sm font-semibold text-white">LinkedIn</div>
                <div className="font-mono text-xs text-slate-dim">linkedin.com/in/shuklayash11/</div>
              </div>
            </a>

            <a
              href="mailto:shuklays1999@gmail.com"
              className="flex items-center gap-4 p-5 glass-card glass-card-hover rounded-2xl group"
            >
              <div className="w-10 h-10 rounded-xl bg-cyan/10 border border-cyan/25 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail size={18} className="text-cyan" />
              </div>
              <div>
                <div className="font-display text-sm font-semibold text-white">Email</div>
                <div className="font-mono text-xs text-slate-dim">shuklays1999@gmail.com</div>
              </div>
            </a>

            {/* About blurb */}
            <div className="p-5 glass-card rounded-2xl mt-6">
              <p className="font-mono text-[11px] text-indigo-light uppercase tracking-wider mb-3">About</p>
              <p className="text-sm text-slate-body leading-relaxed">
                Yashwant Shukla is a Manager — Automation & Operations based in Raipur, India. He uses AI-assisted development to build internal systems that eliminate manual work, improve team visibility, and scale operations without scaling headcount.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 glass-card rounded-2xl">
                <CheckCircle size={40} className="text-emerald-400 mb-4" />
                <h3 className="font-display text-xl font-semibold text-white mb-2">Message sent</h3>
                <p className="text-sm text-slate-body">Thanks for reaching out. I'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { name: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
                  { name: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
                ].map(field => (
                  <div key={field.name}>
                    <label className="block font-mono text-[11px] text-slate-dim uppercase tracking-wider mb-2">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      required
                      placeholder={field.placeholder}
                      value={form[field.name]}
                      onChange={e => setForm(p => ({ ...p, [field.name]: e.target.value }))}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder:text-slate-dim focus:border-indigo/50 outline-none transition-all font-body"style={{ color: '#F8FAFC', caretColor: '#6366F1' }}
                    />
                  </div>
                ))}
                <div>
                  <label className="block font-mono text-[11px] text-slate-dim uppercase tracking-wider mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Describe the problem you're trying to solve..."
                    value={form.message}
                    onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder:text-slate-dim focus:border-indigo/50 outline-none transition-all font-body"style={{ color: '#F8FAFC', caretColor: '#6366F1' }}
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-indigo hover:bg-indigo-light disabled:opacity-60 text-white font-display font-semibold text-sm rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo/25"
                >
                  {loading ? (
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="30 70" />
                    </svg>
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
