'use client'

import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { FaTimes, FaFileCode, FaGripLines } from 'react-icons/fa'
import { Tab } from './tabs/types'

interface TabsBarProps {
  tabs: Tab[]
  activeTabId: string
  onTabClick: (tabId: string) => void
  onTabClose: (tabId: string) => void
}

function SortableTab({ 
  tab, 
  isActive, 
  onClick, 
  onClose 
}: { 
  tab: Tab
  isActive: boolean
  onClick: () => void
  onClose: () => void
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: tab.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation()
    e.preventDefault()
    onClose()
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`
        flex items-center gap-1 px-2 py-2 cursor-pointer select-none border-r border-vscode-border group
        ${isDragging ? 'opacity-50' : ''}
        ${isActive 
          ? 'bg-vscode-tab-active text-vscode-text border-t-2 border-t-vscode-blue' 
          : 'bg-vscode-tab-inactive text-vscode-textMuted hover:bg-vscode-hover'
        }
      `}
    >
      <span
        {...attributes}
        {...listeners}
        className="cursor-grab active:cursor-grabbing p-1 hover:bg-vscode-hover rounded"
        onClick={(e) => {
          e.stopPropagation()
        }}
      >
        <FaGripLines className="w-3 h-3 text-vscode-textMuted" />
      </span>
      <FaFileCode className="w-3 h-3 text-vscode-blue ml-1" />
      <span 
        className="text-sm flex-1 px-1"
        onClick={onClick}
      >
        {tab.label}
      </span>
      <button
        onClick={handleClose}
        className="p-1 rounded hover:bg-vscode-hover opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <FaTimes className="w-3 h-3" />
      </button>
    </div>
  )
}

export default function TabsBar({ tabs, activeTabId, onTabClick, onTabClose }: TabsBarProps) {
  return (
    <div className="flex bg-vscode-tab-inactive border-b border-vscode-border overflow-x-auto">
      {tabs.map((tab) => (
        <SortableTab
          key={tab.id}
          tab={tab}
          isActive={tab.id === activeTabId}
          onClick={() => onTabClick(tab.id)}
          onClose={() => onTabClose(tab.id)}
        />
      ))}
    </div>
  )
}
