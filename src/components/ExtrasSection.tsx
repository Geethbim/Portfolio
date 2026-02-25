import React from 'react';
import { Award, Heart, Globe, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
export function ExtrasSection() {
  return (
    <section className="py-24 bg-transparent transition-colors duration-300">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Certifications & Achievements */}
          <ScrollReveal>
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Award className="text-sky-500" size={28} />
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white transition-colors duration-300">
                    Certifications
                  </h3>
                </div>
                <ul className="space-y-4">
                  {[
                  'Introduction to AI — Google',
                  'Maximize Productivity With AI Tools — Google',
                  'Docker Foundations — LinkedIn Learning',
                  'Introduction to DevOps — IBM'].
                  map((cert, i) =>
                  <li
                    key={i}
                    className="flex items-start gap-3 bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm dark:shadow-none transition-colors duration-300">

                      <CheckCircle2
                      className="text-green-500 flex-shrink-0 mt-0.5"
                      size={18} />

                      <span className="text-slate-700 dark:text-slate-300 font-medium transition-colors duration-300">
                        {cert}
                      </span>
                    </li>
                  )}
                </ul>
              </div>

              <div className="pt-4">
                <div className="flex items-center gap-3 mb-6">
                  <Award className="text-yellow-500" size={28} />
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white transition-colors duration-300">
                    Achievements
                  </h3>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm dark:shadow-none transition-colors duration-300">
                  <p className="text-slate-700 dark:text-slate-300 font-medium transition-colors duration-300">
                    3rd Place — Inter Faculty Karate Tournament (2024)
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Volunteering & Languages */}
          <ScrollReveal delay={0.2}>
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Heart className="text-red-500" size={28} />
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white transition-colors duration-300">
                    Volunteering
                  </h3>
                </div>
                <ul className="space-y-4">
                  {[
                  {
                    role: 'Coordinator',
                    org: 'CST LAN Challenge'
                  },
                  {
                    role: 'Committee Member',
                    org: 'IEEE RAS Chapter'
                  },
                  {
                    role: 'Member',
                    org: 'Inter University Karate Team'
                  }].
                  map((item, i) =>
                  <li
                    key={i}
                    className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm dark:shadow-none transition-colors duration-300">

                      <span className="font-bold text-slate-900 dark:text-white transition-colors duration-300">
                        {item.role}
                      </span>
                      <span className="text-slate-400 mx-2">—</span>
                      <span className="text-slate-600 dark:text-slate-400 transition-colors duration-300">
                        {item.org}
                      </span>
                    </li>
                  )}
                </ul>
              </div>

              <div className="pt-4">
                <div className="flex items-center gap-3 mb-6">
                  <Globe className="text-blue-500" size={28} />
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white transition-colors duration-300">
                    Languages
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                  {
                    lang: 'English',
                    level: 'Fluent'
                  },
                  {
                    lang: 'Sinhala',
                    level: 'Native'
                  },
                  {
                    lang: 'Tamil',
                    level: 'Intermediate'
                  }].
                  map((item, i) =>
                  <div
                    key={i}
                    className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm dark:shadow-none text-center transition-colors duration-300">

                      <div className="font-bold text-slate-900 dark:text-white transition-colors duration-300">
                        {item.lang}
                      </div>
                      <div className="text-xs text-sky-500 dark:text-sky-400 font-medium uppercase tracking-wide mt-1 transition-colors duration-300">
                        {item.level}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>);

}