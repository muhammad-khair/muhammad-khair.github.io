import { profile } from '../data/profile'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-6 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-neutral-500">
          © {currentYear} {profile.name}. All rights reserved.
        </div>
        
        <div className="flex items-center gap-2 text-sm text-neutral-500">
          <span>Built with</span>
          <span className="text-teal-400">Next.js</span>
          <span>•</span>
          <span className="text-teal-400">Tailwind</span>
          <span>•</span>
          <span className="text-teal-400">Framer Motion</span>
        </div>
      </div>
    </footer>
  )
}
