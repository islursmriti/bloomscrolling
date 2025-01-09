'use client'

import { motion, MotionValue, useTransform } from 'framer-motion'
// import About from './About'
import Link from 'next/link'

const flowerVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: { 
    scale: 1, 
    rotate: 0, 
    transition: { 
      type: 'spring', 
      stiffness: 100, 
      damping: 10,
      staggerChildren: 0.1
    } 
  }
}

const petalVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 100 } }
}

interface HeroProps {
  scrollYProgress: MotionValue<number>
}

export default function Hero({ scrollYProgress }: HeroProps) {
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8])
  const y = useTransform(scrollYProgress, [0, 0.2], ['0%', '-50%'])
const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const about = document.getElementById('about')
    about?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.section 
      className="h-screen flex flex-col items-center justify-center relative overflow-hidden"
      style={{ opacity, scale, y }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-6xl font-bold text-indigo-800 mb-4 z-10"
      >
        Welcome to <span className='text-6xl font-bold mb-4 z-10 
        bg-clip-text text-transparent bg-gradient-to-r 
        from-indigo-600 via-rose-500 to-pink-500 
        animate-gradient-move bg-[length:200%_200%]'> 
        <Link href="#about" onClick={handleClick}>
              Bloom
            </Link>
          </span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="text-xl text-indigo-600 mb-8 z-10"
      >
        Reinventing social media for good
      </motion.p>
      <motion.div
        variants={flowerVariants}
        initial="hidden"
        animate="visible"
        className="absolute"
      >
        {[...Array(8)].map((_, index) => (
          <motion.div
            key={index}
            variants={petalVariants}
            className="absolute w-20 h-40 bg-pink-300 rounded-full origin-bottom"
            style={{
              rotate: `${index * 45}deg`,
              transformOrigin: 'bottom center',
            }}
          />
        ))}
        <motion.div
          variants={petalVariants}
          className="relative w-20 h-20 bg-yellow-300 rounded-full"
        />
      </motion.div>
    </motion.section>
  )
}

