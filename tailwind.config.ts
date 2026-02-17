import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        vscode: {
          bg: '#1e1e1e',
          sidebar: '#252526',
          activity: '#333333',
          status: '#007acc',
          tab: {
            active: '#1e1e1e',
            inactive: '#2d2d2d',
          },
          border: '#3c3c3c',
          text: '#cccccc',
          textMuted: '#858585',
          hover: '#2a2d2e',
          blue: '#007acc',
          green: '#4ec9b0',
          yellow: '#dcdcaa',
          orange: '#ce9178',
          purple: '#c586c0',
          red: '#f14c4c',
          teal: '#14b8a6',
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'Monaco', 'monospace'],
      },
    },
  },
  plugins: [],
}
export default config
