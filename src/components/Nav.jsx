import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Journey', href: '#timeline' },
  { label: 'Impact', href: '#metrics' },
  { label: 'Work', href: '#case-studies' },
  { label: 'Stack', href: '#tech' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-bg/90 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className="font-mono text-xs text-cyan tracking-widest hover:text-cyan/80 transition-colors"
          >
            YS.systems
          </a>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => handleNav(l.href)}
                className="text-xs font-medium text-slate-body hover:text-white transition-colors tracking-wide"
              >
                {l.label}
              </button>
            ))}
            <a
              href="/resume.pdf"
              className="ml-4 px-4 py-2 text-xs font-semibold font-display bg-indigo hover:bg-indigo-light rounded-lg transition-colors tracking-wide"
              download
            >
              Resume
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg text-slate-body hover:text-white hover:bg-white/5 transition-all"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-bg-2 border-l border-white/7 md:hidden flex flex-col"
            >
              <div className="flex items-center justify-between p-5 border-b border-white/7">
                <span className="font-mono text-xs text-cyan tracking-widest">YS.systems</span>
                <button
                  onClick={() => setOpen(false)}
                  className="p-1.5 rounded-lg text-slate-body hover:text-white hover:bg-white/5"
                >
                  <X size={18} />
                </button>
              </div>
              <nav className="flex flex-col p-5 gap-2 flex-1">
                {links.map((l, i) => (
                  <motion.button
                    key={l.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    onClick={() => handleNav(l.href)}
                    className="text-left px-4 py-3 rounded-lg text-sm font-medium text-slate-body hover:text-white hover:bg-white/5 transition-all"
                  >
                    {l.label}
                  </motion.button>
                ))}
              </nav>
              <div className="p-5 border-t border-white/7">
                <a
                  href="/resume.pdf"
                  className="block w-full text-center py-3 text-sm font-semibold font-display bg-indigo hover:bg-indigo-light rounded-xl transition-colors"
                  download
                >
                  Download Resume
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
