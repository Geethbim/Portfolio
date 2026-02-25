import React from 'react';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-10 overflow-hidden bg-transparent transition-colors duration-300">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-sky-100/50 dark:bg-sky-900/20 blur-3xl transition-colors duration-300" />
        <div className="absolute top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-100/30 dark:bg-blue-900/20 blur-3xl transition-colors duration-300" />
      </div>

      <div className="w-[85%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Profile Picture — shows first on mobile */}
          <motion.div
            className="flex-shrink-0 order-first lg:order-last"
            initial={{
              opacity: 0,
              scale: 0.8
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 0.6,
              delay: 0.2
            }}>

            <div className="relative">
              {/* Outer animated ring */}
              <motion.div
                className="absolute -inset-3 rounded-full border-2 border-dashed border-sky-300/40 dark:border-sky-600/30"
                animate={{
                  rotate: 360
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: 'linear'
                }} />


              {/* Decorative dots */}
              <motion.div
                className="absolute -top-2 -right-2 w-5 h-5 bg-sky-400 dark:bg-sky-500 rounded-full shadow-lg shadow-sky-400/30"
                animate={{
                  y: [-4, 4, -4]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }} />

              <motion.div
                className="absolute -bottom-1 -left-1 w-3 h-3 bg-blue-400 dark:bg-blue-500 rounded-full shadow-lg shadow-blue-400/30"
                animate={{
                  y: [3, -3, 3]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }} />

              <motion.div
                className="absolute top-1/2 -right-4 w-2 h-2 bg-sky-300 dark:bg-sky-600 rounded-full"
                animate={{
                  x: [-2, 4, -2]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }} />


              {/* Gradient ring behind image */}
              <div className="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full p-1 bg-gradient-to-br from-sky-400 via-blue-500 to-sky-600 shadow-xl shadow-sky-500/20 dark:shadow-sky-900/30">
                <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-slate-800 transition-colors duration-300">
                  {/* Profile picture served from /public */}
                  <img
                    src="/profile.png"
                    alt="Geeth Liyanage — Profile Photo"
                    className="w-full h-full object-cover" />

                </div>
              </div>

              {/* Status badge */}
              <motion.div
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-white dark:bg-slate-800 rounded-full shadow-lg border border-slate-100 dark:border-slate-700 transition-colors duration-300"
                initial={{
                  opacity: 0,
                  y: 10
                }}
                animate={{
                  opacity: 1,
                  y: 0
                }}
                transition={{
                  delay: 0.8,
                  duration: 0.4
                }}>

                <span className="flex items-center gap-1.5 text-sm font-medium text-slate-700 dark:text-slate-300">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  Open to Internships
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.5
            }}>

            <span className="inline-block py-1 px-3 rounded-full bg-sky-50 dark:bg-sky-900/30 border border-sky-100 dark:border-sky-800 text-sky-600 dark:text-sky-400 text-sm font-medium mb-6 transition-colors duration-300">
              👋 Hello, I'm
            </span>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white tracking-tight mb-6 transition-colors duration-300">
              Geeth Liyanage
            </h1>

            <h2 className="text-xl md:text-2xl font-medium text-sky-500 dark:text-sky-400 mb-8 transition-colors duration-300">
              Aspiring Software Engineer | QA Engineer | IT Project Manager
            </h2>

            <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 leading-relaxed transition-colors duration-300 lg:mx-0 mx-auto">
              Highly motivated Computer Science and Technology undergraduate at
              Uva Wellassa University of Sri Lanka with strong foundations in
              software development, testing, and project coordination.
              Passionate about building secure, high-quality software and
              continuously improving in the IT industry.
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4">
              <a
                href="#projects"
                className="w-full sm:w-auto px-8 py-3.5 bg-sky-500 hover:bg-sky-600 text-white font-medium rounded-full transition-all shadow-lg shadow-sky-500/25 dark:shadow-sky-900/20 flex items-center justify-center gap-2">

                View Projects <ArrowRight size={18} />
              </a>

              <a
                href="/cv.pdf"
                download
                className="w-full sm:w-auto px-8 py-3.5 bg-white dark:bg-slate-800 border border-sky-200 dark:border-sky-700 text-sky-600 dark:text-sky-400 hover:border-sky-500 dark:hover:border-sky-500 hover:bg-sky-50 dark:hover:bg-slate-700 font-medium rounded-full transition-all flex items-center justify-center gap-2">

                <Download size={18} /> Download CV
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-3.5 text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 font-medium transition-colors flex items-center justify-center gap-2">

                <Mail size={18} /> Contact Me
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0]
        }}
        transition={{
          repeat: Infinity,
          duration: 2
        }}>

        <div className="w-6 h-10 border-2 border-slate-300 dark:border-slate-600 rounded-full flex justify-center p-1 transition-colors duration-300">
          <div className="w-1 h-2 bg-slate-400 dark:bg-slate-500 rounded-full" />
        </div>
      </motion.div>
    </section>);

}