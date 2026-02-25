import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
export function EducationSection() {
  return (
    <section
      id="education"
      className="py-24 bg-transparent transition-colors duration-300">

      <div className="w-full px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 transition-colors duration-300">
              Education
            </h2>
            <div className="h-1.5 w-20 bg-sky-500 mx-auto rounded-full"></div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="w-full">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 md:p-10 shadow-sm dark:shadow-none border border-slate-200 dark:border-slate-700 relative overflow-hidden transition-all duration-300">
              <div className="absolute top-0 left-0 w-2 h-full bg-sky-500"></div>

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-sky-50 dark:bg-sky-900/30 rounded-lg text-sky-600 dark:text-sky-400 transition-colors duration-300">
                      <GraduationCap size={24} />
                    </div>
                    <span className="text-sm font-semibold text-sky-600 dark:text-sky-400 tracking-wide uppercase transition-colors duration-300">
                      University Degree
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2 transition-colors duration-300">
                    B.Sc. (Hons) in Computer Science & Technology
                  </h3>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-slate-500 dark:text-slate-400 mb-6 transition-colors duration-300">
                    <div className="flex items-center gap-1.5">
                      <MapPin size={16} />
                      <span>Uva Wellassa University of Sri Lanka</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar size={16} />
                      <span>2020 – 2026 (Expected)</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-start md:items-end">
                  <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-4 border border-slate-100 dark:border-slate-700 text-center min-w-[140px] transition-colors duration-300">
                    <span className="block text-sm text-slate-500 dark:text-slate-400 mb-1 transition-colors duration-300">
                      Current GPA
                    </span>
                    <span className="block text-3xl font-bold text-sky-600 dark:text-sky-400 transition-colors duration-300">
                      3.56
                    </span>
                    <span className="block text-xs text-slate-400 dark:text-slate-500 transition-colors duration-300">
                      out of 4.00
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-700 transition-colors duration-300">
                <p className="text-slate-600 dark:text-slate-300 transition-colors duration-300">
                  Focusing on advanced software engineering principles,
                  algorithms, data structures, and system design. Active
                  participant in university technical clubs and hackathons.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>);

}