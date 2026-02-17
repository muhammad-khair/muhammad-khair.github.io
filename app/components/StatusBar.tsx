'use client'

import { FaCodeBranch, FaGithub, FaCheck, FaTimes, FaAngleUp } from 'react-icons/fa'
import { Tab } from './tabs/types'

interface StatusBarProps {
  terminalOpen: boolean
  onToggleTerminal: () => void
  activeTab?: Tab
}

export default function StatusBar({ terminalOpen, onToggleTerminal, activeTab }: StatusBarProps) {
  return (
    <div className="h-6 bg-vscode-status flex items-center justify-between text-xs px-3 text-white">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        <button 
          onClick={onToggleTerminal}
          className={`flex items-center gap-1.5 hover:bg-white/20 px-2 py-0.5 rounded ${terminalOpen ? 'bg-white/20' : ''}`}
        >
          <FaAngleUp className={`w-2.5 h-2.5 transition-transform ${terminalOpen ? 'rotate-180' : ''}`} />
          <span>Terminal</span>
        </button>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2 md:gap-4">
        <span className="hidden md:flex items-center gap-1.5 hover:bg-white/20 px-2 py-0.5 rounded cursor-pointer">
          <FaCodeBranch className="w-3 h-3" />
          <span>main</span>
        </span>
        <span className="hidden md:flex items-center gap-1.5 hover:bg-white/20 px-2 py-0.5 rounded cursor-pointer">
          <FaGithub className="w-3 h-3" />
          <span>0↓ 0↑</span>
        </span>
        <span className="hidden md:flex items-center gap-1.5">
          <FaCheck className="w-3 h-3 text-green-400" />
          <span>0</span>
          <FaTimes className="w-3 h-3 text-red-400" />
        </span>
        <span className="hover:bg-white/20 px-2 py-0.5 rounded cursor-pointer">
          {activeTab?.label || 'main'} • Ln 1, Col 1
        </span>
      </div>
    </div>
  )
}
