'use client'

import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import { projects } from '../../data/projects'

export default function ProjectsTab() {
  return (
    <div className="h-full overflow-auto p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-2 mb-6">
          <span className="text-vscode-textMuted">#</span>
          <h1 className="text-xl font-bold text-vscode-yellow">projects</h1>
        </div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-4 bg-vscode-sidebar border border-vscode-border rounded-lg hover:border-vscode-blue transition-colors"
            >
              <h3 className="font-semibold text-vscode-text text-lg mb-3">
                {project.name}
              </h3>
              
              {project.image && (
                <div className="mb-3">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-auto aspect-video object-contain rounded"
                  />
                </div>
              )}
              
              <p className="text-sm text-vscode-textMuted mb-3">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-3">
                {project.badges.map((badge) => (
                  <span
                    key={badge.text}
                    className="px-2 py-1 bg-vscode-bg border border-vscode-border rounded text-xs text-vscode-green"
                  >
                    {badge.text}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                {project.buttons.map((button) => (
                  <a
                    key={button.text}
                    href={button.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-vscode-blue hover:text-vscode-text transition-colors"
                  >
                    <FaExternalLinkAlt className="w-3 h-3" />
                    {button.text}
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
