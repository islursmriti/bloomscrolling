'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Hero from './components/Hero'
import DoomscrollTransformation from './components/DoomscrollTransformation'
import Features from './components/Features'
import Mission from './components/Mission'
import CallToAction from './components/CallToAction'
import About from './components/About'
import Testimonials from './components/Testimonial'
// import Navigation from './components/Navigation'
export default function Home() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  return (
    <motion.main
      ref={containerRef}
      className="relative bg-gradient-to-b from-indigo-100 to-rose-100 text-gray-900"
    >
{/* <Navigation/> */}
      <Hero scrollYProgress={scrollYProgress} />
      <About/>
      <Features />
      <DoomscrollTransformation />
      {/* <Mission /> */}
      <Testimonials />

      <CallToAction />
    </motion.main>
  )
}

