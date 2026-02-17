import { ReactNode } from 'react'

export interface Tab {
  id: string
  label: string
  icon: ReactNode
  component?: React.ComponentType
}

export const fileTabs: Tab[] = [
  {
    id: 'welcome',
    label: 'welcome.md',
    icon: <span className="text-vscode-blue">📄</span>,
  },
  {
    id: 'about',
    label: 'about.md',
    icon: <span className="text-vscode-blue">📄</span>,
  },
  {
    id: 'experience',
    label: 'experience.md',
    icon: <span className="text-vscode-blue">📄</span>,
  },
  {
    id: 'projects',
    label: 'projects.md',
    icon: <span className="text-vscode-blue">📄</span>,
  },
  {
    id: 'contact',
    label: 'contact.md',
    icon: <span className="text-vscode-blue">📄</span>,
  },
]
