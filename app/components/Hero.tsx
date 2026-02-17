'use client'

import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-900/20 via-neutral-950 to-neutral-950" />
      
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center z-10 px-6"
      >
        <motion.p variants={itemVariants} className="text-teal-400 text-lg mb-4 font-mono">
          {'>'} Hello, World!
        </motion.p>
        
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold font-display mb-4"
        >
          {profile.headerName.split(',')[0]}{' '}
          <span className="text-gradient">{profile.headerRole}</span>
        </motion.h1>
        
        <motion.p
          variants={itemVariants}
          className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto mb-8"
        >
          {profile.headerDesc}
        </motion.p>
        
        <motion.div variants={itemVariants} className="flex items-center justify-center gap-4">
          <motion.a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 glass rounded-full hover:bg-teal-500/20 transition-colors"
          >
            <FaLinkedin className="w-5 h-5" />
          </motion.a>
          
          <motion.a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 glass rounded-full hover:bg-teal-500/20 transition-colors"
          >
            <FaGithub className="w-5 h-5" />
          </motion.a>
          
          <motion.a
            href={`mailto:${profile.email}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 glass rounded-full hover:bg-teal-500/20 transition-colors"
          >
            <FaEnvelope className="w-5 h-5" />
          </motion.a>
        </motion.div>
        
        <motion.div variants={itemVariants} className="mt-12">
          <a
            href="#about"
            className="inline-flex items-center gap-2 text-neutral-500 hover:text-teal-400 transition-colors"
          >
            <span className="text-sm font-mono">Scroll to explore</span>
            <motion.span
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-xl"
            >
              ↓
            </motion.span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
