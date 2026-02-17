'use client'

import { useState } from 'react'
import { 
  FaHome, FaUser, FaBriefcase, FaCode, FaEnvelope, 
  FaBars, FaTimes, FaGithub, FaLinkedin 
} from 'react-icons/fa'

interface ActivityBarProps {
  onToggleSidebar: () => void
  sidebarVisible: boolean
  onOpenTab?: (tabId: string) => void
}

export default function ActivityBar({ onToggleSidebar, sidebarVisible, onOpenTab }: ActivityBarProps) {
  return (
    <div className="w-12 bg-vscode-activity flex flex-col items-center py-2 border-r border-vscode-border">
      {/* Sidebar Toggle */}
      <button
        onClick={onToggleSidebar}
        className="p-2 text-vscode-textMuted hover:text-vscode-text hover:bg-vscode-hover rounded transition-colors mb-4"
        title={sidebarVisible ? 'Close Sidebar' : 'Open Sidebar'}
      >
        {sidebarVisible ? <FaTimes className="w-4 h-4" /> : <FaBars className="w-4 h-4" />}
      </button>

      <div className="flex-1 flex flex-col gap-1">
        <button
          onClick={() => onOpenTab?.('welcome')}
          className="p-2 text-vscode-textMuted hover:text-vscode-text hover:bg-vscode-hover rounded transition-colors"
          title="Welcome"
        >
          <FaHome className="w-4 h-4" />
        </button>
        <button
          onClick={() => onOpenTab?.('about')}
          className="p-2 text-vscode-textMuted hover:text-vscode-text hover:bg-vscode-hover rounded transition-colors"
          title="About"
        >
          <FaUser className="w-4 h-4" />
        </button>
        <button
          onClick={() => onOpenTab?.('experience')}
          className="p-2 text-vscode-textMuted hover:text-vscode-text hover:bg-vscode-hover rounded transition-colors"
          title="Experience"
        >
          <FaBriefcase className="w-4 h-4" />
        </button>
        <button
          onClick={() => onOpenTab?.('projects')}
          className="p-2 text-vscode-textMuted hover:text-vscode-text hover:bg-vscode-hover rounded transition-colors"
          title="Projects"
        >
          <FaCode className="w-4 h-4" />
        </button>
        <button
          onClick={() => onOpenTab?.('contact')}
          className="p-2 text-vscode-textMuted hover:text-vscode-text hover:bg-vscode-hover rounded transition-colors"
          title="Contact"
        >
          <FaEnvelope className="w-4 h-4" />
        </button>
      </div>

      {/* Bottom Icons */}
      <div className="flex flex-col gap-1 mt-auto">
        <a
          href="https://github.com/muhammad-khair"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-vscode-textMuted hover:text-vscode-text hover:bg-vscode-hover rounded transition-colors"
          title="GitHub"
        >
          <FaGithub className="w-4 h-4" />
        </a>
        <a
          href="https://www.linkedin.com/in/muhammadkhair-binabdulrashid/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-vscode-textMuted hover:text-vscode-text hover:bg-vscode-hover rounded transition-colors"
          title="LinkedIn"
        >
          <FaLinkedin className="w-4 h-4" />
        </a>
      </div>
    </div>
  )
}
