'use client'

import { useState, useEffect } from 'react'
import { FaTerminal, FaTimes, FaMinus, FaAngleDown } from 'react-icons/fa'

interface TerminalProps {
  height: number
  onClose: () => void
  onResize: (delta: number) => void
}

const terminalLines = [
  { text: 'Welcome to the integrated terminal.', color: 'text-vscode-textMuted' },
  { text: '', color: '' },
  { text: '$ echo "Hello, World!"', color: 'text-vscode-text' },
  { text: 'Hello, World!', color: 'text-vscode-green' },
  { text: '', color: '' },
  { text: '$ whoami', color: 'text-vscode-text' },
  { text: 'muhammad-khair', color: 'text-vscode-blue' },
]

export default function Terminal({ height, onClose, onResize }: TerminalProps) {
  const [displayedLines, setDisplayedLines] = useState<typeof terminalLines>([])
  const [currentLine, setCurrentLine] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isMinimized, setIsMinimized] = useState(false)

  useEffect(() => {
    if (currentLine >= terminalLines.length) return

    const line = terminalLines[currentLine]
    if (!line.text) {
      setDisplayedLines(prev => [...prev, line])
      setCurrentLine(prev => prev + 1)
      return
    }

    const timeout = setTimeout(() => {
      if (charIndex < line.text.length) {
        setCharIndex(prev => prev + 1)
      } else {
        setCurrentLine(prev => prev + 1)
        setCharIndex(0)
      }
    }, 20)

    return () => clearTimeout(timeout)
  }, [currentLine, charIndex])

  useEffect(() => {
    const currentFullLines = terminalLines.slice(0, currentLine)
    const currentLineText = terminalLines[currentLine]?.text?.slice(0, charIndex) || ''

    setDisplayedLines([
      ...currentFullLines,
      { ...terminalLines[currentLine], text: currentLineText }
    ])
  }, [currentLine, charIndex])

  if (isMinimized) {
    return (
      <div className="h-8 bg-vscode-sidebar border-t border-vscode-border flex items-center px-2">
        <button
          onClick={() => setIsMinimized(false)}
          className="flex items-center gap-2 text-xs text-vscode-textMuted hover:text-vscode-text"
        >
          <FaAngleDown className="w-3 h-3" />
          Terminal
        </button>
      </div>
    )
  }

  return (
    <div
      className="bg-vscode-sidebar border-t border-vscode-border flex flex-col"
      style={{ height: `${height}px` }}
    >
      {/* Terminal Header */}
      <div className="h-8 bg-vscode-activity flex items-center justify-between px-3 border-b border-vscode-border">
        <div className="flex items-center gap-2">
          <FaTerminal className="w-3 h-3" />
          <span className="text-xs text-vscode-textMuted">Terminal</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsMinimized(true)}
            className="text-vscode-textMuted hover:text-vscode-text"
          >
            <FaMinus className="w-3 h-3" />
          </button>
          <button
            onClick={onClose}
            className="text-vscode-textMuted hover:text-vscode-text"
          >
            <FaTimes className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Terminal Content */}
      <div className="flex-1 overflow-auto p-3 font-mono text-sm">
        {displayedLines.map((line, index) => (
          <div key={index} className={line.color || 'text-vscode-text'}>
            {line.text || '\u00A0'}
          </div>
        ))}
        <div className="flex items-center gap-1">
          <span className="text-vscode-green">$</span>
          <span className="w-2 h-4 bg-vscode-text animate-blink" />
        </div>
      </div>
    </div>
  )
}
