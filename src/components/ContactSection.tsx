import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 bg-transparent transition-colors duration-300">

      <div className="w-full px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 transition-colors duration-300">
              Get In Touch
            </h2>
            <div className="h-1.5 w-20 bg-sky-500 mx-auto rounded-full"></div>
            <p className="mt-4 text-slate-600 dark:text-slate-300 transition-colors duration-300">
              I'm currently looking for internship opportunities. Whether you
              have a question or just want to say hi, I'll try my best to get
              back to you!
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <ScrollReveal>
            <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 md:p-10 h-full border border-slate-100 dark:border-slate-800 transition-colors duration-300">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 transition-colors duration-300">
                Contact Information
              </h3>

              <div className="space-y-6">
                <a
                  href="mailto:geethbimsaraliyanage@gmail.com"
                  className="flex items-start gap-4 text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors group">

                  <div className="p-3 bg-white dark:bg-slate-800 rounded-lg shadow-sm dark:shadow-none text-sky-500 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="block text-sm font-medium text-slate-400 dark:text-slate-500 mb-1 transition-colors duration-300">
                      Email
                    </span>
                    <span className="text-lg font-medium">
                      geethbimsaraliyanage@gmail.com
                    </span>
                  </div>
                </a>

                <a
                  href="tel:+94702878562"
                  className="flex items-start gap-4 text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors group">

                  <div className="p-3 bg-white dark:bg-slate-800 rounded-lg shadow-sm dark:shadow-none text-sky-500 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="block text-sm font-medium text-slate-400 dark:text-slate-500 mb-1 transition-colors duration-300">
                      Phone
                    </span>
                    <span className="text-lg font-medium">+94 70 287 8562</span>
                  </div>
                </a>

                <div className="flex items-start gap-4 text-slate-600 dark:text-slate-300 group">
                  <div className="p-3 bg-white dark:bg-slate-800 rounded-lg shadow-sm dark:shadow-none text-sky-500 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="block text-sm font-medium text-slate-400 dark:text-slate-500 mb-1 transition-colors duration-300">
                      Location
                    </span>
                    <span className="text-lg font-medium">
                      Colombo, Sri Lanka
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700 transition-colors duration-300">
                <h4 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-4 transition-colors duration-300">
                  Social Profiles
                </h4>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/geeth-liyanage"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white dark:bg-slate-800 rounded-lg shadow-sm dark:shadow-none text-slate-500 dark:text-slate-400 hover:bg-[#0077b5] hover:text-white dark:hover:text-white transition-all duration-300"
                    aria-label="LinkedIn">

                    <Linkedin size={24} />
                  </a>
                  <a
                    href="https://github.com/Geethbim"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white dark:bg-slate-800 rounded-lg shadow-sm dark:shadow-none text-slate-500 dark:text-slate-400 hover:bg-[#333] hover:text-white dark:hover:text-white transition-all duration-300"
                    aria-label="GitHub">

                    <Github size={24} />
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal delay={0.2}>
            <form
              className="bg-white dark:bg-slate-800 rounded-2xl p-8 md:p-10 shadow-lg dark:shadow-none border border-slate-100 dark:border-slate-700 h-full transition-all duration-300"
              onSubmit={(e) => e.preventDefault()}>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 transition-colors duration-300">
                Send a Message
              </h3>

              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors duration-300">

                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:border-sky-500 dark:focus:border-sky-500 focus:ring-2 focus:ring-sky-200 dark:focus:ring-sky-900/30 outline-none transition-all duration-300"
                    placeholder="John Doe" />

                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors duration-300">

                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:border-sky-500 dark:focus:border-sky-500 focus:ring-2 focus:ring-sky-200 dark:focus:ring-sky-900/30 outline-none transition-all duration-300"
                    placeholder="john@example.com" />

                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors duration-300">

                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:border-sky-500 dark:focus:border-sky-500 focus:ring-2 focus:ring-sky-200 dark:focus:ring-sky-900/30 outline-none transition-all duration-300 resize-none"
                    placeholder="Hello, I'd like to discuss...">
                  </textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-lg shadow-md shadow-sky-500/20 dark:shadow-none transition-all flex items-center justify-center gap-2 mt-2">

                  <Send size={18} /> Send Message
                </button>
              </div>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>);

}