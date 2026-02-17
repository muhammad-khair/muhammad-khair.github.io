'use client'

import { motion } from 'framer-motion'
import { profile } from '../../data/profile'

export default function AboutTab() {
  return (
    <div className="h-full overflow-auto p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-2 mb-6">
          <span className="text-vscode-textMuted">#</span>
          <h1 className="text-xl font-bold text-vscode-yellow">about</h1>
        </div>

        {/* Kotlin Data Class Code Block */}
        <div className="mb-6 rounded-lg overflow-hidden border border-vscode-border">
          {/* Cell header */}
          <div className="flex items-center justify-between px-3 py-1 bg-vscode-activity border-b border-vscode-border">
            <div className="flex items-center gap-2">
              <span className="text-xs text-vscode-textMuted">In [1]:</span>
            </div>
            <span className="text-xs text-vscode-textMuted">Kotlin</span>
          </div>

          {/* Code content */}
          <div className="bg-vscode-sidebar p-4">
            <pre className="text-sm font-mono leading-relaxed">
              <code>
                <span className="text-yellow-400">data class </span>
                <span className="text-blue-400">AboutMe </span>
                <span className="text-yellow-400">(</span>
                <br />
                {'    '}<span className="text-blue-400">val name</span>
                <span className="text-yellow-400">:</span>{' '}
                <span className="text-orange-400">String</span>{' '}
                <span className="text-yellow-400">=</span>{' '}
                <span className="text-green-400">"{profile.name}"</span>
                <span className="text-yellow-400">,</span>
                <br />
                {'    '}<span className="text-blue-400">val role</span>
                <span className="text-yellow-400">:</span>{' '}
                <span className="text-orange-400">String</span>{' '}
                <span className="text-yellow-400">=</span>{' '}
                <span className="text-green-400">"{profile.headerRole}"</span>
                <span className="text-yellow-400">,</span>
                <br />
                {'    '}<span className="text-blue-400">val location</span>
                <span className="text-yellow-400">:</span>{' '}
                <span className="text-orange-400">String</span>{' '}
                <span className="text-yellow-400">=</span>{' '}
                <span className="text-green-400">"Singapore"</span>
                <span className="text-yellow-400">,</span>
                <br />
                <span className="text-yellow-400">)</span>
              </code>
            </pre>
          </div>

          {/* Cell output indicator */}
          <div className="flex items-center gap-2 px-3 py-1 bg-vscode-activity border-t border-vscode-border">
            <span className="text-xs text-vscode-textMuted">Out[1]:</span>
            <span className="text-xs text-green-400">kotlin.DataClass(aboutMe=...)</span>
          </div>
        </div>

        {/* Bio Section */}
        <div className="mt-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs text-vscode-textMuted">In [2]:</span>
          </div>
          <div className="bg-vscode-sidebar p-4 rounded-lg border border-vscode-border overflow-hidden">
            <pre className="text-sm font-mono whitespace-pre-wrap break-words">
              <code className="text-vscode-text">
                {profile.about}
              </code>
            </pre>
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs text-vscode-textMuted">In [3]:</span>
          </div>
          <div className="space-y-4">
            {profile.education.map((edu, eduIndex) => (
              <div key={eduIndex} className="bg-vscode-sidebar p-4 rounded-lg border border-vscode-border">
                {/* Institution header */}
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-blue-400">{edu.institution}</h3>
                    <p className="text-sm text-vscode-text">{edu.degree}</p>
                  </div>
                  <span className="text-xs text-vscode-textMuted">{edu.duration}</span>
                </div>

                {/* Description */}
                <p className="text-sm text-vscode-textMuted mb-3">
                  {edu.description}
                </p>

                {/* Achievements as bullet points */}
                <div className="space-y-1">
                  {edu.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-start gap-2">
                      <span className="text-yellow-400">•</span>
                      <span className="text-sm text-vscode-text">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs text-vscode-textMuted">In [4]:</span>
          </div>
          
          {/* Languages */}
          <div className="mb-4">
            <p className="text-xs text-vscode-textMuted mb-2">// Languages</p>
            <div className="flex flex-wrap gap-2">
              {profile.skills.filter(s => s.type === 'language').map((skill, index) => (
                <motion.span
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="px-3 py-1 bg-vscode-bg border border-vscode-border rounded text-xs text-orange-400"
                >
                  {skill.name}
                </motion.span>
              ))}
            </div>
          </div>
          
          {/* Databases */}
          <div className="mb-4">
            <p className="text-xs text-vscode-textMuted mb-2">// Databases</p>
            <div className="flex flex-wrap gap-2">
              {profile.skills.filter(s => s.type === 'database').map((skill, index) => (
                <motion.span
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="px-3 py-1 bg-vscode-bg border border-vscode-border rounded text-xs text-green-400"
                >
                  {skill.name}
                </motion.span>
              ))}
            </div>
          </div>
          
          {/* Infrastructure */}
          <div>
            <p className="text-xs text-vscode-textMuted mb-2">// Infrastructure</p>
            <div className="flex flex-wrap gap-2">
              {profile.skills.filter(s => s.type === 'infrastructure').map((skill, index) => (
                <motion.span
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="px-3 py-1 bg-vscode-bg border border-vscode-border rounded text-xs text-blue-400"
                >
                  {skill.name}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
