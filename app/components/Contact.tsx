'use client'

import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import { FaLinkedin, FaGithub, FaEnvelope, FaPaperPlane } from 'react-icons/fa'

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Get In <span className="text-teal-400">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 rounded" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-2xl p-8 text-center"
        >
          <p className="text-neutral-300 mb-8 max-w-xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of something amazing. Let's build something great together!
          </p>

          <div className="flex items-center justify-center gap-6 mb-8">
            <motion.a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 glass rounded-full hover:bg-teal-500/20 transition-colors"
            >
              <FaLinkedin className="w-6 h-6" />
            </motion.a>
            
            <motion.a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 glass rounded-full hover:bg-teal-500/20 transition-colors"
            >
              <FaGithub className="w-6 h-6" />
            </motion.a>
            
            <motion.a
              href={`mailto:${profile.email}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 glass rounded-full hover:bg-teal-500/20 transition-colors"
            >
              <FaEnvelope className="w-6 h-6" />
            </motion.a>
          </div>

          <motion.a
            href={`mailto:${profile.email}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full font-semibold text-neutral-950 hover:opacity-90 transition-opacity"
          >
            <FaPaperPlane />
            Send Me a Message
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
