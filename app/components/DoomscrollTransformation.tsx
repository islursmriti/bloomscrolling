// 'use client'

// import { useState, useEffect,useRef  } from 'react'
// import { motion, useAnimation, useTransform, useScroll } from 'framer-motion'
// import { useInView } from 'react-intersection-observer'
// const comparisonData = [
//   {
//     doomscroll: "Endless negativity",
//     bloomscroll: "Curated positivity"
//   },
//   {
//     doomscroll: "Increased anxiety",
//     bloomscroll: "Reduced stress levels"
//   },
//   {
//     doomscroll: "Poor sleep quality",
//     bloomscroll: "Improved sleep patterns"
//   },
//   {
//     doomscroll: "Dry, strained eyes",
//     bloomscroll: "Reduced screen time"
//   },
//   {
//     doomscroll: "Feeling drained",
//     bloomscroll: "Feeling energized"
//   },
//   {
//     doomscroll: "Passive consumption",
//     bloomscroll: "Active engagement"
//   }
// ]

// interface DoomscrollTransformationProps {
//   // s: MotionValue<number>
// }

// export default function DoomscrollTransformation({ s }: DoomscrollTransformationProps) {
//   const sectionRef = useRef<HTMLDivElement>(null)
//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start end", "end start"]
//   })
//   const opacity = useTransform(scrollYProgress, [0.1, 0.2, 0.8, 0.9], [0, 1, 1, 0])
//   const scale = useTransform(scrollYProgress, [0.1, 0.2, 0.8, 0.9], [0.8, 1, 1, 0.8])
//   const y = useTransform(scrollYProgress, [0.1, 0.2], ['10%', '0%'])

//   return (
//     <motion.section 
//     ref={sectionRef}
//       className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-b from-indigo-400 to-gray-900 py-20 text-white"
//       style={{ opacity, scale, y }}
//     >
//       <div className="w-full max-w-6xl mx-auto px-4">
//         <motion.h2 
//           className="text-5xl font-bold mb-12 mt-16 text-center transition-transform transform hover:scale-110"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2, scale: { duration: 0.05 } }}
//           whileHover={{ scale: 1.05, transition: {  type: 'tween', duration: 0.05 }
//  }} // Using Framer Motion's hover scaling in

//         >
//           <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500 animate-gradient-move bg-[length:200%_200%]">
//             Transform Your Scrolling Experience
//           </span>
//         </motion.h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
//           <motion.div 
//             className="bg-red-900 p-6 rounded-lg shadow-lg"
//             initial={{ x: -100, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.5, delay: 0.3 }}
//           >
//             <h3 className="text-3xl transition-transform transition-colors 
//             transform hover:scale-110 font-semibold mb-6 text-red-300 
//             bg-red-900 hover:text-white hover:bg-red-700 p-4 rounded">
//               Doomscrolling
//               </h3>
//             <ul className="space-y-4">
//               {comparisonData.map((item, index) => (
//                 <motion.li
//                   key={`doom-${index}`}
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: index * 0.1 + 0.5 }}
//                   className="flex items-center text-lg text-red-100"
//                 >
//                   <span className="mr-2 text-2xl transition-transform transform hover:scale-110">
//                     ❌</span>
//                   <span className="transition-transform transform hover:scale-110">{item.doomscroll}</span>
//                 </motion.li>
//               ))}
//             </ul>
//           </motion.div>
//           <motion.div 
//             className="bg-green-900 p-6 rounded-lg shadow-lg"
//             initial={{ x: 100, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//           >
//             <h3 className="text-3xl transition-transform transition-colors transform hover:scale-110 
//             font-semibold mb-6 text-green-300 bg-green-900 
//             hover:text-white hover:bg-green-700 p-4 rounded">
//               Bloomscrolling
//               </h3>
//             <ul className="space-y-4">
//               {comparisonData.map((item, index) => (
//                 <motion.li
//                   key={`bloom-${index}`}
//                   initial={{ opacity: 0, x: 20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: index * 0.1 + 0.6 }}
//                   className="flex items-center text-lg text-green-100"
//                 >
//                   <span className="mr-2 text-2xl transition-transform transform hover:scale-110">✅</span>
//                   <span className='transition-transform transform hover:scale-110'>{item.bloomscroll}</span>
//                 </motion.li>
//               ))}
//             </ul>
//           </motion.div>
//         </div>
//         <motion.div 
//           className="text-xl text-center mt-12 max-w-3xl mx-auto"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1.2, duration: 0.6 }}
//         >
//           <p className="mb-4">
//             Unlike doomscrolling, which leaves you feeling drained with poor sleep and dry eyes, 
//             Bloomscrolling is a refreshing alternative.
//           </p>
//           <p className="font-semibold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 animate-gradient-move bg-[length:200%_200%]">
//             It's designed to keep you engaged with uplifting content while significantly reducing 
//             your screen time, leading to a happier, healthier you.
//           </p>
//         </motion.div>
//       </div>
//     </motion.section>
//   )
// }

'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useAnimation, useTransform, useScroll } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const comparisonData = [
  {
    doomscroll: "Endless negativity",
    bloomscroll: "Curated positivity"
  },
  {
    doomscroll: "Increased anxiety",
    bloomscroll: "Reduced stress levels"
  },
  {
    doomscroll: "Poor sleep quality",
    bloomscroll: "Improved sleep patterns"
  },
  {
    doomscroll: "Dry, strained eyes",
    bloomscroll: "Reduced screen time"
  },
  {
    doomscroll: "Feeling drained",
    bloomscroll: "Feeling energized"
  },
  {
    doomscroll: "Passive consumption",
    bloomscroll: "Active engagement"
  }
]


export default function DoomscrollTransformation() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  const opacity = useTransform(scrollYProgress, [0.1, 0.2, 0.8, 0.9], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0.1, 0.2, 0.8, 0.9], [0.8, 1, 1, 0.8])
  const y = useTransform(scrollYProgress, [0.1, 0.2], ['10%', '0%'])

  return (
    <motion.section 
      ref={sectionRef}
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-b from-sky-100 to-cyan-100 py-20 text-gray-800"
      style={{ opacity, scale, y }}
    >
      <div className="w-full max-w-6xl mx-auto px-4">
        <motion.h2 
          className="text-5xl font-bold mb-12 mt-16 text-center transition-transform transform hover:scale-110"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, scale: { duration: 0.05 } }}
          whileHover={{ scale: 1.05, transition: { type: 'tween', duration: 0.05 }}}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-indigo-500 animate-gradient-move bg-[length:200%_200%]">
            Transform Your Scrolling Experience
          </span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div 
            className="bg-rose-900 p-6 rounded-lg shadow-lg"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-3xl transition-transform transition-colors 
            transform hover:scale-110 font-semibold mb-6 text-rose-300 
            bg-rose-900 hover:text-white hover:bg-rose-700 p-4 rounded">
              Doomscrolling
            </h3>
            <ul className="space-y-4">
              {comparisonData.map((item, index) => (
                <motion.li
                  key={`doom-${index}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  className="flex items-center text-lg text-rose-100"
                >
                  <span className="mr-2 text-2xl transition-transform transform hover:scale-110">
                    ❌
                  </span>
                  <span className="transition-transform transform hover:scale-110">{item.doomscroll}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div 
            className="bg-indigo-900 p-6 rounded-lg shadow-lg"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-3xl transition-transform transition-colors transform hover:scale-110 
            font-semibold mb-6 text-indigo-300 bg-indigo-900 
            hover:text-white hover:bg-indigo-700 p-4 rounded">
              Bloomscrolling
            </h3>
            <ul className="space-y-4">
              {comparisonData.map((item, index) => (
                <motion.li
                  key={`bloom-${index}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.6 }}
                  className="flex items-center text-lg text-indigo-100"
                >
                  <span className="mr-2 text-2xl transition-transform transform hover:scale-110">✅</span>
                  <span className="transition-transform transform hover:scale-110">{item.bloomscroll}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
        <motion.div 
          className="text-xl text-center mt-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <p className="mb-4">
            Unlike doomscrolling, which leaves you feeling drained with poor sleep and dry eyes, 
            Bloomscrolling is a refreshing alternative.
          </p>
          <p className="font-semibold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500 animate-gradient-move bg-[length:200%_200%]">
            It's designed to keep you engaged with uplifting content while significantly reducing 
            your screen time, leading to a happier, healthier you.
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}
