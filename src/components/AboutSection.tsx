import React from 'react';
import { Zap, Users, TestTube, Briefcase, Target } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
const traits = [
{
  icon: Zap,
  title: 'Adaptable & Fast Learner',
  description:
  'Quickly mastering new technologies and adapting to changing project requirements.'
},
{
  icon: Users,
  title: 'Communication & Teamwork',
  description:
  'Strong interpersonal skills facilitating effective collaboration in diverse teams.'
},
{
  icon: TestTube,
  title: 'Testing Experience',
  description:
  'Hands-on experience in both manual and automated software testing methodologies.'
},
{
  icon: Briefcase,
  title: 'Software Engineering',
  description:
  'Passionate about building robust, scalable, and secure software solutions.'
},
{
  icon: Target,
  title: 'Detail-Oriented',
  description:
  'Meticulous attention to detail ensuring high-quality deliverables and code.'
}];

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 bg-transparent transition-colors duration-300">

      <div className="w-full px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 transition-colors duration-300">
              About Me
            </h2>
            <div className="h-1.5 w-20 bg-sky-500 mx-auto rounded-full"></div>
            <p className="mt-4 text-slate-600 dark:text-slate-300 transition-colors duration-300">
              I am a dedicated Computer Science undergraduate with a passion for
              technology and problem-solving. My journey involves continuous
              learning and applying theoretical knowledge to real-world
              scenarios.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {traits.map((trait, index) =>
          <ScrollReveal key={index} delay={index * 0.1}>
              <div className="h-full p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 hover:border-sky-200 dark:hover:border-sky-700 hover:shadow-md dark:hover:shadow-none transition-all duration-300 group">
                <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-lg flex items-center justify-center mb-4 text-sky-500 shadow-sm dark:shadow-none group-hover:bg-sky-500 group-hover:text-white transition-colors duration-300">
                  <trait.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 transition-colors duration-300">
                  {trait.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed transition-colors duration-300">
                  {trait.description}
                </p>
              </div>
            </ScrollReveal>
          )}
        </div>
      </div>
    </section>);

}