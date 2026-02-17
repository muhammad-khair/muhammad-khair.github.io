'use client'

import { useState, useEffect } from 'react'
import { DndContext, closestCenter, DragEndEvent } from '@dnd-kit/core'
import { SortableContext, horizontalListSortingStrategy, arrayMove } from '@dnd-kit/sortable'
import ActivityBar from './ActivityBar'
import SideBar from './SideBar'
import TabsBar from './TabsBar'
import StatusBar from './StatusBar'
import Terminal from './Terminal'
import { Tab, fileTabs } from './tabs/types'
import WelcomeTab from './tabs/WelcomeTab'
import AboutTab from './tabs/AboutTab'
import ExperienceTab from './tabs/ExperienceTab'
import ProjectsTab from './tabs/ProjectsTab'
import ContactTab from './tabs/ContactTab'

const tabComponents: Record<string, React.ComponentType<any>> = {
  welcome: WelcomeTab,
  about: AboutTab,
  experience: ExperienceTab,
  projects: ProjectsTab,
  contact: ContactTab,
}

export default function VSCodeLayout() {
  const [openTabs, setOpenTabs] = useState<Tab[]>([fileTabs[0], fileTabs[1]])
  const [activeTabId, setActiveTabId] = useState('welcome')
  const [sidebarVisible, setSidebarVisible] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const [terminalOpen, setTerminalOpen] = useState(false)
  const [terminalHeight, setTerminalHeight] = useState(180)

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
      if (mobile) {
        setSidebarVisible(false)
      }
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleOpenTab = (tabId: string) => {
    const tab = fileTabs.find(t => t.id === tabId)
    if (!tab) return

    const existingTab = openTabs.find(t => t.id === tabId)
    if (existingTab) {
      setActiveTabId(tabId)
    } else {
      setOpenTabs([...openTabs, tab])
      setActiveTabId(tabId)
    }

    if (isMobile) {
      setSidebarVisible(false)
    }
  }

  const handleCloseTab = (tabId: string) => {
    const tabIndex = openTabs.findIndex(t => t.id === tabId)
    const newTabs = openTabs.filter(t => t.id !== tabId)

    if (newTabs.length === 0) {
      setOpenTabs([fileTabs[0]])
      setActiveTabId('welcome')
      return
    }

    if (activeTabId === tabId) {
      const newActiveIndex = tabIndex === newTabs.length ? tabIndex - 1 : tabIndex
      setActiveTabId(newTabs[newActiveIndex].id)
    }

    setOpenTabs(newTabs)
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    if (!over || active.id === over.id) return

    const oldIndex = openTabs.findIndex(t => t.id === active.id)
    const newIndex = openTabs.findIndex(t => t.id === over.id)
    setOpenTabs(arrayMove(openTabs, oldIndex, newIndex))
  }

  const ActiveComponent = tabComponents[activeTabId] || WelcomeTab

  return (
    <DndContext id="tabs-dnd" collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <div className="h-screen flex flex-col bg-vscode-bg">
        <div className="flex flex-1 overflow-hidden">
          {/* Activity Bar */}
          <ActivityBar
            onToggleSidebar={() => setSidebarVisible(!sidebarVisible)}
            sidebarVisible={sidebarVisible}
            onOpenTab={handleOpenTab}
            terminalOpen={terminalOpen}
            onToggleTerminal={() => setTerminalOpen(!terminalOpen)}
          />

          {/* SideBar */}
          {sidebarVisible && (
            <SideBar
              onOpenTab={handleOpenTab}
              isMobile={isMobile}
              onClose={isMobile ? () => setSidebarVisible(false) : undefined}
            />
          )}

          {/* Main Editor Area */}
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Tabs */}
            <SortableContext items={openTabs.map(t => t.id)} strategy={horizontalListSortingStrategy}>
              <TabsBar
                tabs={openTabs}
                activeTabId={activeTabId}
                onTabClick={setActiveTabId}
                onTabClose={handleCloseTab}
              />
            </SortableContext>

            {/* Editor Content */}
            <div className="flex-1 overflow-hidden relative">
              <div className="absolute inset-0 overflow-auto">
                <ActiveComponent onOpenTab={handleOpenTab} />
              </div>
            </div>

            {/* Terminal */}
            {terminalOpen && (
              <Terminal
                height={terminalHeight}
                onClose={() => setTerminalOpen(false)}
                onResize={(delta) => setTerminalHeight(prev => Math.max(100, Math.min(400, prev + delta)))}
              />
            )}
          </div>
        </div>

        {/* Status Bar */}
        <StatusBar
          terminalOpen={terminalOpen}
          onToggleTerminal={() => setTerminalOpen(!terminalOpen)}
          activeTab={openTabs.find(t => t.id === activeTabId)}
        />
      </div>
    </DndContext>
  )
}
