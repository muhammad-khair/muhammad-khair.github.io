'use client'

import { motion } from 'framer-motion'
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa'
import { experiences } from '../../data/experience'

export default function ExperienceTab() {
  return (
    <div className="h-full overflow-auto p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-2 mb-6">
          <span className="text-vscode-textMuted">#</span>
          <h1 className="text-xl font-bold text-vscode-yellow">experience</h1>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="border-l-2 border-vscode-border pl-4"
            >
              <div className="flex items-start gap-3 mb-2">
                {exp.image ? (
                  <img 
                    src={exp.image} 
                    alt={exp.company}
                    className="w-8 h-8 rounded object-contain bg-white"
                  />
                ) : (
                  <FaBriefcase className="w-4 h-4 text-vscode-blue mt-1" />
                )}
                <div>
                  <h3 className="font-semibold text-vscode-text">
                    {exp.position}
                  </h3>
                  <p className="text-vscode-blue text-sm">{exp.company}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-xs text-vscode-textMuted mb-3 ml-11">
                <FaCalendarAlt className="w-3 h-3" />
                {exp.duration}
              </div>
              
              <p className="text-sm text-vscode-text leading-relaxed ml-11 mb-3">
                {exp.description}
              </p>
              
              <div className="flex flex-wrap gap-2 ml-11">
                {exp.badges.map((badge) => (
                  <span
                    key={badge.name}
                    className="px-2 py-1 bg-vscode-sidebar border border-vscode-border rounded text-xs text-vscode-orange"
                  >
                    {badge.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
