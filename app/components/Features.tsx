'use client'

import { useState, useEffect,useRef  } from 'react'
import { motion, useAnimation, useTransform, useScroll } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const features = [
  {
    title: "Mindful Engagement",
    description: "Encourage meaningful interactions and reduce mindless scrolling.",
    icon: "🧠",
  },
  {
    title: "Positive Content Curation",
    description: "Algorithmically promote uplifting and constructive content.",
    icon: "🌟",
  },
  {
    title: "Community Building",
    description: "Foster genuine connections and supportive communities.",
    icon: "🤝",
  },
  {
    title: "Digital Well-being",
    description: "Tools and insights to promote healthy online habits.",
    icon: "🌱",
  },
]

export default function Features() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8])
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], ['20%', '0%', '0%', '-20%'])
  useEffect(() => {
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])
  return (
    <motion.section 
      ref={sectionRef}
      className="relative min-h-screen py-20 bg-gradient-to-b from-yellow-100 to-red-100 flex items-center justify-center overflow-hidden"
      style={{ opacity, scale, y }}
    >
      {/* <div className="absolute inset-0 flex flex-col items-center justify-center"> */}
        {/* <motion.h2
        className="text-4xl absolute inset-0 flex flex-col items-center justify-center font-bold text-center mb-12 transition-transform transform hover:scale-110 z-20"
        // initial={{ opacity: 0, y: -50 }}
        // animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5,scale: { duration: 0.05 } }}
        whileHover={{ scale: 1.05, transition: {  type: 'tween', duration: 0.05 }
  }}
  >

          Our Features
  </motion.h2> */}
        <h2 className="text-4xl font-bold text-center mb-2 z-20 transition-transform transform 
        hover:scale-110 bg-clip-text text-transparent 
        bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500
        animate-gradient-move bg-[length:200%_200%]"> 
Our Features
        </h2>
        {/* <div className="relative w-full h-[500px]"> */}
          <motion.div
        className="absolute w-full h-full flex items-center justify-center"
        style={{
          transformStyle: 'preserve-3d',
          transform: `rotateY(${mousePosition.y / 70}deg) rotateX(${mousePosition.x / 70}deg)`,
        }}
      >

          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              feature={feature} 
              index={index} 
              total={features.length}
               inView={inView}
            mousePosition={mousePosition}
            />
          ))}
      </motion.div>
        {/* </div> */}
      {/* </div> */}
    </motion.section>
  )
}

function FeatureCard({ feature, index, total, inView, mousePosition }) {
  const angle = ((index - 1.5) / total) * Math.PI * 2 - Math.PI / 2
  const radius = 250 // Adjust this value to change the circle size
  const xPos = Math.cos(angle) * radius
  const yPos = Math.sin(angle) * radius
const controls = useAnimation()

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, scale: 1 })
    }
  }, [controls, inView])
  return (
    <motion.div
      // initial={{ opacity: 0, scale: 0.8 }}
      // animate={controls}
      // transition={{ duration: 0.5, delay: index * 0.1 }}
      className="feature-card bg-indigo-50 rounded-lg p-6 shadow-md transition-all hover:scale-105 hover:shadow-lg absolute w-64"
      style={{
        left: `calc(50% + ${xPos}px)`,
        top: `calc(50% + ${yPos}px)`,
        transform: 'translate(-50%, -50%)',
        perspective: '3000px'
      }}
    >
      <div className="text-4xl  transition-transform transform hover:rotate-12 duration-500 mb-4">
        {feature.icon}
      </div>
      <h3 className="text-xl mb-4  transition-transform transform hover:scale-110 font-semibold text-gray-800">
        {feature.title}
      </h3>
      <p className="text-gray-600">
        {feature.description}
      </p>
    </motion.div>
  )
}
