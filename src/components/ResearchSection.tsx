import React from 'react';
import { Microscope } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
export function ResearchSection() {
  return (
    <section
      id="research"
      className="py-24 bg-transparent transition-colors duration-300">

      <div className="w-full px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 transition-colors duration-300">
              Research
            </h2>
            <div className="h-1.5 w-20 bg-sky-500 mx-auto rounded-full"></div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="w-full bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 md:p-12 shadow-md dark:shadow-none border border-slate-200 dark:border-slate-800 border-l-4 border-l-sky-500 transition-all duration-300">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0 p-4 bg-white dark:bg-slate-800 rounded-xl text-sky-600 dark:text-sky-400 transition-colors duration-300">
                <Microscope size={40} />
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 transition-colors duration-300">
                  UV Fluorescence + Machine Learning for Aflatoxin Detection in
                  Corn
                </h3>

                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed text-lg transition-colors duration-300">
                  Researching how UV fluorescence image processing combined with
                  machine learning can detect and quantify aflatoxin levels in
                  corn kernels. This project includes the development of a
                  user-friendly web application designed to help farmers and
                  sellers ensure crop quality and safety.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {[
                  'Python',
                  'Deep Learning',
                  'Image Processing',
                  'Computer Vision'].
                  map((tech) =>
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium rounded-md border border-slate-200 dark:border-slate-700 transition-colors duration-300">

                      {tech}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>);

}