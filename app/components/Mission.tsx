'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Mission() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])

  return (
    <section ref={containerRef} className="py-20 bg-indigo-900 text-white">
      <motion.div
        style={{ scale, opacity }}
        className="container mx-auto px-4 text-center"
      >
        <h2 className="text-4xl font-bold mb-8">Our Mission</h2>
        <p className="text-xl max-w-3xl mx-auto">
          At Bloom, we're on a mission to transform social media into a force for good. 
          We believe in the power of technology to connect people, share knowledge, and 
          inspire positive change. By reimagining the social media experience, we aim to 
          create a platform that nurtures well-being, fosters genuine connections, and 
          empowers users to make a meaningful impact in their lives and communities.
        </p>
      </motion.div>
    </section>
  )
}

