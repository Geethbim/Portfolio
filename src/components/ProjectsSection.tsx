import React from 'react';
import { Github, Lock } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
const projects = [
{
  title: 'Niyo Salon – Salon Management Platform',
  description:
  'A comprehensive salon management system featuring calendar-aware booking with OTP verification, an admin dashboard with JWT authentication, and AI-powered blog generation.',
  tech: ['React', 'TypeScript', 'Tailwind', 'Spring Boot', 'MySQL'],
  links: [
  {
    label: 'Frontend',
    url: 'https://github.com/KasunJanith/Project-II---Niyo-Salon--Frontend.git'
  },
  {
    label: 'Backend',
    url: 'https://github.com/KasunJanith/Project-II---Niyo-Salon-Backend.git'
  }],

  isPrivate: false
},
{
  title: 'DesktopPet',
  description:
  'An interactive animated desktop pet application with a built-in reminder system and health tips integration. Packaged with a Windows installer for easy distribution.',
  tech: ['Python', 'tkinter', 'Pillow'],
  links: [
  {
    label: 'Repository',
    url: 'https://github.com/Geethbim/DesktopPet.git'
  }],

  isPrivate: false
},
{
  title: 'Exchanza – Shopping & Bidding',
  description:
  'An online marketplace platform facilitating shopping, bidding, and thrifting. Features secure user authentication and payment processing integrations.',
  tech: ['PHP', 'JavaScript', 'MySQL'],
  links: [
  {
    label: 'Repository',
    url: 'https://github.com/Kavindacc/Project-I_Exchanza.git'
  }],

  isPrivate: false
},
{
  title: 'Smart Energy-Aware Workspace',
  description:
  'IoT-based system for real-time workspace monitoring and energy optimization. Uses ESP32 microcontrollers for automation and data collection.',
  tech: ['C++', 'React', 'Node.js', 'MongoDB'],
  links: [],
  isPrivate: true
}];

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 transition-colors duration-300">
              Featured Projects
            </h2>
            <div className="h-1.5 w-20 bg-sky-500 mx-auto rounded-full"></div>
            <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto transition-colors duration-300">
              A selection of my academic and personal projects demonstrating my
              technical capabilities.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) =>
          <ScrollReveal key={index} delay={index * 0.1}>
              <div className="h-full flex flex-col bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-lg dark:hover:shadow-none hover:border-sky-200 dark:hover:border-sky-700 transition-all duration-300">
                <div className="p-6 md:p-8 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    {project.isPrivate &&
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors duration-300">
                        <Lock size={12} className="mr-1" /> Ongoing
                      </span>
                  }
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 mb-6 flex-1 leading-relaxed transition-colors duration-300">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) =>
                  <span
                    key={tech}
                    className="px-3 py-1 bg-sky-50 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 text-xs font-medium rounded-full border border-sky-100 dark:border-sky-800 transition-colors duration-300">

                        {tech}
                      </span>
                  )}
                  </div>

                  <div className="flex flex-wrap gap-3 mt-auto pt-6 border-t border-slate-100 dark:border-slate-700 transition-colors duration-300">
                    {project.isPrivate ?
                  <span className="text-sm text-slate-400 dark:text-slate-500 italic flex items-center transition-colors duration-300">
                        Code is currently private
                      </span> :

                  project.links.map((link, i) =>
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors duration-300">

                          <Github size={16} className="mr-1.5" />
                          {link.label}
                        </a>
                  )
                  }
                  </div>
                </div>
              </div>
            </ScrollReveal>
          )}
        </div>
      </div>
    </section>);

}