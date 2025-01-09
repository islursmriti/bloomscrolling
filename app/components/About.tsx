'use client'

import { useState, useEffect,useRef  } from 'react'
import { motion, useAnimation, useTransform, useScroll } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8])
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], ['20%', '0%', '0%', '-20%'])
  return (
    <motion.section
          ref={sectionRef}
          id='about'
      className="relative min-h-screen py-20 flex items-center justify-center overflow-hidden"
      style={{ opacity, scale, y }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div 
            className="lg:w-1/2 mb-10 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src="https://s3-file-uploader-using-react.s3.ap-south-1.amazonaws.com/data/fc4f51c1-c531-4659-b15a-50eceaf9903a.webp"
              alt="Bloom Scrolling Illustration"
              width={400}
              height={200}
            
              className="rounded-lg shadow-lg lg:ml-20 transition-transform transform hover:scale-110"
            />
          </motion.div>
          <motion.div 
            className="lg:w-1/2 lg:pl-5 text-indigo-900"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">About Bloom</h2>
            <p className="text-xl text-gray-600 mb-6">
              Bloom is on a mission to transform social media into a force for good.
            </p>
             <p className="text-xl text-gray-600">
              We believe in fostering meaningful connections, promoting positive content, and enhancing digital well-being.
            </p>
            {/* <p className="text-xl text-gray-600">
              Our platform is designed to encourage mindful engagement, build supportive communities, and provide tools for a healthier online experience.
            </p> */}
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
