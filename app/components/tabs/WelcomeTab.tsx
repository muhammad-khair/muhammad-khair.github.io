'use client'

import { motion } from 'framer-motion'
import { FaUser, FaBriefcase, FaCode, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

interface WelcomeProps {
  onOpenTab: (tabId: string) => void
}

export default function Welcome({ onOpenTab }: WelcomeProps) {
  const features = [
    {
      icon: <FaUser className="w-5 h-5" />,
      title: 'about.md',
      description: 'Learn more about me and my background',
      action: () => onOpenTab('about'),
    },
    {
      icon: <FaBriefcase className="w-5 h-5" />,
      title: 'experience.md',
      description: 'View my work history and achievements',
      action: () => onOpenTab('experience'),
    },
    {
      icon: <FaCode className="w-5 h-5" />,
      title: 'projects.md',
      description: 'Check out my portfolio of projects',
      action: () => onOpenTab('projects'),
    },
    {
      icon: <FaEnvelope className="w-5 h-5" />,
      title: 'contact.md',
      description: "Let's connect and collaborate",
      action: () => onOpenTab('contact'),
    },
  ]

  return (
    <div className="h-full overflow-auto p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold mb-2">Welcome to My Portfolio</h1>
        <p className="text-vscode-textMuted mb-8">
          Explore my work, experience, and projects
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {features.map((feature, index) => (
            <motion.button
              key={feature.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onClick={feature.action}
              className="flex items-start gap-4 p-4 rounded-lg bg-vscode-sidebar hover:bg-vscode-hover transition-colors text-left group"
            >
              <div className="text-vscode-blue group-hover:text-vscode-green transition-colors">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-semibold text-vscode-blue group-hover:text-vscode-green transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-vscode-textMuted">
                  {feature.description}
                </p>
              </div>
            </motion.button>
          ))}
        </div>

        <div className="border-t border-vscode-border pt-6">
          <h2 className="text-lg font-semibold mb-4">Connect with Me</h2>
          <div className="flex gap-4">
            <a
              href="https://github.com/muhammad-khair"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded bg-vscode-sidebar hover:bg-vscode-hover transition-colors"
            >
              <FaGithub className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/muhammadkhair-binabdulrashid/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded bg-vscode-sidebar hover:bg-vscode-hover transition-colors"
            >
              <FaLinkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="mt-8 text-xs text-vscode-textMuted">
          <p>Tip: Use the sidebar to navigate between files. Drag tabs to reorder them.</p>
        </div>
      </motion.div>
    </div>
  )
}
