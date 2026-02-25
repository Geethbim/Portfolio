import React from 'react';
import { ScrollReveal } from './ScrollReveal';
const skillCategories = [
{
  title: 'Programming Languages',
  skills: ['Python', 'Java', 'JavaScript', 'C', 'C++', 'PHP']
},
{
  title: 'Frontend Development',
  skills: ['HTML5', 'CSS3', 'React.js', 'Bootstrap', 'Tailwind CSS']
},
{
  title: 'Backend Development',
  skills: ['Spring Boot', 'Node.js', 'PHP', 'REST APIs']
},
{
  title: 'Databases',
  skills: ['MySQL', 'MongoDB', 'PostgreSQL']
},
{
  title: 'Testing & QA',
  skills: ['Manual Testing', 'Automated Testing', 'Postman', 'Selenium']
},
{
  title: 'Tools & DevOps',
  skills: ['Git', 'GitHub', 'Docker', 'Jupyter Notebook', 'Inno Setup']
},
{
  title: 'Soft Skills',
  skills: [
  'Problem-Solving',
  'Teamwork',
  'Adaptability',
  'Critical Thinking',
  'Leadership']

}];

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-24 bg-transparent transition-colors duration-300">

      <div className="w-full px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 transition-colors duration-300">
              Technical Skills
            </h2>
            <div className="h-1.5 w-20 bg-sky-500 mx-auto rounded-full"></div>
            <p className="mt-4 text-slate-600 dark:text-slate-300 transition-colors duration-300">
              A comprehensive overview of my technical expertise and
              professional capabilities.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) =>
          <ScrollReveal key={index} delay={index * 0.05}>
              <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-6 border border-slate-100 dark:border-slate-800 h-full hover:shadow-md dark:hover:shadow-none transition-all duration-300">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 border-b border-slate-200 dark:border-slate-700 pb-2 transition-colors duration-300">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) =>
                <span
                  key={skill}
                  className="px-3 py-1 bg-white dark:bg-slate-800 text-sky-700 dark:text-sky-300 text-sm font-medium rounded-full border border-sky-100 dark:border-sky-900/50 shadow-sm dark:shadow-none transition-colors duration-300">

                      {skill}
                    </span>
                )}
                </div>
              </div>
            </ScrollReveal>
          )}
        </div>
      </div>
    </section>);

}