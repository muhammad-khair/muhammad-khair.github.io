'use client'

import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import { FaExternalLinkAlt } from 'react-icons/fa'

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Featured <span className="text-teal-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 rounded" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass rounded-xl overflow-hidden group"
            >
              <div className="aspect-video bg-neutral-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 group-hover:opacity-0 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold text-neutral-700 group-hover:text-teal-500/30 transition-colors">
                    {project.name.charAt(0)}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-teal-400 transition-colors">
                  {project.name}
                </h3>
                <p className="text-neutral-400 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.badges.map((badge) => (
                    <span
                      key={badge.text}
                      className="px-2 py-1 bg-neutral-800 rounded text-xs text-neutral-300"
                    >
                      {badge.text}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.buttons.map((button) => (
                    <a
                      key={button.text}
                      href={button.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-teal-400 hover:text-teal-300 transition-colors"
                    >
                      <FaExternalLinkAlt className="w-3 h-3" />
                      {button.text}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
