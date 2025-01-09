'use client'

import { motion } from 'framer-motion'

export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8"
        >
          Join the Bloom Revolution
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl mb-12 max-w-2xl mx-auto"
        >
          Be part of the movement to create a more positive and empowering social media experience. 
          Whether you're an investor, partner, or future user, we invite you to join us in shaping 
          the future of digital interaction.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <a
            href="/invest"
            className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-indigo-100 transition duration-300"
          >
            Invest in Bloom
          </a>
          <a
            href="/partner"
            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-white hover:text-indigo-600 transition duration-300"
          >
            Join Our Mission
          </a>
        </motion.div>
      </div>
    </section>
  )
}

