'use client'

import { motion } from 'framer-motion'
import { experiences } from '../data/experience'
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa'

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Work <span className="text-teal-400">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 rounded" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-teal-500/50 via-teal-500/20 to-transparent md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className={`flex-1 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                <div className="glass rounded-xl p-6 glass-hover">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-teal-500/20 rounded-lg flex items-center justify-center">
                      <FaBriefcase className="text-teal-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{exp.position}</h3>
                      <p className="text-teal-400">{exp.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-neutral-500 mb-4">
                    <FaCalendarAlt className="w-4 h-4" />
                    {exp.duration}
                  </div>
                  
                  <p className="text-neutral-300 mb-4">{exp.description}</p>
                  
                  <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    {exp.badges.map((badge) => (
                      <span
                        key={badge.name}
                        className="px-2 py-1 bg-neutral-800 rounded text-xs text-neutral-300"
                      >
                        {badge.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="absolute left-0 md:left-1/2 w-3 h-3 bg-teal-500 rounded-full -translate-x-1/2 mt-6 ring-4 ring-neutral-950" />
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
