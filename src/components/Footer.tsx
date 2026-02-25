import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
export function Footer() {
  return (
    <footer className="bg-transparent text-slate-600 dark:text-slate-300 py-12 transition-colors duration-300">
      <div className="w-[85%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 transition-colors duration-300">
              Geeth Liyanage
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm transition-colors duration-300">
              Aspiring Software Engineer & QA Engineer
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/Geethbim"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="GitHub">

              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/geeth-liyanage"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="LinkedIn">

              <Linkedin size={20} />
            </a>
            <a
              href="mailto:geethbimsaraliyanage@gmail.com"
              className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="Email">

              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-800 mt-8 pt-8 text-center text-sm text-slate-500 dark:text-slate-400 transition-colors duration-300">
          <p>
            &copy; {new Date().getFullYear()} Geeth Liyanage. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>);

}