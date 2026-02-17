'use client'

import { 
  FaChevronRight, FaFileCode, FaUser, FaBriefcase, 
  FaCode, FaEnvelope, FaFolder, FaFolderOpen, FaTimes
} from 'react-icons/fa'
import { useState } from 'react'
import { fileTabs } from './tabs/types'

interface SideBarProps {
  onOpenTab: (tabId: string) => void
  isMobile?: boolean
  onClose?: () => void
}

export default function SideBar({ onOpenTab, isMobile, onClose }: SideBarProps) {
  const [expanded, setExpanded] = useState(true)

  const files = [
    { id: 'welcome', label: 'welcome.md', icon: <FaFileCode className="w-3 h-3 text-vscode-blue" /> },
    { id: 'about', label: 'about.md', icon: <FaUser className="w-3 h-3 text-vscode-blue" /> },
    { id: 'experience', label: 'experience.md', icon: <FaBriefcase className="w-3 h-3 text-vscode-blue" /> },
    { id: 'projects', label: 'projects.md', icon: <FaCode className="w-3 h-3 text-vscode-blue" /> },
    { id: 'contact', label: 'contact.md', icon: <FaEnvelope className="w-3 h-3 text-vscode-blue" /> },
  ]

  return (
    <div className={`${isMobile ? 'fixed inset-0 z-50 w-64' : ''} w-56 bg-vscode-sidebar flex flex-col border-r border-vscode-border`}>
      {/* Explorer Header */}
      <div className="flex items-center justify-between px-3 py-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-vscode-textMuted">
          Explorer
        </span>
        {isMobile && onClose && (
          <button
            onClick={onClose}
            className="p-1 text-vscode-textMuted hover:text-vscode-text hover:bg-vscode-hover rounded"
          >
            <FaTimes className="w-3 h-3" />
          </button>
        )}
      </div>
      
      {/* Portfolio Folder */}
      <div>
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full px-3 py-1 flex items-center gap-2 text-sm hover:bg-vscode-hover transition-colors"
        >
          <FaChevronRight 
            className={`w-3 h-3 transition-transform ${expanded ? 'rotate-90' : ''}`} 
          />
          {expanded ? (
            <FaFolderOpen className="w-4 h-4 text-vscode-yellow" />
          ) : (
            <FaFolder className="w-4 h-4 text-vscode-yellow" />
          )}
          <span>PORTFOLIO</span>
        </button>

        {expanded && (
          <div className="ml-2">
            {files.map((file) => (
              <button
                key={file.id}
                onClick={() => onOpenTab(file.id)}
                className="w-full px-6 py-1 flex items-center gap-2 text-sm text-vscode-text hover:bg-vscode-hover transition-colors"
              >
                {file.icon}
                <span>{file.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
