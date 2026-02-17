'use client'

import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import { profile } from '../../data/profile'

export default function ContactTab() {
  return (
    <div className="h-full overflow-auto p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-2 mb-6">
          <span className="text-vscode-textMuted">#</span>
          <h1 className="text-xl font-bold text-vscode-yellow">contact</h1>
        </div>

        {/* Contact Info Code Block */}
        <div className="mb-6 rounded-lg overflow-hidden border border-vscode-border">
          <div className="flex items-center justify-between px-3 py-1 bg-vscode-activity border-b border-vscode-border">
            <div className="flex items-center gap-2">
              <span className="text-xs text-vscode-textMuted">In [1]:</span>
            </div>
            <span className="text-xs text-vscode-textMuted">Kotlin</span>
          </div>
          
          <div className="bg-vscode-sidebar p-4 overflow-x-auto">
            <pre className="text-sm font-mono leading-relaxed">
              <code>
                <span className="text-yellow-400">data class</span>{' '}
                <span className="text-blue-400">ContactInfo</span>{' '}
                <span className="text-yellow-400">(</span>
                <br />
                {'    '}<span className="text-blue-400">val email</span>
                <span className="text-yellow-400">:</span>{' '}
                <span className="text-orange-400">String</span>{' '}
                <span className="text-yellow-400">=</span>{' '}
                <span className="text-green-400">"{profile.email}"</span>
                <span className="text-yellow-400">,</span>
                <br />
                {'    '}<span className="text-blue-400">val linkedin</span>
                <span className="text-yellow-400">:</span>{' '}
                <span className="text-orange-400">String</span>{' '}
                <span className="text-yellow-400">=</span>{' '}
                <span className="text-green-400">"linkedin.com/in/..."</span>
                <span className="text-yellow-400">,</span>
                <br />
                {'    '}<span className="text-blue-400">val github</span>
                <span className="text-yellow-400">:</span>{' '}
                <span className="text-orange-400">String</span>{' '}
                <span className="text-yellow-400">=</span>{' '}
                <span className="text-green-400">"github.com/muhammad-khair"</span>
                <br />
                <span className="text-yellow-400">)</span>
              </code>
            </pre>
          </div>
          
          <div className="flex items-center gap-2 px-3 py-1 bg-vscode-activity border-t border-vscode-border">
            <span className="text-xs text-vscode-textMuted">Out[1]:</span>
            <span className="text-xs text-green-400">kotlin.DataClass(contactInfo=...)</span>
          </div>
        </div>

        {/* Social Links - now In [2] */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs text-vscode-textMuted">In [2]:</span>
          </div>
          <div className="bg-vscode-sidebar p-4 rounded-lg border border-vscode-border">
            <div className="flex flex-wrap gap-4">
              <motion.a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-vscode-bg border border-vscode-border rounded hover:border-vscode-blue transition-colors"
              >
                <FaLinkedin className="w-4 h-4 text-vscode-blue" />
                <span className="text-sm">LinkedIn</span>
              </motion.a>

              <motion.a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-vscode-bg border border-vscode-border rounded hover:border-vscode-blue transition-colors"
              >
                <FaGithub className="w-4 h-4" />
                <span className="text-sm">GitHub</span>
              </motion.a>

              <motion.a
                href={`mailto:${profile.email}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-vscode-bg border border-vscode-border rounded hover:border-vscode-blue transition-colors"
              >
                <FaEnvelope className="w-4 h-4 text-vscode-orange" />
                <span className="text-sm">Email</span>
              </motion.a>
            </div>
          </div>
        </div>

        {/* Quick Actions - now In [3] */}
        <div className="mt-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs text-vscode-textMuted">In [3]:</span>
          </div>
          <div className="bg-vscode-sidebar p-4 rounded-lg border border-vscode-border">
            <pre className="text-sm font-mono">
              <code>
                <span className="text-purple-400">fun</span>{' '}
                <span className="text-blue-400">connect</span>
                <span className="text-yellow-400">() {'{'}</span>
                <br />
                {'    '}<span className="text-vscode-text">sendEmail</span>
                <span className="text-yellow-400">(</span>
                <span className="text-green-400">"Hello!"</span>
                <span className="text-yellow-400">)</span>
                <br />
                <span className="text-yellow-400">{'}'}</span>
              </code>
            </pre>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
