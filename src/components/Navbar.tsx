import React, { useEffect, useState } from 'react';
import { Menu, X, Github, Linkedin, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from './ThemeContext';
const navLinks = [
{
  name: 'About',
  href: '#about'
},
{
  name: 'Education',
  href: '#education'
},
{
  name: 'Research',
  href: '#research'
},
{
  name: 'Projects',
  href: '#projects'
},
{
  name: 'Skills',
  href: '#skills'
},
{
  name: 'Contact',
  href: '#contact'
}];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="text-xl font-bold text-slate-900 dark:text-white tracking-tight transition-colors">

            Geeth<span className="text-sky-500">.</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) =>
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 transition-colors">

                {link.name}
              </a>
            )}
            <div className="h-4 w-px bg-slate-200 dark:bg-slate-700 mx-2"></div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none"
              aria-label="Toggle theme">

              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={theme}
                  initial={{
                    y: -20,
                    opacity: 0
                  }}
                  animate={{
                    y: 0,
                    opacity: 1
                  }}
                  exit={{
                    y: 20,
                    opacity: 0
                  }}
                  transition={{
                    duration: 0.2
                  }}>

                  {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                </motion.div>
              </AnimatePresence>
            </button>

            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/Geethbim"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                aria-label="GitHub">

                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/geeth-liyanage"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-[#0077b5] dark:hover:text-[#0a66c2] transition-colors"
                aria-label="LinkedIn">

                <Linkedin size={18} />
              </a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none"
              aria-label="Toggle theme">

              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu">

              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen &&
        <motion.div
          initial={{
            opacity: 0,
            height: 0
          }}
          animate={{
            opacity: 1,
            height: 'auto'
          }}
          exit={{
            opacity: 0,
            height: 0
          }}
          className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 overflow-hidden">

            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) =>
            <a
              key={link.name}
              href={link.href}
              className="block px-3 py-3 text-base font-medium text-slate-600 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}>

                  {link.name}
                </a>
            )}
              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center space-x-6 px-3">
                <a
                href="https://github.com/Geethbim"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white flex items-center gap-2 transition-colors">

                  <Github size={20} />
                  <span className="text-sm">GitHub</span>
                </a>
                <a
                href="https://www.linkedin.com/in/geeth-liyanage"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 dark:text-slate-400 hover:text-[#0077b5] dark:hover:text-[#0a66c2] flex items-center gap-2 transition-colors">

                  <Linkedin size={20} />
                  <span className="text-sm">LinkedIn</span>
                </a>
              </div>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}